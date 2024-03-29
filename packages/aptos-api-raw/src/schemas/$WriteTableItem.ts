/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WriteTableItem = {
  properties: {
    state_key_hash: {
      type: "string",
      isRequired: true,
    },
    handle: {
      type: "HexEncodedBytes",
      isRequired: true,
    },
    key: {
      type: "HexEncodedBytes",
      isRequired: true,
    },
    value: {
      type: "HexEncodedBytes",
      isRequired: true,
    },
    data: {
      type: "DecodedTableData",
    },
  },
} as const;
