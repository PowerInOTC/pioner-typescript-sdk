export interface RfqRequest {
  chainId: number;
  expiration: number;
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
}

export interface QuoteRequest {
  chainId: number;
  rfqId: string;
  expiration: number;
  sMarketPrice: string;
  sPrice: string;
  sQuantity: string;
  lMarketPrice: string;
  lPrice: string;
  lQuantity: string;
}

export interface SignedWrappedOpenQuoteRequest {
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  x: string;
  parity: boolean;
  maxConfidence: string;
  assetHex: string;
  maxDelay: number;
  precision: number;
  imA: string;
  imB: string;
  dfA: string;
  dfB: string;
  expiryA: number;
  expiryB: number;
  timeLock: number;
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
  emitTime: number;
  messageState: number;
}

export interface SignedFillOpenQuoteRequest {
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
  emitTime: number;
  messageState: number;
}

export interface SignedCancelOpenQuoteRequest {
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  targetHash: string;
  nonceCancel: number;
  signatureCancel: string;
  emitTime: number;
  messageState: number;
}

export interface SignedCloseQuoteRequest {
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  bcontractId: number;
  price: string;
  amount: string;
  limitOrStop: number;
  expiry: number;
  authorized: string;
  nonce: number;
  signatureClose: string;
  emitTime: number;
  messageState: number;
}

export interface SignedCancelCloseQuoteRequest {
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  targetHash: string;
  nonceCancel: number;
  signature: string;
  emitTime: number;
  messageState: number;
}
