export const PionerV1 = {
  _format: 'hh-sol-artifact-1',
  contractName: 'PionerV1',
  sourceName: 'contracts/Functions/PionerV1.sol',
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'receiver',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'deficit',
          type: 'uint256',
        },
      ],
      name: 'AddToOwedEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'receiver',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'ClaimOwedEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes',
          name: 'reqId',
          type: 'bytes',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'x',
              type: 'uint256',
            },
            {
              internalType: 'uint8',
              name: 'parity',
              type: 'uint8',
            },
          ],
          indexed: false,
          internalType: 'struct MuonClientBase.PublicKey',
          name: 'pubKey',
          type: 'tuple',
        },
      ],
      name: 'MuonTX',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'returnedAmount',
          type: 'uint256',
        },
      ],
      name: 'PayOwedEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'bOracleLength',
          type: 'uint256',
        },
      ],
      name: 'deployPriceFeedEvent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint256',
          name: 'bOracleId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'lastPrice',
          type: 'uint256',
        },
      ],
      name: 'updatePricePythEvent',
      type: 'event',
    },
    {
      inputs: [],
      name: 'HALF_Q',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'Q',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'addBCloseQuoteLength',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'addBContractLength',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'addBOracleLength',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'addBalance',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'addCumImBalances',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'addGracePeriodLockedWithdrawBalances',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'addMintedAmounts',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'addOpenPositionNumber',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'counterparty',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'addOwedAmount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'deficit',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'receiver',
          type: 'address',
        },
      ],
      name: 'addToOwed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'cancelledCloseQuotes',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'cancelledOpenQuotes',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'receiver',
          type: 'address',
        },
      ],
      name: 'claimOwed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'decreaseOpenPositionNumber',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'counterparty',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'decreaseOwedAmount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'decreaseTotalOwedAmount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'decreaseTotalOwedAmountPaid',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getAccountToToken',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllStateVariables',
      outputs: [
        {
          internalType: 'uint256',
          name: 'minNotional',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'frontendShare',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'affiliationShare',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'hedgerShare',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'pionerDaoShare',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'totalShare',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'defaultAuctionPeriod',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'cancelTimeBuffer',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'maxOpenPositions',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gracePeriod',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'pionerDao',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getAvgOpenOwedTime',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getBALANCETOKEN',
      outputs: [
        {
          internalType: 'contract IERC20',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'getBCloseQuote',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256[]',
              name: 'bContractIds',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'price',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'amount',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'limitOrStop',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'expiry',
              type: 'uint256[]',
            },
            {
              internalType: 'address',
              name: 'initiator',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'cancelTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'openTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'state',
              type: 'uint256',
            },
          ],
          internalType: 'struct PionerV1Utils.bCloseQuote',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getBCloseQuoteLength',
      outputs: [
        {
          internalType: 'uint256',
          name: 'closeQuoteLength',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'getBContract',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'pA',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'pB',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'oracleId',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'initiator',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'price',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interestRate',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'isAPayingAPR',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'openTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'state',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'frontEnd',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'hedger',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'affiliate',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'cancelTime',
              type: 'uint256',
            },
          ],
          internalType: 'struct PionerV1Utils.bContract',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getBContractLength',
      outputs: [
        {
          internalType: 'uint256',
          name: 'contractLength',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
      ],
      name: 'getBContractTransferQuote',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'transferOffer',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'transferOfferBribe',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'transferMethod',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'transferQuoteExpiry',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'transferSide',
              type: 'bool',
            },
          ],
          internalType: 'struct PionerV1Utils.bContractTransferQuote',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'getBContractUpdate',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'oracleChangeInitializer',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'oracleChangeId',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'isTranferAInit',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'isTranferBInit',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'targetTransferA',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'targetTransferB',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'transferBribeA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'transferBribeB',
              type: 'uint256',
            },
          ],
          internalType: 'struct PionerV1Utils.bContractUpdate',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'getBOracle',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'assetHex',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'oracleType',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'priceFeedAddress',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'pythAddress1',
              type: 'bytes32',
            },
            {
              internalType: 'bytes32',
              name: 'pythAddress2',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'lastBid',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastAsk',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'publicOracleAddress',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'maxConfidence',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'x',
              type: 'uint256',
            },
            {
              internalType: 'uint8',
              name: 'parity',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'maxDelay',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'precision',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastPrice',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastPriceUpdateTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'imA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'imB',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'dfA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'dfB',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'expiryA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'expiryB',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'timeLock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'cType',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'forceCloseType',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'kycAddress',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'isPaused',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'deployTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'marketCloseFee',
              type: 'uint256',
            },
          ],
          internalType: 'struct PionerV1Utils.bOracle',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getBOracleIdStable',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getBOracleLength',
      outputs: [
        {
          internalType: 'uint256',
          name: 'oracleLength',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getBalanceToken',
      outputs: [
        {
          internalType: 'contract IERC20',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getBalances',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCancelTimeBuffer',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'id',
          type: 'bytes',
        },
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
      ],
      name: 'getCancelledCloseQuotes',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'id',
          type: 'bytes',
        },
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
      ],
      name: 'getCancelledOpenQuotes',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getClaimedKycIrAmount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getCumImBalances',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getDefaultAuctionPeriod',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
      ],
      name: 'getFeeShare',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getGRACE_PERIOD',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getGracePeriodLockedTime',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getGracePeriodLockedWithdrawBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getMaxOpenPositions',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getMinNotional',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getMinimumOpenPartialFillNotional',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getMintedAmounts',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getOpenPositionNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'counterparty',
          type: 'address',
        },
      ],
      name: 'getOwedAmount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getPIONERV1WRAPPERADDRESS',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getPionerDao',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getSponsorReward',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getTotalOwedAmount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getTotalOwedAmountPaid',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTotalShare',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'muonAppId',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'muonPublicKey',
      outputs: [
        {
          internalType: 'uint256',
          name: 'x',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'parity',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'reqId',
          type: 'bytes',
        },
        {
          internalType: 'uint256',
          name: 'hash',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'signature',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'nonce',
              type: 'address',
            },
          ],
          internalType: 'struct MuonClientBase.SchnorrSign',
          name: 'signature',
          type: 'tuple',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'x',
              type: 'uint256',
            },
            {
              internalType: 'uint8',
              name: 'parity',
              type: 'uint8',
            },
          ],
          internalType: 'struct MuonClientBase.PublicKey',
          name: 'pubKey',
          type: 'tuple',
        },
      ],
      name: 'muonVerify',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'payFundingShare',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'payLiquidationShare',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'receiver',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lastPrice',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'im',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'isA',
          type: 'bool',
        },
      ],
      name: 'paySponsor',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'frontend',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'affiliate',
          type: 'address',
        },
      ],
      name: 'payTradingFeeShare',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'removeBalance',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'removeCumImBalances',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'removeGracePeriodLockedWithdrawBalances',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'removeMintedAmounts',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'counterparty',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'removeOwedAmount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_token',
          type: 'address',
        },
      ],
      name: 'setAccountToToken',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'uint256[]',
              name: 'bContractIds',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'price',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'amount',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'limitOrStop',
              type: 'uint256[]',
            },
            {
              internalType: 'uint256[]',
              name: 'expiry',
              type: 'uint256[]',
            },
            {
              internalType: 'address',
              name: 'initiator',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'cancelTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'openTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'state',
              type: 'uint256',
            },
          ],
          internalType: 'struct PionerV1Utils.bCloseQuote',
          name: 'newCloseQuote',
          type: 'tuple',
        },
      ],
      name: 'setBCloseQuote',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'pA',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'pB',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'oracleId',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'initiator',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'price',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interestRate',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'isAPayingAPR',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'openTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'state',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'frontEnd',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'hedger',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'affiliate',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'cancelTime',
              type: 'uint256',
            },
          ],
          internalType: 'struct PionerV1Utils.bContract',
          name: 'newContract',
          type: 'tuple',
        },
      ],
      name: 'setBContract',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'transferOffer',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'transferOfferBribe',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'transferMethod',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'transferQuoteExpiry',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'transferSide',
              type: 'bool',
            },
          ],
          internalType: 'struct PionerV1Utils.bContractTransferQuote',
          name: 'newBContractTransferQuote',
          type: 'tuple',
        },
      ],
      name: 'setBContractTransferQuote',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'oracleChangeInitializer',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'oracleChangeId',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'isTranferAInit',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'isTranferBInit',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'targetTransferA',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'targetTransferB',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'transferBribeA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'transferBribeB',
              type: 'uint256',
            },
          ],
          internalType: 'struct PionerV1Utils.bContractUpdate',
          name: 'newContractUpdate',
          type: 'tuple',
        },
      ],
      name: 'setBContractUpdate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'assetHex',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'oracleType',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'priceFeedAddress',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'pythAddress1',
              type: 'bytes32',
            },
            {
              internalType: 'bytes32',
              name: 'pythAddress2',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'lastBid',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastAsk',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'publicOracleAddress',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'maxConfidence',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'x',
              type: 'uint256',
            },
            {
              internalType: 'uint8',
              name: 'parity',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'maxDelay',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'precision',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastPrice',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastPriceUpdateTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'imA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'imB',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'dfA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'dfB',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'expiryA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'expiryB',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'timeLock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'cType',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'forceCloseType',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'kycAddress',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'isPaused',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'deployTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'marketCloseFee',
              type: 'uint256',
            },
          ],
          internalType: 'struct PionerV1Utils.bOracle',
          name: 'newOracle',
          type: 'tuple',
        },
      ],
      name: 'setBOracle',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'receiver',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'sign',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'revertMode',
          type: 'bool',
        },
      ],
      name: 'setBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'id',
          type: 'bytes',
        },
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'setCancelledCloseQuotes',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'id',
          type: 'bytes',
        },
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'setCancelledOpenQuotes',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'daiAddress',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'min_notional',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'frontend_share',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'affiliation_share',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'hedger_share',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'pioner_dao_share',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'total_share',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'default_auction_period',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'cancel_time_buffer',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'max_open_positions',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'grace_period',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'pioner_dao',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_PIONERV1OPEN',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_PIONERV1CLOSE',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_PIONERV1DEFAULT',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_PIONERV1COMPLIANCE',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_PIONERV1ORACLE',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_PIONERV1WRAPPER',
          type: 'address',
        },
      ],
      name: 'setContactAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'setCumImBalances',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'newShare',
          type: 'uint256',
        },
      ],
      name: 'setFeeShare',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'id',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'setGracePeriodLockedTime',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'counterparty',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'setOwedAmount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'setTotalOwedAmount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'setTotalOwedAmountPaid',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'kyc',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_id',
          type: 'uint256',
        },
      ],
      name: 'setbOracleIdStable',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'assetHex',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'oracleType',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'priceFeedAddress',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'pythAddress1',
              type: 'bytes32',
            },
            {
              internalType: 'bytes32',
              name: 'pythAddress2',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'lastBid',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastAsk',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'publicOracleAddress',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'maxConfidence',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'x',
              type: 'uint256',
            },
            {
              internalType: 'uint8',
              name: 'parity',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'maxDelay',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'precision',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastPrice',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastPriceUpdateTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'imA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'imB',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'dfA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'dfB',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'expiryA',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'expiryB',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'timeLock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'cType',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'forceCloseType',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'kycAddress',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'isPaused',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'deployTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'marketCloseFee',
              type: 'uint256',
            },
          ],
          internalType: 'struct PionerV1Utils.bOracle',
          name: 'bO',
          type: 'tuple',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'pA',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'pB',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'oracleId',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'initiator',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'price',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interestRate',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'isAPayingAPR',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'openTime',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'state',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'frontEnd',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'hedger',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'affiliate',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'cancelTime',
              type: 'uint256',
            },
          ],
          internalType: 'struct PionerV1Utils.bContract',
          name: 'bC',
          type: 'tuple',
        },
        {
          internalType: 'uint256',
          name: 'bContractId',
          type: 'uint256',
        },
      ],
      name: 'updateCumIm',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newAmount',
          type: 'uint256',
        },
      ],
      name: 'updateMinimumOpenPartialFillNotional',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newAmount',
          type: 'uint256',
        },
      ],
      name: 'updateSponsorReward',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'signingPubKeyX',
          type: 'uint256',
        },
      ],
      name: 'validatePubKey',
      outputs: [],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'signingPubKeyX',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'pubKeyYParity',
          type: 'uint8',
        },
        {
          internalType: 'uint256',
          name: 'signature',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'msgHash',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'nonceTimesGeneratorAddress',
          type: 'address',
        },
      ],
      name: 'verifySignature',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  bytecode:
    '0x608080604052346100175761581990816200001d8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c90816302ad7f4314614c4c5750806303339c8614614b4557806304618e6b14614b1c57806306faa448146149735780630b671e6f146149395780630c965b31146146315780630cdbf967146145475780630e1295691461445857806311d7e2a01461445d5780631425d2fa14614458578063154c7d1e1461433c57806315c868781461430257806317c6a54914613f2657806318967df814613eec5780631cd8e70014613de85780631d74b67d14613c645780631da5475e14613c4657806321e5383a14613b425780632b08fc1514613ab75780632eb41cf8146139a5578063304e24e91461396b5780633205b1d71461394d57806339bbfb91146139085780633a1ebe0c146138045780633f06cd66146137e657806343c3cc85146136e257806345ba6a82146136c457806346192c9c146135c457806348d29b19146109925780634f5eddd81461341957806355804d061461358a578063564f360e1461341e57806357b00f1d146134195780635dee2839146133df57806361dbb3b2146133a55780636526adbe1461329f5780636639013f1461319f57806367aeb0f31461318157806367cf9c3b1461311d5780636836948f146130e35780636846ce93146130bb5780636e99aa5b14612f6a57806374f95a4014612bd75780637669c2bb14612b105780638224604a14612adc578063828b6e9b146129d857806384ad7169146129ba5780638738428d146129805780638da179171461293b5780638e95b51b146128375780638efb3bb21461280657806390231961146127cd57806391cd1cbf146123265780639c131312146123085780639dd87ac8146122e0578063a1595d45146120ce578063a24f76cb14611fcc578063a67986a214611f7b578063a747300414611e72578063ad8bd9d014611e0b578063af0825af14611d07578063af40d56f14611ccc578063af663e9b14611ca4578063b3f74d8914611c86578063b8d98ce514611b86578063ba97893c14611a82578063bd008a8f14611982578063bd31117114611879578063c0069414146117a9578063c45bee3414611780578063c84aae1714610454578063cb1fb96414611696578063cda25f4114611592578063d270f04c1461152e578063d388ed2314610ffc578063d406815814610fc2578063d74e595914610d8b578063db7e8c0f14610d51578063e1dd0fdc14610bfc578063e3f4740b14610a12578063e47e4455146109d8578063e493ef8c146109ab578063e558391f14610992578063e57764f614610873578063e699af8a14610855578063e919aa5f1461067b578063e95e380f1461057f578063f0649dcf14610561578063f4364a2f14610459578063f8b2cb4f146104545763ff51dff21461040857600080fd5b3461044f5760a036600319011261044f5760243560ff8116810361044f57610445602091610434614cae565b90606435906044359060043561562e565b6040519015158152f35b600080fd5b614fd1565b3461044f57604036600319011261044f57610472614c82565b303314801561054d575b8015610539575b8015610525575b8015610511575b80156104fd575b80156104e9575b80156104d5575b6104af906150c2565b60018060a01b0316600052602960205260406000206104d16024358254614f49565b9055005b506019546001600160a01b031633146104a6565b506018546001600160a01b0316331461049f565b506014546001600160a01b03163314610498565b506013546001600160a01b03163314610491565b506012546001600160a01b0316331461048a565b506011546001600160a01b03163314610483565b506010546001600160a01b0316331461047c565b3461044f57600036600319011261044f576020600a54604051908152f35b3461044f5760a036600319011261044f57610598614c98565b6001600160a01b03906044358281160361044f5760209161060b916105bb614dd9565b906106036105c7614de8565b9330331490811561066c575b811561065d575b811561064e575b811561063f575b8115610630575b8115610621575b8115610613575b506150c2565b600435615231565b604051908152f35b9050601954163314876105fd565b809150601854163314906105f6565b809150601454163314906105ef565b809150601354163314906105e8565b809150601254163314906105e1565b809150601154163314906105da565b809150601054163314906105d3565b3461044f5761012036600319011261044f5761010036602319011261044f576040516106a681614d64565b6106ae614c98565b81526020810160443581526106c1614dd9565b90604083019182526106d1614de8565b606084019081529060a435906001600160a01b0390818316830361044f576080860192835260c43591808316830361044f5760059560a0880193845260c088019460e435865260e08901966101043588523033148015610848575b801561083b575b801561082e575b8015610821575b8015610814575b8015610807575b80156107fa575b61075f906150c2565b600435600052601f6020528360406000209a5116946001600160601b0360a01b95868c5416178b555160018b01556107aa60028b0193511515849060ff801983541691151516179055565b5182549151610100600160b01b031990921690151560081b61ff00161760109190911b62010000600160b01b03161790559151600387018054909216921691909117905551600484015551910155005b5060195484163314610756565b508360185416331461074f565b5083601454163314610748565b5083601354163314610741565b508360125416331461073a565b5083601154163314610733565b508360105416331461072c565b3461044f57600036600319011261044f576020602154604051908152f35b3461044f57602036600319011261044f5761088c614c82565b303314801561097e575b801561096a575b8015610956575b8015610942575b801561092e575b801561091a575b8015610906575b6108c9906150c2565b6001600160a01b03166000908152602360205260409020805480156108f057600019019055005b634e487b7160e01b600052601160045260246000fd5b506019546001600160a01b031633146108c0565b506018546001600160a01b031633146108b9565b506014546001600160a01b031633146108b2565b506013546001600160a01b031633146108ab565b506012546001600160a01b031633146108a4565b506011546001600160a01b0316331461089d565b506010546001600160a01b03163314610896565b3461044f576109a96109a336614cc4565b91615135565b005b3461044f57600036600319011261044f57602060405170014551231950b75fc4402da1732fc9bebe198152f35b3461044f57602036600319011261044f576001600160a01b036109f9614c82565b16600052602c6020526020604060002054604051908152f35b3461044f57604036600319011261044f57610a2b614c82565b610a33614c98565b7f9294c47cb49f2703e2d3095ef1f312352722b8664ddb79aa4d4bc4ed0f70246160018060a01b03928381169283600052610ab360209260298452604060002054601a8552610a886040600020918254614f49565b9055856000526029845260006040812055602a845242604060002055601a8452604060002054615340565b84600052601a8352604060002055602482526040600020948116948560005282526040600020549084600052602683526040600020549082821015600014610b7257610b34915085600052602584526040600020610b12848254615115565b905585600052602684526040600020610b2c848254615115565b905582615340565b85600052601a8352610b4c6040600020918254614f49565b905583600052602482526040600020856000528252600060408120555b604051908152a3005b610bce9160258552610b8a6040600020918254615115565b90558560005260268452604060002054602485526040600020886000528552610bb96040600020918254615115565b90558560005260268452604060002054615340565b85600052601a8352610be66040600020918254614f49565b9055836000526026825260006040812055610b69565b3461044f577f899caa590d55a05310519b00a93a11cba0e670b993797f02ed5eff3738747ce46020610c2d36614f9c565b93919290923033148015610d3d575b8015610d29575b8015610d15575b8015610d01575b8015610ced575b8015610cd9575b8015610cc5575b610c6f906150c2565b60018060a01b0380941693846000526024835260406000209516948560005282526040600020610ca0828254614f49565b905583600052602582526040600020610cba828254614f49565b9055604051908152a3005b506019546001600160a01b03163314610c66565b506018546001600160a01b03163314610c5f565b506014546001600160a01b03163314610c58565b506013546001600160a01b03163314610c51565b506012546001600160a01b03163314610c4a565b506011546001600160a01b03163314610c43565b506010546001600160a01b03163314610c3c565b3461044f57602036600319011261044f576001600160a01b03610d72614c82565b16600052602b6020526020604060002054604051908152f35b3461044f5760c036600319011261044f57610da4614c82565b610dac614c98565b604435906064356084359060a435938415938415860361044f573033148015610fae575b8015610f9a575b8015610f86575b8015610f72575b8015610f5e575b8015610f4a575b8015610f36575b610e03906150c2565b6001600160a01b03908116961694868603610e1a57005b80610efe575b15610e8b575050505081600052601a60205260406000205490602c60205260406000205480921015610e4e57005b600052601a602052610e666040600020918254614f49565b9055600052602c602052604060002054601a6020526104d16040600020918254615115565b83610ebf575b505050610e9a57005b81600052601a60205260406000205490602c60205260406000205480921015610e4e57005b90919250610ed7670de0b6b3a7640000928392615510565b0491670b1a2bc2ec500000908181029181830414901517156108f057041015838080610e91565b50670de0b6b3a764000080610f138385615510565b0490670b1a2bc2ec5000008086029086820414861517156108f057041015610e20565b506019546001600160a01b03163314610dfa565b506018546001600160a01b03163314610df3565b506014546001600160a01b03163314610dec565b506013546001600160a01b03163314610de5565b506012546001600160a01b03163314610dde565b506011546001600160a01b03163314610dd7565b506010546001600160a01b03163314610dd0565b3461044f57602036600319011261044f576001600160a01b03610fe3614c82565b1660005260276020526020604060002054604051908152f35b3461044f5760031960403682011261044f57602435906001600160401b03821161044f5761012090823603011261044f576040519061103a82614d2d565b80600401356001600160401b03811161044f5761105d906004369184010161500b565b825260248101356001600160401b03811161044f57611082906004369184010161500b565b602083015260448101356001600160401b03811161044f576110aa906004369184010161500b565b604083015260648101356001600160401b03811161044f576110d2906004369184010161500b565b606083015260848101356001600160401b03811161044f576110fa906004369184010161500b565b608083015260a4810135906001600160a01b038216820361044f576101049160a084015260c481013560c084015260e481013560e08401520135610100820152303314801561151a575b8015611506575b80156114f2575b80156114de575b80156114ca575b80156114b6575b80156114a2575b611177906150c2565b600435600052602260205260406000209080518051906001600160401b03821161138b57600160401b821161138b578354828555808310611478575b5060200183600052602060002060005b83811061146457858560208101518051906001600160401b03821161138b57600160401b821161138b576001840154826001860155808310611437575b5060200160018401600052602060002060005b83811061142357858560408101518051906001600160401b03821161138b57600160401b821161138b5760028401548260028601558083106113f6575b5060200160028401600052602060002060005b8381106113e257858560608101518051906001600160401b03821161138b57600160401b821161138b5760038401548260038601558083106113b5575b5060200160038401600052602060002060005b8381106113a1578585600482016080820151908151916001600160401b03831161138b57600160401b831161138b578154838355808410611362575b5060200190600052602060002060005b83811061134e5760a08501516005870180546001600160a01b0319166001600160a01b039290921691909117905560c0850151600687015560e085015160078701556101008501516008870155005b6001906020845194019381840155016112ff565b8260005283602060002091820191015b81811061137f57506112ef565b60008155600101611372565b634e487b7160e01b600052604160045260246000fd5b6001906020845194019381840155016112b3565b600385016000526020600020908382015b81830181106113d65750506112a0565b600081556001016113c6565b600190602084519401938184015501611263565b600285016000526020600020908382015b8183018110611417575050611250565b60008155600101611407565b600190602084519401938184015501611213565b600185016000526020600020908382015b8183018110611458575050611200565b60008155600101611448565b6001906020845194019381840155016111c3565b846000526020600020908382015b81830181106114965750506111b3565b60008155600101611486565b506019546001600160a01b0316331461116e565b506018546001600160a01b03163314611167565b506014546001600160a01b03163314611160565b506013546001600160a01b03163314611159565b506012546001600160a01b03163314611152565b506011546001600160a01b0316331461114b565b506010546001600160a01b03163314611144565b3461044f5761153c36614ec5565b90604051908181519160005b83811061157d575050602091810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001611548565b3461044f57604036600319011261044f576115ab614c82565b3033148015611682575b801561166e575b801561165a575b8015611646575b8015611632575b801561161e575b801561160a575b6115e8906150c2565b60018060a01b0316600052603060205260406000206104d16024358254615115565b506019546001600160a01b031633146115df565b506018546001600160a01b031633146115d8565b506014546001600160a01b031633146115d1565b506013546001600160a01b031633146115ca565b506012546001600160a01b031633146115c3565b506011546001600160a01b031633146115bc565b506010546001600160a01b031633146115b5565b3461044f57600036600319011261044f57303314801561176c575b8015611758575b8015611744575b8015611730575b801561171c575b8015611708575b80156116f4575b6116e4906150c2565b6116ef602154615106565b602155005b506019546001600160a01b031633146116db565b506018546001600160a01b031633146116d4565b506014546001600160a01b031633146116cd565b506013546001600160a01b031633146116c6565b506012546001600160a01b031633146116bf565b506011546001600160a01b031633146116b8565b506010546001600160a01b031633146116b1565b3461044f57600036600319011261044f576019546040516001600160a01b039091168152602090f35b3461044f57604036600319011261044f5760a06117c4614c98565b604051906117d182614d49565b600082526000608060209382858201528260408201528260608201520152600435600052818052604060002090600180851b0316600052815260406000206040519061181c82614d49565b80549283835260018201549080840191825260028301549160408501928352608060ff6004600387015496606089019788520154169501941515855260405195865251908501525160408401525160608301525115156080820152f35b3461044f57602061188936614f56565b939092303314801561196e575b801561195a575b8015611946575b8015611932575b801561191e575b801561190a575b80156118f6575b6118c9906150c2565b826040519384928337810160338152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b031633146118c0565b506018546001600160a01b031633146118b9565b506014546001600160a01b031633146118b2565b506013546001600160a01b031633146118ab565b506012546001600160a01b031633146118a4565b506011546001600160a01b0316331461189d565b506010546001600160a01b03163314611896565b3461044f57604036600319011261044f5761199b614c82565b3033148015611a6e575b8015611a5a575b8015611a46575b8015611a32575b8015611a1e575b8015611a0a575b80156119f6575b6119d8906150c2565b6001600160a01b03166000908152602a602052604090206024359055005b506019546001600160a01b031633146119cf565b506018546001600160a01b031633146119c8565b506014546001600160a01b031633146119c1565b506013546001600160a01b031633146119ba565b506012546001600160a01b031633146119b3565b506011546001600160a01b031633146119ac565b506010546001600160a01b031633146119a5565b3461044f57604036600319011261044f57611a9b614c82565b3033148015611b72575b8015611b5e575b8015611b4a575b8015611b36575b8015611b22575b8015611b0e575b8015611afa575b611ad8906150c2565b60018060a01b0316600052602960205260406000206104d16024358254615115565b506019546001600160a01b03163314611acf565b506018546001600160a01b03163314611ac8565b506014546001600160a01b03163314611ac1565b506013546001600160a01b03163314611aba565b506012546001600160a01b03163314611ab3565b506011546001600160a01b03163314611aac565b506010546001600160a01b03163314611aa5565b3461044f57604036600319011261044f57611b9f614c82565b3033148015611c72575b8015611c5e575b8015611c4a575b8015611c36575b8015611c22575b8015611c0e575b8015611bfa575b611bdc906150c2565b6001600160a01b031660009081526025602052604090206024359055005b506019546001600160a01b03163314611bd3565b506018546001600160a01b03163314611bcc565b506014546001600160a01b03163314611bc5565b506013546001600160a01b03163314611bbe565b506012546001600160a01b03163314611bb7565b506011546001600160a01b03163314611bb0565b506010546001600160a01b03163314611ba9565b3461044f57600036600319011261044f576020600054604051908152f35b3461044f57600036600319011261044f57604060015460ff6002541682519182526020820152f35b3461044f57602036600319011261044f5760206001600160a01b0380611cf0614c82565b16600052602e825260406000205416604051908152f35b3461044f57604036600319011261044f57611d20614c82565b3033148015611df7575b8015611de3575b8015611dcf575b8015611dbb575b8015611da7575b8015611d93575b8015611d7f575b611d5d906150c2565b60018060a01b0316600052601a60205260406000206104d16024358254615115565b506019546001600160a01b03163314611d54565b506018546001600160a01b03163314611d4d565b506014546001600160a01b03163314611d46565b506013546001600160a01b03163314611d3f565b506012546001600160a01b03163314611d38565b506011546001600160a01b03163314611d31565b506010546001600160a01b03163314611d2a565b3461044f57611e58611e1c36614f9c565b929091611e2b60045482615122565b60018060a01b03809416600052601a602052611e4d6040600020918254614f49565b905560055490615122565b9116600052601a6020526104d16040600020918254614f49565b3461044f576020611e8236614f56565b9390923033148015611f67575b8015611f53575b8015611f3f575b8015611f2b575b8015611f17575b8015611f03575b8015611eef575b611ec2906150c2565b826040519384928337810160328152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b03163314611eb9565b506018546001600160a01b03163314611eb2565b506014546001600160a01b03163314611eab565b506013546001600160a01b03163314611ea4565b506012546001600160a01b03163314611e9d565b506011546001600160a01b03163314611e96565b506010546001600160a01b03163314611e8f565b3461044f57604036600319011261044f57611f94614c82565b611f9c614c98565b9060018060a01b038091166000526024602052604060002091166000526020526020604060002054604051908152f35b3461044f57611fda36614cc4565b9130331480156120ba575b80156120a6575b8015612092575b801561207e575b801561206a575b8015612056575b8015612042575b612018906150c2565b60018060a01b03809116600052602460205260406000209116600052602052604060002055600080f35b506019546001600160a01b0316331461200f565b506018546001600160a01b03163314612008565b506014546001600160a01b03163314612001565b506013546001600160a01b03163314611ffa565b506012546001600160a01b03163314611ff3565b506011546001600160a01b03163314611fec565b506010546001600160a01b03163314611fe5565b3461044f57602036600319011261044f5760006101a06040516120f081614d9c565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152826101808201520152600435600052601e6020526101c060406000206101a060405161216481614d9c565b600d60018060a01b038454169384835260018060a01b0360018201541660208401526002810154604084015260018060a01b03600382015416606084015260048101546080840152600581015460a0840152600681015460c084015260ff600782015416151560e08401526008810154610100840152600981015461012084015260018060a01b03600a8201541661014084015260018060a01b03600b8201541661016084015260018060a01b03600c8201541661018084015201548282015260405192835260018060a01b0360208201511660208401526040810151604084015260018060a01b0360608201511660608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015161010084015261012081015161012084015260018060a01b036101408201511661014084015260018060a01b036101608201511661016084015260018060a01b036101808201511661018084015201516101a0820152f35b3461044f57602036600319011261044f5733600052602b602052600435604060002055600080f35b3461044f57600036600319011261044f576020601d54604051908152f35b3461044f573660031901610560811261044f576103801361044f5760405161234d81614d80565b60043581526024356020808301919091526001600160a01b0390604435828116810361044f5760408401526064356060840152608435608084015260a43560a084015260c43560c084015260e435828116810361044f5760e084015261010091610104358385015261012061012435818601526101443560ff8116810361044f57610140908187015261016095610164358782015261018061018435818301526101a06101a435818401526101c06101c435818501526101e4356101e085015261020435610200850152610224356102208501526102443561024085015261026435610260850152610284356102808501526102a4356102a08501526102c4356102c08501526102e4356102e085015261030435878116810361044f5761030085015261032435801515810361044f5761032085015261034435610340850152610364356103608501523661038319011261044f57604051916124af83614d9c565b61038435878116810361044f5783526103a43599878b168b0361044f578884019a8b526103c43560408501526103e435888116810361044f576060850152608084019661040435885260a085019a610424358c526104443560c087015261046435801515810361044f5760e087015261048435908601528401956104a43587526104c43590898216820361044f578501526104e43590888216820361044f578401526105043590878216820361044f578301526105243590820152610544359230331480156127c0575b80156127b3575b80156127a6575b8015612799575b801561278c575b801561277f575b8015612772575b6125ac906150c2565b51600281148015612768575b156126ad57508481511661263c575b50838751166125d257005b603095670de0b6b3a76400006125f9612625956125f1612602956155cc565b905190615122565b04905190615122565b908387511660005260318552604060002090600052845260406000205490615115565b935116600052526104d16040600020918254614f49565b8461268b612669670de0b6b3a7640000612660612658876155cc565b895190615122565b048a5190615122565b8284511660005260318952604060002086600052895260406000205490615115565b915116600052603086526126a56040600020918254614f49565b9055876125c7565b9296509250506003811490811561275d575b8115612752575b506126cd57005b8181511680612716575b5050808451169283156109a957603093600052603183526040600020906000528252604060002054935116600052526104d16040600020918254615115565b60005260318352604060002084600052835281604060002054915116600052603083526127496040600020918254615115565b905584806126d7565b6004915014866126c6565b6004811491506126bf565b50600181146125b8565b50601954861633146125a3565b508560185416331461259c565b5085601454163314612595565b508560135416331461258e565b5085601254163314612587565b5085601154163314612580565b5085601054163314612579565b3461044f57602036600319011261044f576001600160a01b036127ee614c82565b16600052602360205260406000206104d18154615106565b3461044f57600036600319011261044f5760206040516fa2a8918ca85bafe22016d0b997e4df5f600160ff1b038152f35b3461044f57604036600319011261044f57612850614c82565b3033148015612927575b8015612913575b80156128ff575b80156128eb575b80156128d7575b80156128c3575b80156128af575b61288d906150c2565b60018060a01b0316600052603060205260406000206104d16024358254614f49565b506019546001600160a01b03163314612884565b506018546001600160a01b0316331461287d565b506014546001600160a01b03163314612876565b506013546001600160a01b0316331461286f565b506012546001600160a01b03163314612868565b506011546001600160a01b03163314612861565b506010546001600160a01b0316331461285a565b3461044f57602061294b36614e4d565b929091826040519384928337810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b036129a1614c82565b1660005260266020526020604060002054604051908152f35b3461044f57600036600319011261044f576020601b54604051908152f35b3461044f57604036600319011261044f576129f1614c82565b3033148015612ac8575b8015612ab4575b8015612aa0575b8015612a8c575b8015612a78575b8015612a64575b8015612a50575b612a2e906150c2565b60018060a01b0316600052602f60205260406000206104d16024358254614f49565b506019546001600160a01b03163314612a25565b506018546001600160a01b03163314612a1e565b506014546001600160a01b03163314612a17565b506013546001600160a01b03163314612a10565b506012546001600160a01b03163314612a09565b506011546001600160a01b03163314612a02565b506010546001600160a01b031633146129fb565b3461044f57602036600319011261044f576109a96fa2a8918ca85bafe22016d0b997e4df5f600160ff1b03600435106155e9565b3461044f5760e036600319011261044f576001600160401b0360043581811161044f57612b41903690600401614e20565b91606036604319011261044f57604051606081018181108382111761138b5760405260443581526064356001600160a01b038116810361044f576020820152612b88614cae565b6040820152604060a31936011261044f576040519160408301908382109082111761138b5760405260a435825260c4359260ff8416840361044f57602094610445948685015260243591615530565b3461044f57602036600319011261044f576000610360604051612bf981614d80565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015282610220820152826102408201528261026082015282610280820152826102a0820152826102c0820152826102e08201528261030082015282610320820152826103408201520152600435600052601c6020526103806040600020610360604051612ccf81614d80565b601a8354938483526001810154602084015260018060a01b0360028201541660408401526003810154606084015260048101546080840152600581015460a0840152600681015460c084015260018060a01b0360078201541660e08401526008810154610100840152600981015461012084015260ff600a82015416610140840152600b810154610160840152600c810154610180840152600d8101546101a0840152600e8101546101c0840152600f8101546101e08401526010810154610200840152601181015461022084015260128101546102408401526013810154610260840152601481015461028084015260158101546102a084015260168101546102c084015260178101546102e084015260ff601882015460018060a01b03811661030086015260a01c16151561032084015260198101546103408401520154828201526040519283526020810151602084015260018060a01b036040820151166040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260018060a01b0360e08201511660e084015261010081015161010084015261012081015161012084015260ff610140820151166101408401526101608101516101608401526101808101516101808401526101a08101516101a08401526101c08101516101c08401526101e08101516101e08401526102008101516102008401526102208101516102208401526102408101516102408401526102608101516102608401526102808101516102808401526102a08101516102a08401526102c08101516102c08401526102e08101516102e084015260018060a01b036103008201511661030084015261032081015115156103208401526103408101516103408401520151610360820152f35b3461044f5761026036600319011261044f57612f84614c82565b6001600160a01b039061016435828116919082900361044f57610184359083821680920361044f576101a43584811680910361044f576101c43585811680910361044f576101e43586811680910361044f57610204359187831680930361044f57610224359388851680950361044f57610244359689881680980361044f576037549860ff8a1661044f5760019a6001600160601b0360a01b981688600f541617600f5560243560035560443560045560643560055560843560065560a43560075560c43560085560e43560095561010435600a5561012435600b5561014435600c5587600d541617600d5586600e541617600e55856010541617601055846011541617601155836012541617601255826014541617601455816018541617601855601954161760195560ff191617603755600080f35b3461044f57602036600319011261044f5733600052602c602052600435604060002055600080f35b3461044f57602036600319011261044f576001600160a01b03613104614c82565b1660005260346020526020604060002054604051908152f35b3461044f5761312b36614ec5565b90604051908181519160005b83811061316c575050602091810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001613137565b3461044f57600036600319011261044f576020600954604051908152f35b3461044f57604036600319011261044f576131b8614c82565b303314801561328b575b8015613277575b8015613263575b801561324f575b801561323b575b8015613227575b8015613213575b6131f5906150c2565b6001600160a01b031660009081526026602052604090206024359055005b506019546001600160a01b031633146131ec565b506018546001600160a01b031633146131e5565b506014546001600160a01b031633146131de565b506013546001600160a01b031633146131d7565b506012546001600160a01b031633146131d0565b506011546001600160a01b031633146131c9565b506010546001600160a01b031633146131c2565b3461044f57604036600319011261044f576132b8614c82565b3033148015613391575b801561337d575b8015613369575b8015613355575b8015613341575b801561332d575b8015613319575b6132f5906150c2565b6001600160a01b03166000908152602d60205260409020805461044f576024359055005b506019546001600160a01b031633146132ec565b506018546001600160a01b031633146132e5565b506014546001600160a01b031633146132de565b506013546001600160a01b031633146132d7565b506012546001600160a01b031633146132d0565b506011546001600160a01b031633146132c9565b506010546001600160a01b031633146132c2565b3461044f57602036600319011261044f576001600160a01b036133c6614c82565b16600052602a6020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b03613400614c82565b1660005260256020526020604060002054604051908152f35b614e8f565b3461044f57604036600319011261044f57613437614c82565b602435903033148015613576575b8015613562575b801561354e575b801561353a575b8015613526575b8015613512575b80156134fe575b613478906150c2565b6001600160a01b03166000818152603460209081526040909120549192909181146134ba57603692600052603582526040600020555242604060002055600080f35b50603681526040600020546201518081018091116108f05742116134da57005b60369160005260358152604060002054603482526040600020555260006040812055005b506019546001600160a01b0316331461346f565b506018546001600160a01b03163314613468565b506014546001600160a01b03163314613461565b506013546001600160a01b0316331461345a565b506012546001600160a01b03163314613453565b506011546001600160a01b0316331461344c565b506010546001600160a01b03163314613445565b3461044f57602036600319011261044f576001600160a01b036135ab614c82565b16600052602d6020526020604060002054604051908152f35b3461044f57604036600319011261044f576135dd614c82565b30331480156136b0575b801561369c575b8015613688575b8015613674575b8015613660575b801561364c575b8015613638575b61361a906150c2565b6001600160a01b031660009081526030602052604090206024359055005b506019546001600160a01b03163314613611565b506018546001600160a01b0316331461360a565b506014546001600160a01b03163314613603565b506013546001600160a01b031633146135fc565b506012546001600160a01b031633146135f5565b506011546001600160a01b031633146135ee565b506010546001600160a01b031633146135e7565b3461044f57600036600319011261044f576020600c54604051908152f35b3461044f57604036600319011261044f576136fb614c82565b30331480156137d2575b80156137be575b80156137aa575b8015613796575b8015613782575b801561376e575b801561375a575b613738906150c2565b60018060a01b0316600052602f60205260406000206104d16024358254615115565b506019546001600160a01b0316331461372f565b506018546001600160a01b03163314613728565b506014546001600160a01b03163314613721565b506013546001600160a01b0316331461371a565b506012546001600160a01b03163314613713565b506011546001600160a01b0316331461370c565b506010546001600160a01b03163314613705565b3461044f57600036600319011261044f576020600854604051908152f35b3461044f57604036600319011261044f5761381d614c82565b30331480156138f4575b80156138e0575b80156138cc575b80156138b8575b80156138a4575b8015613890575b801561387c575b61385a906150c2565b60018060a01b0316600052602560205260406000206104d16024358254615115565b506019546001600160a01b03163314613851565b506018546001600160a01b0316331461384a565b506014546001600160a01b03163314613843565b506013546001600160a01b0316331461383c565b506012546001600160a01b03163314613835565b506011546001600160a01b0316331461382e565b506010546001600160a01b03163314613827565b3461044f57602061391836614e4d565b929091826040519384928337810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f57600036600319011261044f576020600b54604051908152f35b3461044f57602036600319011261044f576001600160a01b0361398c614c82565b1660005260286020526020604060002054604051908152f35b3461044f57602036600319011261044f57600060e06040516139c681614d64565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201520152600435600052601f6020526101006040600020604051613a0e81614d64565b60018060a01b039182815416928383526001820154602084019081528160028401546040860160ff821615158152606087019060ff8360081c161515825283608089019360101c168352836003880154169460a0890195865260e0600560048a01549960c08c019a8b5201549901988952604051998a525160208a01525115156040890152511515606088015251166080860152511660a08401525160c08301525160e0820152f35b3461044f57600036600319011261044f57610180600354600454600554600654600754600854600954600a5491600b5493600c549560018060a01b039788600d541698600e5416996040519b8c5260208c015260408b015260608a0152608089015260a088015260c087015260e0860152610100850152610120840152610140830152610160820152f35b3461044f57604036600319011261044f57613b5b614c82565b3033148015613c32575b8015613c1e575b8015613c0a575b8015613bf6575b8015613be2575b8015613bce575b8015613bba575b613b98906150c2565b60018060a01b0316600052601a60205260406000206104d16024358254614f49565b506019546001600160a01b03163314613b8f565b506018546001600160a01b03163314613b88565b506014546001600160a01b03163314613b81565b506013546001600160a01b03163314613b7a565b506012546001600160a01b03163314613b73565b506011546001600160a01b03163314613b6c565b506010546001600160a01b03163314613b65565b3461044f57600036600319011261044f576020600354604051908152f35b3461044f5760e036600319011261044f57613c7d614c98565b60a036604319011261044f57604051613c9581614d49565b6044358152602081019160643583526040820160843581526060830160a435815260c43591821515830361044f576109a995600494608087019485523033148015613dd4575b8015613dc0575b8015613dac575b8015613d98575b8015613d84575b8015613d70575b8015613d5c575b613d0e906150c2565b85356000526020805260406000209060018060a01b031660005260205260406000209551865551600186015551600285015551600384015551151591019060ff801983541691151516179055565b506019546001600160a01b03163314613d05565b506018546001600160a01b03163314613cfe565b506014546001600160a01b03163314613cf7565b506013546001600160a01b03163314613cf0565b506012546001600160a01b03163314613ce9565b506011546001600160a01b03163314613ce2565b506010546001600160a01b03163314613cdb565b3461044f57604036600319011261044f57613e01614c82565b3033148015613ed8575b8015613ec4575b8015613eb0575b8015613e9c575b8015613e88575b8015613e74575b8015613e60575b613e3e906150c2565b60018060a01b0316600052602660205260406000206104d16024358254615115565b506019546001600160a01b03163314613e35565b506018546001600160a01b03163314613e2e565b506014546001600160a01b03163314613e27565b506013546001600160a01b03163314613e20565b506012546001600160a01b03163314613e19565b506011546001600160a01b03163314613e12565b506010546001600160a01b03163314613e0b565b3461044f57602036600319011261044f576001600160a01b03613f0d614c82565b1660005260236020526020604060002054604051908152f35b3461044f576103a036600319011261044f5761038036602319011261044f57604051613f5181614d80565b602435815260443560208201526064356001600160a01b038116810361044f576040820152608435606082015260a435608082015260c43560a082015260e43560c0820152610104356001600160a01b038116810361044f5760e082015261012435610100820152610144356101208201526101643560ff8116810361044f57610140820152610184356101608201526101a4356101808201526101c4356101a08201526101e4356101c0820152610204356101e0820152610224356102008201526102443561022082015261026435610240820152610284356102608201526102a4356102808201526102c4356102a08201526102e4356102c0820152610304356102e0820152610324356001600160a01b038116900361044f5761032435610300820152610344351515610344350361044f5761034435610320820152610364356103408201526103843561036082015230331480156142ee575b80156142da575b80156142c6575b80156142b2575b801561429e575b801561428a575b8015614276575b6140e1906150c2565b600435600052601c602052601a61036060406000209280518455602081015160018501556002840160018060a01b03604083015116906001600160601b0360a01b9182825416179055606082015160038601556080820151600486015560a0820151600586015560c08201516006860155600785019060018060a01b0360e0840151169082541617905561010081015160088501556101208101516009850155600a840160ff6101408301511660ff19825416179055610160810151600b850155610180810151600c8501556101a0810151600d8501556101c0810151600e8501556101e0810151600f850155610200810151601085015561022081015160118501556102408101516012850155610260810151601385015561028081015160148501556102a081015160158501556102c081015160168501556102e081015160178501556018840160018060a01b036103008301511681549060ff60a01b610320850151151560a01b16916affffffffffffffffffffff60a81b161717905561034081015160198501550151910155600080f35b506019546001600160a01b031633146140d8565b506018546001600160a01b031633146140d1565b506014546001600160a01b031633146140ca565b506013546001600160a01b031633146140c3565b506012546001600160a01b031633146140bc565b506011546001600160a01b031633146140b5565b506010546001600160a01b031633146140ae565b3461044f57602036600319011261044f576001600160a01b03614323614c82565b1660005260306020526020604060002054604051908152f35b3461044f57604036600319011261044f57614355614c82565b61435d614c98565b903033148015614444575b8015614430575b801561441c575b8015614408575b80156143f4575b80156143e0575b80156143cc575b61439b906150c2565b6001600160a01b039081166000908152602e6020526040902080546001600160a01b03191692909116919091179055005b506019546001600160a01b03163314614392565b506018546001600160a01b0316331461438b565b506014546001600160a01b03163314614384565b506013546001600160a01b0316331461437d565b506012546001600160a01b03163314614376565b506011546001600160a01b0316331461436f565b506010546001600160a01b03163314614368565b614df7565b3461044f57600036600319011261044f573033148015614533575b801561451f575b801561450b575b80156144f7575b80156144e3575b80156144cf575b80156144bb575b6144ab906150c2565b6144b6601b54615106565b601b55005b506019546001600160a01b031633146144a2565b506018546001600160a01b0316331461449b565b506014546001600160a01b03163314614494565b506013546001600160a01b0316331461448d565b506012546001600160a01b03163314614486565b506011546001600160a01b0316331461447f565b506010546001600160a01b03163314614478565b3461044f57600036600319011261044f57303314801561461d575b8015614609575b80156145f5575b80156145e1575b80156145cd575b80156145b9575b80156145a5575b614595906150c2565b6145a0601d54615106565b601d55005b506019546001600160a01b0316331461458c565b506018546001600160a01b03163314614585565b506014546001600160a01b0316331461457e565b506013546001600160a01b03163314614577565b506012546001600160a01b03163314614570565b506011546001600160a01b03163314614569565b506010546001600160a01b03163314614562565b3461044f576101e036600319011261044f576101c036602319011261044f5760405161465c81614d9c565b6024356001600160a01b038116810361044f5781526044356001600160a01b038116810361044f57602082015260643560408201526084356001600160a01b038116810361044f57606082015260a435608082015260c43560a082015260e43560c082015261010435801515810361044f5760e08201526101243561010082015261014435610120820152610164356001600160a01b038116810361044f57610140820152610184356001600160a01b038116810361044f576101608201526101a4356001600160a01b038116900361044f576101a4356101808201526101c4356101a08201523033148015614925575b8015614911575b80156148fd575b80156148e9575b80156148d5575b80156148c1575b80156148ad575b614780906150c2565b600435600052601e602052600d6101a060406000209260018060a01b038151166001600160601b0360a01b8554161784556001840160018060a01b036020830151166001600160601b0360a01b825416179055604081015160028501556003840160018060a01b036060830151166001600160601b0360a01b8254161790556080810151600485015560a0810151600585015560c0810151600685015561483c60e08201511515600786019060ff801983541691151516179055565b61010081015160088501556101208101516009850155610140810151600a850180546001600160a01b039283166001600160a01b031991821617909155610160830151600b87018054918416918316919091179055610180830151600c870180549190931691161790550151910155005b506019546001600160a01b03163314614777565b506018546001600160a01b03163314614770565b506014546001600160a01b03163314614769565b506013546001600160a01b03163314614762565b506012546001600160a01b0316331461475b565b506011546001600160a01b03163314614754565b506010546001600160a01b0316331461474d565b3461044f57602036600319011261044f576001600160a01b0361495a614c82565b1660005260296020526020604060002054604051908152f35b3461044f57602036600319011261044f57600061010060405161499581614d2d565b606081526060602082015260606040820152606080820152606060808201528260a08201528260c08201528260e08201520152600435600052602260205260406000206008604051916149e783614d2d565b6149f081615071565b83526149fe60018201615071565b6020840152614a0f60028201615071565b6040840152614a2060038201615071565b6060840152614a3160048201615071565b608084015260018060a01b0360058201541660a0840152600681015460c0840152600781015460e084015201546101008201526040518091602082528051610100614aec614a8d61012093846020880152610140870190614cf9565b614ad7614ac3614aaf602088015193601f1994858b83030160408c0152614cf9565b6040880151848a83030160608b0152614cf9565b6060870151838983030160808a0152614cf9565b906080860151908783030160a0880152614cf9565b9260018060a01b0360a08201511660c086015260c081015160e086015260e0810151828601520151908301520390f35b3461044f57600036600319011261044f57600d546040516001600160a01b039091168152602090f35b3461044f57614b5336614cc4565b913033148015614c38575b8015614c24575b8015614c10575b8015614bfc575b8015614be8575b8015614bd4575b8015614bc0575b614b91906150c2565b60018060a01b038091166000526024602052604060002091166000526020526104d16040600020918254614f49565b506019546001600160a01b03163314614b88565b506018546001600160a01b03163314614b81565b506014546001600160a01b03163314614b7a565b506013546001600160a01b03163314614b73565b506012546001600160a01b03163314614b6c565b506011546001600160a01b03163314614b65565b506010546001600160a01b03163314614b5e565b3461044f57602036600319011261044f576020906001600160a01b03614c70614c82565b16600052602f82526040600020548152f35b600435906001600160a01b038216820361044f57565b602435906001600160a01b038216820361044f57565b608435906001600160a01b038216820361044f57565b606090600319011261044f576001600160a01b0390600435828116810361044f5791602435908116810361044f579060443590565b90815180825260208080930193019160005b828110614d19575050505090565b835185529381019392810192600101614d0b565b61012081019081106001600160401b0382111761138b57604052565b60a081019081106001600160401b0382111761138b57604052565b61010081019081106001600160401b0382111761138b57604052565b61038081019081106001600160401b0382111761138b57604052565b6101c081019081106001600160401b0382111761138b57604052565b90601f801991011681019081106001600160401b0382111761138b57604052565b60643590811515820361044f57565b60843590811515820361044f57565b3461044f57600036600319011261044f57600f546040516001600160a01b039091168152602090f35b9181601f8401121561044f578235916001600160401b03831161044f576020838186019501011161044f57565b604060031982011261044f57600435906001600160401b03821161044f57614e7791600401614e20565b90916024356001600160a01b038116810361044f5790565b3461044f57602036600319011261044f5760018060a01b03600d5416600052601a60205260406000206104d16004358254614f49565b604060031982011261044f576001600160401b0360043581811161044f578260238201121561044f57806004013591821161138b5760405192614f12601f8401601f191660200185614db8565b8284526024838301011161044f57816000926024602093018386013783010152906024356001600160a01b038116810361044f5790565b919082018092116108f057565b606060031982011261044f57600435906001600160401b03821161044f57614f8091600401614e20565b90916024356001600160a01b038116810361044f579060443590565b606090600319011261044f57600435906001600160a01b0390602435828116810361044f5791604435908116810361044f5790565b3461044f57602036600319011261044f576001600160a01b03614ff2614c82565b16600052601a6020526020604060002054604051908152f35b9080601f8301121561044f578135906001600160401b03821161138b578160051b6040519360209361503f85840187614db8565b8552838086019282010192831161044f578301905b828210615062575050505090565b81358152908301908301615054565b9060405191828154918282526020928383019160005283600020936000905b8282106150a8575050506150a692500383614db8565b565b855484526001958601958895509381019390910190615090565b156150c957565b60405162461bcd60e51b815260206004820152601560248201527410d85b1b195c881b9bdd08185d5d1a1bdc9a5e9959605a1b6044820152606490fd5b60001981146108f05760010190565b919082039182116108f057565b818102929181159184041417156108f057565b303314801561521d575b8015615209575b80156151f5575b80156151e1575b80156151cd575b80156151b9575b80156151a5575b615172906150c2565b60018060a01b038091166000526024602052604060002091166000526020526151a16040600020918254615115565b9055565b506019546001600160a01b03163314615169565b506018546001600160a01b03163314615162565b506014546001600160a01b0316331461515b565b506013546001600160a01b03163314615154565b506012546001600160a01b0316331461514d565b506011546001600160a01b03163314615146565b506010546001600160a01b0316331461513f565b9290911561526a57506152448183615340565b9060018060a01b0316600052601a6020526152656040600020918254614f49565b905590565b6001600160a01b039091166000818152601a6020908152604080832080549396919592949380831061532d5750508286526029845284862054601a85526152b5868820918254614f49565b905582865260298452848620869055602a8452848620429055601a8452848620805480831061532d575050506152f5578352601a90528120805491905590565b50606491519062461bcd60e51b8252600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152fd5b9250945094506152659250849150615115565b600091338352602060278152604093848120544281036153f1575b506001600160a01b03909216808352602582528483205490937fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a939186908281106153c3575050848252602683526153b7868320918254614f49565b9055935b51848152a290565b926153eb93602686526153da838320918254614f49565b905586815260258552205490615115565b936153bb565b6153fb9042615115565b923382526025835285822054865194632762fe1b60e11b86526702c68af0bb14000060048701526024860152670de0b6b3a764000060448601526064850152828460848173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af480156155065782906154af575b7fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a94503383526025845261549b878420918254614f49565b90553382526027835242868320559261535b565b509091928381813d83116154ff575b6154c88183614db8565b810103126154fb57907fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a93929151615463565b8280fd5b503d6154be565b86513d84823e3d90fd5b811561551a570490565b634e487b7160e01b600052601260045260246000fd5b9092939161555b90835190602085019660ff885116815191604060018060a01b03910151169361562e565b156155c3578260ff7f77e158c4de5b89cd65592962239c3cc6136696032ecc462ad1b04af14e8df53b956080946040519687956060875281606088015287870137600085850187015251602085015251166040830152601f01601f19168101030190a1600190565b50505050600090565b9060009160016102c0820151146155e05750565b6101e001519150565b156155f057565b60405162461bcd60e51b81526020600482015260166024820152755075626c69632d6b65792078203e3d2048414c465f5160501b6044820152606490fd5b91906156516fa2a8918ca85bafe22016d0b997e4df5f600160ff1b0384106155e9565b70014551231950b75fc4402da1732fc9bebe199485831015615793576001600160a01b03818116969095908715158061578a575b80615781575b80615778575b1561573a576040519160208301936001600160601b03199060601b16845260348301526034825260608201928284106001600160401b0385111761138b57819084604052835190209587098103908082116108f05760209660009660ff60c0948160809916158a1461573257601b905b885216878601528160a08601520991015282805260015afa1561572657600051161490565b6040513d6000823e3d90fd5b601c90615701565b60405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606490fd5b50811515615691565b5084151561568b565b50851515615685565b60405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b6064820152608490fdfea26469706673582212201ab9b2e78cf32704e7cc5304d79c2cd9c21d4d9652c6644d4a9ac537596a1ec464736f6c63430008140033',
  deployedBytecode:
    '0x608080604052600436101561001357600080fd5b60003560e01c90816302ad7f4314614c4c5750806303339c8614614b4557806304618e6b14614b1c57806306faa448146149735780630b671e6f146149395780630c965b31146146315780630cdbf967146145475780630e1295691461445857806311d7e2a01461445d5780631425d2fa14614458578063154c7d1e1461433c57806315c868781461430257806317c6a54914613f2657806318967df814613eec5780631cd8e70014613de85780631d74b67d14613c645780631da5475e14613c4657806321e5383a14613b425780632b08fc1514613ab75780632eb41cf8146139a5578063304e24e91461396b5780633205b1d71461394d57806339bbfb91146139085780633a1ebe0c146138045780633f06cd66146137e657806343c3cc85146136e257806345ba6a82146136c457806346192c9c146135c457806348d29b19146109925780634f5eddd81461341957806355804d061461358a578063564f360e1461341e57806357b00f1d146134195780635dee2839146133df57806361dbb3b2146133a55780636526adbe1461329f5780636639013f1461319f57806367aeb0f31461318157806367cf9c3b1461311d5780636836948f146130e35780636846ce93146130bb5780636e99aa5b14612f6a57806374f95a4014612bd75780637669c2bb14612b105780638224604a14612adc578063828b6e9b146129d857806384ad7169146129ba5780638738428d146129805780638da179171461293b5780638e95b51b146128375780638efb3bb21461280657806390231961146127cd57806391cd1cbf146123265780639c131312146123085780639dd87ac8146122e0578063a1595d45146120ce578063a24f76cb14611fcc578063a67986a214611f7b578063a747300414611e72578063ad8bd9d014611e0b578063af0825af14611d07578063af40d56f14611ccc578063af663e9b14611ca4578063b3f74d8914611c86578063b8d98ce514611b86578063ba97893c14611a82578063bd008a8f14611982578063bd31117114611879578063c0069414146117a9578063c45bee3414611780578063c84aae1714610454578063cb1fb96414611696578063cda25f4114611592578063d270f04c1461152e578063d388ed2314610ffc578063d406815814610fc2578063d74e595914610d8b578063db7e8c0f14610d51578063e1dd0fdc14610bfc578063e3f4740b14610a12578063e47e4455146109d8578063e493ef8c146109ab578063e558391f14610992578063e57764f614610873578063e699af8a14610855578063e919aa5f1461067b578063e95e380f1461057f578063f0649dcf14610561578063f4364a2f14610459578063f8b2cb4f146104545763ff51dff21461040857600080fd5b3461044f5760a036600319011261044f5760243560ff8116810361044f57610445602091610434614cae565b90606435906044359060043561562e565b6040519015158152f35b600080fd5b614fd1565b3461044f57604036600319011261044f57610472614c82565b303314801561054d575b8015610539575b8015610525575b8015610511575b80156104fd575b80156104e9575b80156104d5575b6104af906150c2565b60018060a01b0316600052602960205260406000206104d16024358254614f49565b9055005b506019546001600160a01b031633146104a6565b506018546001600160a01b0316331461049f565b506014546001600160a01b03163314610498565b506013546001600160a01b03163314610491565b506012546001600160a01b0316331461048a565b506011546001600160a01b03163314610483565b506010546001600160a01b0316331461047c565b3461044f57600036600319011261044f576020600a54604051908152f35b3461044f5760a036600319011261044f57610598614c98565b6001600160a01b03906044358281160361044f5760209161060b916105bb614dd9565b906106036105c7614de8565b9330331490811561066c575b811561065d575b811561064e575b811561063f575b8115610630575b8115610621575b8115610613575b506150c2565b600435615231565b604051908152f35b9050601954163314876105fd565b809150601854163314906105f6565b809150601454163314906105ef565b809150601354163314906105e8565b809150601254163314906105e1565b809150601154163314906105da565b809150601054163314906105d3565b3461044f5761012036600319011261044f5761010036602319011261044f576040516106a681614d64565b6106ae614c98565b81526020810160443581526106c1614dd9565b90604083019182526106d1614de8565b606084019081529060a435906001600160a01b0390818316830361044f576080860192835260c43591808316830361044f5760059560a0880193845260c088019460e435865260e08901966101043588523033148015610848575b801561083b575b801561082e575b8015610821575b8015610814575b8015610807575b80156107fa575b61075f906150c2565b600435600052601f6020528360406000209a5116946001600160601b0360a01b95868c5416178b555160018b01556107aa60028b0193511515849060ff801983541691151516179055565b5182549151610100600160b01b031990921690151560081b61ff00161760109190911b62010000600160b01b03161790559151600387018054909216921691909117905551600484015551910155005b5060195484163314610756565b508360185416331461074f565b5083601454163314610748565b5083601354163314610741565b508360125416331461073a565b5083601154163314610733565b508360105416331461072c565b3461044f57600036600319011261044f576020602154604051908152f35b3461044f57602036600319011261044f5761088c614c82565b303314801561097e575b801561096a575b8015610956575b8015610942575b801561092e575b801561091a575b8015610906575b6108c9906150c2565b6001600160a01b03166000908152602360205260409020805480156108f057600019019055005b634e487b7160e01b600052601160045260246000fd5b506019546001600160a01b031633146108c0565b506018546001600160a01b031633146108b9565b506014546001600160a01b031633146108b2565b506013546001600160a01b031633146108ab565b506012546001600160a01b031633146108a4565b506011546001600160a01b0316331461089d565b506010546001600160a01b03163314610896565b3461044f576109a96109a336614cc4565b91615135565b005b3461044f57600036600319011261044f57602060405170014551231950b75fc4402da1732fc9bebe198152f35b3461044f57602036600319011261044f576001600160a01b036109f9614c82565b16600052602c6020526020604060002054604051908152f35b3461044f57604036600319011261044f57610a2b614c82565b610a33614c98565b7f9294c47cb49f2703e2d3095ef1f312352722b8664ddb79aa4d4bc4ed0f70246160018060a01b03928381169283600052610ab360209260298452604060002054601a8552610a886040600020918254614f49565b9055856000526029845260006040812055602a845242604060002055601a8452604060002054615340565b84600052601a8352604060002055602482526040600020948116948560005282526040600020549084600052602683526040600020549082821015600014610b7257610b34915085600052602584526040600020610b12848254615115565b905585600052602684526040600020610b2c848254615115565b905582615340565b85600052601a8352610b4c6040600020918254614f49565b905583600052602482526040600020856000528252600060408120555b604051908152a3005b610bce9160258552610b8a6040600020918254615115565b90558560005260268452604060002054602485526040600020886000528552610bb96040600020918254615115565b90558560005260268452604060002054615340565b85600052601a8352610be66040600020918254614f49565b9055836000526026825260006040812055610b69565b3461044f577f899caa590d55a05310519b00a93a11cba0e670b993797f02ed5eff3738747ce46020610c2d36614f9c565b93919290923033148015610d3d575b8015610d29575b8015610d15575b8015610d01575b8015610ced575b8015610cd9575b8015610cc5575b610c6f906150c2565b60018060a01b0380941693846000526024835260406000209516948560005282526040600020610ca0828254614f49565b905583600052602582526040600020610cba828254614f49565b9055604051908152a3005b506019546001600160a01b03163314610c66565b506018546001600160a01b03163314610c5f565b506014546001600160a01b03163314610c58565b506013546001600160a01b03163314610c51565b506012546001600160a01b03163314610c4a565b506011546001600160a01b03163314610c43565b506010546001600160a01b03163314610c3c565b3461044f57602036600319011261044f576001600160a01b03610d72614c82565b16600052602b6020526020604060002054604051908152f35b3461044f5760c036600319011261044f57610da4614c82565b610dac614c98565b604435906064356084359060a435938415938415860361044f573033148015610fae575b8015610f9a575b8015610f86575b8015610f72575b8015610f5e575b8015610f4a575b8015610f36575b610e03906150c2565b6001600160a01b03908116961694868603610e1a57005b80610efe575b15610e8b575050505081600052601a60205260406000205490602c60205260406000205480921015610e4e57005b600052601a602052610e666040600020918254614f49565b9055600052602c602052604060002054601a6020526104d16040600020918254615115565b83610ebf575b505050610e9a57005b81600052601a60205260406000205490602c60205260406000205480921015610e4e57005b90919250610ed7670de0b6b3a7640000928392615510565b0491670b1a2bc2ec500000908181029181830414901517156108f057041015838080610e91565b50670de0b6b3a764000080610f138385615510565b0490670b1a2bc2ec5000008086029086820414861517156108f057041015610e20565b506019546001600160a01b03163314610dfa565b506018546001600160a01b03163314610df3565b506014546001600160a01b03163314610dec565b506013546001600160a01b03163314610de5565b506012546001600160a01b03163314610dde565b506011546001600160a01b03163314610dd7565b506010546001600160a01b03163314610dd0565b3461044f57602036600319011261044f576001600160a01b03610fe3614c82565b1660005260276020526020604060002054604051908152f35b3461044f5760031960403682011261044f57602435906001600160401b03821161044f5761012090823603011261044f576040519061103a82614d2d565b80600401356001600160401b03811161044f5761105d906004369184010161500b565b825260248101356001600160401b03811161044f57611082906004369184010161500b565b602083015260448101356001600160401b03811161044f576110aa906004369184010161500b565b604083015260648101356001600160401b03811161044f576110d2906004369184010161500b565b606083015260848101356001600160401b03811161044f576110fa906004369184010161500b565b608083015260a4810135906001600160a01b038216820361044f576101049160a084015260c481013560c084015260e481013560e08401520135610100820152303314801561151a575b8015611506575b80156114f2575b80156114de575b80156114ca575b80156114b6575b80156114a2575b611177906150c2565b600435600052602260205260406000209080518051906001600160401b03821161138b57600160401b821161138b578354828555808310611478575b5060200183600052602060002060005b83811061146457858560208101518051906001600160401b03821161138b57600160401b821161138b576001840154826001860155808310611437575b5060200160018401600052602060002060005b83811061142357858560408101518051906001600160401b03821161138b57600160401b821161138b5760028401548260028601558083106113f6575b5060200160028401600052602060002060005b8381106113e257858560608101518051906001600160401b03821161138b57600160401b821161138b5760038401548260038601558083106113b5575b5060200160038401600052602060002060005b8381106113a1578585600482016080820151908151916001600160401b03831161138b57600160401b831161138b578154838355808410611362575b5060200190600052602060002060005b83811061134e5760a08501516005870180546001600160a01b0319166001600160a01b039290921691909117905560c0850151600687015560e085015160078701556101008501516008870155005b6001906020845194019381840155016112ff565b8260005283602060002091820191015b81811061137f57506112ef565b60008155600101611372565b634e487b7160e01b600052604160045260246000fd5b6001906020845194019381840155016112b3565b600385016000526020600020908382015b81830181106113d65750506112a0565b600081556001016113c6565b600190602084519401938184015501611263565b600285016000526020600020908382015b8183018110611417575050611250565b60008155600101611407565b600190602084519401938184015501611213565b600185016000526020600020908382015b8183018110611458575050611200565b60008155600101611448565b6001906020845194019381840155016111c3565b846000526020600020908382015b81830181106114965750506111b3565b60008155600101611486565b506019546001600160a01b0316331461116e565b506018546001600160a01b03163314611167565b506014546001600160a01b03163314611160565b506013546001600160a01b03163314611159565b506012546001600160a01b03163314611152565b506011546001600160a01b0316331461114b565b506010546001600160a01b03163314611144565b3461044f5761153c36614ec5565b90604051908181519160005b83811061157d575050602091810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001611548565b3461044f57604036600319011261044f576115ab614c82565b3033148015611682575b801561166e575b801561165a575b8015611646575b8015611632575b801561161e575b801561160a575b6115e8906150c2565b60018060a01b0316600052603060205260406000206104d16024358254615115565b506019546001600160a01b031633146115df565b506018546001600160a01b031633146115d8565b506014546001600160a01b031633146115d1565b506013546001600160a01b031633146115ca565b506012546001600160a01b031633146115c3565b506011546001600160a01b031633146115bc565b506010546001600160a01b031633146115b5565b3461044f57600036600319011261044f57303314801561176c575b8015611758575b8015611744575b8015611730575b801561171c575b8015611708575b80156116f4575b6116e4906150c2565b6116ef602154615106565b602155005b506019546001600160a01b031633146116db565b506018546001600160a01b031633146116d4565b506014546001600160a01b031633146116cd565b506013546001600160a01b031633146116c6565b506012546001600160a01b031633146116bf565b506011546001600160a01b031633146116b8565b506010546001600160a01b031633146116b1565b3461044f57600036600319011261044f576019546040516001600160a01b039091168152602090f35b3461044f57604036600319011261044f5760a06117c4614c98565b604051906117d182614d49565b600082526000608060209382858201528260408201528260608201520152600435600052818052604060002090600180851b0316600052815260406000206040519061181c82614d49565b80549283835260018201549080840191825260028301549160408501928352608060ff6004600387015496606089019788520154169501941515855260405195865251908501525160408401525160608301525115156080820152f35b3461044f57602061188936614f56565b939092303314801561196e575b801561195a575b8015611946575b8015611932575b801561191e575b801561190a575b80156118f6575b6118c9906150c2565b826040519384928337810160338152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b031633146118c0565b506018546001600160a01b031633146118b9565b506014546001600160a01b031633146118b2565b506013546001600160a01b031633146118ab565b506012546001600160a01b031633146118a4565b506011546001600160a01b0316331461189d565b506010546001600160a01b03163314611896565b3461044f57604036600319011261044f5761199b614c82565b3033148015611a6e575b8015611a5a575b8015611a46575b8015611a32575b8015611a1e575b8015611a0a575b80156119f6575b6119d8906150c2565b6001600160a01b03166000908152602a602052604090206024359055005b506019546001600160a01b031633146119cf565b506018546001600160a01b031633146119c8565b506014546001600160a01b031633146119c1565b506013546001600160a01b031633146119ba565b506012546001600160a01b031633146119b3565b506011546001600160a01b031633146119ac565b506010546001600160a01b031633146119a5565b3461044f57604036600319011261044f57611a9b614c82565b3033148015611b72575b8015611b5e575b8015611b4a575b8015611b36575b8015611b22575b8015611b0e575b8015611afa575b611ad8906150c2565b60018060a01b0316600052602960205260406000206104d16024358254615115565b506019546001600160a01b03163314611acf565b506018546001600160a01b03163314611ac8565b506014546001600160a01b03163314611ac1565b506013546001600160a01b03163314611aba565b506012546001600160a01b03163314611ab3565b506011546001600160a01b03163314611aac565b506010546001600160a01b03163314611aa5565b3461044f57604036600319011261044f57611b9f614c82565b3033148015611c72575b8015611c5e575b8015611c4a575b8015611c36575b8015611c22575b8015611c0e575b8015611bfa575b611bdc906150c2565b6001600160a01b031660009081526025602052604090206024359055005b506019546001600160a01b03163314611bd3565b506018546001600160a01b03163314611bcc565b506014546001600160a01b03163314611bc5565b506013546001600160a01b03163314611bbe565b506012546001600160a01b03163314611bb7565b506011546001600160a01b03163314611bb0565b506010546001600160a01b03163314611ba9565b3461044f57600036600319011261044f576020600054604051908152f35b3461044f57600036600319011261044f57604060015460ff6002541682519182526020820152f35b3461044f57602036600319011261044f5760206001600160a01b0380611cf0614c82565b16600052602e825260406000205416604051908152f35b3461044f57604036600319011261044f57611d20614c82565b3033148015611df7575b8015611de3575b8015611dcf575b8015611dbb575b8015611da7575b8015611d93575b8015611d7f575b611d5d906150c2565b60018060a01b0316600052601a60205260406000206104d16024358254615115565b506019546001600160a01b03163314611d54565b506018546001600160a01b03163314611d4d565b506014546001600160a01b03163314611d46565b506013546001600160a01b03163314611d3f565b506012546001600160a01b03163314611d38565b506011546001600160a01b03163314611d31565b506010546001600160a01b03163314611d2a565b3461044f57611e58611e1c36614f9c565b929091611e2b60045482615122565b60018060a01b03809416600052601a602052611e4d6040600020918254614f49565b905560055490615122565b9116600052601a6020526104d16040600020918254614f49565b3461044f576020611e8236614f56565b9390923033148015611f67575b8015611f53575b8015611f3f575b8015611f2b575b8015611f17575b8015611f03575b8015611eef575b611ec2906150c2565b826040519384928337810160328152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b03163314611eb9565b506018546001600160a01b03163314611eb2565b506014546001600160a01b03163314611eab565b506013546001600160a01b03163314611ea4565b506012546001600160a01b03163314611e9d565b506011546001600160a01b03163314611e96565b506010546001600160a01b03163314611e8f565b3461044f57604036600319011261044f57611f94614c82565b611f9c614c98565b9060018060a01b038091166000526024602052604060002091166000526020526020604060002054604051908152f35b3461044f57611fda36614cc4565b9130331480156120ba575b80156120a6575b8015612092575b801561207e575b801561206a575b8015612056575b8015612042575b612018906150c2565b60018060a01b03809116600052602460205260406000209116600052602052604060002055600080f35b506019546001600160a01b0316331461200f565b506018546001600160a01b03163314612008565b506014546001600160a01b03163314612001565b506013546001600160a01b03163314611ffa565b506012546001600160a01b03163314611ff3565b506011546001600160a01b03163314611fec565b506010546001600160a01b03163314611fe5565b3461044f57602036600319011261044f5760006101a06040516120f081614d9c565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152826101808201520152600435600052601e6020526101c060406000206101a060405161216481614d9c565b600d60018060a01b038454169384835260018060a01b0360018201541660208401526002810154604084015260018060a01b03600382015416606084015260048101546080840152600581015460a0840152600681015460c084015260ff600782015416151560e08401526008810154610100840152600981015461012084015260018060a01b03600a8201541661014084015260018060a01b03600b8201541661016084015260018060a01b03600c8201541661018084015201548282015260405192835260018060a01b0360208201511660208401526040810151604084015260018060a01b0360608201511660608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015161010084015261012081015161012084015260018060a01b036101408201511661014084015260018060a01b036101608201511661016084015260018060a01b036101808201511661018084015201516101a0820152f35b3461044f57602036600319011261044f5733600052602b602052600435604060002055600080f35b3461044f57600036600319011261044f576020601d54604051908152f35b3461044f573660031901610560811261044f576103801361044f5760405161234d81614d80565b60043581526024356020808301919091526001600160a01b0390604435828116810361044f5760408401526064356060840152608435608084015260a43560a084015260c43560c084015260e435828116810361044f5760e084015261010091610104358385015261012061012435818601526101443560ff8116810361044f57610140908187015261016095610164358782015261018061018435818301526101a06101a435818401526101c06101c435818501526101e4356101e085015261020435610200850152610224356102208501526102443561024085015261026435610260850152610284356102808501526102a4356102a08501526102c4356102c08501526102e4356102e085015261030435878116810361044f5761030085015261032435801515810361044f5761032085015261034435610340850152610364356103608501523661038319011261044f57604051916124af83614d9c565b61038435878116810361044f5783526103a43599878b168b0361044f578884019a8b526103c43560408501526103e435888116810361044f576060850152608084019661040435885260a085019a610424358c526104443560c087015261046435801515810361044f5760e087015261048435908601528401956104a43587526104c43590898216820361044f578501526104e43590888216820361044f578401526105043590878216820361044f578301526105243590820152610544359230331480156127c0575b80156127b3575b80156127a6575b8015612799575b801561278c575b801561277f575b8015612772575b6125ac906150c2565b51600281148015612768575b156126ad57508481511661263c575b50838751166125d257005b603095670de0b6b3a76400006125f9612625956125f1612602956155cc565b905190615122565b04905190615122565b908387511660005260318552604060002090600052845260406000205490615115565b935116600052526104d16040600020918254614f49565b8461268b612669670de0b6b3a7640000612660612658876155cc565b895190615122565b048a5190615122565b8284511660005260318952604060002086600052895260406000205490615115565b915116600052603086526126a56040600020918254614f49565b9055876125c7565b9296509250506003811490811561275d575b8115612752575b506126cd57005b8181511680612716575b5050808451169283156109a957603093600052603183526040600020906000528252604060002054935116600052526104d16040600020918254615115565b60005260318352604060002084600052835281604060002054915116600052603083526127496040600020918254615115565b905584806126d7565b6004915014866126c6565b6004811491506126bf565b50600181146125b8565b50601954861633146125a3565b508560185416331461259c565b5085601454163314612595565b508560135416331461258e565b5085601254163314612587565b5085601154163314612580565b5085601054163314612579565b3461044f57602036600319011261044f576001600160a01b036127ee614c82565b16600052602360205260406000206104d18154615106565b3461044f57600036600319011261044f5760206040516fa2a8918ca85bafe22016d0b997e4df5f600160ff1b038152f35b3461044f57604036600319011261044f57612850614c82565b3033148015612927575b8015612913575b80156128ff575b80156128eb575b80156128d7575b80156128c3575b80156128af575b61288d906150c2565b60018060a01b0316600052603060205260406000206104d16024358254614f49565b506019546001600160a01b03163314612884565b506018546001600160a01b0316331461287d565b506014546001600160a01b03163314612876565b506013546001600160a01b0316331461286f565b506012546001600160a01b03163314612868565b506011546001600160a01b03163314612861565b506010546001600160a01b0316331461285a565b3461044f57602061294b36614e4d565b929091826040519384928337810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b036129a1614c82565b1660005260266020526020604060002054604051908152f35b3461044f57600036600319011261044f576020601b54604051908152f35b3461044f57604036600319011261044f576129f1614c82565b3033148015612ac8575b8015612ab4575b8015612aa0575b8015612a8c575b8015612a78575b8015612a64575b8015612a50575b612a2e906150c2565b60018060a01b0316600052602f60205260406000206104d16024358254614f49565b506019546001600160a01b03163314612a25565b506018546001600160a01b03163314612a1e565b506014546001600160a01b03163314612a17565b506013546001600160a01b03163314612a10565b506012546001600160a01b03163314612a09565b506011546001600160a01b03163314612a02565b506010546001600160a01b031633146129fb565b3461044f57602036600319011261044f576109a96fa2a8918ca85bafe22016d0b997e4df5f600160ff1b03600435106155e9565b3461044f5760e036600319011261044f576001600160401b0360043581811161044f57612b41903690600401614e20565b91606036604319011261044f57604051606081018181108382111761138b5760405260443581526064356001600160a01b038116810361044f576020820152612b88614cae565b6040820152604060a31936011261044f576040519160408301908382109082111761138b5760405260a435825260c4359260ff8416840361044f57602094610445948685015260243591615530565b3461044f57602036600319011261044f576000610360604051612bf981614d80565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015282610220820152826102408201528261026082015282610280820152826102a0820152826102c0820152826102e08201528261030082015282610320820152826103408201520152600435600052601c6020526103806040600020610360604051612ccf81614d80565b601a8354938483526001810154602084015260018060a01b0360028201541660408401526003810154606084015260048101546080840152600581015460a0840152600681015460c084015260018060a01b0360078201541660e08401526008810154610100840152600981015461012084015260ff600a82015416610140840152600b810154610160840152600c810154610180840152600d8101546101a0840152600e8101546101c0840152600f8101546101e08401526010810154610200840152601181015461022084015260128101546102408401526013810154610260840152601481015461028084015260158101546102a084015260168101546102c084015260178101546102e084015260ff601882015460018060a01b03811661030086015260a01c16151561032084015260198101546103408401520154828201526040519283526020810151602084015260018060a01b036040820151166040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260018060a01b0360e08201511660e084015261010081015161010084015261012081015161012084015260ff610140820151166101408401526101608101516101608401526101808101516101808401526101a08101516101a08401526101c08101516101c08401526101e08101516101e08401526102008101516102008401526102208101516102208401526102408101516102408401526102608101516102608401526102808101516102808401526102a08101516102a08401526102c08101516102c08401526102e08101516102e084015260018060a01b036103008201511661030084015261032081015115156103208401526103408101516103408401520151610360820152f35b3461044f5761026036600319011261044f57612f84614c82565b6001600160a01b039061016435828116919082900361044f57610184359083821680920361044f576101a43584811680910361044f576101c43585811680910361044f576101e43586811680910361044f57610204359187831680930361044f57610224359388851680950361044f57610244359689881680980361044f576037549860ff8a1661044f5760019a6001600160601b0360a01b981688600f541617600f5560243560035560443560045560643560055560843560065560a43560075560c43560085560e43560095561010435600a5561012435600b5561014435600c5587600d541617600d5586600e541617600e55856010541617601055846011541617601155836012541617601255826014541617601455816018541617601855601954161760195560ff191617603755600080f35b3461044f57602036600319011261044f5733600052602c602052600435604060002055600080f35b3461044f57602036600319011261044f576001600160a01b03613104614c82565b1660005260346020526020604060002054604051908152f35b3461044f5761312b36614ec5565b90604051908181519160005b83811061316c575050602091810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001613137565b3461044f57600036600319011261044f576020600954604051908152f35b3461044f57604036600319011261044f576131b8614c82565b303314801561328b575b8015613277575b8015613263575b801561324f575b801561323b575b8015613227575b8015613213575b6131f5906150c2565b6001600160a01b031660009081526026602052604090206024359055005b506019546001600160a01b031633146131ec565b506018546001600160a01b031633146131e5565b506014546001600160a01b031633146131de565b506013546001600160a01b031633146131d7565b506012546001600160a01b031633146131d0565b506011546001600160a01b031633146131c9565b506010546001600160a01b031633146131c2565b3461044f57604036600319011261044f576132b8614c82565b3033148015613391575b801561337d575b8015613369575b8015613355575b8015613341575b801561332d575b8015613319575b6132f5906150c2565b6001600160a01b03166000908152602d60205260409020805461044f576024359055005b506019546001600160a01b031633146132ec565b506018546001600160a01b031633146132e5565b506014546001600160a01b031633146132de565b506013546001600160a01b031633146132d7565b506012546001600160a01b031633146132d0565b506011546001600160a01b031633146132c9565b506010546001600160a01b031633146132c2565b3461044f57602036600319011261044f576001600160a01b036133c6614c82565b16600052602a6020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b03613400614c82565b1660005260256020526020604060002054604051908152f35b614e8f565b3461044f57604036600319011261044f57613437614c82565b602435903033148015613576575b8015613562575b801561354e575b801561353a575b8015613526575b8015613512575b80156134fe575b613478906150c2565b6001600160a01b03166000818152603460209081526040909120549192909181146134ba57603692600052603582526040600020555242604060002055600080f35b50603681526040600020546201518081018091116108f05742116134da57005b60369160005260358152604060002054603482526040600020555260006040812055005b506019546001600160a01b0316331461346f565b506018546001600160a01b03163314613468565b506014546001600160a01b03163314613461565b506013546001600160a01b0316331461345a565b506012546001600160a01b03163314613453565b506011546001600160a01b0316331461344c565b506010546001600160a01b03163314613445565b3461044f57602036600319011261044f576001600160a01b036135ab614c82565b16600052602d6020526020604060002054604051908152f35b3461044f57604036600319011261044f576135dd614c82565b30331480156136b0575b801561369c575b8015613688575b8015613674575b8015613660575b801561364c575b8015613638575b61361a906150c2565b6001600160a01b031660009081526030602052604090206024359055005b506019546001600160a01b03163314613611565b506018546001600160a01b0316331461360a565b506014546001600160a01b03163314613603565b506013546001600160a01b031633146135fc565b506012546001600160a01b031633146135f5565b506011546001600160a01b031633146135ee565b506010546001600160a01b031633146135e7565b3461044f57600036600319011261044f576020600c54604051908152f35b3461044f57604036600319011261044f576136fb614c82565b30331480156137d2575b80156137be575b80156137aa575b8015613796575b8015613782575b801561376e575b801561375a575b613738906150c2565b60018060a01b0316600052602f60205260406000206104d16024358254615115565b506019546001600160a01b0316331461372f565b506018546001600160a01b03163314613728565b506014546001600160a01b03163314613721565b506013546001600160a01b0316331461371a565b506012546001600160a01b03163314613713565b506011546001600160a01b0316331461370c565b506010546001600160a01b03163314613705565b3461044f57600036600319011261044f576020600854604051908152f35b3461044f57604036600319011261044f5761381d614c82565b30331480156138f4575b80156138e0575b80156138cc575b80156138b8575b80156138a4575b8015613890575b801561387c575b61385a906150c2565b60018060a01b0316600052602560205260406000206104d16024358254615115565b506019546001600160a01b03163314613851565b506018546001600160a01b0316331461384a565b506014546001600160a01b03163314613843565b506013546001600160a01b0316331461383c565b506012546001600160a01b03163314613835565b506011546001600160a01b0316331461382e565b506010546001600160a01b03163314613827565b3461044f57602061391836614e4d565b929091826040519384928337810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f57600036600319011261044f576020600b54604051908152f35b3461044f57602036600319011261044f576001600160a01b0361398c614c82565b1660005260286020526020604060002054604051908152f35b3461044f57602036600319011261044f57600060e06040516139c681614d64565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201520152600435600052601f6020526101006040600020604051613a0e81614d64565b60018060a01b039182815416928383526001820154602084019081528160028401546040860160ff821615158152606087019060ff8360081c161515825283608089019360101c168352836003880154169460a0890195865260e0600560048a01549960c08c019a8b5201549901988952604051998a525160208a01525115156040890152511515606088015251166080860152511660a08401525160c08301525160e0820152f35b3461044f57600036600319011261044f57610180600354600454600554600654600754600854600954600a5491600b5493600c549560018060a01b039788600d541698600e5416996040519b8c5260208c015260408b015260608a0152608089015260a088015260c087015260e0860152610100850152610120840152610140830152610160820152f35b3461044f57604036600319011261044f57613b5b614c82565b3033148015613c32575b8015613c1e575b8015613c0a575b8015613bf6575b8015613be2575b8015613bce575b8015613bba575b613b98906150c2565b60018060a01b0316600052601a60205260406000206104d16024358254614f49565b506019546001600160a01b03163314613b8f565b506018546001600160a01b03163314613b88565b506014546001600160a01b03163314613b81565b506013546001600160a01b03163314613b7a565b506012546001600160a01b03163314613b73565b506011546001600160a01b03163314613b6c565b506010546001600160a01b03163314613b65565b3461044f57600036600319011261044f576020600354604051908152f35b3461044f5760e036600319011261044f57613c7d614c98565b60a036604319011261044f57604051613c9581614d49565b6044358152602081019160643583526040820160843581526060830160a435815260c43591821515830361044f576109a995600494608087019485523033148015613dd4575b8015613dc0575b8015613dac575b8015613d98575b8015613d84575b8015613d70575b8015613d5c575b613d0e906150c2565b85356000526020805260406000209060018060a01b031660005260205260406000209551865551600186015551600285015551600384015551151591019060ff801983541691151516179055565b506019546001600160a01b03163314613d05565b506018546001600160a01b03163314613cfe565b506014546001600160a01b03163314613cf7565b506013546001600160a01b03163314613cf0565b506012546001600160a01b03163314613ce9565b506011546001600160a01b03163314613ce2565b506010546001600160a01b03163314613cdb565b3461044f57604036600319011261044f57613e01614c82565b3033148015613ed8575b8015613ec4575b8015613eb0575b8015613e9c575b8015613e88575b8015613e74575b8015613e60575b613e3e906150c2565b60018060a01b0316600052602660205260406000206104d16024358254615115565b506019546001600160a01b03163314613e35565b506018546001600160a01b03163314613e2e565b506014546001600160a01b03163314613e27565b506013546001600160a01b03163314613e20565b506012546001600160a01b03163314613e19565b506011546001600160a01b03163314613e12565b506010546001600160a01b03163314613e0b565b3461044f57602036600319011261044f576001600160a01b03613f0d614c82565b1660005260236020526020604060002054604051908152f35b3461044f576103a036600319011261044f5761038036602319011261044f57604051613f5181614d80565b602435815260443560208201526064356001600160a01b038116810361044f576040820152608435606082015260a435608082015260c43560a082015260e43560c0820152610104356001600160a01b038116810361044f5760e082015261012435610100820152610144356101208201526101643560ff8116810361044f57610140820152610184356101608201526101a4356101808201526101c4356101a08201526101e4356101c0820152610204356101e0820152610224356102008201526102443561022082015261026435610240820152610284356102608201526102a4356102808201526102c4356102a08201526102e4356102c0820152610304356102e0820152610324356001600160a01b038116900361044f5761032435610300820152610344351515610344350361044f5761034435610320820152610364356103408201526103843561036082015230331480156142ee575b80156142da575b80156142c6575b80156142b2575b801561429e575b801561428a575b8015614276575b6140e1906150c2565b600435600052601c602052601a61036060406000209280518455602081015160018501556002840160018060a01b03604083015116906001600160601b0360a01b9182825416179055606082015160038601556080820151600486015560a0820151600586015560c08201516006860155600785019060018060a01b0360e0840151169082541617905561010081015160088501556101208101516009850155600a840160ff6101408301511660ff19825416179055610160810151600b850155610180810151600c8501556101a0810151600d8501556101c0810151600e8501556101e0810151600f850155610200810151601085015561022081015160118501556102408101516012850155610260810151601385015561028081015160148501556102a081015160158501556102c081015160168501556102e081015160178501556018840160018060a01b036103008301511681549060ff60a01b610320850151151560a01b16916affffffffffffffffffffff60a81b161717905561034081015160198501550151910155600080f35b506019546001600160a01b031633146140d8565b506018546001600160a01b031633146140d1565b506014546001600160a01b031633146140ca565b506013546001600160a01b031633146140c3565b506012546001600160a01b031633146140bc565b506011546001600160a01b031633146140b5565b506010546001600160a01b031633146140ae565b3461044f57602036600319011261044f576001600160a01b03614323614c82565b1660005260306020526020604060002054604051908152f35b3461044f57604036600319011261044f57614355614c82565b61435d614c98565b903033148015614444575b8015614430575b801561441c575b8015614408575b80156143f4575b80156143e0575b80156143cc575b61439b906150c2565b6001600160a01b039081166000908152602e6020526040902080546001600160a01b03191692909116919091179055005b506019546001600160a01b03163314614392565b506018546001600160a01b0316331461438b565b506014546001600160a01b03163314614384565b506013546001600160a01b0316331461437d565b506012546001600160a01b03163314614376565b506011546001600160a01b0316331461436f565b506010546001600160a01b03163314614368565b614df7565b3461044f57600036600319011261044f573033148015614533575b801561451f575b801561450b575b80156144f7575b80156144e3575b80156144cf575b80156144bb575b6144ab906150c2565b6144b6601b54615106565b601b55005b506019546001600160a01b031633146144a2565b506018546001600160a01b0316331461449b565b506014546001600160a01b03163314614494565b506013546001600160a01b0316331461448d565b506012546001600160a01b03163314614486565b506011546001600160a01b0316331461447f565b506010546001600160a01b03163314614478565b3461044f57600036600319011261044f57303314801561461d575b8015614609575b80156145f5575b80156145e1575b80156145cd575b80156145b9575b80156145a5575b614595906150c2565b6145a0601d54615106565b601d55005b506019546001600160a01b0316331461458c565b506018546001600160a01b03163314614585565b506014546001600160a01b0316331461457e565b506013546001600160a01b03163314614577565b506012546001600160a01b03163314614570565b506011546001600160a01b03163314614569565b506010546001600160a01b03163314614562565b3461044f576101e036600319011261044f576101c036602319011261044f5760405161465c81614d9c565b6024356001600160a01b038116810361044f5781526044356001600160a01b038116810361044f57602082015260643560408201526084356001600160a01b038116810361044f57606082015260a435608082015260c43560a082015260e43560c082015261010435801515810361044f5760e08201526101243561010082015261014435610120820152610164356001600160a01b038116810361044f57610140820152610184356001600160a01b038116810361044f576101608201526101a4356001600160a01b038116900361044f576101a4356101808201526101c4356101a08201523033148015614925575b8015614911575b80156148fd575b80156148e9575b80156148d5575b80156148c1575b80156148ad575b614780906150c2565b600435600052601e602052600d6101a060406000209260018060a01b038151166001600160601b0360a01b8554161784556001840160018060a01b036020830151166001600160601b0360a01b825416179055604081015160028501556003840160018060a01b036060830151166001600160601b0360a01b8254161790556080810151600485015560a0810151600585015560c0810151600685015561483c60e08201511515600786019060ff801983541691151516179055565b61010081015160088501556101208101516009850155610140810151600a850180546001600160a01b039283166001600160a01b031991821617909155610160830151600b87018054918416918316919091179055610180830151600c870180549190931691161790550151910155005b506019546001600160a01b03163314614777565b506018546001600160a01b03163314614770565b506014546001600160a01b03163314614769565b506013546001600160a01b03163314614762565b506012546001600160a01b0316331461475b565b506011546001600160a01b03163314614754565b506010546001600160a01b0316331461474d565b3461044f57602036600319011261044f576001600160a01b0361495a614c82565b1660005260296020526020604060002054604051908152f35b3461044f57602036600319011261044f57600061010060405161499581614d2d565b606081526060602082015260606040820152606080820152606060808201528260a08201528260c08201528260e08201520152600435600052602260205260406000206008604051916149e783614d2d565b6149f081615071565b83526149fe60018201615071565b6020840152614a0f60028201615071565b6040840152614a2060038201615071565b6060840152614a3160048201615071565b608084015260018060a01b0360058201541660a0840152600681015460c0840152600781015460e084015201546101008201526040518091602082528051610100614aec614a8d61012093846020880152610140870190614cf9565b614ad7614ac3614aaf602088015193601f1994858b83030160408c0152614cf9565b6040880151848a83030160608b0152614cf9565b6060870151838983030160808a0152614cf9565b906080860151908783030160a0880152614cf9565b9260018060a01b0360a08201511660c086015260c081015160e086015260e0810151828601520151908301520390f35b3461044f57600036600319011261044f57600d546040516001600160a01b039091168152602090f35b3461044f57614b5336614cc4565b913033148015614c38575b8015614c24575b8015614c10575b8015614bfc575b8015614be8575b8015614bd4575b8015614bc0575b614b91906150c2565b60018060a01b038091166000526024602052604060002091166000526020526104d16040600020918254614f49565b506019546001600160a01b03163314614b88565b506018546001600160a01b03163314614b81565b506014546001600160a01b03163314614b7a565b506013546001600160a01b03163314614b73565b506012546001600160a01b03163314614b6c565b506011546001600160a01b03163314614b65565b506010546001600160a01b03163314614b5e565b3461044f57602036600319011261044f576020906001600160a01b03614c70614c82565b16600052602f82526040600020548152f35b600435906001600160a01b038216820361044f57565b602435906001600160a01b038216820361044f57565b608435906001600160a01b038216820361044f57565b606090600319011261044f576001600160a01b0390600435828116810361044f5791602435908116810361044f579060443590565b90815180825260208080930193019160005b828110614d19575050505090565b835185529381019392810192600101614d0b565b61012081019081106001600160401b0382111761138b57604052565b60a081019081106001600160401b0382111761138b57604052565b61010081019081106001600160401b0382111761138b57604052565b61038081019081106001600160401b0382111761138b57604052565b6101c081019081106001600160401b0382111761138b57604052565b90601f801991011681019081106001600160401b0382111761138b57604052565b60643590811515820361044f57565b60843590811515820361044f57565b3461044f57600036600319011261044f57600f546040516001600160a01b039091168152602090f35b9181601f8401121561044f578235916001600160401b03831161044f576020838186019501011161044f57565b604060031982011261044f57600435906001600160401b03821161044f57614e7791600401614e20565b90916024356001600160a01b038116810361044f5790565b3461044f57602036600319011261044f5760018060a01b03600d5416600052601a60205260406000206104d16004358254614f49565b604060031982011261044f576001600160401b0360043581811161044f578260238201121561044f57806004013591821161138b5760405192614f12601f8401601f191660200185614db8565b8284526024838301011161044f57816000926024602093018386013783010152906024356001600160a01b038116810361044f5790565b919082018092116108f057565b606060031982011261044f57600435906001600160401b03821161044f57614f8091600401614e20565b90916024356001600160a01b038116810361044f579060443590565b606090600319011261044f57600435906001600160a01b0390602435828116810361044f5791604435908116810361044f5790565b3461044f57602036600319011261044f576001600160a01b03614ff2614c82565b16600052601a6020526020604060002054604051908152f35b9080601f8301121561044f578135906001600160401b03821161138b578160051b6040519360209361503f85840187614db8565b8552838086019282010192831161044f578301905b828210615062575050505090565b81358152908301908301615054565b9060405191828154918282526020928383019160005283600020936000905b8282106150a8575050506150a692500383614db8565b565b855484526001958601958895509381019390910190615090565b156150c957565b60405162461bcd60e51b815260206004820152601560248201527410d85b1b195c881b9bdd08185d5d1a1bdc9a5e9959605a1b6044820152606490fd5b60001981146108f05760010190565b919082039182116108f057565b818102929181159184041417156108f057565b303314801561521d575b8015615209575b80156151f5575b80156151e1575b80156151cd575b80156151b9575b80156151a5575b615172906150c2565b60018060a01b038091166000526024602052604060002091166000526020526151a16040600020918254615115565b9055565b506019546001600160a01b03163314615169565b506018546001600160a01b03163314615162565b506014546001600160a01b0316331461515b565b506013546001600160a01b03163314615154565b506012546001600160a01b0316331461514d565b506011546001600160a01b03163314615146565b506010546001600160a01b0316331461513f565b9290911561526a57506152448183615340565b9060018060a01b0316600052601a6020526152656040600020918254614f49565b905590565b6001600160a01b039091166000818152601a6020908152604080832080549396919592949380831061532d5750508286526029845284862054601a85526152b5868820918254614f49565b905582865260298452848620869055602a8452848620429055601a8452848620805480831061532d575050506152f5578352601a90528120805491905590565b50606491519062461bcd60e51b8252600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152fd5b9250945094506152659250849150615115565b600091338352602060278152604093848120544281036153f1575b506001600160a01b03909216808352602582528483205490937fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a939186908281106153c3575050848252602683526153b7868320918254614f49565b9055935b51848152a290565b926153eb93602686526153da838320918254614f49565b905586815260258552205490615115565b936153bb565b6153fb9042615115565b923382526025835285822054865194632762fe1b60e11b86526702c68af0bb14000060048701526024860152670de0b6b3a764000060448601526064850152828460848173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af480156155065782906154af575b7fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a94503383526025845261549b878420918254614f49565b90553382526027835242868320559261535b565b509091928381813d83116154ff575b6154c88183614db8565b810103126154fb57907fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a93929151615463565b8280fd5b503d6154be565b86513d84823e3d90fd5b811561551a570490565b634e487b7160e01b600052601260045260246000fd5b9092939161555b90835190602085019660ff885116815191604060018060a01b03910151169361562e565b156155c3578260ff7f77e158c4de5b89cd65592962239c3cc6136696032ecc462ad1b04af14e8df53b956080946040519687956060875281606088015287870137600085850187015251602085015251166040830152601f01601f19168101030190a1600190565b50505050600090565b9060009160016102c0820151146155e05750565b6101e001519150565b156155f057565b60405162461bcd60e51b81526020600482015260166024820152755075626c69632d6b65792078203e3d2048414c465f5160501b6044820152606490fd5b91906156516fa2a8918ca85bafe22016d0b997e4df5f600160ff1b0384106155e9565b70014551231950b75fc4402da1732fc9bebe199485831015615793576001600160a01b03818116969095908715158061578a575b80615781575b80615778575b1561573a576040519160208301936001600160601b03199060601b16845260348301526034825260608201928284106001600160401b0385111761138b57819084604052835190209587098103908082116108f05760209660009660ff60c0948160809916158a1461573257601b905b885216878601528160a08601520991015282805260015afa1561572657600051161490565b6040513d6000823e3d90fd5b601c90615701565b60405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606490fd5b50811515615691565b5084151561568b565b50851515615685565b60405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b6064820152608490fdfea26469706673582212201ab9b2e78cf32704e7cc5304d79c2cd9c21d4d9652c6644d4a9ac537596a1ec464736f6c63430008140033',
  linkReferences: {
    'contracts/Libs/PionerV1Utils.sol': {
      PionerV1Utils: [
        {
          length: 20,
          start: 21598,
        },
      ],
    },
  },
  deployedLinkReferences: {
    'contracts/Libs/PionerV1Utils.sol': {
      PionerV1Utils: [
        {
          length: 20,
          start: 21569,
        },
      ],
    },
  },
};
