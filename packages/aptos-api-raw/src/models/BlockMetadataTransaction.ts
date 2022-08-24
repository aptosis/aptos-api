/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from "./Address.js";
import type { Event } from "./Event.js";
import type { HashValue } from "./HashValue.js";
import type { U64 } from "./U64.js";
import type { WriteSetChange } from "./WriteSetChange.js";

export type BlockMetadataTransaction = {
  version: U64;
  hash: HashValue;
  state_root_hash: HashValue;
  event_root_hash: HashValue;
  gas_used: U64;
  success: boolean;
  vm_status: string;
  accumulator_root_hash: HashValue;
  changes: Array<WriteSetChange>;
  id: HashValue;
  epoch: U64;
  round: U64;
  events: Array<Event>;
  previous_block_votes_bitvec: Array<number>;
  proposer: Address;
  failed_proposer_indices: Array<number>;
  timestamp: U64;
};
