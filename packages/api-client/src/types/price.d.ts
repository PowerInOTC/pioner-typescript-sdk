type Price = {
  symbol: string;
  type: string;
  bidPrice: string;
  askPrice: string;
  provider: string;
  timestamp: number;
};

type Prices = {
  [assetName: string]: Price;
};

export { Price, Prices };
