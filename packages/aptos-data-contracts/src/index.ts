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

export interface AccountData {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  sequence_number: U64;

  /**
   * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
   */
  authentication_key: HexEncodedBytes;
}

export type AccountSignature =
  | AccountSignatureEd25519Signature
  | AccountSignatureMultiEd25519Signature;

export type AccountSignatureEd25519Signature = {
  type: string;
} & Ed25519Signature;

export type AccountSignatureMultiEd25519Signature = {
  type: string;
} & MultiEd25519Signature;

/**
 * Hex encoded 32 byte Aptos account address
 * @format hex
 * @example 0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1
 */
export type Address = string;

/**
* This is the generic struct we use for all API errors, it contains a string
message and an Aptos API specific error code.
*/
export interface AptosError {
  message: string;

  /**
   * These codes provide more granular error information beyond just the HTTP
   * status code of the response.
   */
  error_code?: AptosErrorCode;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  aptos_ledger_version?: U64;
}

/**
* These codes provide more granular error information beyond just the HTTP
status code of the response.
*/
export enum AptosErrorCode {
  ReadFromStorageError = "read_from_storage_error",
  InvalidBcsInStorageError = "invalid_bcs_in_storage_error",
  BcsSerializationError = "bcs_serialization_error",
  InvalidStartParam = "invalid_start_param",
  InvalidLimitParam = "invalid_limit_param",
}

export interface Block {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  block_height: U64;
  block_hash: HashValue;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  block_timestamp: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  first_version: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  last_version: U64;
  transactions?: Transaction[];
}

export interface BlockMetadataTransaction {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  version: U64;
  hash: HashValue;
  state_root_hash: HashValue;
  event_root_hash: HashValue;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  gas_used: U64;
  success: boolean;
  vm_status: string;
  accumulator_root_hash: HashValue;
  changes: WriteSetChange[];
  id: HashValue;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  epoch: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  round: U64;
  events: Event[];
  previous_block_votes_bitvec: number[];

  /** Hex encoded 32 byte Aptos account address */
  proposer: Address;
  failed_proposer_indices: number[];

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  timestamp: U64;
}

export interface DecodedTableData {
  key: any;
  key_type: string;
  value: any;
  value_type: string;
}

export interface DeleteModule {
  /** Hex encoded 32 byte Aptos account address */
  address: Address;
  state_key_hash: string;

  /**
   * Move module id is a string representation of Move module.
   *
   * Format: `{address}::{module name}`
   * `address` should be hex-encoded 32 byte account address that is prefixed with `0x`.
   * Module name is case-sensitive.
   */
  module: MoveModuleId;
}

export interface DeleteResource {
  /** Hex encoded 32 byte Aptos account address */
  address: Address;
  state_key_hash: string;

  /**
   * String representation of a MoveStructTag (on-chain Move struct type). This exists so you
   * can specify MoveStructTags as path / query parameters, e.g. for get_events_by_event_handle.
   *
   * It is a combination of:
   *   1. `move_module_address`, `module_name` and `struct_name`, all joined by `::`
   *   2. `struct generic type parameters` joined by `, `
   * Examples:
   *   * `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>`
   *   * `0x1::account::Account`
   * Note:
   *   1. Empty chars should be ignored when comparing 2 struct tag ids.
   *   2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).
   * See [doc](https://aptos.dev/concepts/basics-accounts) for more details.
   */
  resource: MoveStructTag;
}

export interface DeleteTableItem {
  state_key_hash: string;

  /**
   * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
   */
  handle: HexEncodedBytes;

  /**
   * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
   */
  key: HexEncodedBytes;
  data?: DeletedTableData;
}

export interface DeletedTableData {
  key: any;
  key_type: string;
}

export interface DirectWriteSet {
  changes: WriteSetChange[];
  events: Event[];
}

export interface Ed25519Signature {
  /**
   * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
   */
  public_key: HexEncodedBytes;

  /**
   * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
   */
  signature: HexEncodedBytes;
}

export interface EncodeSubmissionRequest {
  /** Hex encoded 32 byte Aptos account address */
  sender: Address;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  sequence_number: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  max_gas_amount: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  gas_unit_price: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  expiration_timestamp_secs: U64;
  payload: TransactionPayload;
  secondary_signers?: Address[];
}

