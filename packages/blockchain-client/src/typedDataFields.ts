import { ethers } from 'ethers';

export const openQuoteSignType: Record<string, ethers.TypedDataField[]> = {
  Quote: [
    { name: 'isLong', type: 'bool' },
    { name: 'bOracleId', type: 'uint256' },
    { name: 'price', type: 'uint256' },
    { name: 'amount', type: 'uint256' },
    { name: 'interestRate', type: 'uint256' },
    { name: 'isAPayingAPR', type: 'bool' },
    { name: 'frontEnd', type: 'address' },
    { name: 'affiliate', type: 'address' },
    { name: 'authorized', type: 'address' },
    { name: 'nonce', type: 'uint256' },
  ],
};

export const openCloseQuoteType: Record<string, ethers.TypedDataField[]> = {
  OpenCloseQuote: [
    { name: 'bContractId', type: 'uint256' },
    { name: 'price', type: 'uint256' },
    { name: 'amount', type: 'uint256' },
    { name: 'limitOrStop', type: 'uint256' },
    { name: 'expiry', type: 'uint256' },
    { name: 'authorized', type: 'address' },
    { name: 'nonce', type: 'uint256' },
  ],
};
export const cancelCloseQuoteRequest = {
  CancelCloseQuoteRequest: [
    { name: 'targetHash', type: 'bytes' },
    { name: 'nonce', type: 'uint256' },
  ],
};

export const bOracleSignType: Record<string, ethers.TypedDataField[]> = {
  bOracleSign: [
    { name: 'x', type: 'uint256' },
    { name: 'parity', type: 'uint8' },
    { name: 'maxConfidence', type: 'uint256' },
    { name: 'assetHex', type: 'bytes32' },
    { name: 'maxDelay', type: 'uint256' },
    { name: 'precision', type: 'uint256' },
    { name: 'imA', type: 'uint256' },
    { name: 'imB', type: 'uint256' },
    { name: 'dfA', type: 'uint256' },
    { name: 'dfB', type: 'uint256' },
    { name: 'expiryA', type: 'uint256' },
    { name: 'expiryB', type: 'uint256' },
    { name: 'timeLock', type: 'uint256' },
    { name: 'signatureHashOpenQuote', type: 'bytes' },
    { name: 'nonce', type: 'uint256' },
  ],
};
