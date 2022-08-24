/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  AptosError,
  EncodeSubmissionRequest,
  GetTransactionsParams,
  HashValue,
  HexEncodedBytes,
  PendingTransaction,
  SubmitTransactionRequest,
  Transaction,
  U64,
  UserTransaction,
} from "@aptosis/aptos-data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client.js";

export class Transactions<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Get on-chain (meaning, committed) transactions. You may specify from when you want the transactions and how to include in the response.
   *
   * @tags Transactions
   * @name GetTransactions
   * @summary Get transactions
   * @request GET:/transactions
   * @response `200` `(Transaction)[]`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getTransactions = (
    query: GetTransactionsParams,
    params: RequestParams = {}
  ) =>
    this.http.request<Transaction[], AptosError>({
      path: `/transactions`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint accepts transaction submissions in two formats. To submit a transaction as JSON, you must submit a SubmitTransactionRequest. To build this request, do the following: 1. Encode the transaction as BCS. If you are using a language that has native BCS support, make sure of that library. If not, you may take advantage of /transactions/encode_submission. When using this endpoint, make sure you trust the node you're talking to, as it is possible they could manipulate your request. 2. Sign the encoded transaction and use it to create a TransactionSignature. 3. Submit the request. Make sure to use the "application/json" Content-Type. To submit a transaction as BCS, you must submit a SignedTransaction encoded as BCS. See SignedTransaction in types/src/transaction/mod.rs.
   *
   * @tags Transactions
   * @name SubmitTransaction
   * @summary Submit transaction
   * @request POST:/transactions
   * @response `202` `PendingTransaction`
   * @response `400` `AptosError`
   * @response `413` `AptosError`
   * @response `500` `AptosError`
   * @response `507` `AptosError`
   */
  submitTransaction = (
    data: SubmitTransactionRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<PendingTransaction, AptosError>({
      path: `/transactions`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Look up a transaction by its hash. This is the same hash that is returned by the API when submitting a transaction (see PendingTransaction). When given a transaction hash, the server first looks for the transaction in storage (on-chain, committed). If no on-chain transaction is found, it looks the transaction up by hash in the mempool (pending, not yet committed). To create a transaction hash by yourself, do the following: 1. Hash message bytes: "RawTransaction" bytes + BCS bytes of [Transaction](https://aptos-labs.github.io/aptos-core/aptos_types/transaction/enum.Transaction.html). 2. Apply hash algorithm `SHA3-256` to the hash message bytes. 3. Hex-encode the hash bytes with `0x` prefix.
   *
   * @tags Transactions
   * @name GetTransactionByHash
   * @summary Get transaction by hash
   * @request GET:/transactions/by_hash/{txn_hash}
   * @response `200` `Transaction`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getTransactionByHash = (txnHash: HashValue, params: RequestParams = {}) =>
    this.http.request<Transaction, AptosError>({
      path: `/transactions/by_hash/${txnHash}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description todo
   *
   * @tags Transactions
   * @name GetTransactionByVersion
   * @summary Get transaction by version
   * @request GET:/transactions/by_version/{txn_version}
   * @response `200` `Transaction`
   * @response `400` `AptosError`
   * @response `404` `AptosError`
   * @response `500` `AptosError`
   */
  getTransactionByVersion = (txnVersion: U64, params: RequestParams = {}) =>
    this.http.request<Transaction, AptosError>({
      path: `/transactions/by_version/${txnVersion}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description Simulate submitting a transaction. To use this, you must: - Create a SignedTransaction with a zero-padded signature. - Submit a SubmitTransactionRequest containing a UserTransactionRequest containing that signature. To use this endpoint with BCS, you must submit a SignedTransaction encoded as BCS. See SignedTransaction in types/src/transaction/mod.rs.
   *
   * @tags Transactions
   * @name SimulateTransaction
   * @summary Simulate transaction
   * @request POST:/transactions/simulate
   * @response `200` `(UserTransaction)[]`
   * @response `400` `AptosError`
   * @response `413` `AptosError`
   * @response `500` `AptosError`
   * @response `507` `AptosError`
   */
  simulateTransaction = (
    data: SubmitTransactionRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<UserTransaction[], AptosError>({
      path: `/transactions/simulate`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description This endpoint accepts an EncodeSubmissionRequest, which internally is a UserTransactionRequestInner (and optionally secondary signers) encoded as JSON, validates the request format, and then returns that request encoded in BCS. The client can then use this to create a transaction signature to be used in a SubmitTransactionRequest, which it then passes to the /transactions POST endpoint. To be clear, this endpoint makes it possible to submit transaction requests to the API from languages that do not have library support for BCS. If you are using an SDK that has BCS support, such as the official Rust, TypeScript, or Python SDKs, you do not need to use this endpoint. To sign a message using the response from this endpoint: - Decode the hex encoded string in the response to bytes. - Sign the bytes to create the signature. - Use that as the signature field in something like Ed25519Signature, which you then use to build a TransactionSignature.
   *
   * @tags Transactions
   * @name EncodeSubmission
   * @summary Encode submission
   * @request POST:/transactions/encode_submission
   * @response `200` `HexEncodedBytes`
   * @response `400` `AptosError`
   * @response `500` `AptosError`
   */
  encodeSubmission = (
    data: EncodeSubmissionRequest,
    params: RequestParams = {}
  ) =>
    this.http.request<HexEncodedBytes, AptosError>({
      path: `/transactions/encode_submission`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
