import type {
  HashValue,
  HexEncodedBytes,
  Transaction,
} from "@aptosis/aptos-api-raw";
import { ApiError } from "@aptosis/aptos-api-raw";

import type { AptosAPI } from "./api.js";

/**
 * Blocks for the given duration.
 * @param duration
 * @returns
 */
export const sleep = (duration: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

/**
 * Helper for fetching a transaction from the API.
 */
export const fetchTransaction = async (
  aptos: AptosAPI,
  txnHash: HashValue
): Promise<Transaction | null> => {
  try {
    return await aptos.transactions.getTransactionByHash(txnHash);
  } catch (e) {
    if (e instanceof ApiError) {
      if (e.status === 404) {
        return null;
      }
    }
    throw e;
  }
};

/**
 * Attempts to confirm a transaction via polling.
 * @param aptos
 * @param txnHash
 * @param retryIntervalMs interval between retries to fetch the transaction
 * @returns
 */
export const confirmTransaction = async (
  aptos: AptosAPI,
  txnHash: HexEncodedBytes,
  retryIntervalMs = 500
): Promise<Transaction> => {
  let count = 0;
  let tx = await fetchTransaction(aptos, txnHash);
  while (!tx || tx.type === "pending_transaction") {
    await sleep(retryIntervalMs);
    count += 1;
    if (count >= 10) {
      throw new Error(`Waiting for transaction ${txnHash} timed out!`);
    }
    tx = await fetchTransaction(aptos, txnHash);
  }
  return tx;
};
