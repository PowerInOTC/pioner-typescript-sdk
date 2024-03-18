export interface Price {
  symbol: string;
  type: string;
  bidPrice: string;
  askPrice: string;
  provider: string;
  timestamp: number;
}

export interface Prices {
  [assetName: string]: Price;
}
