import type { HexEncodedBytes } from "@aptosis/aptos-api";
import type { AptosAPIResponse } from "@aptosis/aptos-client";
import { raiseForStatus } from "@aptosis/aptos-client";
import type { MaybeHexString } from "@movingco/core";
import { HexString } from "@movingco/core";
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
    const url = `${
      this.faucetUrl
    }/mint?amount=${amount}&address=${HexString.ensure(address).hex()}`;
    const response = await axios.post<Array<string>>(
      url,
      {},
      { validateStatus: () => true, adapter: fetchAdapter }
    );
    raiseForStatus(200, response as AptosAPIResponse<unknown>);
    return response.data;
  }
}
