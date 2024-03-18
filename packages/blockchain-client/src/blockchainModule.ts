import { TransactionResponse, ethers } from 'ethers';
import { getContract, contracts } from './contracts';
import {
  BOracleSign,
  OpenQuoteSign,
  PionSign,
  OpenCloseQuoteSign,
  ContractKey,
} from './types/contract';
import { BigNumberish } from 'ethers';
import { networks } from './networks';
import { NetworkKey } from './types/network';

export class BlockchainInterface {
  private contracts: { [contractName: string]: ethers.Contract };
  private contractRunner: ethers.ContractRunner;

  constructor(network: NetworkKey, contractRunner: ethers.ContractRunner) {
    this.contractRunner = contractRunner;

    this.contracts = {};

    this.contracts[contracts.FakeUSD.name] = getContract({
      contract: contracts.FakeUSD,
      address: networks[network].contracts.FakeUSD,
      contractRunner: this.contractRunner,
    });

    this.contracts[contracts.PionerV1.name] = getContract({
      contract: contracts.PionerV1,
      address: networks[network].contracts.PionerV1,
      contractRunner: this.contractRunner,
    });

    this.contracts[contracts.PionerV1Close.name] = getContract({
      contract: contracts.PionerV1Close,
      address: networks[network].contracts.PionerV1Close,
      contractRunner: this.contractRunner,
    });

    this.contracts[contracts.PionerV1Compliance.name] = getContract({
      contract: contracts.PionerV1Compliance,
      address: networks[network].contracts.PionerV1Compliance,
      contractRunner: this.contractRunner,
    });

    this.contracts[contracts.PionerV1Default.name] = getContract({
      contract: contracts.PionerV1Default,
      address: networks[network].contracts.PionerV1Default,
      contractRunner: this.contractRunner,
    });

    this.contracts[contracts.PionerV1Open.name] = getContract({
      contract: contracts.PionerV1Open,
      address: networks[network].contracts.PionerV1Open,
      contractRunner: this.contractRunner,
    });

    this.contracts[contracts.PionerV1Oracle.name] = getContract({
      contract: contracts.PionerV1Oracle,
      address: networks[network].contracts.PionerV1Oracle,
      contractRunner: this.contractRunner,
    });

    this.contracts[contracts.PionerV1Utils.name] = getContract({
      contract: contracts.PionerV1Utils,
      address: networks[network].contracts.PionerV1Utils,
      contractRunner: this.contractRunner,
    });

    this.contracts[contracts.PionerV1View.name] = getContract({
      contract: contracts.PionerV1View,
      address: networks[network].contracts.PionerV1View,
      contractRunner: this.contractRunner,
    });

    this.contracts[contracts.PionerV1Wrapper.name] = getContract({
      contract: contracts.PionerV1Wrapper,
      address: networks[network].contracts.PionerV1Wrapper,
      contractRunner: this.contractRunner,
    });
  }

  async wrapperUpdatePriceAndDefault(
    priceSignature: PionSign,
    bOracleId: number,
    bContractId: number,
  ): Promise<TransactionResponse> {
    const wrapperUpdatePriceAndDefault = this.contracts[
      contracts.PionerV1Wrapper.name
    ].getFunction(
      contracts.PionerV1Wrapper.functions.wrapperUpdatePriceAndDefault,
    );
    return await wrapperUpdatePriceAndDefault.call(
      null,
      priceSignature,
      bOracleId,
      bContractId,
    );
  }

  async wrapperUpdatePriceAndCloseMarket(
    priceSignature: PionSign,
    bOracleId: number,
    bCloseQuoteId: number,
    index: number,
  ): Promise<TransactionResponse> {
    const wrapperUpdatePriceAndCloseMarket = this.contracts[
      contracts.PionerV1Wrapper.name
    ].getFunction(
      contracts.PionerV1Wrapper.functions.wrapperUpdatePriceAndCloseMarket,
    );
    return await wrapperUpdatePriceAndCloseMarket.call(
      null,
      priceSignature,
      bOracleId,
      bCloseQuoteId,
      index,
    );
  }

  async wrapperCloseLimitMM(
    quote: OpenCloseQuoteSign,
    signHash: string,
  ): Promise<TransactionResponse> {
    const wrapperCloseLimitMM = this.contracts[
      contracts.PionerV1Wrapper.name
    ].getFunction(contracts.PionerV1Wrapper.functions.wrapperCloseLimitMM);
    return await wrapperCloseLimitMM.call(null, quote, signHash);
  }

  async wrapperOpenTPSLOracleSwap(
    isLong: boolean,
    price: number,
    amount: number,
    interestRate: number,
    isAPayingAPR: boolean,
    frontEnd: string,
    affiliate: string,
    _assetHex: string,
    _x: number,
    _parity: number,
    _maxConfidence: number,
    _maxDelay: number,
    precision: number,
    _imA: number,
    _imB: number,
    _dfA: number,
    _dfB: number,
    _expiryA: number,
    _expiryB: number,
    _timeLock: number,
    bContractIdsTP: number[],
    priceTP: number[],
    amountTP: number[],
    limitOrStopTP: number[],
    expiryTP: number[],
    bContractIdsSL: number[],
    priceSL: number[],
    amountSL: number[],
    limitOrStopSL: number[],
    expirySL: number[],
  ): Promise<TransactionResponse> {
    const wrapperOpenTPSLOracleSwap = this.contracts[
      contracts.PionerV1Wrapper.name
    ].getFunction(
      contracts.PionerV1Wrapper.functions.wrapperOpenTPSLOracleSwap,
    );
    return await wrapperOpenTPSLOracleSwap.call(
      null,
      isLong,
      price,
      amount,
      interestRate,
      isAPayingAPR,
      frontEnd,
      affiliate,
      _assetHex,
      _x,
      _parity,
      _maxConfidence,
      _maxDelay,
      precision,
      _imA,
      _imB,
      _dfA,
      _dfB,
      _expiryA,
      _expiryB,
      _timeLock,
      bContractIdsTP,
      priceTP,
      amountTP,
      limitOrStopTP,
      expiryTP,
      bContractIdsSL,
      priceSL,
      amountSL,
      limitOrStopSL,
      expirySL,
    );
  }

  async wrapperOpenQuoteMM(
    bOracleSign: BOracleSign,
    signaturebOracleSign: string,
    openQuoteSign: OpenQuoteSign,
    openQuoteSignature: string,
    _acceptPrice: BigNumberish,
  ): Promise<TransactionResponse> {
    const wrapperOpenQuoteMM = this.contracts[
      contracts.PionerV1Wrapper.name
    ].getFunction(contracts.PionerV1Wrapper.functions.wrapperOpenQuoteMM);

    return await wrapperOpenQuoteMM.call(
      null,
      bOracleSign,
      signaturebOracleSign,
      openQuoteSign,
      openQuoteSignature,
      _acceptPrice,
    );
  }

  async fetchEvent(
    contractName: ContractKey,
    eventName: string,
    fromBlock: ethers.BlockTag,
    toBlock: ethers.BlockTag = 'latest',
  ): Promise<(ethers.EventLog | ethers.Log)[]> {
    const ce = this.contracts[contractName].getEvent(eventName);

    return await this.contracts[contractName].queryFilter(
      ce,
      fromBlock,
      toBlock,
    );
  }
}