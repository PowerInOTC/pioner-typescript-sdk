export interface RfqResponse {
  id: string;
  chainId: number;
  createdAt: string;
  userId: string;
  userAddress: string;
  expiration: string;
  assetAId: string;
  assetBId: string;
  sPrice: string;
  sQuantity: string;
  sInterestRate: string;
  sIsPayingApr: boolean;
  sImA: string;
  sImB: string;
  sDfA: string;
  sDfB: string;
  sExpirationA: string;
  sExpirationB: string;
  sTimelockA: string;
  sTimelockB: string;
  lPrice: string;
  lQuantity: string;
  lInterestRate: string;
  lIsPayingApr: boolean;
  lImA: string;
  lImB: string;
  lDfA: string;
  lDfB: string;
  lExpirationA: string;
  lExpirationB: string;
  lTimelockA: string;
  lTimelockB: string;
}

export interface QuoteResponse {
  id: string;
  chainId: number;
  createdAt: string;
  userId: string;
  userAddress: string;
  rfqId: string;
  expiration: string;
  sMarketPrice: string;
  sPrice: string;
  sQuantity: string;
  lMarketPrice: string;
  lPrice: string;
  lQuantity: string;
}

export interface signedWrappedOpenQuoteResponse {
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  x: string;
  parity: boolean;
  maxConfidence: string;
  assetHex: string;
  maxDelay: string;
  precision: number;
  imA: string;
  imB: string;
  dfA: string;
  dfB: string;
  expiryA: string;
  expiryB: string;
  timeLock: string;
  nonceBoracle: number;
  signatureBoracle: string;
  isLong: boolean;
  boracleId: number;
  price: string;
  amount: string;
  interestRate: string;
  isAPayingApr: boolean;
  frontEnd: string;
  affiliate: string;
  authorized: string;
  nonceOpenQuote: number;
  signatureOpenQuote: string;
  emitTime: string;
  messageState: number;
}

export interface signedFillOpenQuoteResponse {
  issuerAddress: string;
  counterpartyAddress: string;
  signatureOpenQuote: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  bcontractId: number;
  acceptPrice: string;
  backendAffiliate: string;
  amount: string;
  nonceAcceptQuote: number;
  signatureAcceptQuote: string;
  emitTime: string;
  messageState: number;
}

export interface signedCancelOpenQuoteResponse {
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  targetHash: string;
  nonceCancel: number;
  signatureCancel: string;
  emitTime: string;
  messageState: number;
}

export interface signedCloseQuoteResponse {
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  bcontractId: number;
  price: string;
  amount: string;
  limitOrStop: number;
  expiry: string;
  authorized: string;
  nonce: number;
  signatureClose: string;
  emitTime: string;
  messageState: number;
}

export interface signedCancelCloseQuoteResponse {
  id: string;
  createdAt: number;
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  targetHash: string;
  nonceCancel: number;
  signature: string;
  emitTime: string;
  messageState: number;
}

export interface PriceResponse {
  symbol: string;
  type: string;
  bidPrice: string;
  askPrice: string;
  provider: string;
  timestamp: string;
}

export interface PricesResponse {
  [assetName: string]: PriceResponse;
}
