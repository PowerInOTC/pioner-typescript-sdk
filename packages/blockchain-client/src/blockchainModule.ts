import { TransactionResponse, ethers } from 'ethers';
import { getContract, contracts } from './utils/contract';
import {
  BOracleSign,
  OpenQuoteSign,
  PionSign,
  OpenCloseQuoteSign,
} from './types/contract';
import { BigNumberish } from 'ethers';

export class BlockchainInterface {
  private contracts: { [contractName: string]: ethers.Contract };
  private contractRunner: ethers.ContractRunner;

  constructor(network: string, contractRunner: ethers.ContractRunner) {
    this.contractRunner = contractRunner;

    this.contracts = {};

    this.contracts['FakeUSD'] = getContract({
      contract: contracts.FakeUSD,
      address: contracts.FakeUSD.addresses[network],
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1'] = getContract({
      contract: contracts.PionerV1,
      address: contracts.PionerV1.addresses[network],
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Close'] = getContract({
      contract: contracts.PionerV1Close,
      address: contracts.PionerV1Close.addresses[network],
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Compliance'] = getContract({
      contract: contracts.PionerV1Compliance,
      address: contracts.PionerV1Compliance.addresses[network],
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Default'] = getContract({
      contract: contracts.PionerV1Default,
      address: contracts.PionerV1Default.addresses[network],
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Open'] = getContract({
      contract: contracts.PionerV1Open,
      address: contracts.PionerV1Open.addresses[network],
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Oracle'] = getContract({
      contract: contracts.PionerV1Oracle,
      address: contracts.PionerV1Oracle.addresses[network],
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Utils'] = getContract({
      contract: contracts.PionerV1Utils,
      address: contracts.PionerV1Utils.addresses[network],
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1View'] = getContract({
      contract: contracts.PionerV1View,
      address: contracts.PionerV1View.addresses[network],
      contractRunner: this.contractRunner,
    });

    this.contracts['PionerV1Wrapper'] = getContract({
      contract: contracts.PionerV1Wrapper,
      address: contracts.PionerV1Wrapper.addresses[network],
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
