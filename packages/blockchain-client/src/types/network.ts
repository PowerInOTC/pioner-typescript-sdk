export type NetworkKey =
  | 'bnbTest'
  | 'arbitrumSepoliaTest'
  | 'mumbai'
  | 'opSepoliaTest'
  | 'fuji'
  | 'avax'
  | 'mantaTest'
  | 'baseSepoliaTest'
  | 'skevmTest'
  | 'sonic';

export interface NetworkInfo {
  name: string;
  pionerChainId: NetworkKey;
  config?: string;
  title?: string;
  chain?: string;
  icon?: string;
  rpc?: string[];
  features?: {
    name: string;
  }[];
  faucets?: string[];
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  infoURL?: string;
  shortName?: string;
  chainId?: number;
  networkId?: number;
  slip44?: number;
  explorers?: {
    name: string;
    url: string;
    icon?: string;
    standard: string;
  }[];
  parent?: {
    type: string;
    chain: string;
    bridges: {
      url: string;
    }[];
  };
  contracts: {
    [key: string]: string;
  };
}

export type Networks = {
  [K in NetworkKey]: NetworkInfo;
};
