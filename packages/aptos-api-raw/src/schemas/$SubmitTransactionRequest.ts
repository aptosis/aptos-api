/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SubmitTransactionRequest = {
  properties: {
    sender: {
      type: "Address",
      isRequired: true,
    },
    sequence_number: {
      type: "U64",
      isRequired: true,
    },
    max_gas_amount: {
      type: "U64",
      isRequired: true,
    },
    gas_unit_price: {
      type: "U64",
      isRequired: true,
    },
    expiration_timestamp_secs: {
      type: "U64",
      isRequired: true,
    },
    payload: {
      type: "TransactionPayload",
      isRequired: true,
    },
    signature: {
      type: "TransactionSignature",
      isRequired: true,
    },
  },
} as const;
