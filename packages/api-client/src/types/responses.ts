export interface RfqResponse {
  id: string;
  chainId: number;
  createdAt: bigint;
  userId: string;
  userAddress: string;
  expiration: bigint;
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
  sExpirationA: bigint;
  sExpirationB: bigint;
  sTimelockA: bigint;
  sTimelockB: bigint;
  lPrice: string;
  lQuantity: string;
  lInterestRate: string;
  lIsPayingApr: boolean;
  lImA: string;
  lImB: string;
  lDfA: string;
  lDfB: string;
  lExpirationA: bigint;
  lExpirationB: bigint;
  lTimelockA: bigint;
  lTimelockB: bigint;
}

export interface QuoteResponse {
  id: string;
  chainId: number;
  createdAt: bigint;
  userId: string;
  userAddress: string;
  rfqId: string;
  expiration: bigint;
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
  maxDelay: bigint;
  precision: number;
  imA: string;
  imB: string;
  dfA: string;
  dfB: string;
  expiryA: bigint;
  expiryB: bigint;
  timeLock: bigint;
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
  emitTime: bigint;
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
  emitTime: bigint;
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
  emitTime: bigint;
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
  expiry: bigint;
  authorized: string;
  nonce: number;
  signatureClose: string;
  emitTime: bigint;
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
  emitTime: bigint;
  messageState: number;
}

export interface PriceResponse {
  symbol: string;
  type: string;
  bidPrice: string;
  askPrice: string;
  provider: string;
  timestamp: bigint;
}

export interface PricesResponse {
  [assetName: string]: PriceResponse;
}
