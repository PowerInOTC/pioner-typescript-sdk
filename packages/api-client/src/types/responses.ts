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
  minAmount: string;
  maxAmount: string;
}

export interface signedWrappedOpenQuoteResponse {
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  x: string;
  parity: string;
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
  nonceBoracle: string;
  signatureBoracle: string;
  signatureBoracleHash: string;
  isLong: boolean;
  price: string;
  amount: string;
  interestRate: string;
  isAPayingApr: boolean;
  frontEnd: string;
  affiliate: string;
  authorized: string;
  nonceOpenQuote: string;
  signatureOpenQuote: string;
  signatureOpenQuoteHash: string;
  emitTime: string;
  messageState: number;
  bid: string;
  ask: string;
  lastUpdate: string;
}

export interface signedFillOpenQuoteResponse {
  issuerAddress: string;
  counterpartyAddress: string;
  signatureOpenQuote: string;
  signatureOpenQuoteHash: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  bcontractId: number;
  acceptPrice: string;
  backendAffiliate: string;
  amount: string;
  nonceAcceptQuote: string;
  signatureAcceptQuote: string;
  signatureAcceptQuoteHash: string;
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
  nonceCancel: string;
  signatureCancel: string;
  signatureCancelHash: string;
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
  isLong: boolean;
  price: string;
  amount: string;
  limitOrStop: string;
  expiry: string;
  authorized: string;
  nonce: string;
  signatureClose: string;
  signatureCloseHash: string;
  emitTime: string;
  messageState: number;
  assetHex: string;
  signatureOpenQuote: string;
  signatureOpenQuoteHash: string;
  bid: string;
  ask: string;
  lastUpdate: string;
}

export interface signedCancelCloseQuoteResponse {
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  targetHash: string;
  nonceCancel: string;
  signature: string;
  signatureHash: string;
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

export interface PositionResponse {
  id: string;
  chainId: number;
  createdAt: string;
  bContractId: number;
  signatureOpenQuote: string;
  signatureOpenQuoteHash: string;
  symbol: string;
  entryPrice: string;
  amount: string;
  pA: string;
  pB: string;
  interestRate: string;
  isAPayingAPR: boolean;
  openTime: string;
  imA: string;
  imB: string;
  dfA: string;
  dfB: string;
  expiryA: string;
  expiryB: string;
  timeLock: string;
  state: number;
  mtm: string;
  lastUpdate: string;
}
