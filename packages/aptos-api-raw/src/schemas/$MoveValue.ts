/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MoveValue = {
  type: "any-of",
  contains: [
    {
      type: "number",
      format: "uint8",
    },
    {
      type: "U64",
    },
    {
      type: "U128",
    },
    {
      type: "boolean",
    },
    {
      type: "Address",
    },
    {
      type: "array",
      contains: {
        type: "MoveValue",
      },
    },
    {
      type: "HexEncodedBytes",
    },
    {
      type: "MoveStructValue",
    },
    {
      type: "string",
    },
  ],
} as const;
