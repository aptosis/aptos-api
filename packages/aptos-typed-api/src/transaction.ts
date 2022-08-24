import type * as api from "@aptosis/aptos-api-raw";

import type {
  TransactionPayload,
  TransactionPayloadType,
} from "./tx_payload.js";

type TransactionTypes<
  TPayload extends TransactionPayloadType = TransactionPayloadType
> = {
  pending_transaction: PendingTransaction<TPayload>;
  user_transaction: UserTransaction<TPayload>;
  genesis_transaction: api.GenesisTransaction;
  block_metadata_transaction: api.BlockMetadataTransaction;
  state_checkpoint_transaction: api.StateCheckpointTransaction;
};

/**
 * A type of transaction.
 */
export type TransactionType = keyof TransactionTypes;

/**
 * A transaction.
 */
export type Transaction<
  T extends TransactionType = TransactionType,
  TPayload extends TransactionPayloadType = TransactionPayloadType
> = TransactionTypes<TPayload>[T] & {
  readonly type: T;
};

/**
 * A transaction made by a user.
 */
export interface PendingTransaction<
  TType extends TransactionPayloadType = TransactionPayloadType
> extends Omit<api.PendingTransaction, "payload"> {
  /**
   * Transaction payload type.
   */
  readonly payload: TransactionPayload<TType>;
}

/**
 * A transaction made by a user.
 */
export interface UserTransaction<
  TType extends TransactionPayloadType = TransactionPayloadType
> extends Omit<api.UserTransaction, "payload"> {
  /**
   * Transaction payload type.
   */
  readonly payload: TransactionPayload<TType>;
}

/**
 * {@inheritDoc "@aptosis/aptos-api-raw".SubmitTransactionRequest}
 */
export interface SubmitTransactionRequest<
  TType extends TransactionPayloadType = TransactionPayloadType
> extends Omit<api.SubmitTransactionRequest, "payload"> {
  /**
   * Transaction payload type.
   */
  readonly payload: TransactionPayload<TType>;
}
