export const APTOS_DEVNET_FULL_NODE_URL =
  "https://fullnode.devnet.aptoslabs.com/v1";

/**
 * Aptos network configuration.
 */
export interface NetworkConfig {
  /**
   * Name of the network.
   */
  name: string;
  /**
   * URL to the Aptos node. This is also the network.
   */
  nodeUrl: string;
}

export const APTOS_DEVNET: NetworkConfig = {
  name: "Devnet",
  nodeUrl: APTOS_DEVNET_FULL_NODE_URL,
};
