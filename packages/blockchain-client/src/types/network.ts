export type NetworkKey =
  | 97
  | 421614
  | 80001
  | 11155420
  | 43113
  | 43114
  | 3441005
  | 84532
  | 1442
  | 64165;

export interface NetworkInfo {
  name: string;
  pionerChainId: string;
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
  chainId: NetworkKey;
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
