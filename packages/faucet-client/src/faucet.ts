import type { HexEncodedBytes } from "@aptosis/aptos-api-raw";
import type { AptosAPIResponse } from "@aptosis/aptos-client";
import { raiseForStatus } from "@aptosis/aptos-client";
import type { MaybeHexString } from "@movingco/hexstring";
import { HexString } from "@movingco/hexstring";
import { default as fetchAdapter } from "@vespaiach/axios-fetch-adapter";
import { default as axios } from "axios";

/**
 * Faucet creates and funds accounts. This is a thin wrapper around that.
 */
export class FaucetClient {
  constructor(readonly faucetUrl: string) {}

  /**
   * This creates an account if it does not exist and mints the specified amount of
   * coins into that account.
   */
  async fundAccount(
    address: MaybeHexString,
    amount: number
  ): Promise<HexEncodedBytes[]> {
    const url = `${this.faucetUrl}/mint`;
    const response = await axios.post<Array<string>>(
      url,
      {},
      {
        params: {
          amount,
          address: HexString.ensure(address).hex(),
        },
        validateStatus: () => true,
        adapter: typeof fetch !== "undefined" ? fetchAdapter : undefined,
      }
    );
    raiseForStatus(200, response as AptosAPIResponse<unknown>);
    return response.data;
  }
}
