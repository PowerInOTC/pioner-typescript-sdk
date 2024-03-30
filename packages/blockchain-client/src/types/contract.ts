import ethers, { BigNumberish, Contract } from 'ethers';

export type ContractKey =
  | 'FakeUSD'
  | 'PionerV1'
  | 'PionerV1Close'
  | 'PionerV1Compliance'
  | 'PionerV1Default'
  | 'PionerV1Open'
  | 'PionerV1Oracle'
  | 'PionerV1View'
  | 'PionerV1Wrapper';

export interface ContractInfo {
  name: ContractKey;
  version: string;
  abi: ethers.InterfaceAbi;
  events: { [key: string]: string };
  functions: { [key: string]: string };
}

export type Contracts = {
  [K in ContractKey]: ContractInfo;
};

export interface ContractConfig {
  contract: ContractInfo;
  address: string;
  contractRunner: ethers.ContractRunner;
}

export interface ContractEventConfig {
  contract: Contract;
  eventName: string;
}

export interface BOracleSign {
  x: BigNumberish;
  parity: number;
  maxConfidence: BigNumberish;
  assetHex: string;
  maxDelay: BigNumberish;
  precision: BigNumberish;
  imA: BigNumberish;
  imB: BigNumberish;
  dfA: BigNumberish;
  dfB: BigNumberish;
  expiryA: BigNumberish;
  expiryB: BigNumberish;
  timeLock: BigNumberish;
  signatureHashOpenQuote: string;
  nonce: BigNumberish;
}

export interface OpenQuoteSign {
  isLong: boolean;
  bOracleId: BigNumberish;
  price: BigNumberish;
  amount: BigNumberish;
  interestRate: BigNumberish;
  isAPayingAPR: boolean;
  frontEnd: string;
  affiliate: string;
  authorized: string;
  nonce: BigNumberish;
}

export interface PionSign {
  appId: BigNumberish;
  reqId: string;
  requestassetHex: string;
  requestPairBid: BigNumberish;
  requestPairAsk: BigNumberish;
  requestConfidence: BigNumberish;
  requestSignTime: BigNumberish;
  requestPrecision: BigNumberish;
  signature: BigNumberish;
  owner: string;
  nonce: string;
}

export interface OpenCloseQuoteSign {
  bContractId: BigNumberish;
  price: BigNumberish;
  amount: BigNumberish;
  limitOrStop: BigNumberish;
  expiry: BigNumberish;
  authorized: string;
  nonce: BigNumberish;
}

export type BOracle = {
  assetHex: string;
  oracleType: BigNumberish;
  lastBid: BigNumberish;
  lastAsk: BigNumberish;
  publicOracleAddress: string;
  maxConfidence: BigNumberish;
  x: BigNumberish;
  parity: number;
  maxDelay: BigNumberish;
  lastPrice: BigNumberish;
  lastPriceUpdateTime: BigNumberish;
  imA: BigNumberish;
  imB: BigNumberish;
  dfA: BigNumberish;
  dfB: BigNumberish;
  expiryA: BigNumberish;
  expiryB: BigNumberish;
  timeLock: BigNumberish;
  cType: BigNumberish;
  forceCloseType: BigNumberish;
  kycAddress: string;
  isPaused: boolean;
  deployTime: BigNumberish;
};

export type BContract = {
  pA: string;
  pB: string;
  oracleId: BigNumberish;
  initiator: string;
  price: BigNumberish;
  amount: BigNumberish;
  interestRate: BigNumberish;
  isAPayingAPR: boolean;
  openTime: BigNumberish;
  state: BigNumberish;
  frontEnd: string;
  hedger: string;
  affiliate: string;
  cancelTime: BigNumberish;
};

export type BCloseQuote = {
  bContractIds: BigNumberish[];
  price: BigNumberish[];
  amount: BigNumberish[];
  limitOrStop: BigNumberish[];
  expiry: BigNumberish[];
  initiator: string;
  cancelTime: BigNumberish;
  openTime: BigNumberish;
  state: BigNumberish;
};

export type UserRelatedInfo = {
  openPositionNumber: BigNumberish;
  owedAmount: BigNumberish;
  totalOwedAmount: BigNumberish;
  totalOwedAmountPaid: BigNumberish;
  gracePeriodLockedWithdrawBalance: BigNumberish;
  gracePeriodLockedTime: BigNumberish;
  minimumOpenPartialFillNotional: BigNumberish;
  sponsorReward: BigNumberish;
  oracleLength: BigNumberish;
  contractLength: BigNumberish;
  closeQuoteLength: BigNumberish;
};

export type KycData = {
  waitingKyc: boolean;
  kycLinkedAddress: string;
  kycType: BigNumberish;
  maxPosition: BigNumberish;
  nextMaxPosition: BigNumberish;
  lastKycUpdate: BigNumberish;
  isKycPaused: boolean;
};
