import { TransactionResponse, ethers } from 'ethers';
import { getContract, contracts } from './contract';
import {
  BOracleSign,
  OpenQuoteSign,
  PionSign,
  OpenCloseQuoteSign,
} from './types/contract';
import { BigNumberish } from 'ethers';
import { networks } from './networks';

export class BlockchainInterface {
  private contracts: { [contractName: string]: ethers.Contract };
  private contractRunner: ethers.ContractRunner;

  constructor(network: string, contractRunner: ethers.ContractRunner) {
    this.contractRunner = contractRunner;

    this.contracts = {};

    this.contracts['FakeUSD'] = getContract({
      contract: contracts.FakeUSD,
      address: networks[network].contracts.FakeUSD,
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1'] = getContract({
      contract: contracts.PionerV1,
      address: networks[network].contracts.PionerV1,
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Close'] = getContract({
      contract: contracts.PionerV1Close,
      address: networks[network].contracts.PionerV1Close,
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Compliance'] = getContract({
      contract: contracts.PionerV1Compliance,
      address: networks[network].contracts.PionerV1Compliance,
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Default'] = getContract({
      contract: contracts.PionerV1Default,
      address: networks[network].contracts.PionerV1Default,
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Open'] = getContract({
      contract: contracts.PionerV1Open,
      address: networks[network].contracts.PionerV1Open,
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Oracle'] = getContract({
      contract: contracts.PionerV1Oracle,
      address: networks[network].contracts.PionerV1Oracle,
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Utils'] = getContract({
      contract: contracts.PionerV1Utils,
      address: networks[network].contracts.PionerV1Utils,
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1View'] = getContract({
      contract: contracts.PionerV1View,
      address: networks[network].contracts.PionerV1View,
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Wrapper'] = getContract({
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
    const warpperUpdatePriceAndDefault = this.contracts[
      'PionerV1Wrapper'
    ].getFunction('warpperUpdatePriceAndDefault');
    return await warpperUpdatePriceAndDefault.call(
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
    const warpperUpdatePriceAndCloseMarket = this.contracts[
      'PionerV1Wrapper'
    ].getFunction('warpperUpdatePriceAndCloseMarket');
    return await warpperUpdatePriceAndCloseMarket.call(
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
    const warperCloseLimitMM =
      this.contracts['PionerV1Wrapper'].getFunction('warperCloseLimitMM');
    return await warperCloseLimitMM.call(null, quote, signHash);
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
      'PionerV1Wrapper'
    ].getFunction('wrapperOpenTPSLOracleSwap');
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
    const warperOpenQuoteMM =
      this.contracts['PionerV1Wrapper'].getFunction('warperOpenQuoteMM');

    return await warperOpenQuoteMM.call(
      null,
      bOracleSign,
      signaturebOracleSign,
      openQuoteSign,
      openQuoteSignature,
      _acceptPrice,
    );
  }

  async fetchEvent(
    contractName: string,
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
