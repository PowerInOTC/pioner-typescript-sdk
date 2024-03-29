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
    gasLimit?: BigNumberish,
    gasPrice?: BigNumberish,
  ): Promise<TransactionResponse> {
    gasLimit =
      gasLimit ||
      (await this.estimateGas(
        contracts.PionerV1Wrapper.name,
        contracts.PionerV1Wrapper.functions.wrapperUpdatePriceAndDefault,
        priceSignature,
        bOracleId,
        bContractId,
      ));
    gasPrice = gasPrice || (await this.estimateGasPrice())?.maxFeePerGas || 0;

    if (!gasLimit || !gasPrice) {
      throw new Error('Failed to estimate gas limit or gas price.');
    }

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
    gasLimit?: BigNumberish,
    gasPrice?: BigNumberish,
  ): Promise<TransactionResponse> {
    gasLimit =
      gasLimit ||
      (await this.estimateGas(
        contracts.PionerV1Wrapper.name,
        contracts.PionerV1Wrapper.functions.wrapperUpdatePriceAndCloseMarket,
        priceSignature,
        bOracleId,
        bCloseQuoteId,
        index,
      ));
    gasPrice = gasPrice || (await this.estimateGasPrice())?.maxFeePerGas || 0;

    if (!gasLimit || !gasPrice) {
      throw new Error('Failed to estimate gas limit or gas price.');
    }

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
    gasLimit?: BigNumberish,
    gasPrice?: BigNumberish,
  ): Promise<TransactionResponse> {
    gasLimit =
      gasLimit ||
      (await this.estimateGas(
        contracts.PionerV1Wrapper.name,
        contracts.PionerV1Wrapper.functions.wrapperCloseLimitMM,
        quote,
        signHash,
      ));
    gasPrice = gasPrice || (await this.estimateGasPrice())?.maxFeePerGas || 0;

    if (!gasLimit || !gasPrice) {
      throw new Error('Failed to estimate gas limit or gas price.');
    }

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
    assetHex: string,
    x: number,
    parity: number,
    maxConfidence: number,
    maxDelay: number,
    precision: number,
    imA: number,
    imB: number,
    dfA: number,
    dfB: number,
    expiryA: number,
    expiryB: number,
    timeLock: number,
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
    gasLimit?: BigNumberish,
    gasPrice?: BigNumberish,
  ): Promise<TransactionResponse> {
    gasLimit =
      gasLimit ||
      (await this.estimateGas(
        contracts.PionerV1Wrapper.name,
        contracts.PionerV1Wrapper.functions.wrapperOpenTPSLOracleSwap,
        isLong,
        price,
        amount,
        interestRate,
        isAPayingAPR,
        frontEnd,
        affiliate,
        assetHex,
        x,
        parity,
        maxConfidence,
        maxDelay,
        precision,
        imA,
        imB,
        dfA,
        dfB,
        expiryA,
        expiryB,
        timeLock,
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
      ));
    gasPrice = gasPrice || (await this.estimateGasPrice())?.maxFeePerGas || 0;

    if (!gasLimit || !gasPrice) {
      throw new Error('Failed to estimate gas limit or gas price.');
    }

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
      assetHex,
      x,
      parity,
      maxConfidence,
      maxDelay,
      precision,
      imA,
      imB,
      dfA,
      dfB,
      expiryA,
      expiryB,
      timeLock,
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
    acceptPrice: BigNumberish,
    gasLimit?: BigNumberish,
    gasPrice?: BigNumberish,
  ): Promise<TransactionResponse> {
    gasLimit =
      gasLimit ||
      (await this.estimateGas(
        contracts.PionerV1Wrapper.name,
        contracts.PionerV1Wrapper.functions.wrapperOpenQuoteMM,
        bOracleSign,
        signaturebOracleSign,
        openQuoteSign,
        openQuoteSignature,
        acceptPrice,
      ));
    gasPrice = gasPrice || (await this.estimateGasPrice())?.maxFeePerGas || 0;

    if (!gasLimit || !gasPrice) {
      throw new Error('Failed to estimate gas limit or gas price.');
    }

    return await this.contracts[contracts.PionerV1Wrapper.name][
      contracts.PionerV1Wrapper.functions.wrapperOpenQuoteMM
    ](
      bOracleSign,
      signaturebOracleSign,
      openQuoteSign,
      openQuoteSignature,
      acceptPrice,
      {
        gasLimit,
        gasPrice,
      },
    );
  }

  async mint(
    amount: BigNumberish,
    gasLimit?: BigNumberish,
    gasPrice?: BigNumberish,
  ): Promise<TransactionResponse> {
    gasLimit =
      gasLimit ||
      (await this.estimateGas(
        contracts.FakeUSD.name,
        contracts.FakeUSD.functions.mint,
        amount,
      ));
    gasPrice = gasPrice || (await this.estimateGasPrice())?.maxFeePerGas || 0;

    if (!gasLimit || !gasPrice) {
      throw new Error('Failed to estimate gas limit or gas price.');
    }

    return await this.contracts[contracts.FakeUSD.name].mint(amount, {
      gasLimit,
      gasPrice,
    });
  }

  async approve(
    spender: string,
    amount: BigNumberish,
    gasLimit?: BigNumberish,
    gasPrice?: BigNumberish,
  ): Promise<TransactionResponse> {
    gasLimit =
      gasLimit ||
      (await this.estimateGas(
        contracts.FakeUSD.name,
        contracts.FakeUSD.functions.approve,
        spender,
        amount,
      ));
    gasPrice = gasPrice || (await this.estimateGasPrice())?.maxFeePerGas || 0;

    if (!gasLimit || !gasPrice) {
      throw new Error('Failed to estimate gas limit or gas price.');
    }

    return await this.contracts[contracts.FakeUSD.name].approve(
      spender,
      amount,
      { gasLimit, gasPrice },
    );
  }

  async deposit(
    amount: BigNumberish,
    bContractId: number,
    address: string,
    gasLimit?: BigNumberish,
    gasPrice?: BigNumberish,
  ): Promise<TransactionResponse> {
    gasLimit =
      gasLimit ||
      (await this.estimateGas(
        contracts.PionerV1Compliance.name,
        contracts.PionerV1Compliance.functions.deposit,
        amount,
        bContractId,
        address,
      ));
    gasPrice = gasPrice || (await this.estimateGasPrice())?.maxFeePerGas || 0;

    if (!gasLimit || !gasPrice) {
      throw new Error('Failed to estimate gas limit or gas price.');
    }

    return await this.contracts[contracts.PionerV1Compliance.name].deposit(
      amount,
      bContractId,
      address,
      { gasLimit, gasPrice },
    );
  }

  async initiateWithdraw(
    amount: BigNumberish,
    gasLimit?: BigNumberish,
    gasPrice?: BigNumberish,
  ): Promise<TransactionResponse> {
    gasLimit =
      gasLimit ||
      (await this.estimateGas(
        contracts.PionerV1Compliance.name,
        contracts.PionerV1Compliance.functions.initiateWithdraw,
        amount,
      ));
    gasPrice = gasPrice || (await this.estimateGasPrice())?.maxFeePerGas || 0;

    if (!gasLimit || !gasPrice) {
      throw new Error('Failed to estimate gas limit or gas price.');
    }

    return await this.contracts[
      contracts.PionerV1Compliance.name
    ].initiateWithdraw(amount, { gasLimit, gasPrice });
  }

  async withdraw(
    amount: BigNumberish,
    gasLimit?: BigNumberish,
    gasPrice?: BigNumberish,
  ): Promise<TransactionResponse> {
    gasLimit =
      gasLimit ||
      (await this.estimateGas(
        contracts.PionerV1Compliance.name,
        contracts.PionerV1Compliance.functions.withdraw,
        amount,
      ));
    gasPrice = gasPrice || (await this.estimateGasPrice())?.maxFeePerGas || 0;

    if (!gasLimit || !gasPrice) {
      throw new Error('Failed to estimate gas limit or gas price.');
    }

    return await this.contracts[contracts.PionerV1Compliance.name].withdraw(
      amount,
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

  async estimateGas(
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