/**
* Entry function id is string representation of a entry function defined on-chain.

Format: `{address}::{module name}::{function name}`

Both `module name` and `function name` are case-sensitive.
* @example 0x1::aptos_coin::transfer
*/
export type EntryFunctionId = string;

export interface EntryFunctionPayload {
  /**
   * Entry function id is string representation of a entry function defined on-chain.
   *
   * Format: `{address}::{module name}::{function name}`
   * Both `module name` and `function name` are case-sensitive.
   */
  function: EntryFunctionId;
  type_arguments: MoveType[];
  arguments: any[];
}

export interface Event {
  /**
   * Event key is a global index for an event stream.
   *
   * It is hex-encoded BCS bytes of `EventHandle` `guid` field value, which is
   * a combination of a `uint64` creation number and account address (without
   * trimming leading zeros).
   * For example, event key `0x000000000000000088fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1` is combined by the following 2 parts:
   *   1. `0000000000000000`: `uint64` representation of `0`.
   *   2. `88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1`: 32 bytes of account address.
   */
  key: EventKey;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  sequence_number: U64;

  /**
   * String representation of an on-chain Move type tag that is exposed in transaction payload.
   *     Values:
   *       - bool
   *       - u8
   *       - u64
   *       - u128
   *       - address
   *       - signer
   *       - vector: `vector<{non-reference MoveTypeId}>`
   *       - struct: `{address}::{module_name}::{struct_name}::<{generic types}>`
   *
   *     Vector type value examples:
   *       - `vector<u8>`
   *       - `vector<vector<u64>>`
   *       - `vector<0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>>`
   *     Struct type value examples:
   *       - `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>
   *       - `0x1::account::Account`
   *     Note:
   *       1. Empty chars should be ignored when comparing 2 struct tag ids.
   *       2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).
   */
  type: MoveType;
  data: any;
}

/**
* Event key is a global index for an event stream.

It is hex-encoded BCS bytes of `EventHandle` `guid` field value, which is
a combination of a `uint64` creation number and account address (without
trimming leading zeros).

For example, event key `0x000000000000000088fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1` is combined by the following 2 parts:
  1. `0000000000000000`: `uint64` representation of `0`.
  2. `88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1`: 32 bytes of account address.
* @format hex
* @example 0x000000000000000088fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1 
*/
export type EventKey = string;

export type GenesisPayload = GenesisPayloadWriteSetPayload;

export type GenesisPayloadWriteSetPayload = { type: string } & WriteSetPayload;

export interface GenesisTransaction {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  version: U64;
  hash: HashValue;
  state_root_hash: HashValue;
  event_root_hash: HashValue;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  gas_used: U64;
  success: boolean;
  vm_status: string;
  accumulator_root_hash: HashValue;
  changes: WriteSetChange[];
  payload: GenesisPayload;
  events: Event[];
}

export type HashValue = string;

export interface HealthCheckSuccess {
  message: string;
}

/**
* All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
two hex digits per byte.

Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
* @format hex
* @example 0x88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1 
*/
export type HexEncodedBytes = string;

export type IdentifierWrapper = string;

/**
* The struct holding all data returned to the client by the
index endpoint (i.e., GET "/").
*/
export interface IndexResponse {
  /** @format uint8 */
  chain_id: number;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  epoch: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  ledger_version: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  oldest_ledger_version: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  block_height: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  oldest_block_height: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  ledger_timestamp: U64;
  node_role: RoleType;
}

export interface ModuleBundlePayload {
  modules: MoveModuleBytecode[];
}

export type MoveAbility = string;

export interface MoveFunction {
  name: IdentifierWrapper;
  visibility: MoveFunctionVisibility;
  is_entry: boolean;
  generic_type_params: MoveFunctionGenericTypeParam[];
  params: MoveType[];
  return: MoveType[];
}

export interface MoveFunctionGenericTypeParam {
  constraints: MoveAbility[];
}

export enum MoveFunctionVisibility {
  Private = "private",
  Public = "public",
  Friend = "friend",
}

export interface MoveModule {
  /** Hex encoded 32 byte Aptos account address */
  address: Address;
  name: IdentifierWrapper;
  friends: MoveModuleId[];
  exposed_functions: MoveFunction[];
  structs: MoveStruct[];
}

