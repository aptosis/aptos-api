import type * as api from "@aptosis/aptos-api";

/**
 * {@inheritDoc "@aptosis/aptos-api".Address}
 */
export type Address = `0x${string}`;

/**
 * {@inheritDoc "@aptosis/aptos-api".MoveModuleId}
 */
export type MoveModuleId<
  TAddress extends Address = Address,
  TModule extends string = string
> = `${TAddress}::${TModule}`;

/**
 * {@inheritDoc "@aptosis/aptos-api".ScriptFunctionId}
 */
export type ScriptFunctionId<
  TAddress extends Address = Address,
  TModule extends string = string,
  TFunction extends string = string
> = `${MoveModuleId<TAddress, TModule>}::${TFunction}`;

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
 * {@inheritDoc "@aptosis/aptos-api".ScriptFunctionPayload}
 */
export interface ScriptFunctionPayload<
  TFunctionId extends ScriptFunctionId = ScriptFunctionId
> extends Omit<api.ScriptFunctionPayload, "type"> {
  /**
   * Hard-coded argument showing this is a script function payload.
   */
  readonly type: "script_function_payload";
  /**
   * {@inheritDoc "@aptosis/aptos-api".ScriptFunctionPayload#function}
   */
  readonly function: TFunctionId;
}
