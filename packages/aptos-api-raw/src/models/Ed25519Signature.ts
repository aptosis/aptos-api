/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HexEncodedBytes } from "./HexEncodedBytes.js";

export type Ed25519Signature = {
  public_key: HexEncodedBytes;
  signature: HexEncodedBytes;
};