export interface MoveModuleBytecode {
  /**
   * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
   */
  bytecode: HexEncodedBytes;
  abi?: MoveModule;
}

/**
* Move module id is a string representation of Move module.

Format: `{address}::{module name}`

`address` should be hex-encoded 32 byte account address that is prefixed with `0x`.

Module name is case-sensitive.
* @example 0x1::aptos_coin
*/
export type MoveModuleId = string;

export interface MoveResource {
  /**
   * String representation of a MoveStructTag (on-chain Move struct type). This exists so you
   * can specify MoveStructTags as path / query parameters, e.g. for get_events_by_event_handle.
   *
   * It is a combination of:
   *   1. `move_module_address`, `module_name` and `struct_name`, all joined by `::`
   *   2. `struct generic type parameters` joined by `, `
   * Examples:
   *   * `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>`
   *   * `0x1::account::Account`
   * Note:
   *   1. Empty chars should be ignored when comparing 2 struct tag ids.
   *   2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).
   * See [doc](https://aptos.dev/concepts/basics-accounts) for more details.
   */
  type: MoveStructTag;

  /**
   * This is a JSON representation of some data within an account resource. More specifically,
   * it is a map of strings to arbitrary JSON values / objects, where the keys are top level
   * fields within the given resource.
   *
   * To clarify, you might query for 0x1::account::Account and see the example data.
   * Move `bool` type value is serialized into `boolean`.
   * Move `u8` type value is serialized into `integer`.
   * Move `u64` and `u128` type value is serialized into `string`.
   * Move `address` type value (32 byte Aptos account address) is serialized into a HexEncodedBytes string.
   * For example:
   *   - `0x1`
   *   - `0x1668f6be25668c1a17cd8caf6b8d2f25`
   * Move `vector` type value is serialized into `array`, except `vector<u8>` which is serialized into a
   * HexEncodedBytes string with `0x` prefix.
   *   - `vector<u64>{255, 255}` => `["255", "255"]`
   *   - `vector<u8>{255, 255}` => `0xffff`
   * Move `struct` type value is serialized into `object` that looks like this (except some Move stdlib types, see the following section):
   *   ```json
   *   {
   *     field1_name: field1_value,
   *     field2_name: field2_value,
   *     ......
   *   }
   *   ```
   *   `{ "created": "0xa550c18", "role_id": "0" }`
   * **Special serialization for Move stdlib types**:
   *   - [0x1::string::String](https://github.com/aptos-labs/aptos-core/blob/main/language/move-stdlib/docs/ascii.md)
   *     is serialized into `string`. For example, struct value `0x1::string::String{bytes: b"Hello World!"}`
   *     is serialized as `"Hello World!"` in JSON.
   */
  data: MoveStructValue;
}

export interface MoveScriptBytecode {
  /**
   * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
   */
  bytecode: HexEncodedBytes;
  abi?: MoveFunction;
}

export interface MoveStruct {
  name: IdentifierWrapper;
  is_native: boolean;
  abilities: MoveAbility[];
  generic_type_params: MoveStructGenericTypeParam[];
  fields: MoveStructField[];
}

export interface MoveStructField {
  name: IdentifierWrapper;

  /**
   * String representation of an on-chain Move type tag that is exposed in transaction payload.
   *     Values:
   *       - bool
   *       - u8
   *       - u64
   *       - u128
   *       - address
   *       - signer
   *       - vector: `vector<{non-reference MoveTypeId}>`
   *       - struct: `{address}::{module_name}::{struct_name}::<{generic types}>`
   *
   *     Vector type value examples:
   *       - `vector<u8>`
   *       - `vector<vector<u64>>`
   *       - `vector<0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>>`
   *     Struct type value examples:
   *       - `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>
   *       - `0x1::account::Account`
   *     Note:
   *       1. Empty chars should be ignored when comparing 2 struct tag ids.
   *       2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).
   */
  type: MoveType;
}

export interface MoveStructGenericTypeParam {
  constraints: MoveAbility[];
}

