/**
 * [[include:aptos-typed-api/README.md]]
 * @module
 */
import type * as api from "@aptosis/aptos-api";

/**
 * {@inheritDoc "@aptosis/aptos-api".AccountResource}
 */
export interface AccountResource<T extends object = object>
  extends Omit<api.AccountResource, "data"> {
  /**
   * {@inheritDoc "@aptosis/aptos-api".AccountResource#data}
   * {@link AccountResource#data}
   */
  data: T;
}

/**
 * {@inheritDoc "@aptosis/aptos-api".TransactionPayload}
 */
export type TransactionPayload =
  | ScriptFunctionPayload
  | (api.ModuleBundlePayload & {
      readonly type: "module_bundle_payload";
    })
  | (api.WriteSetPayload & {
      readonly type: "write_set_payload";
    })
  | (api.ScriptPayload & {
      readonly type: "script_payload";
    });

/**
 * {@inheritDoc "@aptosis/aptos-api".ScriptFunctionPayload}
 */
export interface ScriptFunctionPayload
  extends Omit<api.ScriptFunctionPayload, "type"> {
  /**
   * Hard-coded argument showing this is a script function payload.
   */
  readonly type: "script_function_payload";
}
