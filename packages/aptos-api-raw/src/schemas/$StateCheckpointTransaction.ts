/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StateCheckpointTransaction = {
  properties: {
    version: {
      type: "U64",
      isRequired: true,
    },
    hash: {
      type: "HashValue",
      isRequired: true,
    },
    state_root_hash: {
      type: "HashValue",
      isRequired: true,
    },
    event_root_hash: {
      type: "HashValue",
      isRequired: true,
    },
    gas_used: {
      type: "U64",
      isRequired: true,
    },
    success: {
      type: "boolean",
      isRequired: true,
    },
    vm_status: {
      type: "string",
      isRequired: true,
    },
    accumulator_root_hash: {
      type: "HashValue",
      isRequired: true,
    },
    changes: {
      type: "array",
      contains: {
        type: "WriteSetChange",
      },
      isRequired: true,
    },
    timestamp: {
      type: "U64",
      isRequired: true,
    },
  },
} as const;