/**
* String representation of a MoveStructTag (on-chain Move struct type). This exists so you
can specify MoveStructTags as path / query parameters, e.g. for get_events_by_event_handle.

It is a combination of:
  1. `move_module_address`, `module_name` and `struct_name`, all joined by `::`
  2. `struct generic type parameters` joined by `, `

Examples:
  * `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>`
  * `0x1::account::Account`

Note:
  1. Empty chars should be ignored when comparing 2 struct tag ids.
  2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).

See [doc](https://aptos.dev/concepts/basics-accounts) for more details.
* @pattern ^0x[0-9a-zA-Z:_<>]+$
* @example 0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>
*/
export type MoveStructTag = string;

/**
* This is a JSON representation of some data within an account resource. More specifically,
it is a map of strings to arbitrary JSON values / objects, where the keys are top level
fields within the given resource.

To clarify, you might query for 0x1::account::Account and see the example data.

Move `bool` type value is serialized into `boolean`.

Move `u8` type value is serialized into `integer`.

Move `u64` and `u128` type value is serialized into `string`.

Move `address` type value (32 byte Aptos account address) is serialized into a HexEncodedBytes string.
For example:
  - `0x1`
  - `0x1668f6be25668c1a17cd8caf6b8d2f25`

Move `vector` type value is serialized into `array`, except `vector<u8>` which is serialized into a
HexEncodedBytes string with `0x` prefix.
For example:
  - `vector<u64>{255, 255}` => `["255", "255"]`
  - `vector<u8>{255, 255}` => `0xffff`

Move `struct` type value is serialized into `object` that looks like this (except some Move stdlib types, see the following section):
  ```json
  {
    field1_name: field1_value,
    field2_name: field2_value,
    ......
  }
  ```

For example:
  `{ "created": "0xa550c18", "role_id": "0" }`

**Special serialization for Move stdlib types**:
  - [0x1::string::String](https://github.com/aptos-labs/aptos-core/blob/main/language/move-stdlib/docs/ascii.md)
    is serialized into `string`. For example, struct value `0x1::string::String{bytes: b"Hello World!"}`
    is serialized as `"Hello World!"` in JSON.
* @example {"authentication_key":"0x0000000000000000000000000000000000000000000000000000000000000001","coin_register_events":{"counter":"0","guid":{"id":{"addr":"0x1","creation_num":"0"}}},"self_address":"0x1","sequence_number":"0"}
*/
export type MoveStructValue = object;

/**
* String representation of an on-chain Move type tag that is exposed in transaction payload.
    Values:
      - bool
      - u8
      - u64
      - u128
      - address
      - signer
      - vector: `vector<{non-reference MoveTypeId}>`
      - struct: `{address}::{module_name}::{struct_name}::<{generic types}>`

    Vector type value examples:
      - `vector<u8>`
      - `vector<vector<u64>>`
      - `vector<0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>>`

    Struct type value examples:
      - `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>
      - `0x1::account::Account`

    Note:
      1. Empty chars should be ignored when comparing 2 struct tag ids.
      2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).
* @pattern ^(bool|u8|u64|u128|address|signer|vector<.+>|0x[0-9a-zA-Z:_<, >]+)$
*/
export type MoveType = string;

export type MoveValue =
  | number
  | U64
  | U128
  | boolean
  | Address
  | MoveValue[]
  | HexEncodedBytes
  | MoveStructValue
  | string
  | (U64 & U128 & Address & MoveValue[] & HexEncodedBytes & MoveStructValue);

export interface MultiAgentSignature {
  sender: AccountSignature;
  secondary_signer_addresses: Address[];
  secondary_signers: AccountSignature[];
}

export interface MultiEd25519Signature {
  public_keys: HexEncodedBytes[];
  signatures: HexEncodedBytes[];

  /** @format uint8 */
  threshold: number;

  /**
   * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
   */
  bitmap: HexEncodedBytes;
}

export interface PendingTransaction {
  hash: HashValue;

  /** Hex encoded 32 byte Aptos account address */
  sender: Address;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  sequence_number: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  max_gas_amount: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  gas_unit_price: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  expiration_timestamp_secs: U64;
  payload: TransactionPayload;
  signature?: TransactionSignature;
}

export enum RoleType {
  Validator = "validator",
  FullNode = "full_node",
}

export interface ScriptPayload {
  code: MoveScriptBytecode;
  type_arguments: MoveType[];
  arguments: any[];
}

export interface ScriptWriteSet {
  /** Hex encoded 32 byte Aptos account address */
  execute_as: Address;
  script: ScriptPayload;
}

