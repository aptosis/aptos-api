import { Accounts, HttpClient, Transactions } from "@aptosis/aptos-api";
import { default as fetchAdapter } from "@vespaiach/axios-fetch-adapter";
import type { AxiosRequestConfig } from "axios";

export type APIClientConfig = Omit<
  AxiosRequestConfig,
  "data" | "cancelToken" | "method"
>;

/**
 * Creates a new HTTP client.
 * @param nodeUrl
 * @param config
 * @returns
 */
export const createHttpClient = (
  nodeUrl: string,
  config: APIClientConfig = {}
): HttpClient =>
  new HttpClient({
    withCredentials: false,
    baseURL: nodeUrl,
    validateStatus: () => true, // Don't explode here on error responses; let our code handle it
    adapter: typeof fetch !== "undefined" ? fetchAdapter : undefined,
    ...config,
  });

/**
 * Lightweight alternative wrapper to the official Aptos client.
 */
export class AptosAPI {
  readonly client: HttpClient;

  readonly accounts: Accounts;
  readonly transactions: Transactions;

  constructor(readonly nodeUrl: string, config: APIClientConfig = {}) {
    // `withCredentials` ensures cookie handling
    this.client = createHttpClient(nodeUrl, config);

    this.accounts = new Accounts(this.client);
    this.transactions = new Transactions(this.client);
  }
}
