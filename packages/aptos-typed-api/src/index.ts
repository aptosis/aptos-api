import type * as api from "@aptosis/aptos-api-raw";
import type { ByteStringHex } from "@movingco/move-types";

export * from "./transaction.js";
export * from "./tx_payload.js";
export * from "@movingco/move-types";

/**
 * {@inheritDoc "@aptosis/aptos-api-raw".AccountData}
 */
export interface AccountMetadata extends Omit<api.AccountData, ByteStringHex> {
  /**
   * {@inheritDoc "@aptosis/aptos-api-raw".AccountData#authentication_key}
   */
  authentication_key: ByteStringHex;
}

/**
 * {@inheritDoc "@aptosis/aptos-api-raw".MoveResource}
 */
export interface MoveResource<TData extends object = object>
  extends Omit<api.MoveResource, "data"> {
  /**
   * {@inheritDoc "@aptosis/aptos-api-raw".AccountResource#data}
   * {@link AccountResource#data}
   */
  data: TData;
}

// re-export some types
export type {
  AptosError,
  Ed25519Signature,
  MultiAgentSignature,
  MultiEd25519Signature,
  TransactionSignature,
} from "@aptosis/aptos-api-raw";