export interface StateCheckpointTransaction {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  version: U64;
  hash: HashValue;
  state_root_hash: HashValue;
  event_root_hash: HashValue;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  gas_used: U64;
  success: boolean;
  vm_status: string;
  accumulator_root_hash: HashValue;
  changes: WriteSetChange[];

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  timestamp: U64;
}

export interface SubmitTransactionRequest {
  /** Hex encoded 32 byte Aptos account address */
  sender: Address;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  sequence_number: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  max_gas_amount: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  gas_unit_price: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  expiration_timestamp_secs: U64;
  payload: TransactionPayload;
  signature: TransactionSignature;
}

export interface TableItemRequest {
  /**
   * String representation of an on-chain Move type tag that is exposed in transaction payload.
   *     Values:
   *       - bool
   *       - u8
   *       - u64
   *       - u128
   *       - address
   *       - signer
   *       - vector: `vector<{non-reference MoveTypeId}>`
   *       - struct: `{address}::{module_name}::{struct_name}::<{generic types}>`
   *
   *     Vector type value examples:
   *       - `vector<u8>`
   *       - `vector<vector<u64>>`
   *       - `vector<0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>>`
   *     Struct type value examples:
   *       - `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>
   *       - `0x1::account::Account`
   *     Note:
   *       1. Empty chars should be ignored when comparing 2 struct tag ids.
   *       2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).
   */
  key_type: MoveType;

  /**
   * String representation of an on-chain Move type tag that is exposed in transaction payload.
   *     Values:
   *       - bool
   *       - u8
   *       - u64
   *       - u128
   *       - address
   *       - signer
   *       - vector: `vector<{non-reference MoveTypeId}>`
   *       - struct: `{address}::{module_name}::{struct_name}::<{generic types}>`
   *
   *     Vector type value examples:
   *       - `vector<u8>`
   *       - `vector<vector<u64>>`
   *       - `vector<0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>>`
   *     Struct type value examples:
   *       - `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>
   *       - `0x1::account::Account`
   *     Note:
   *       1. Empty chars should be ignored when comparing 2 struct tag ids.
   *       2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).
   */
  value_type: MoveType;
  key: any;
}

export type Transaction =
  | TransactionPendingTransaction
  | TransactionUserTransaction
  | TransactionGenesisTransaction
  | TransactionBlockMetadataTransaction
  | TransactionStateCheckpointTransaction;

export type TransactionPayload =
  | TransactionPayloadEntryFunctionPayload
  | TransactionPayloadScriptPayload
  | TransactionPayloadModuleBundlePayload;

export type TransactionPayloadEntryFunctionPayload = {
  type: string;
} & EntryFunctionPayload;

export type TransactionPayloadModuleBundlePayload = {
  type: string;
} & ModuleBundlePayload;

export type TransactionPayloadScriptPayload = { type: string } & ScriptPayload;

export type TransactionSignature =
  | TransactionSignatureEd25519Signature
  | TransactionSignatureMultiEd25519Signature
  | TransactionSignatureMultiAgentSignature;

export type TransactionSignatureEd25519Signature = {
  type: string;
} & Ed25519Signature;

export type TransactionSignatureMultiAgentSignature = {
  type: string;
} & MultiAgentSignature;

export type TransactionSignatureMultiEd25519Signature = {
  type: string;
} & MultiEd25519Signature;

export type TransactionBlockMetadataTransaction = {
  type: string;
} & BlockMetadataTransaction;

export type TransactionGenesisTransaction = {
  type: string;
} & GenesisTransaction;

export type TransactionPendingTransaction = {
  type: string;
} & PendingTransaction;

export type TransactionStateCheckpointTransaction = {
  type: string;
} & StateCheckpointTransaction;

export type TransactionUserTransaction = { type: string } & UserTransaction;

/**
* A string containing a 128-bit unsigned integer.

We represent u128 values as a string to ensure compatability with languages such
as JavaScript that do not parse u64s in JSON natively.
* @format uint64
* @example 340282366920938463463374607431768211454
*/
export type U128 = string;

/**
* A string containing a 64-bit unsigned integer.

We represent u64 values as a string to ensure compatability with languages such
as JavaScript that do not parse u64s in JSON natively.
* @format uint64
* @example 32425224034
*/
export type U64 = string;

