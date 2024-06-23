export interface RfqRequest {
  chainId: number;
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

export interface QuoteRequest {
  chainId: number;
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

export interface SignedWrappedOpenQuoteRequest {
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
  emitTime: string;
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
  nonceAcceptQuote: string;
  signatureAcceptQuote: string;
  emitTime: string;
  messageState: number;
}

export interface SignedCancelOpenQuoteRequest {
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  targetHash: string;
  nonceCancel: string;
  signatureCancel: string;
  emitTime: string;
  messageState: number;
}

export interface SignedCloseQuoteRequest {
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
  emitTime: string;
  messageState: number;
}

export interface SignedCancelCloseQuoteRequest {
  issuerAddress: string;
  counterpartyAddress: string;
  version: string;
  chainId: number;
  verifyingContract: string;
  targetHash: string;
  nonceCancel: string;
  signature: string;
  emitTime: string;
  messageState: number;
}
