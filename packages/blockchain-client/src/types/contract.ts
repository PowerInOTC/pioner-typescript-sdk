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
  oracleType: bigint;
  lastBid: bigint;
  lastAsk: bigint;
  publicOracleAddress: string;
  maxConfidence: bigint;
  x: bigint;
  parity: number;
  maxDelay: bigint;
  lastPrice: bigint;
  lastPriceUpdateTime: bigint;
  imA: bigint;
  imB: bigint;
  dfA: bigint;
  dfB: bigint;
  expiryA: bigint;
  expiryB: bigint;
  timeLock: bigint;
  cType: bigint;
  forceCloseType: bigint;
  kycAddress: string;
  isPaused: boolean;
  deployTime: bigint;
};

export type BContract = {
  pA: string;
  pB: string;
  oracleId: bigint;
  initiator: string;
  price: bigint;
  amount: bigint;
  interestRate: bigint;
  isAPayingAPR: boolean;
  openTime: bigint;
  state: bigint;
  frontEnd: string;
  hedger: string;
  affiliate: string;
  cancelTime: bigint;
};

export type BCloseQuote = {
  bContractIds: bigint[];
  price: bigint[];
  amount: bigint[];
  limitOrStop: bigint[];
  expiry: bigint[];
  initiator: string;
  cancelTime: bigint;
  openTime: bigint;
  state: bigint;
};

export type UserRelatedInfo = {
  openPositionNumber: bigint;
  owedAmount: bigint;
  totalOwedAmount: bigint;
  totalOwedAmountPaid: bigint;
  gracePeriodLockedWithdrawBalance: bigint;
  gracePeriodLockedTime: bigint;
  minimumOpenPartialFillNotional: bigint;
  sponsorReward: bigint;
  oracleLength: bigint;
  contractLength: bigint;
  closeQuoteLength: bigint;
};

export type KycData = {
  waitingKyc: boolean;
  kycLinkedAddress: string;
  kycType: bigint;
  maxPosition: bigint;
  nextMaxPosition: bigint;
  lastKycUpdate: bigint;
  isKycPaused: boolean;
};