export interface UserTransaction {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  version: U64;
  hash: HashValue;
  state_root_hash: HashValue;
  event_root_hash: HashValue;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  gas_used: U64;
  success: boolean;
  vm_status: string;
  accumulator_root_hash: HashValue;
  changes: WriteSetChange[];

  /** Hex encoded 32 byte Aptos account address */
  sender: Address;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  sequence_number: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  max_gas_amount: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  gas_unit_price: U64;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  expiration_timestamp_secs: U64;
  payload: TransactionPayload;
  signature?: TransactionSignature;
  events: Event[];

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  timestamp: U64;
}

export interface VersionedEvent {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  version: U64;

  /**
   * Event key is a global index for an event stream.
   *
   * It is hex-encoded BCS bytes of `EventHandle` `guid` field value, which is
   * a combination of a `uint64` creation number and account address (without
   * trimming leading zeros).
   * For example, event key `0x000000000000000088fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1` is combined by the following 2 parts:
   *   1. `0000000000000000`: `uint64` representation of `0`.
   *   2. `88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1`: 32 bytes of account address.
   */
  key: EventKey;

  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   */
  sequence_number: U64;

  /**
   * String representation of an on-chain Move type tag that is exposed in transaction payload.
   *     Values:
   *       - bool
   *       - u8
   *       - u64
   *       - u128
   *       - address
   *       - signer
   *       - vector: `vector<{non-reference MoveTypeId}>`
   *       - struct: `{address}::{module_name}::{struct_name}::<{generic types}>`
   *
   *     Vector type value examples:
   *       - `vector<u8>`
   *       - `vector<vector<u64>>`
   *       - `vector<0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>>`
   *     Struct type value examples:
   *       - `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>
   *       - `0x1::account::Account`
   *     Note:
   *       1. Empty chars should be ignored when comparing 2 struct tag ids.
   *       2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).
   */
  type: MoveType;
  data: any;
}

export interface WriteModule {
  /** Hex encoded 32 byte Aptos account address */
  address: Address;
  state_key_hash: string;
  data: MoveModuleBytecode;
}

export interface WriteResource {
  /** Hex encoded 32 byte Aptos account address */
  address: Address;
  state_key_hash: string;
  data: MoveResource;
}

export type WriteSet = WriteSetScriptWriteSet | WriteSetDirectWriteSet;

export type WriteSetChange =
  | WriteSetChangeDeleteModule
  | WriteSetChangeDeleteResource
  | WriteSetChangeDeleteTableItem
  | WriteSetChangeWriteModule
  | WriteSetChangeWriteResource
  | WriteSetChangeWriteTableItem;

export type WriteSetChangeDeleteModule = { type: string } & DeleteModule;

export type WriteSetChangeDeleteResource = { type: string } & DeleteResource;

export type WriteSetChangeDeleteTableItem = { type: string } & DeleteTableItem;

export type WriteSetChangeWriteModule = { type: string } & WriteModule;

export type WriteSetChangeWriteResource = { type: string } & WriteResource;

export type WriteSetChangeWriteTableItem = { type: string } & WriteTableItem;

export interface WriteSetPayload {
  write_set: WriteSet;
}

export type WriteSetDirectWriteSet = { type: string } & DirectWriteSet;

export type WriteSetScriptWriteSet = { type: string } & ScriptWriteSet;

export interface WriteTableItem {
  state_key_hash: string;

  /**
   * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
   */
  handle: HexEncodedBytes;

  /**
   * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
   */
  key: HexEncodedBytes;

  /**
   * All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Unlike the `Address` type, HexEncodedBytes will not trim any zeros.
   */
  value: HexEncodedBytes;
  data?: DecodedTableData;
}

export interface GetAccountParams {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   * @deprecated
   */
  ledger_version?: U64;

  /**
   * Hex encoded 32 byte Aptos account address
   * @deprecated
   */
  address: Address;
}

export interface GetAccountResourcesParams {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   * @deprecated
   */
  ledger_version?: U64;

  /**
   * Hex encoded 32 byte Aptos account address
   * @deprecated
   */
  address: Address;
}

export interface GetAccountModulesParams {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   * @deprecated
   */
  ledger_version?: U64;

  /**
   * Hex encoded 32 byte Aptos account address
   * @deprecated
   */
  address: Address;
}

