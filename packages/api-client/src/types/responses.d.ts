type RfqResponse = {
  id: string;
  chainId: number;
  createdAt: number;
  userId: string;
  expiration: number;
  AssetAId: string;
  AssetBId: string;
  sPrice: string;
  sQuantity: string;
  sInterestRate: string;
  sIsPayingApr: boolean;
  sImA: string;
  sImB: string;
  sDfA: string;
  sDfB: string;
  sExpirationA: number;
  sExpirationB: number;
  sTimelockA: number;
  sTimelockB: number;
  lPrice: string;
  lQuantity: string;
  lInterestRate: string;
  lIsPayingApr: boolean;
  lImA: string;
  lImB: string;
  lDfA: string;
  lDfB: string;
  lExpirationA: number;
  lExpirationB: number;
  lTimelockA: number;
  lTimelockB: number;
};

type QuoteResponse = {
  id: string;
  chainId: number;
  createdAt: number;
  rfqId: string;
  expiration: number;
  sMarketPrice: string;
  sPrice: string;
  sQuantity: string;
  lMarketPrice: string;
  lPrice: string;
  lQuantity: string;
};

export { RfqResponse, QuoteResponse };
