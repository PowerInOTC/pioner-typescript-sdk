import { ethers, Contract } from 'ethers';
import { FakeUSD } from './abis/fakeUSD';
import { PionerV1 as PionerV1Contract } from './abis/PionerV1';
import { PionerV1Close as PionerV1CloseContract } from './abis/PionerV1Close';
import { PionerV1Compliance as PionerV1ComplianceContract } from './abis/PionerV1Compliance';
import { PionerV1Default as PionerV1DefaultContract } from './abis/PionerV1Default';
import { PionerV1Open as PionerV1OpenContract } from './abis/PionerV1Open';
import { PionerV1Oracle as PionerV1OracleContract } from './abis/PionerV1Oracle';
import { PionerV1View as PionerV1ViewContract } from './abis/PionerV1View';
import { PionerV1Wrapper as PionerV1WrapperContract } from './abis/PionerV1Wrapper';
import { networks } from './networks';
import { Contracts, ContractInfo, ContractConfig } from './types/contract';
import { NetworkKey } from './types/network';

export const contracts: Contracts = {
  FakeUSD: {
    name: 'FakeUSD',
    version: '1.0',
    abi: FakeUSD.abi,
    events: {
      Approval: 'Approval',
      Transfer: 'Transfer',
    },
    functions: {
      approve: 'approve',
      mint: 'mint',
    },
  },
  PionerV1: {
    name: 'PionerV1',
    version: '1.0',
    abi: PionerV1Contract.abi,
    events: {
      AddToOwedEvent: 'AddToOwedEvent',
      ClaimOwedEvent: 'ClaimOwedEvent',
      deployPriceFeedEvent: 'deployPriceFeedEvent',
      MuonTX: 'MuonTX',
      PayOwedEvent: 'PayOwedEvent',
      updatePricePythEvent: 'updatePricePythEvent',
    },
    functions: {},
  },
  PionerV1Close: {
    name: 'PionerV1Close',
    version: '1.0',
    abi: PionerV1CloseContract.abi,
    events: {
      acceptCloseQuoteEvent: 'acceptCloseQuoteEvent',
      cancelOpenCloseQuoteContractEvent: 'cancelOpenCloseQuoteContractEvent',
      cancelSignedMessageCloseEvent: 'cancelSignedMessageCloseEvent',
      closeMarketEvent: 'closeMarketEvent',
      EIP712DomainChanged: 'EIP712DomainChanged',
      expirateBContractEvent: 'expirateBContractEvent',
      openCloseQuoteEvent: 'openCloseQuoteEvent',
    },
    functions: {},
  },
  PionerV1Compliance: {
    name: 'PionerV1Compliance',
    version: '1.0',
    abi: PionerV1ComplianceContract.abi,
    events: {
      bContractMigrated: 'bContractMigrated',
      BOracleRevoked: 'BOracleRevoked',
      CancelWithdrawEvent: 'CancelWithdrawEvent',
      DepositEvent: 'DepositEvent',
      InitiateWithdrawEvent: 'InitiateWithdrawEvent',
      kycAddressSet: 'kycAddressSet',
      KycParametersChanged: 'KycParametersChanged',
      kycPausedEvent: 'kycPausedEvent',
      kycRevoked: 'kycRevoked',
      kycToValidat: 'kycToValidat',
      kycValidated: 'kycValidated',
      MigrationInitiated: 'MigrationInitiated',
      MigrationRefused: 'MigrationRefused',
      WithdrawEvent: 'WithdrawEvent',
    },
    functions: {
      deposit: 'deposit',
    },
  },
  PionerV1Default: {
    name: 'PionerV1Default',
    version: '1.0',
    abi: PionerV1DefaultContract.abi,
    events: {
      flashAuctionBuyBackEvent: 'flashAuctionBuyBackEvent',
      liquidatedEvent: 'liquidatedEvent',
      settledEvent: 'settledEvent',
    },
    functions: {},
  },
  PionerV1Open: {
    name: 'PionerV1Open',
    version: '1.0',
    abi: PionerV1OpenContract.abi,
    events: {
      acceptQuoteEvent: 'acceptQuoteEvent',
      cancelOpenQuoteEvent: 'cancelOpenQuoteEvent',
      cancelSignedMessageOpenEvent: 'cancelSignedMessageOpenEvent',
      EIP712DomainChanged: 'EIP712DomainChanged',
      openQuoteEvent: 'openQuoteEvent',
      openQuoteSignedEvent: 'openQuoteSignedEvent',
    },
    functions: {},
  },
  PionerV1Oracle: {
    name: 'PionerV1Oracle',
    version: '1.0',
    abi: PionerV1OracleContract.abi,
    events: {
      deployBContract: 'deployBContract',
    },
    functions: {},
  },
  PionerV1View: {
    name: 'PionerV1View',
    version: '1.0',
    abi: PionerV1ViewContract.abi,
    events: {},
    functions: {},
  },
  PionerV1Wrapper: {
    name: 'PionerV1Wrapper',
    version: '1.0',
    abi: PionerV1WrapperContract.abi,
    events: {
      EIP712DomainChanged: 'EIP712DomainChanged',
    },
    functions: {
      wrapperCloseLimitMM: 'wrapperCloseLimitMM',
      wrapperOpenQuoteMM: 'wrapperOpenQuoteMM',
      wrapperOpenTPSLOracleSwap: 'wrapperOpenTPSLOracleSwap',
      wrapperUpdatePriceAndCloseMarket: 'wrapperUpdatePriceAndCloseMarket',
      wrapperUpdatePriceAndDefault: 'wrapperUpdatePriceAndDefault',
    },
  },
};

export function getContract(config: ContractConfig): Contract {
  const { contract, address, contractRunner } = config;

  return new ethers.Contract(address, contract.abi, contractRunner);
}

export function getTypedDataDomain(
  contract: ContractInfo,
  network: NetworkKey,
): ethers.TypedDataDomain {
  return {
    name: contract.name,
    version: contract.version,
    chainId: networks[network].chainId,
    verifyingContract: networks[network].contracts[contract.name],
  };
}
