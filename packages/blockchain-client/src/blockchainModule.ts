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
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
  ): Promise<TransactionResponse> {
    return await this.contracts[
      contracts.PionerV1Wrapper.name
    ].wrapperUpdatePriceAndDefault(priceSignature, bOracleId, bContractId, {
      gasLimit,
      gasPrice,
    });
  }

  async wrapperUpdatePriceAndCloseMarket(
    priceSignature: PionSign,
    bOracleId: number,
    bCloseQuoteId: number,
    index: number,
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
  ): Promise<TransactionResponse> {
    return await this.contracts[
      contracts.PionerV1Wrapper.name
    ].wrapperUpdatePriceAndCloseMarket(
      priceSignature,
      bOracleId,
      bCloseQuoteId,
      index,
      {
        gasLimit,
        gasPrice,
      },
    );
  }

  async wrapperCloseLimitMM(
    quote: OpenCloseQuoteSign,
    signHash: string,
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
  ): Promise<TransactionResponse> {
    return await this.contracts[
      contracts.PionerV1Wrapper.name
    ].wrapperCloseLimitMM(quote, signHash, {
      gasLimit,
      gasPrice,
    });
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
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
  ): Promise<TransactionResponse> {
    return await this.contracts[
      contracts.PionerV1Wrapper.name
    ].wrapperOpenTPSLOracleSwap(
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
      {
        gasLimit,
        gasPrice,
      },
    );
  }

  async wrapperOpenQuoteMM(
    bOracleSign: BOracleSign,
    signaturebOracleSign: string,
    openQuoteSign: OpenQuoteSign,
    openQuoteSignature: string,
    _acceptPrice: BigNumberish,
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
  ): Promise<TransactionResponse> {
    return await this.contracts[contracts.PionerV1Wrapper.name][
      contracts.PionerV1Wrapper.functions.wrapperOpenQuoteMM
    ](
      bOracleSign,
      signaturebOracleSign,
      openQuoteSign,
      openQuoteSignature,
      _acceptPrice,
      {
        gasLimit,
        gasPrice,
      },
    );
  }

  async mint(
    amount: BigNumberish,
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
  ): Promise<TransactionResponse> {
    return await this.contracts[contracts.FakeUSD.name].mint(amount, {
      gasLimit,
      gasPrice,
    });
  }

  async approve(
    spender: string,
    amount: BigNumberish,
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
  ): Promise<TransactionResponse> {
    return await this.contracts[contracts.FakeUSD.name].approve(
      spender,
      amount,
      { gasLimit, gasPrice },
    );
  }

  async deposit(
    amount: BigNumberish,
    bContractId: number,
    user: string,
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
  ): Promise<TransactionResponse> {
    return await this.contracts[contracts.PionerV1Compliance.name].deposit(
      amount,
      bContractId,
      user,
      { gasLimit, gasPrice },
    );
  }

  async initiateWithdraw(
    amount: BigNumberish,
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
  ): Promise<TransactionResponse> {
    return await this.contracts[
      contracts.PionerV1Compliance.name
    ].initiateWithdraw(amount, { gasLimit, gasPrice });
  }

  async withdraw(
    bContractId: number,
    user: string,
    gasLimit: BigNumberish,
    gasPrice: BigNumberish,
  ): Promise<TransactionResponse> {
    return await this.contracts[contracts.PionerV1Compliance.name].withdraw(
      bContractId,
      user,
      { gasLimit, gasPrice },
    );
  }

  async estimateGasPrice(): Promise<ethers.FeeData | null> {
    const provider = this.contractRunner.provider;
    if (!provider) {
      return null;
    }
    return await provider.getFeeData();
  }

  async estimateGasLimit(
    contractName: ContractKey,
    functionName: string,
    ...args: ethers.ContractMethodArgs<any[]>
  ): Promise<BigNumberish> {
    const contract = this.contracts[contractName];
    const contractFunction = contract.getFunction(functionName);
    return await contractFunction.estimateGas(...args);
  }

  async fetchEvent(
    contractName: ContractKey,
    eventName: string = '*',
    fromBlock: ethers.BlockTag = '0',
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
