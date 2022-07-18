import type * as api from "@aptosis/aptos-api";
import type { ScriptFunctionPayload } from "@movingco/move-types";

export * from "@movingco/move-types";

/**
 * {@inheritDoc "@aptosis/aptos-api".AccountResource}
 */
export interface AccountResource<TData extends object = object>
  extends Omit<api.AccountResource, "data"> {
  /**
   * {@inheritDoc "@aptosis/aptos-api".AccountResource#data}
   * {@link AccountResource#data}
   */
  data: TData;
}

/**
 * A {@link TransactionPayload} type.
 */
export type TransactionPayloadType =
  | "script_function_payload"
  | "module_bundle_payload"
  | "write_set_payload"
  | "script_payload";

/**
 * {@inheritDoc "@aptosis/aptos-api".TransactionPayload}
 */
export type TransactionPayload<
  T extends TransactionPayloadType = TransactionPayloadType
> = (
  | ScriptFunctionPayload
  | (api.ModuleBundlePayload & {
      readonly type: "module_bundle_payload";
    })
  | (api.WriteSetPayload & {
      readonly type: "write_set_payload";
    })
  | (api.ScriptPayload & {
      readonly type: "script_payload";
    })
) & {
  readonly type: T;
};

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
