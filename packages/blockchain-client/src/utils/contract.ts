import { ethers, Contract } from 'ethers';
import { FakeUSD } from '../abis/fakeUSD';
import { PionerV1 as PionerV1Contract } from '../abis/PionerV1';
import { PionerV1Close as PionerV1CloseContract } from '../abis/PionerV1Close';
import { PionerV1Compliance as PionerV1ComplianceContract } from '../abis/PionerV1Compliance';
import { PionerV1Default as PionerV1DefaultContract } from '../abis/PionerV1Default';
import { PionerV1Open as PionerV1OpenContract } from '../abis/PionerV1Open';
import { PionerV1Oracle as PionerV1OracleContract } from '../abis/PionerV1Oracle';
import { PionerV1Utils as PionerV1UtilsContract } from '../abis/PionerV1Utils';
import { PionerV1View as PionerV1ViewContract } from '../abis/PionerV1View';
import { PionerV1Warper as PionerV1WarperContract } from '../abis/PionerV1Warper';
import { networks } from '../networks';

export type ContractInfo = {
  name: string;
  addresses: { [key: string]: string };
  abi: ethers.InterfaceAbi;
  events: { [key: string]: string };
};

export type Contracts = {
  [key: string]: ContractInfo;
};

export const contracts: Contracts = {
  FakeUSD: {
    name: 'FakeUSD',
    addresses: { sonic: networks.sonic.contracts.FakeUSDAddress },
    abi: FakeUSD.abi,
    events: {
      Approval: 'Approval',
      Transfer: 'Transfer',
    },
  },
  PionerV1: {
    name: 'PionerV1',
    addresses: { sonic: networks.sonic.contracts.PionerV1Address },
    abi: PionerV1Contract.abi,
    events: {
      AddToOwedEvent: 'AddToOwedEvent',
      ClaimOwedEvent: 'ClaimOwedEvent',
      deployPriceFeedEvent: 'deployPriceFeedEvent',
      MuonTX: 'MuonTX',
      PayOwedEvent: 'PayOwedEvent',
      updatePricePythEvent: 'updatePricePythEvent',
    },
  },
  PionerV1Close: {
    name: 'PionerV1Close',
    addresses: { sonic: networks.sonic.contracts.PionerV1CloseAddress },
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
  },
  PionerV1Compliance: {
    name: 'PionerV1Compliance',
    addresses: {
      sonic: networks.sonic.contracts.PionerV1ComplianceAddress,
    },
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
  },
  PionerV1Default: {
    name: 'PionerV1Default',
    addresses: {
      sonic: networks.sonic.contracts.PionerV1DefaultAddress,
    },
    abi: PionerV1DefaultContract.abi,
    events: {
      flashAuctionBuyBackEvent: 'flashAuctionBuyBackEvent',
      liquidatedEvent: 'liquidatedEvent',
      settledEvent: 'settledEvent',
    },
  },
  PionerV1Open: {
    name: 'PionerV1Open',
    addresses: { sonic: networks.sonic.contracts.PionerV1OpenAddress },
    abi: PionerV1OpenContract.abi,
    events: {
      acceptQuoteEvent: 'acceptQuoteEvent',
      cancelOpenQuoteEvent: 'cancelOpenQuoteEvent',
      cancelSignedMessageOpenEvent: 'cancelSignedMessageOpenEvent',
      EIP712DomainChanged: 'EIP712DomainChanged',
      openQuoteEvent: 'openQuoteEvent',
      openQuoteSignedEvent: 'openQuoteSignedEvent',
    },
  },
  PionerV1Oracle: {
    name: 'PionerV1Oracle',
    addresses: {
      sonic: networks.sonic.contracts.PionerV1OracleAddress,
    },
    abi: PionerV1OracleContract.abi,
    events: {
      deployBContract: 'deployBContract',
    },
  },
  PionerV1Utils: {
    name: 'PionerV1Utils',
    addresses: { sonic: networks.sonic.contracts.PionerV1UtilsAddress },
    abi: PionerV1UtilsContract.abi,
    events: {},
  },
  PionerV1View: {
    name: 'PionerV1View',
    addresses: { sonic: networks.sonic.contracts.PionerV1ViewAddress },
    abi: PionerV1ViewContract.abi,
    events: {},
  },
  PionerV1Wrapper: {
    name: 'PionerV1Wrapper',
    addresses: {
      sonic: networks.sonic.contracts.PionerV1WrapperAddress,
    },
    abi: PionerV1WarperContract.abi,
    events: {
      EIP712DomainChanged: 'EIP712DomainChanged',
    },
  },
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

export function getContract(config: ContractConfig): Contract {
  const { contract, address, contractRunner } = config;

  return new ethers.Contract(address, contract.abi, contractRunner);
}
