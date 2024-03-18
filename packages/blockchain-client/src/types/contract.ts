import ethers, { BigNumberish, Contract } from 'ethers';

export type ContractKey =
  | 'FakeUSD'
  | 'PionerV1'
  | 'PionerV1Close'
  | 'PionerV1Compliance'
  | 'PionerV1Default'
  | 'PionerV1Open'
  | 'PionerV1Oracle'
  | 'PionerV1Utils'
  | 'PionerV1View'
  | 'PionerV1Wrapper';

export interface ContractInfo {
  name: string;
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
  appId: number;
  reqId: string;
  requestassetHex: string;
  requestPairBid: number;
  requestPairAsk: number;
  requestConfidence: number;
  requestSignTime: number;
  requestPrecision: number;
  signature: number;
  owner: string;
  nonce: string;
}

export interface OpenCloseQuoteSign {
  bContractId: number;
  price: number;
  amount: number;
  limitOrStop: number;
  expiry: number;
  authorized: string;
  nonce: number;
}