export interface HealthyParams {
  /**
   * @deprecated
   * @format uint32
   */
  duration_secs?: number;
}

export interface GetBlockByHeightParams {
  /** @deprecated */
  with_transactions?: boolean;

  /**
   * @deprecated
   * @format uint64
   */
  blockHeight: number;
}

export interface GetBlockByVersionParams {
  /** @deprecated */
  with_transactions?: boolean;

  /**
   * @deprecated
   * @format uint64
   */
  version: number;
}

export interface GetEventsByEventKeyParams {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   * @deprecated
   */
  start?: U64;

  /**
   * @deprecated
   * @format uint16
   */
  limit?: number;

  /**
   * Event key is a global index for an event stream.
   *
   * It is hex-encoded BCS bytes of `EventHandle` `guid` field value, which is
   * a combination of a `uint64` creation number and account address (without
   * trimming leading zeros).
   * For example, event key `0x000000000000000088fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1` is combined by the following 2 parts:
   *   1. `0000000000000000`: `uint64` representation of `0`.
   *   2. `88fbd33f54e1126269769780feb24480428179f552e2313fbe571b72e62a1ca1`: 32 bytes of account address.
   * @deprecated
   */
  eventKey: EventKey;
}

export interface GetEventsByEventHandleParams {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   * @deprecated
   */
  start?: U64;

  /**
   * @deprecated
   * @format uint16
   */
  limit?: number;

  /**
   * Hex encoded 32 byte Aptos account address
   * @deprecated
   */
  address: Address;

  /**
   * String representation of a MoveStructTag (on-chain Move struct type). This exists so you
   * can specify MoveStructTags as path / query parameters, e.g. for get_events_by_event_handle.
   *
   * It is a combination of:
   *   1. `move_module_address`, `module_name` and `struct_name`, all joined by `::`
   *   2. `struct generic type parameters` joined by `, `
   * Examples:
   *   * `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>`
   *   * `0x1::account::Account`
   * Note:
   *   1. Empty chars should be ignored when comparing 2 struct tag ids.
   *   2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).
   * See [doc](https://aptos.dev/concepts/basics-accounts) for more details.
   * @deprecated
   */
  eventHandle: MoveStructTag;

  /** @deprecated */
  fieldName: IdentifierWrapper;
}

export interface GetAccountResourceParams {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   * @deprecated
   */
  ledger_version?: U64;

  /**
   * Hex encoded 32 byte Aptos account address
   * @deprecated
   */
  address: Address;

  /**
   * String representation of a MoveStructTag (on-chain Move struct type). This exists so you
   * can specify MoveStructTags as path / query parameters, e.g. for get_events_by_event_handle.
   *
   * It is a combination of:
   *   1. `move_module_address`, `module_name` and `struct_name`, all joined by `::`
   *   2. `struct generic type parameters` joined by `, `
   * Examples:
   *   * `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>`
   *   * `0x1::account::Account`
   * Note:
   *   1. Empty chars should be ignored when comparing 2 struct tag ids.
   *   2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).
   * See [doc](https://aptos.dev/concepts/basics-accounts) for more details.
   * @deprecated
   */
  resourceType: MoveStructTag;
}

export interface GetAccountModuleParams {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   * @deprecated
   */
  ledger_version?: U64;

  /**
   * Hex encoded 32 byte Aptos account address
   * @deprecated
   */
  address: Address;

  /** @deprecated */
  moduleName: IdentifierWrapper;
}

export interface GetTableItemParams {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   * @deprecated
   */
  ledger_version?: U64;

  /**
   * A string containing a 128-bit unsigned integer.
   *
   * We represent u128 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   * @deprecated
   */
  tableHandle: U128;
}

export interface GetTransactionsParams {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   * @deprecated
   */
  start?: U64;

  /**
   * @deprecated
   * @format uint16
   */
  limit?: number;
}

export interface GetAccountTransactionsParams {
  /**
   * A string containing a 64-bit unsigned integer.
   *
   * We represent u64 values as a string to ensure compatability with languages such
   * as JavaScript that do not parse u64s in JSON natively.
   * @deprecated
   */
  start?: U64;

  /**
   * @deprecated
   * @format uint16
   */
  limit?: number;

  /**
   * Hex encoded 32 byte Aptos account address
   * @deprecated
   */
  address: Address;
}
