import type {
  AccountsService,
  OpenAPIConfig,
  TransactionsService,
} from "@aptosis/aptos-api-raw";
import { AptosGeneratedClient } from "@aptosis/aptos-api-raw";

/**
 * Lightweight alternative wrapper to the official Aptos client.
 */
export class AptosAPI {
  readonly client: AptosGeneratedClient;

  constructor(readonly nodeUrl: string, config: Partial<OpenAPIConfig> = {}) {
    // `withCredentials` ensures cookie handling
    this.client = new AptosGeneratedClient({ ...config, BASE: nodeUrl });
  }

  get accounts(): AccountsService {
    return this.client.accounts;
  }

  get transactions(): TransactionsService {
    return this.client.transactions;
  }
}
