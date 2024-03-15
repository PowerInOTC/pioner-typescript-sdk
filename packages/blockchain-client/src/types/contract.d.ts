import ethers, { BigNumberish, Contract } from 'ethers';

export type ContractInfo = {
  name: string;
  version: string;
  abi: ethers.InterfaceAbi;
  events: { [key: string]: string };
};

export type Contracts = {
  [key: string]: ContractInfo;
};

export type ContractConfig = {
  contract: ContractInfo;
  address: string;
  contractRunner: ethers.ContractRunner;
};

export type ContractEventConfig = {
  contract: Contract;
  eventName: string;
};

export type BOracleSign = {
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
};

export type OpenQuoteSign = {
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
};

export type PionSign = {
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
};

export type OpenCloseQuoteSign = {
  bContractId: number;
  price: number;
  amount: number;
  limitOrStop: number;
  expiry: number;
  authorized: string;
  nonce: number;
};
