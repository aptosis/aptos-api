import type * as api from "@aptosis/aptos-api";
import type { ScriptFunctionPayload } from "@movingco/move-types";

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
