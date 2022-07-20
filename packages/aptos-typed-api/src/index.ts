import type * as api from "@aptosis/aptos-api";
import type { ByteStringHex } from "@movingco/move-types";

export * from "./transaction.js";
export * from "./tx_payload.js";
export * from "@movingco/move-types";

/**
 * {@inheritDoc "@aptosis/aptos-api".Account}
 */
export interface AccountMetadata extends Omit<api.Account, ByteStringHex> {
  /**
   * {@inheritDoc "@aptosis/aptos-api".Account#authentication_key}
   */
  authentication_key: ByteStringHex;
}

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

// re-export some types
export type {
  AptosError,
  Ed25519Signature,
  MultiAgentSignature,
  MultiEd25519Signature,
  TransactionSignature,
} from "@aptosis/aptos-api";
