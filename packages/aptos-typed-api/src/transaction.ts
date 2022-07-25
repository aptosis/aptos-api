import type * as api from "@aptosis/aptos-api";

import type {
  TransactionPayload,
  TransactionPayloadType,
} from "./tx_payload.js";

export type { UserTransactionSignature } from "@aptosis/aptos-api";

/**
 * {@inheritDoc "@aptosis/aptos-api".UserTransactionRequest}
 */
export interface UserTransactionRequest<
  TType extends TransactionPayloadType = TransactionPayloadType
> extends Omit<api.UserTransactionRequest, "payload"> {
  /**
   * Transaction payload type.
   */
  readonly payload: TransactionPayload<TType>;
}

/**
 * {@inheritDoc "@aptosis/aptos-api".UserCreateSigningMessageRequest}
 */
export interface UserCreateSigningMessageRequest<
  TType extends TransactionPayloadType = TransactionPayloadType
> extends UserTransactionRequest<TType>,
    Omit<
      api.UserCreateSigningMessageRequest,
      keyof api.UserTransactionRequest
    > {}

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
> = TransactionTypes<TPayload> & {
  readonly type: T;
};

/**
 * A transaction made by a user.
 */
export interface PendingTransaction<
  TPayload extends TransactionPayloadType = TransactionPayloadType
> extends Omit<api.PendingTransaction, keyof UserTransactionRequest<TPayload>>,
    UserTransactionRequest<TPayload> {
  readonly type: "pending_transaction";
}

/**
 * A transaction made by a user.
 */
export interface UserTransaction<
  TPayload extends TransactionPayloadType = TransactionPayloadType
> extends Omit<api.UserTransaction, keyof UserTransactionRequest<TPayload>>,
    UserTransactionRequest<TPayload> {
  readonly type: "user_transaction";
}

/**
 * {@inheritDoc "@aptosis/aptos-api".SubmitTransactionRequest}
 */
export interface SubmitTransactionRequest<
  TType extends TransactionPayloadType = TransactionPayloadType
> extends UserTransactionRequest<TType>,
    Omit<api.SubmitTransactionRequest, keyof UserTransactionRequest<TType>> {}
