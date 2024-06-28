export const PionerV1 = {
  "_format": "hh-sol-artifact-1",
  "contractName": "PionerV1",
  "sourceName": "contracts/Functions/PionerV1.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "deficit",
          "type": "uint256"
        }
      ],
      "name": "AddToOwedEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ClaimOwedEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "reqId",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "x",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "parity",
              "type": "uint8"
            }
          ],
          "indexed": false,
          "internalType": "struct MuonClientBase.PublicKey",
          "name": "pubKey",
          "type": "tuple"
        }
      ],
      "name": "MuonTX",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "returnedAmount",
          "type": "uint256"
        }
      ],
      "name": "PayOwedEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "bOracleLength",
          "type": "uint256"
        }
      ],
      "name": "deployPriceFeedEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "bOracleId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lastPrice",
          "type": "uint256"
        }
      ],
      "name": "updatePricePythEvent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "HALF_Q",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "Q",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "addBCloseQuoteLength",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "addBContractLength",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "addBOracleLength",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "addBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "addCumImBalances",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "addGracePeriodLockedWithdrawBalances",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "addMintedAmounts",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "addOpenPositionNumber",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "counterparty",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "addOwedAmount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "deficit",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "addToOwed",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "cancelledCloseQuotes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "cancelledOpenQuotes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "claimOwed",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "decreaseOpenPositionNumber",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "counterparty",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "decreaseOwedAmount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "decreaseTotalOwedAmount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "decreaseTotalOwedAmountPaid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getAccountToToken",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllStateVariables",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "minNotional",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "frontendShare",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "affiliationShare",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "hedgerShare",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pionerDaoShare",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalShare",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "defaultAuctionPeriod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cancelTimeBuffer",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxOpenPositions",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "gracePeriod",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "pionerDao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getAvgOpenOwedTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBALANCETOKEN",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getBCloseQuote",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "bContractId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "limitOrStop",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "initiator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "cancelTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "openTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "state",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.bCloseQuote",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBCloseQuoteLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "closeQuoteLength",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getBContract",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "pA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "pB",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "oracleId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "initiator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "interestRate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isAPayingAPR",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "openTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "state",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "frontEnd",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "hedger",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "affiliate",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "cancelTime",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.bContract",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBContractLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "contractLength",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "getBContractTransferQuote",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "transferOffer",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "transferOfferBribe",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "transferMethod",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "transferQuoteExpiry",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "transferSide",
              "type": "bool"
            }
          ],
          "internalType": "struct PionerV1Utils.bContractTransferQuote",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getBContractUpdate",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "oracleChangeInitializer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "oracleChangeId",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isTranferAInit",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isTranferBInit",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "targetTransferA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "targetTransferB",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "transferBribeA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "transferBribeB",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.bContractUpdate",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getBOracle",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "assetHex",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "oracleType",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "priceFeedAddress",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "pythAddress1",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "pythAddress2",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "lastBid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastAsk",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "publicOracleAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "maxConfidence",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "x",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "parity",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "maxDelay",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "precision",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastPriceUpdateTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "imA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "imB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dfA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dfB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiryA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiryB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeLock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "cType",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "forceCloseType",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "kycAddress",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "deployTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "marketCloseFee",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.bOracle",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getBOracleIdStable",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBOracleLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "oracleLength",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalanceToken",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getBalances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCancelTimeBuffer",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "id",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "getCancelledCloseQuotes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "id",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "getCancelledOpenQuotes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getClaimedKycIrAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getCumImBalances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDefaultAuctionPeriod",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "getFeeShare",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getGRACE_PERIOD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getGracePeriodLockedTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getGracePeriodLockedWithdrawBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMaxOpenPositions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMinNotional",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getMinimumOpenPartialFillNotional",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getMintedAmounts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getOpenPositionNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "counterparty",
          "type": "address"
        }
      ],
      "name": "getOwedAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPIONERV1WRAPPERADDRESS",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPionerDao",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getSponsorReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getTotalOwedAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getTotalOwedAmountPaid",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalShare",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "muonAppId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "muonPublicKey",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "x",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "parity",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "reqId",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "hash",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "signature",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "nonce",
              "type": "address"
            }
          ],
          "internalType": "struct MuonClientBase.SchnorrSign",
          "name": "signature",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "x",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "parity",
              "type": "uint8"
            }
          ],
          "internalType": "struct MuonClientBase.PublicKey",
          "name": "pubKey",
          "type": "tuple"
        }
      ],
      "name": "muonVerify",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "payFundingShare",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "payLiquidationShare",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "im",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isA",
          "type": "bool"
        }
      ],
      "name": "paySponsor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "frontend",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "affiliate",
          "type": "address"
        }
      ],
      "name": "payTradingFeeShare",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "removeBalance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "removeCumImBalances",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "removeGracePeriodLockedWithdrawBalances",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "removeMintedAmounts",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "counterparty",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "removeOwedAmount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "setAccountToToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "bContractId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "limitOrStop",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "initiator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "cancelTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "openTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "state",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.bCloseQuote",
          "name": "newCloseQuote",
          "type": "tuple"
        }
      ],
      "name": "setBCloseQuote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "pA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "pB",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "oracleId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "initiator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "interestRate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isAPayingAPR",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "openTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "state",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "frontEnd",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "hedger",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "affiliate",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "cancelTime",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.bContract",
          "name": "newContract",
          "type": "tuple"
        }
      ],
      "name": "setBContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "transferOffer",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "transferOfferBribe",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "transferMethod",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "transferQuoteExpiry",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "transferSide",
              "type": "bool"
            }
          ],
          "internalType": "struct PionerV1Utils.bContractTransferQuote",
          "name": "newBContractTransferQuote",
          "type": "tuple"
        }
      ],
      "name": "setBContractTransferQuote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "oracleChangeInitializer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "oracleChangeId",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isTranferAInit",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isTranferBInit",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "targetTransferA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "targetTransferB",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "transferBribeA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "transferBribeB",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.bContractUpdate",
          "name": "newContractUpdate",
          "type": "tuple"
        }
      ],
      "name": "setBContractUpdate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "assetHex",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "oracleType",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "priceFeedAddress",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "pythAddress1",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "pythAddress2",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "lastBid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastAsk",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "publicOracleAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "maxConfidence",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "x",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "parity",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "maxDelay",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "precision",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastPriceUpdateTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "imA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "imB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dfA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dfB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiryA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiryB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeLock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "cType",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "forceCloseType",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "kycAddress",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "deployTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "marketCloseFee",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.bOracle",
          "name": "newOracle",
          "type": "tuple"
        }
      ],
      "name": "setBOracle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "sign",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "revertMode",
          "type": "bool"
        }
      ],
      "name": "setBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "id",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "setCancelledCloseQuotes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "id",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "setCancelledOpenQuotes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "daiAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "min_notional",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "frontend_share",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "affiliation_share",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "hedger_share",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pioner_dao_share",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "total_share",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "default_auction_period",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cancel_time_buffer",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "max_open_positions",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "grace_period",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "pioner_dao",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_PIONERV1OPEN",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_PIONERV1CLOSE",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_PIONERV1DEFAULT",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_PIONERV1COMPLIANCE",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_PIONERV1ORACLE",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_PIONERV1WRAPPER",
          "type": "address"
        }
      ],
      "name": "setContactAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "setCumImBalances",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "newShare",
          "type": "uint256"
        }
      ],
      "name": "setFeeShare",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "id",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "setGracePeriodLockedTime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "counterparty",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "setOwedAmount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "setTotalOwedAmount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "setTotalOwedAmountPaid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "kyc",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "setbOracleIdStable",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "assetHex",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "oracleType",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "priceFeedAddress",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "pythAddress1",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "pythAddress2",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "lastBid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastAsk",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "publicOracleAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "maxConfidence",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "x",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "parity",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "maxDelay",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "precision",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastPriceUpdateTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "imA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "imB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dfA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dfB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiryA",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiryB",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeLock",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "cType",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "forceCloseType",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "kycAddress",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "deployTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "marketCloseFee",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.bOracle",
          "name": "bO",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "pA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "pB",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "oracleId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "initiator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "interestRate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isAPayingAPR",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "openTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "state",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "frontEnd",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "hedger",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "affiliate",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "cancelTime",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.bContract",
          "name": "bC",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "bContractId",
          "type": "uint256"
        }
      ],
      "name": "updateCumIm",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newAmount",
          "type": "uint256"
        }
      ],
      "name": "updateMinimumOpenPartialFillNotional",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newAmount",
          "type": "uint256"
        }
      ],
      "name": "updateSponsorReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "signingPubKeyX",
          "type": "uint256"
        }
      ],
      "name": "validatePubKey",
      "outputs": [],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "signingPubKeyX",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "pubKeyYParity",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "signature",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "msgHash",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "nonceTimesGeneratorAddress",
          "type": "address"
        }
      ],
      "name": "verifySignature",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ],
  "bytecode": "0x608080604052346100165761535d908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c90816302ad7f431461485a5750806303339c861461475357806304618e6b1461472a57806306faa448146146055780630b671e6f146145cb5780630c965b31146142c35780630cdbf967146141d95780630e129569146140ea57806311d7e2a0146140ef5780631425d2fa146140ea578063154c7d1e14613fce57806315c8687814613f9457806317c6a54914613bb857806318967df814613b7e5780631cd8e70014613a7a5780631d74b67d146138f65780631da5475e146138d857806321e5383a146137d45780632b08fc15146137495780632eb41cf814613637578063304e24e9146135fd5780633205b1d7146135df578063359c02f01461342e57806339bbfb91146133e95780633a1ebe0c146132e55780633f06cd66146132c757806343c3cc85146131c357806345ba6a82146131a557806346192c9c146130a557806348d29b191461098e5780634f5eddd814612efa57806355804d061461306b578063564f360e14612eff57806357b00f1d14612efa5780635dee283914612ec057806361dbb3b214612e865780636526adbe14612d805780636639013f14612c8057806367aeb0f314612c6257806367cf9c3b14612bfe5780636836948f14612bc45780636846ce9314612b9c5780636e99aa5b14612a4b57806374f95a40146126b85780637669c2bb146125da5780638224604a146125a6578063828b6e9b146124a257806384ad7169146124845780638738428d1461244a5780638da17917146124055780638e95b51b146123015780638efb3bb2146122d0578063902319611461229757806391cd1cbf14611df05780639c13131214611dd25780639dd87ac814611daa578063a1595d4514611b98578063a24f76cb14611a96578063a67986a214611a45578063a74730041461193c578063ad8bd9d0146118d5578063af0825af146117d1578063af40d56f14611796578063af663e9b1461176e578063b3f74d8914611750578063b8d98ce514611650578063ba97893c1461154c578063bd008a8f1461144c578063bd31117114611343578063c006941414611273578063c45bee341461124a578063c84aae1714610454578063cb1fb96414611160578063cda25f411461105c578063d270f04c14610ff8578063d406815814610fbe578063d74e595914610d87578063db7e8c0f14610d4d578063e1dd0fdc14610bf8578063e3f4740b14610a0e578063e47e4455146109d4578063e493ef8c146109a7578063e558391f1461098e578063e57764f61461086f578063e699af8a14610851578063e919aa5f1461067b578063e95e380f1461057f578063f0649dcf14610561578063f4364a2f14610459578063f8b2cb4f146104545763ff51dff21461040857600080fd5b3461044f5760a036600319011261044f5760243560ff8116810361044f576104456020916104346148d2565b906064359060443590600435615171565b6040519015158152f35b600080fd5b614bcb565b3461044f57604036600319011261044f57610472614890565b303314801561054d575b8015610539575b8015610525575b8015610511575b80156104fd575b80156104e9575b80156104d5575b6104af90614c05565b60018060a01b0316600052602960205260406000206104d16024358254614b42565b9055005b506019546001600160a01b031633146104a6565b506018546001600160a01b0316331461049f565b506014546001600160a01b03163314610498565b506013546001600160a01b03163314610491565b506012546001600160a01b0316331461048a565b506011546001600160a01b03163314610483565b506010546001600160a01b0316331461047c565b3461044f57600036600319011261044f576020600a54604051908152f35b3461044f5760a036600319011261044f576105986148a6565b6001600160a01b03906044358281160361044f5760209161060b916105bb6149cf565b906106036105c76149de565b9330331490811561066c575b811561065d575b811561064e575b811561063f575b8115610630575b8115610621575b8115610613575b50614c05565b600435614d61565b604051908152f35b9050601954163314876105fd565b809150601854163314906105f6565b809150601454163314906105ef565b809150601354163314906105e8565b809150601254163314906105e1565b809150601154163314906105da565b809150601054163314906105d3565b3461044f5761012036600319011261044f5761010036602319011261044f576040516106a681614956565b6106ae6148a6565b81526020810160443581526106c16149cf565b604083019081526106d06149de565b606084019081526001600160a01b0392909160a43591848316830361044f57600594608087019384526107016148bc565b9260a0880193845260c088019460e435865260e08901966101043588523033148015610844575b8015610837575b801561082a575b801561081d575b8015610810575b8015610803575b80156107f6575b61075b90614c05565b600435600052601f6020528360406000209a5116946001600160601b0360a01b95868c5416178b555160018b01556107a660028b0193511515849060ff801983541691151516179055565b5182549151610100600160b01b031990921690151560081b61ff00161760109190911b62010000600160b01b03161790559151600387018054909216921691909117905551600484015551910155005b5060195484163314610752565b508360185416331461074b565b5083601454163314610744565b508360135416331461073d565b5083601254163314610736565b508360115416331461072f565b5083601054163314610728565b3461044f57600036600319011261044f576020602154604051908152f35b3461044f57602036600319011261044f57610888614890565b303314801561097a575b8015610966575b8015610952575b801561093e575b801561092a575b8015610916575b8015610902575b6108c590614c05565b6001600160a01b03166000908152602360205260409020805480156108ec57600019019055005b634e487b7160e01b600052601160045260246000fd5b506019546001600160a01b031633146108bc565b506018546001600160a01b031633146108b5565b506014546001600160a01b031633146108ae565b506013546001600160a01b031633146108a7565b506012546001600160a01b031633146108a0565b506011546001600160a01b03163314610899565b506010546001600160a01b03163314610892565b3461044f576109a561099f366148e8565b91614c65565b005b3461044f57600036600319011261044f57602060405170014551231950b75fc4402da1732fc9bebe198152f35b3461044f57602036600319011261044f576001600160a01b036109f5614890565b16600052602c6020526020604060002054604051908152f35b3461044f57604036600319011261044f57610a27614890565b610a2f6148a6565b7f9294c47cb49f2703e2d3095ef1f312352722b8664ddb79aa4d4bc4ed0f70246160018060a01b03928381169283600052610aaf60209260298452604060002054601a8552610a846040600020918254614b42565b9055856000526029845260006040812055602a845242604060002055601a8452604060002054614e70565b84600052601a8352604060002055602482526040600020948116948560005282526040600020549084600052602683526040600020549082821015600014610b6e57610b30915085600052602584526040600020610b0e848254614c58565b905585600052602684526040600020610b28848254614c58565b905582614e70565b85600052601a8352610b486040600020918254614b42565b905583600052602482526040600020856000528252600060408120555b604051908152a3005b610bca9160258552610b866040600020918254614c58565b90558560005260268452604060002054602485526040600020886000528552610bb56040600020918254614c58565b90558560005260268452604060002054614e70565b85600052601a8352610be26040600020918254614b42565b9055836000526026825260006040812055610b65565b3461044f577f899caa590d55a05310519b00a93a11cba0e670b993797f02ed5eff3738747ce46020610c2936614b96565b93919290923033148015610d39575b8015610d25575b8015610d11575b8015610cfd575b8015610ce9575b8015610cd5575b8015610cc1575b610c6b90614c05565b60018060a01b0380941693846000526024835260406000209516948560005282526040600020610c9c828254614b42565b905583600052602582526040600020610cb6828254614b42565b9055604051908152a3005b506019546001600160a01b03163314610c62565b506018546001600160a01b03163314610c5b565b506014546001600160a01b03163314610c54565b506013546001600160a01b03163314610c4d565b506012546001600160a01b03163314610c46565b506011546001600160a01b03163314610c3f565b506010546001600160a01b03163314610c38565b3461044f57602036600319011261044f576001600160a01b03610d6e614890565b16600052602b6020526020604060002054604051908152f35b3461044f5760c036600319011261044f57610da0614890565b610da86148a6565b604435906064356084359060a435938415938415860361044f573033148015610faa575b8015610f96575b8015610f82575b8015610f6e575b8015610f5a575b8015610f46575b8015610f32575b610dff90614c05565b6001600160a01b03908116961694868603610e1657005b80610efa575b15610e87575050505081600052601a60205260406000205490602c60205260406000205480921015610e4a57005b600052601a602052610e626040600020918254614b42565b9055600052602c602052604060002054601a6020526104d16040600020918254614c58565b83610ebb575b505050610e9657005b81600052601a60205260406000205490602c60205260406000205480921015610e4a57005b90919250610ed3670de0b6b3a7640000928392615053565b0491670b1a2bc2ec500000908181029181830414901517156108ec57041015838080610e8d565b50670de0b6b3a764000080610f0f8385615053565b0490670b1a2bc2ec5000008086029086820414861517156108ec57041015610e1c565b506019546001600160a01b03163314610df6565b506018546001600160a01b03163314610def565b506014546001600160a01b03163314610de8565b506013546001600160a01b03163314610de1565b506012546001600160a01b03163314610dda565b506011546001600160a01b03163314610dd3565b506010546001600160a01b03163314610dcc565b3461044f57602036600319011261044f576001600160a01b03610fdf614890565b1660005260276020526020604060002054604051908152f35b3461044f5761100636614abd565b90604051908181519160005b838110611047575050602091810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001611012565b3461044f57604036600319011261044f57611075614890565b303314801561114c575b8015611138575b8015611124575b8015611110575b80156110fc575b80156110e8575b80156110d4575b6110b290614c05565b60018060a01b0316600052603060205260406000206104d16024358254614c58565b506019546001600160a01b031633146110a9565b506018546001600160a01b031633146110a2565b506014546001600160a01b0316331461109b565b506013546001600160a01b03163314611094565b506012546001600160a01b0316331461108d565b506011546001600160a01b03163314611086565b506010546001600160a01b0316331461107f565b3461044f57600036600319011261044f573033148015611236575b8015611222575b801561120e575b80156111fa575b80156111e6575b80156111d2575b80156111be575b6111ae90614c05565b6111b9602154614c49565b602155005b506019546001600160a01b031633146111a5565b506018546001600160a01b0316331461119e565b506014546001600160a01b03163314611197565b506013546001600160a01b03163314611190565b506012546001600160a01b03163314611189565b506011546001600160a01b03163314611182565b506010546001600160a01b0316331461117b565b3461044f57600036600319011261044f576019546040516001600160a01b039091168152602090f35b3461044f57604036600319011261044f5760a061128e6148a6565b6040519061129b8261493a565b600082526000608060209382858201528260408201528260608201520152600435600052818052604060002090600180851b031660005281526040600020604051906112e68261493a565b80549283835260018201549080840191825260028301549160408501928352608060ff6004600387015496606089019788520154169501941515855260405195865251908501525160408401525160608301525115156080820152f35b3461044f57602061135336614b4f565b9390923033148015611438575b8015611424575b8015611410575b80156113fc575b80156113e8575b80156113d4575b80156113c0575b61139390614c05565b826040519384928337810160338152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b0316331461138a565b506018546001600160a01b03163314611383565b506014546001600160a01b0316331461137c565b506013546001600160a01b03163314611375565b506012546001600160a01b0316331461136e565b506011546001600160a01b03163314611367565b506010546001600160a01b03163314611360565b3461044f57604036600319011261044f57611465614890565b3033148015611538575b8015611524575b8015611510575b80156114fc575b80156114e8575b80156114d4575b80156114c0575b6114a290614c05565b6001600160a01b03166000908152602a602052604090206024359055005b506019546001600160a01b03163314611499565b506018546001600160a01b03163314611492565b506014546001600160a01b0316331461148b565b506013546001600160a01b03163314611484565b506012546001600160a01b0316331461147d565b506011546001600160a01b03163314611476565b506010546001600160a01b0316331461146f565b3461044f57604036600319011261044f57611565614890565b303314801561163c575b8015611628575b8015611614575b8015611600575b80156115ec575b80156115d8575b80156115c4575b6115a290614c05565b60018060a01b0316600052602960205260406000206104d16024358254614c58565b506019546001600160a01b03163314611599565b506018546001600160a01b03163314611592565b506014546001600160a01b0316331461158b565b506013546001600160a01b03163314611584565b506012546001600160a01b0316331461157d565b506011546001600160a01b03163314611576565b506010546001600160a01b0316331461156f565b3461044f57604036600319011261044f57611669614890565b303314801561173c575b8015611728575b8015611714575b8015611700575b80156116ec575b80156116d8575b80156116c4575b6116a690614c05565b6001600160a01b031660009081526025602052604090206024359055005b506019546001600160a01b0316331461169d565b506018546001600160a01b03163314611696565b506014546001600160a01b0316331461168f565b506013546001600160a01b03163314611688565b506012546001600160a01b03163314611681565b506011546001600160a01b0316331461167a565b506010546001600160a01b03163314611673565b3461044f57600036600319011261044f576020600054604051908152f35b3461044f57600036600319011261044f57604060015460ff6002541682519182526020820152f35b3461044f57602036600319011261044f5760206001600160a01b03806117ba614890565b16600052602e825260406000205416604051908152f35b3461044f57604036600319011261044f576117ea614890565b30331480156118c1575b80156118ad575b8015611899575b8015611885575b8015611871575b801561185d575b8015611849575b61182790614c05565b60018060a01b0316600052601a60205260406000206104d16024358254614c58565b506019546001600160a01b0316331461181e565b506018546001600160a01b03163314611817565b506014546001600160a01b03163314611810565b506013546001600160a01b03163314611809565b506012546001600160a01b03163314611802565b506011546001600160a01b031633146117fb565b506010546001600160a01b031633146117f4565b3461044f576119226118e636614b96565b9290916118f560045482615040565b60018060a01b03809416600052601a6020526119176040600020918254614b42565b905560055490615040565b9116600052601a6020526104d16040600020918254614b42565b3461044f57602061194c36614b4f565b9390923033148015611a31575b8015611a1d575b8015611a09575b80156119f5575b80156119e1575b80156119cd575b80156119b9575b61198c90614c05565b826040519384928337810160328152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b03163314611983565b506018546001600160a01b0316331461197c565b506014546001600160a01b03163314611975565b506013546001600160a01b0316331461196e565b506012546001600160a01b03163314611967565b506011546001600160a01b03163314611960565b506010546001600160a01b03163314611959565b3461044f57604036600319011261044f57611a5e614890565b611a666148a6565b9060018060a01b038091166000526024602052604060002091166000526020526020604060002054604051908152f35b3461044f57611aa4366148e8565b913033148015611b84575b8015611b70575b8015611b5c575b8015611b48575b8015611b34575b8015611b20575b8015611b0c575b611ae290614c05565b60018060a01b03809116600052602460205260406000209116600052602052604060002055600080f35b506019546001600160a01b03163314611ad9565b506018546001600160a01b03163314611ad2565b506014546001600160a01b03163314611acb565b506013546001600160a01b03163314611ac4565b506012546001600160a01b03163314611abd565b506011546001600160a01b03163314611ab6565b506010546001600160a01b03163314611aaf565b3461044f57602036600319011261044f5760006101a0604051611bba81614990565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152826101808201520152600435600052601e6020526101c060406000206101a0604051611c2e81614990565b600d60018060a01b038454169384835260018060a01b0360018201541660208401526002810154604084015260018060a01b03600382015416606084015260048101546080840152600581015460a0840152600681015460c084015260ff600782015416151560e08401526008810154610100840152600981015461012084015260018060a01b03600a8201541661014084015260018060a01b03600b8201541661016084015260018060a01b03600c8201541661018084015201548282015260405192835260018060a01b0360208201511660208401526040810151604084015260018060a01b0360608201511660608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015161010084015261012081015161012084015260018060a01b036101408201511661014084015260018060a01b036101608201511661016084015260018060a01b036101808201511661018084015201516101a0820152f35b3461044f57602036600319011261044f5733600052602b602052600435604060002055600080f35b3461044f57600036600319011261044f576020601d54604051908152f35b3461044f573660031901610560811261044f576103801361044f57604051611e1781614973565b60043581526024356020808301919091526001600160a01b0390604435828116810361044f5760408401526064356060840152608435608084015260a43560a084015260c43560c084015260e435828116810361044f5760e084015261010091610104358385015261012061012435818601526101443560ff8116810361044f57610140908187015261016095610164358782015261018061018435818301526101a06101a435818401526101c06101c435818501526101e4356101e085015261020435610200850152610224356102208501526102443561024085015261026435610260850152610284356102808501526102a4356102a08501526102c4356102c08501526102e4356102e085015261030435878116810361044f5761030085015261032435801515810361044f5761032085015261034435610340850152610364356103608501523661038319011261044f5760405191611f7983614990565b61038435878116810361044f5783526103a43599878b168b0361044f578884019a8b526103c43560408501526103e435888116810361044f576060850152608084019661040435885260a085019a610424358c526104443560c087015261046435801515810361044f5760e087015261048435908601528401956104a43587526104c43590898216820361044f578501526104e43590888216820361044f578401526105043590878216820361044f5783015261052435908201526105443592303314801561228a575b801561227d575b8015612270575b8015612263575b8015612256575b8015612249575b801561223c575b61207690614c05565b51600281148015612232575b15612177575084815116612106575b508387511661209c57005b603095670de0b6b3a76400006120c36120ef956120bb6120cc9561510f565b905190615040565b04905190615040565b908387511660005260318552604060002090600052845260406000205490614c58565b935116600052526104d16040600020918254614b42565b84612155612133670de0b6b3a764000061212a6121228761510f565b895190615040565b048a5190615040565b8284511660005260318952604060002086600052895260406000205490614c58565b9151166000526030865261216f6040600020918254614b42565b905587612091565b92965092505060038114908115612227575b811561221c575b5061219757005b81815116806121e0575b5050808451169283156109a557603093600052603183526040600020906000528252604060002054935116600052526104d16040600020918254614c58565b60005260318352604060002084600052835281604060002054915116600052603083526122136040600020918254614c58565b905584806121a1565b600491501486612190565b600481149150612189565b5060018114612082565b506019548616331461206d565b5085601854163314612066565b508560145416331461205f565b5085601354163314612058565b5085601254163314612051565b508560115416331461204a565b5085601054163314612043565b3461044f57602036600319011261044f576001600160a01b036122b8614890565b16600052602360205260406000206104d18154614c49565b3461044f57600036600319011261044f5760206040516fa2a8918ca85bafe22016d0b997e4df5f600160ff1b038152f35b3461044f57604036600319011261044f5761231a614890565b30331480156123f1575b80156123dd575b80156123c9575b80156123b5575b80156123a1575b801561238d575b8015612379575b61235790614c05565b60018060a01b0316600052603060205260406000206104d16024358254614b42565b506019546001600160a01b0316331461234e565b506018546001600160a01b03163314612347565b506014546001600160a01b03163314612340565b506013546001600160a01b03163314612339565b506012546001600160a01b03163314612332565b506011546001600160a01b0316331461232b565b506010546001600160a01b03163314612324565b3461044f57602061241536614a44565b929091826040519384928337810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b0361246b614890565b1660005260266020526020604060002054604051908152f35b3461044f57600036600319011261044f576020601b54604051908152f35b3461044f57604036600319011261044f576124bb614890565b3033148015612592575b801561257e575b801561256a575b8015612556575b8015612542575b801561252e575b801561251a575b6124f890614c05565b60018060a01b0316600052602f60205260406000206104d16024358254614b42565b506019546001600160a01b031633146124ef565b506018546001600160a01b031633146124e8565b506014546001600160a01b031633146124e1565b506013546001600160a01b031633146124da565b506012546001600160a01b031633146124d3565b506011546001600160a01b031633146124cc565b506010546001600160a01b031633146124c5565b3461044f57602036600319011261044f576109a56fa2a8918ca85bafe22016d0b997e4df5f600160ff1b036004351061512c565b3461044f5760e036600319011261044f5767ffffffffffffffff60043581811161044f5761260c903690600401614a16565b91606036604319011261044f5760405160608101818110838211176126a25760405260443581526064356001600160a01b038116810361044f5760208201526126536148d2565b6040820152604060a31936011261044f57604051916040830190838210908211176126a25760405260a435825260c4359260ff8416840361044f57602094610445948685015260243591615073565b634e487b7160e01b600052604160045260246000fd5b3461044f57602036600319011261044f5760006103606040516126da81614973565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015282610220820152826102408201528261026082015282610280820152826102a0820152826102c0820152826102e08201528261030082015282610320820152826103408201520152600435600052601c60205261038060406000206103606040516127b081614973565b601a8354938483526001810154602084015260018060a01b0360028201541660408401526003810154606084015260048101546080840152600581015460a0840152600681015460c084015260018060a01b0360078201541660e08401526008810154610100840152600981015461012084015260ff600a82015416610140840152600b810154610160840152600c810154610180840152600d8101546101a0840152600e8101546101c0840152600f8101546101e08401526010810154610200840152601181015461022084015260128101546102408401526013810154610260840152601481015461028084015260158101546102a084015260168101546102c084015260178101546102e084015260ff601882015460018060a01b03811661030086015260a01c16151561032084015260198101546103408401520154828201526040519283526020810151602084015260018060a01b036040820151166040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260018060a01b0360e08201511660e084015261010081015161010084015261012081015161012084015260ff610140820151166101408401526101608101516101608401526101808101516101808401526101a08101516101a08401526101c08101516101c08401526101e08101516101e08401526102008101516102008401526102208101516102208401526102408101516102408401526102608101516102608401526102808101516102808401526102a08101516102a08401526102c08101516102c08401526102e08101516102e084015260018060a01b036103008201511661030084015261032081015115156103208401526103408101516103408401520151610360820152f35b3461044f5761026036600319011261044f57612a65614890565b6001600160a01b039061016435828116919082900361044f57610184359083821680920361044f576101a43584811680910361044f576101c43585811680910361044f576101e43586811680910361044f57610204359187831680930361044f57610224359388851680950361044f57610244359689881680980361044f576037549860ff8a1661044f5760019a6001600160601b0360a01b981688600f541617600f5560243560035560443560045560643560055560843560065560a43560075560c43560085560e43560095561010435600a5561012435600b5561014435600c5587600d541617600d5586600e541617600e55856010541617601055846011541617601155836012541617601255826014541617601455816018541617601855601954161760195560ff191617603755600080f35b3461044f57602036600319011261044f5733600052602c602052600435604060002055600080f35b3461044f57602036600319011261044f576001600160a01b03612be5614890565b1660005260346020526020604060002054604051908152f35b3461044f57612c0c36614abd565b90604051908181519160005b838110612c4d575050602091810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001612c18565b3461044f57600036600319011261044f576020600954604051908152f35b3461044f57604036600319011261044f57612c99614890565b3033148015612d6c575b8015612d58575b8015612d44575b8015612d30575b8015612d1c575b8015612d08575b8015612cf4575b612cd690614c05565b6001600160a01b031660009081526026602052604090206024359055005b506019546001600160a01b03163314612ccd565b506018546001600160a01b03163314612cc6565b506014546001600160a01b03163314612cbf565b506013546001600160a01b03163314612cb8565b506012546001600160a01b03163314612cb1565b506011546001600160a01b03163314612caa565b506010546001600160a01b03163314612ca3565b3461044f57604036600319011261044f57612d99614890565b3033148015612e72575b8015612e5e575b8015612e4a575b8015612e36575b8015612e22575b8015612e0e575b8015612dfa575b612dd690614c05565b6001600160a01b03166000908152602d60205260409020805461044f576024359055005b506019546001600160a01b03163314612dcd565b506018546001600160a01b03163314612dc6565b506014546001600160a01b03163314612dbf565b506013546001600160a01b03163314612db8565b506012546001600160a01b03163314612db1565b506011546001600160a01b03163314612daa565b506010546001600160a01b03163314612da3565b3461044f57602036600319011261044f576001600160a01b03612ea7614890565b16600052602a6020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b03612ee1614890565b1660005260256020526020604060002054604051908152f35b614a87565b3461044f57604036600319011261044f57612f18614890565b602435903033148015613057575b8015613043575b801561302f575b801561301b575b8015613007575b8015612ff3575b8015612fdf575b612f5990614c05565b6001600160a01b0316600081815260346020908152604090912054919290918114612f9b57603692600052603582526040600020555242604060002055600080f35b50603681526040600020546201518081018091116108ec574211612fbb57005b60369160005260358152604060002054603482526040600020555260006040812055005b506019546001600160a01b03163314612f50565b506018546001600160a01b03163314612f49565b506014546001600160a01b03163314612f42565b506013546001600160a01b03163314612f3b565b506012546001600160a01b03163314612f34565b506011546001600160a01b03163314612f2d565b506010546001600160a01b03163314612f26565b3461044f57602036600319011261044f576001600160a01b0361308c614890565b16600052602d6020526020604060002054604051908152f35b3461044f57604036600319011261044f576130be614890565b3033148015613191575b801561317d575b8015613169575b8015613155575b8015613141575b801561312d575b8015613119575b6130fb90614c05565b6001600160a01b031660009081526030602052604090206024359055005b506019546001600160a01b031633146130f2565b506018546001600160a01b031633146130eb565b506014546001600160a01b031633146130e4565b506013546001600160a01b031633146130dd565b506012546001600160a01b031633146130d6565b506011546001600160a01b031633146130cf565b506010546001600160a01b031633146130c8565b3461044f57600036600319011261044f576020600c54604051908152f35b3461044f57604036600319011261044f576131dc614890565b30331480156132b3575b801561329f575b801561328b575b8015613277575b8015613263575b801561324f575b801561323b575b61321990614c05565b60018060a01b0316600052602f60205260406000206104d16024358254614c58565b506019546001600160a01b03163314613210565b506018546001600160a01b03163314613209565b506014546001600160a01b03163314613202565b506013546001600160a01b031633146131fb565b506012546001600160a01b031633146131f4565b506011546001600160a01b031633146131ed565b506010546001600160a01b031633146131e6565b3461044f57600036600319011261044f576020600854604051908152f35b3461044f57604036600319011261044f576132fe614890565b30331480156133d5575b80156133c1575b80156133ad575b8015613399575b8015613385575b8015613371575b801561335d575b61333b90614c05565b60018060a01b0316600052602560205260406000206104d16024358254614c58565b506019546001600160a01b03163314613332565b506018546001600160a01b0316331461332b565b506014546001600160a01b03163314613324565b506013546001600160a01b0316331461331d565b506012546001600160a01b03163314613316565b506011546001600160a01b0316331461330f565b506010546001600160a01b03163314613308565b3461044f5760206133f936614a44565b929091826040519384928337810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f5761014036600319011261044f5761012036602319011261044f576040516134598161491d565b602435815260086020820160443581526040830160643581526060840160843581526080850160a435815261348c6148bc565b9060a0870191825260c087019260e435845260e088019461010435865261010089019661012435885230331480156135cb575b80156135b7575b80156135a3575b801561358f575b801561357b575b8015613567575b8015613553575b6134f290614c05565b6004356000526022602052604060002099518a555160018a0155516002890155516003880155516004870155600586019060018060a01b039051166001600160601b0360a01b82541617905551600685015551600784015551910155600080f35b506019546001600160a01b031633146134e9565b506018546001600160a01b031633146134e2565b506014546001600160a01b031633146134db565b506013546001600160a01b031633146134d4565b506012546001600160a01b031633146134cd565b506011546001600160a01b031633146134c6565b506010546001600160a01b031633146134bf565b3461044f57600036600319011261044f576020600b54604051908152f35b3461044f57602036600319011261044f576001600160a01b0361361e614890565b1660005260286020526020604060002054604051908152f35b3461044f57602036600319011261044f57600060e060405161365881614956565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201520152600435600052601f60205261010060406000206040516136a081614956565b60018060a01b039182815416928383526001820154602084019081528160028401546040860160ff821615158152606087019060ff8360081c161515825283608089019360101c168352836003880154169460a0890195865260e0600560048a01549960c08c019a8b5201549901988952604051998a525160208a01525115156040890152511515606088015251166080860152511660a08401525160c08301525160e0820152f35b3461044f57600036600319011261044f57610180600354600454600554600654600754600854600954600a5491600b5493600c549560018060a01b039788600d541698600e5416996040519b8c5260208c015260408b015260608a0152608089015260a088015260c087015260e0860152610100850152610120840152610140830152610160820152f35b3461044f57604036600319011261044f576137ed614890565b30331480156138c4575b80156138b0575b801561389c575b8015613888575b8015613874575b8015613860575b801561384c575b61382a90614c05565b60018060a01b0316600052601a60205260406000206104d16024358254614b42565b506019546001600160a01b03163314613821565b506018546001600160a01b0316331461381a565b506014546001600160a01b03163314613813565b506013546001600160a01b0316331461380c565b506012546001600160a01b03163314613805565b506011546001600160a01b031633146137fe565b506010546001600160a01b031633146137f7565b3461044f57600036600319011261044f576020600354604051908152f35b3461044f5760e036600319011261044f5761390f6148a6565b60a036604319011261044f576040516139278161493a565b6044358152602081019160643583526040820160843581526060830160a435815260c43591821515830361044f576109a595600494608087019485523033148015613a66575b8015613a52575b8015613a3e575b8015613a2a575b8015613a16575b8015613a02575b80156139ee575b6139a090614c05565b85356000526020805260406000209060018060a01b031660005260205260406000209551865551600186015551600285015551600384015551151591019060ff801983541691151516179055565b506019546001600160a01b03163314613997565b506018546001600160a01b03163314613990565b506014546001600160a01b03163314613989565b506013546001600160a01b03163314613982565b506012546001600160a01b0316331461397b565b506011546001600160a01b03163314613974565b506010546001600160a01b0316331461396d565b3461044f57604036600319011261044f57613a93614890565b3033148015613b6a575b8015613b56575b8015613b42575b8015613b2e575b8015613b1a575b8015613b06575b8015613af2575b613ad090614c05565b60018060a01b0316600052602660205260406000206104d16024358254614c58565b506019546001600160a01b03163314613ac7565b506018546001600160a01b03163314613ac0565b506014546001600160a01b03163314613ab9565b506013546001600160a01b03163314613ab2565b506012546001600160a01b03163314613aab565b506011546001600160a01b03163314613aa4565b506010546001600160a01b03163314613a9d565b3461044f57602036600319011261044f576001600160a01b03613b9f614890565b1660005260236020526020604060002054604051908152f35b3461044f576103a036600319011261044f5761038036602319011261044f57604051613be381614973565b602435815260443560208201526064356001600160a01b038116810361044f576040820152608435606082015260a435608082015260c43560a082015260e43560c0820152610104356001600160a01b038116810361044f5760e082015261012435610100820152610144356101208201526101643560ff8116810361044f57610140820152610184356101608201526101a4356101808201526101c4356101a08201526101e4356101c0820152610204356101e0820152610224356102008201526102443561022082015261026435610240820152610284356102608201526102a4356102808201526102c4356102a08201526102e4356102c0820152610304356102e0820152610324356001600160a01b038116900361044f5761032435610300820152610344351515610344350361044f576103443561032082015261036435610340820152610384356103608201523033148015613f80575b8015613f6c575b8015613f58575b8015613f44575b8015613f30575b8015613f1c575b8015613f08575b613d7390614c05565b600435600052601c602052601a61036060406000209280518455602081015160018501556002840160018060a01b03604083015116906001600160601b0360a01b9182825416179055606082015160038601556080820151600486015560a0820151600586015560c08201516006860155600785019060018060a01b0360e0840151169082541617905561010081015160088501556101208101516009850155600a840160ff6101408301511660ff19825416179055610160810151600b850155610180810151600c8501556101a0810151600d8501556101c0810151600e8501556101e0810151600f850155610200810151601085015561022081015160118501556102408101516012850155610260810151601385015561028081015160148501556102a081015160158501556102c081015160168501556102e081015160178501556018840160018060a01b036103008301511681549060ff60a01b610320850151151560a01b16916affffffffffffffffffffff60a81b161717905561034081015160198501550151910155600080f35b506019546001600160a01b03163314613d6a565b506018546001600160a01b03163314613d63565b506014546001600160a01b03163314613d5c565b506013546001600160a01b03163314613d55565b506012546001600160a01b03163314613d4e565b506011546001600160a01b03163314613d47565b506010546001600160a01b03163314613d40565b3461044f57602036600319011261044f576001600160a01b03613fb5614890565b1660005260306020526020604060002054604051908152f35b3461044f57604036600319011261044f57613fe7614890565b613fef6148a6565b9030331480156140d6575b80156140c2575b80156140ae575b801561409a575b8015614086575b8015614072575b801561405e575b61402d90614c05565b6001600160a01b039081166000908152602e6020526040902080546001600160a01b03191692909116919091179055005b506019546001600160a01b03163314614024565b506018546001600160a01b0316331461401d565b506014546001600160a01b03163314614016565b506013546001600160a01b0316331461400f565b506012546001600160a01b03163314614008565b506011546001600160a01b03163314614001565b506010546001600160a01b03163314613ffa565b6149ed565b3461044f57600036600319011261044f5730331480156141c5575b80156141b1575b801561419d575b8015614189575b8015614175575b8015614161575b801561414d575b61413d90614c05565b614148601b54614c49565b601b55005b506019546001600160a01b03163314614134565b506018546001600160a01b0316331461412d565b506014546001600160a01b03163314614126565b506013546001600160a01b0316331461411f565b506012546001600160a01b03163314614118565b506011546001600160a01b03163314614111565b506010546001600160a01b0316331461410a565b3461044f57600036600319011261044f5730331480156142af575b801561429b575b8015614287575b8015614273575b801561425f575b801561424b575b8015614237575b61422790614c05565b614232601d54614c49565b601d55005b506019546001600160a01b0316331461421e565b506018546001600160a01b03163314614217565b506014546001600160a01b03163314614210565b506013546001600160a01b03163314614209565b506012546001600160a01b03163314614202565b506011546001600160a01b031633146141fb565b506010546001600160a01b031633146141f4565b3461044f576101e036600319011261044f576101c036602319011261044f576040516142ee81614990565b6024356001600160a01b038116810361044f5781526044356001600160a01b038116810361044f57602082015260643560408201526084356001600160a01b038116810361044f57606082015260a435608082015260c43560a082015260e43560c082015261010435801515810361044f5760e08201526101243561010082015261014435610120820152610164356001600160a01b038116810361044f57610140820152610184356001600160a01b038116810361044f576101608201526101a4356001600160a01b038116900361044f576101a4356101808201526101c4356101a082015230331480156145b7575b80156145a3575b801561458f575b801561457b575b8015614567575b8015614553575b801561453f575b61441290614c05565b600435600052601e602052600d6101a060406000209260018060a01b038151166001600160601b0360a01b8554161784556001840160018060a01b036020830151166001600160601b0360a01b825416179055604081015160028501556003840160018060a01b036060830151166001600160601b0360a01b8254161790556080810151600485015560a0810151600585015560c081015160068501556144ce60e08201511515600786019060ff801983541691151516179055565b61010081015160088501556101208101516009850155610140810151600a850180546001600160a01b039283166001600160a01b031991821617909155610160830151600b87018054918416918316919091179055610180830151600c870180549190931691161790550151910155005b506019546001600160a01b03163314614409565b506018546001600160a01b03163314614402565b506014546001600160a01b031633146143fb565b506013546001600160a01b031633146143f4565b506012546001600160a01b031633146143ed565b506011546001600160a01b031633146143e6565b506010546001600160a01b031633146143df565b3461044f57602036600319011261044f576001600160a01b036145ec614890565b1660005260296020526020604060002054604051908152f35b3461044f57602036600319011261044f576101206040516146258161491d565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008092015260043560005260226020526040600020906040516146808161491d565b8254928382526001810154602083019081526002820154604084019081526003830154906060850191825260048401546080860190815260018060a01b0392836005870154169260a0880193845260068701549560c0890196875289600860078a01549960e08c019a8b52015499019889526040519a8b525160208b01525160408a0152516060890152516080880152511660a08601525160c08501525160e08401525190820152f35b3461044f57600036600319011261044f57600d546040516001600160a01b039091168152602090f35b3461044f57614761366148e8565b913033148015614846575b8015614832575b801561481e575b801561480a575b80156147f6575b80156147e2575b80156147ce575b61479f90614c05565b60018060a01b038091166000526024602052604060002091166000526020526104d16040600020918254614b42565b506019546001600160a01b03163314614796565b506018546001600160a01b0316331461478f565b506014546001600160a01b03163314614788565b506013546001600160a01b03163314614781565b506012546001600160a01b0316331461477a565b506011546001600160a01b03163314614773565b506010546001600160a01b0316331461476c565b3461044f57602036600319011261044f576020906001600160a01b0361487e614890565b16600052602f82526040600020548152f35b600435906001600160a01b038216820361044f57565b602435906001600160a01b038216820361044f57565b60c435906001600160a01b038216820361044f57565b608435906001600160a01b038216820361044f57565b606090600319011261044f576001600160a01b0390600435828116810361044f5791602435908116810361044f579060443590565b610120810190811067ffffffffffffffff8211176126a257604052565b60a0810190811067ffffffffffffffff8211176126a257604052565b610100810190811067ffffffffffffffff8211176126a257604052565b610380810190811067ffffffffffffffff8211176126a257604052565b6101c0810190811067ffffffffffffffff8211176126a257604052565b90601f8019910116810190811067ffffffffffffffff8211176126a257604052565b60643590811515820361044f57565b60843590811515820361044f57565b3461044f57600036600319011261044f57600f546040516001600160a01b039091168152602090f35b9181601f8401121561044f5782359167ffffffffffffffff831161044f576020838186019501011161044f57565b604060031982011261044f576004359067ffffffffffffffff821161044f57614a6f91600401614a16565b90916024356001600160a01b038116810361044f5790565b3461044f57602036600319011261044f5760018060a01b03600d5416600052601a60205260406000206104d16004358254614b42565b604060031982011261044f5767ffffffffffffffff60043581811161044f578260238201121561044f5780600401359182116126a25760405192614b0b601f8401601f1916602001856149ad565b8284526024838301011161044f57816000926024602093018386013783010152906024356001600160a01b038116810361044f5790565b919082018092116108ec57565b606060031982011261044f576004359067ffffffffffffffff821161044f57614b7a91600401614a16565b90916024356001600160a01b038116810361044f579060443590565b606090600319011261044f57600435906001600160a01b0390602435828116810361044f5791604435908116810361044f5790565b3461044f57602036600319011261044f576001600160a01b03614bec614890565b16600052601a6020526020604060002054604051908152f35b15614c0c57565b60405162461bcd60e51b815260206004820152601560248201527410d85b1b195c881b9bdd08185d5d1a1bdc9a5e9959605a1b6044820152606490fd5b60001981146108ec5760010190565b919082039182116108ec57565b3033148015614d4d575b8015614d39575b8015614d25575b8015614d11575b8015614cfd575b8015614ce9575b8015614cd5575b614ca290614c05565b60018060a01b03809116600052602460205260406000209116600052602052614cd16040600020918254614c58565b9055565b506019546001600160a01b03163314614c99565b506018546001600160a01b03163314614c92565b506014546001600160a01b03163314614c8b565b506013546001600160a01b03163314614c84565b506012546001600160a01b03163314614c7d565b506011546001600160a01b03163314614c76565b506010546001600160a01b03163314614c6f565b92909115614d9a5750614d748183614e70565b9060018060a01b0316600052601a602052614d956040600020918254614b42565b905590565b6001600160a01b039091166000818152601a60209081526040808320805493969195929493808310614e5d5750508286526029845284862054601a8552614de5868820918254614b42565b905582865260298452848620869055602a8452848620429055601a84528486208054808310614e5d57505050614e25578352601a90528120805491905590565b50606491519062461bcd60e51b8252600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152fd5b925094509450614d959250849150614c58565b60009133835260206027815260409384812054428103614f21575b506001600160a01b03909216808352602582528483205490937fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a93918690828110614ef357505084825260268352614ee7868320918254614b42565b9055935b51848152a290565b92614f1b9360268652614f0a838320918254614b42565b905586815260258552205490614c58565b93614eeb565b614f2b9042614c58565b923382526025835285822054865194632762fe1b60e11b86526702c68af0bb14000060048701526024860152670de0b6b3a764000060448601526064850152828460848173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af48015615036578290614fdf575b7fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a945033835260258452614fcb878420918254614b42565b905533825260278352428683205592614e8b565b509091928381813d831161502f575b614ff881836149ad565b8101031261502b57907fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a93929151614f93565b8280fd5b503d614fee565b86513d84823e3d90fd5b818102929181159184041417156108ec57565b811561505d570490565b634e487b7160e01b600052601260045260246000fd5b9092939161509e90835190602085019660ff885116815191604060018060a01b039101511693615171565b15615106578260ff7f77e158c4de5b89cd65592962239c3cc6136696032ecc462ad1b04af14e8df53b956080946040519687956060875281606088015287870137600085850187015251602085015251166040830152601f01601f19168101030190a1600190565b50505050600090565b9060009160016102c0820151146151235750565b6101e001519150565b1561513357565b60405162461bcd60e51b81526020600482015260166024820152755075626c69632d6b65792078203e3d2048414c465f5160501b6044820152606490fd5b91906151946fa2a8918ca85bafe22016d0b997e4df5f600160ff1b03841061512c565b70014551231950b75fc4402da1732fc9bebe1994858310156152d7576001600160a01b0381811696909590871515806152ce575b806152c5575b806152bc575b1561527e576040519160208301936001600160601b03199060601b168452603483015260348252606082019282841067ffffffffffffffff8511176126a257819084604052835190209587098103908082116108ec5760209660009660ff60c0948160809916158a1461527657601b905b885216878601528160a08601520991015282805260015afa1561526a57600051161490565b6040513d6000823e3d90fd5b601c90615245565b60405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606490fd5b508115156151d4565b508415156151ce565b508515156151c8565b60405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b6064820152608490fdfea264697066735822122017f5ec96ff8ad4ac96867b6e0e81b245759f250ff1144c545235f26d5311c2b564736f6c63430008140033",
  "deployedBytecode": "0x608080604052600436101561001357600080fd5b60003560e01c90816302ad7f431461485a5750806303339c861461475357806304618e6b1461472a57806306faa448146146055780630b671e6f146145cb5780630c965b31146142c35780630cdbf967146141d95780630e129569146140ea57806311d7e2a0146140ef5780631425d2fa146140ea578063154c7d1e14613fce57806315c8687814613f9457806317c6a54914613bb857806318967df814613b7e5780631cd8e70014613a7a5780631d74b67d146138f65780631da5475e146138d857806321e5383a146137d45780632b08fc15146137495780632eb41cf814613637578063304e24e9146135fd5780633205b1d7146135df578063359c02f01461342e57806339bbfb91146133e95780633a1ebe0c146132e55780633f06cd66146132c757806343c3cc85146131c357806345ba6a82146131a557806346192c9c146130a557806348d29b191461098e5780634f5eddd814612efa57806355804d061461306b578063564f360e14612eff57806357b00f1d14612efa5780635dee283914612ec057806361dbb3b214612e865780636526adbe14612d805780636639013f14612c8057806367aeb0f314612c6257806367cf9c3b14612bfe5780636836948f14612bc45780636846ce9314612b9c5780636e99aa5b14612a4b57806374f95a40146126b85780637669c2bb146125da5780638224604a146125a6578063828b6e9b146124a257806384ad7169146124845780638738428d1461244a5780638da17917146124055780638e95b51b146123015780638efb3bb2146122d0578063902319611461229757806391cd1cbf14611df05780639c13131214611dd25780639dd87ac814611daa578063a1595d4514611b98578063a24f76cb14611a96578063a67986a214611a45578063a74730041461193c578063ad8bd9d0146118d5578063af0825af146117d1578063af40d56f14611796578063af663e9b1461176e578063b3f74d8914611750578063b8d98ce514611650578063ba97893c1461154c578063bd008a8f1461144c578063bd31117114611343578063c006941414611273578063c45bee341461124a578063c84aae1714610454578063cb1fb96414611160578063cda25f411461105c578063d270f04c14610ff8578063d406815814610fbe578063d74e595914610d87578063db7e8c0f14610d4d578063e1dd0fdc14610bf8578063e3f4740b14610a0e578063e47e4455146109d4578063e493ef8c146109a7578063e558391f1461098e578063e57764f61461086f578063e699af8a14610851578063e919aa5f1461067b578063e95e380f1461057f578063f0649dcf14610561578063f4364a2f14610459578063f8b2cb4f146104545763ff51dff21461040857600080fd5b3461044f5760a036600319011261044f5760243560ff8116810361044f576104456020916104346148d2565b906064359060443590600435615171565b6040519015158152f35b600080fd5b614bcb565b3461044f57604036600319011261044f57610472614890565b303314801561054d575b8015610539575b8015610525575b8015610511575b80156104fd575b80156104e9575b80156104d5575b6104af90614c05565b60018060a01b0316600052602960205260406000206104d16024358254614b42565b9055005b506019546001600160a01b031633146104a6565b506018546001600160a01b0316331461049f565b506014546001600160a01b03163314610498565b506013546001600160a01b03163314610491565b506012546001600160a01b0316331461048a565b506011546001600160a01b03163314610483565b506010546001600160a01b0316331461047c565b3461044f57600036600319011261044f576020600a54604051908152f35b3461044f5760a036600319011261044f576105986148a6565b6001600160a01b03906044358281160361044f5760209161060b916105bb6149cf565b906106036105c76149de565b9330331490811561066c575b811561065d575b811561064e575b811561063f575b8115610630575b8115610621575b8115610613575b50614c05565b600435614d61565b604051908152f35b9050601954163314876105fd565b809150601854163314906105f6565b809150601454163314906105ef565b809150601354163314906105e8565b809150601254163314906105e1565b809150601154163314906105da565b809150601054163314906105d3565b3461044f5761012036600319011261044f5761010036602319011261044f576040516106a681614956565b6106ae6148a6565b81526020810160443581526106c16149cf565b604083019081526106d06149de565b606084019081526001600160a01b0392909160a43591848316830361044f57600594608087019384526107016148bc565b9260a0880193845260c088019460e435865260e08901966101043588523033148015610844575b8015610837575b801561082a575b801561081d575b8015610810575b8015610803575b80156107f6575b61075b90614c05565b600435600052601f6020528360406000209a5116946001600160601b0360a01b95868c5416178b555160018b01556107a660028b0193511515849060ff801983541691151516179055565b5182549151610100600160b01b031990921690151560081b61ff00161760109190911b62010000600160b01b03161790559151600387018054909216921691909117905551600484015551910155005b5060195484163314610752565b508360185416331461074b565b5083601454163314610744565b508360135416331461073d565b5083601254163314610736565b508360115416331461072f565b5083601054163314610728565b3461044f57600036600319011261044f576020602154604051908152f35b3461044f57602036600319011261044f57610888614890565b303314801561097a575b8015610966575b8015610952575b801561093e575b801561092a575b8015610916575b8015610902575b6108c590614c05565b6001600160a01b03166000908152602360205260409020805480156108ec57600019019055005b634e487b7160e01b600052601160045260246000fd5b506019546001600160a01b031633146108bc565b506018546001600160a01b031633146108b5565b506014546001600160a01b031633146108ae565b506013546001600160a01b031633146108a7565b506012546001600160a01b031633146108a0565b506011546001600160a01b03163314610899565b506010546001600160a01b03163314610892565b3461044f576109a561099f366148e8565b91614c65565b005b3461044f57600036600319011261044f57602060405170014551231950b75fc4402da1732fc9bebe198152f35b3461044f57602036600319011261044f576001600160a01b036109f5614890565b16600052602c6020526020604060002054604051908152f35b3461044f57604036600319011261044f57610a27614890565b610a2f6148a6565b7f9294c47cb49f2703e2d3095ef1f312352722b8664ddb79aa4d4bc4ed0f70246160018060a01b03928381169283600052610aaf60209260298452604060002054601a8552610a846040600020918254614b42565b9055856000526029845260006040812055602a845242604060002055601a8452604060002054614e70565b84600052601a8352604060002055602482526040600020948116948560005282526040600020549084600052602683526040600020549082821015600014610b6e57610b30915085600052602584526040600020610b0e848254614c58565b905585600052602684526040600020610b28848254614c58565b905582614e70565b85600052601a8352610b486040600020918254614b42565b905583600052602482526040600020856000528252600060408120555b604051908152a3005b610bca9160258552610b866040600020918254614c58565b90558560005260268452604060002054602485526040600020886000528552610bb56040600020918254614c58565b90558560005260268452604060002054614e70565b85600052601a8352610be26040600020918254614b42565b9055836000526026825260006040812055610b65565b3461044f577f899caa590d55a05310519b00a93a11cba0e670b993797f02ed5eff3738747ce46020610c2936614b96565b93919290923033148015610d39575b8015610d25575b8015610d11575b8015610cfd575b8015610ce9575b8015610cd5575b8015610cc1575b610c6b90614c05565b60018060a01b0380941693846000526024835260406000209516948560005282526040600020610c9c828254614b42565b905583600052602582526040600020610cb6828254614b42565b9055604051908152a3005b506019546001600160a01b03163314610c62565b506018546001600160a01b03163314610c5b565b506014546001600160a01b03163314610c54565b506013546001600160a01b03163314610c4d565b506012546001600160a01b03163314610c46565b506011546001600160a01b03163314610c3f565b506010546001600160a01b03163314610c38565b3461044f57602036600319011261044f576001600160a01b03610d6e614890565b16600052602b6020526020604060002054604051908152f35b3461044f5760c036600319011261044f57610da0614890565b610da86148a6565b604435906064356084359060a435938415938415860361044f573033148015610faa575b8015610f96575b8015610f82575b8015610f6e575b8015610f5a575b8015610f46575b8015610f32575b610dff90614c05565b6001600160a01b03908116961694868603610e1657005b80610efa575b15610e87575050505081600052601a60205260406000205490602c60205260406000205480921015610e4a57005b600052601a602052610e626040600020918254614b42565b9055600052602c602052604060002054601a6020526104d16040600020918254614c58565b83610ebb575b505050610e9657005b81600052601a60205260406000205490602c60205260406000205480921015610e4a57005b90919250610ed3670de0b6b3a7640000928392615053565b0491670b1a2bc2ec500000908181029181830414901517156108ec57041015838080610e8d565b50670de0b6b3a764000080610f0f8385615053565b0490670b1a2bc2ec5000008086029086820414861517156108ec57041015610e1c565b506019546001600160a01b03163314610df6565b506018546001600160a01b03163314610def565b506014546001600160a01b03163314610de8565b506013546001600160a01b03163314610de1565b506012546001600160a01b03163314610dda565b506011546001600160a01b03163314610dd3565b506010546001600160a01b03163314610dcc565b3461044f57602036600319011261044f576001600160a01b03610fdf614890565b1660005260276020526020604060002054604051908152f35b3461044f5761100636614abd565b90604051908181519160005b838110611047575050602091810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001611012565b3461044f57604036600319011261044f57611075614890565b303314801561114c575b8015611138575b8015611124575b8015611110575b80156110fc575b80156110e8575b80156110d4575b6110b290614c05565b60018060a01b0316600052603060205260406000206104d16024358254614c58565b506019546001600160a01b031633146110a9565b506018546001600160a01b031633146110a2565b506014546001600160a01b0316331461109b565b506013546001600160a01b03163314611094565b506012546001600160a01b0316331461108d565b506011546001600160a01b03163314611086565b506010546001600160a01b0316331461107f565b3461044f57600036600319011261044f573033148015611236575b8015611222575b801561120e575b80156111fa575b80156111e6575b80156111d2575b80156111be575b6111ae90614c05565b6111b9602154614c49565b602155005b506019546001600160a01b031633146111a5565b506018546001600160a01b0316331461119e565b506014546001600160a01b03163314611197565b506013546001600160a01b03163314611190565b506012546001600160a01b03163314611189565b506011546001600160a01b03163314611182565b506010546001600160a01b0316331461117b565b3461044f57600036600319011261044f576019546040516001600160a01b039091168152602090f35b3461044f57604036600319011261044f5760a061128e6148a6565b6040519061129b8261493a565b600082526000608060209382858201528260408201528260608201520152600435600052818052604060002090600180851b031660005281526040600020604051906112e68261493a565b80549283835260018201549080840191825260028301549160408501928352608060ff6004600387015496606089019788520154169501941515855260405195865251908501525160408401525160608301525115156080820152f35b3461044f57602061135336614b4f565b9390923033148015611438575b8015611424575b8015611410575b80156113fc575b80156113e8575b80156113d4575b80156113c0575b61139390614c05565b826040519384928337810160338152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b0316331461138a565b506018546001600160a01b03163314611383565b506014546001600160a01b0316331461137c565b506013546001600160a01b03163314611375565b506012546001600160a01b0316331461136e565b506011546001600160a01b03163314611367565b506010546001600160a01b03163314611360565b3461044f57604036600319011261044f57611465614890565b3033148015611538575b8015611524575b8015611510575b80156114fc575b80156114e8575b80156114d4575b80156114c0575b6114a290614c05565b6001600160a01b03166000908152602a602052604090206024359055005b506019546001600160a01b03163314611499565b506018546001600160a01b03163314611492565b506014546001600160a01b0316331461148b565b506013546001600160a01b03163314611484565b506012546001600160a01b0316331461147d565b506011546001600160a01b03163314611476565b506010546001600160a01b0316331461146f565b3461044f57604036600319011261044f57611565614890565b303314801561163c575b8015611628575b8015611614575b8015611600575b80156115ec575b80156115d8575b80156115c4575b6115a290614c05565b60018060a01b0316600052602960205260406000206104d16024358254614c58565b506019546001600160a01b03163314611599565b506018546001600160a01b03163314611592565b506014546001600160a01b0316331461158b565b506013546001600160a01b03163314611584565b506012546001600160a01b0316331461157d565b506011546001600160a01b03163314611576565b506010546001600160a01b0316331461156f565b3461044f57604036600319011261044f57611669614890565b303314801561173c575b8015611728575b8015611714575b8015611700575b80156116ec575b80156116d8575b80156116c4575b6116a690614c05565b6001600160a01b031660009081526025602052604090206024359055005b506019546001600160a01b0316331461169d565b506018546001600160a01b03163314611696565b506014546001600160a01b0316331461168f565b506013546001600160a01b03163314611688565b506012546001600160a01b03163314611681565b506011546001600160a01b0316331461167a565b506010546001600160a01b03163314611673565b3461044f57600036600319011261044f576020600054604051908152f35b3461044f57600036600319011261044f57604060015460ff6002541682519182526020820152f35b3461044f57602036600319011261044f5760206001600160a01b03806117ba614890565b16600052602e825260406000205416604051908152f35b3461044f57604036600319011261044f576117ea614890565b30331480156118c1575b80156118ad575b8015611899575b8015611885575b8015611871575b801561185d575b8015611849575b61182790614c05565b60018060a01b0316600052601a60205260406000206104d16024358254614c58565b506019546001600160a01b0316331461181e565b506018546001600160a01b03163314611817565b506014546001600160a01b03163314611810565b506013546001600160a01b03163314611809565b506012546001600160a01b03163314611802565b506011546001600160a01b031633146117fb565b506010546001600160a01b031633146117f4565b3461044f576119226118e636614b96565b9290916118f560045482615040565b60018060a01b03809416600052601a6020526119176040600020918254614b42565b905560055490615040565b9116600052601a6020526104d16040600020918254614b42565b3461044f57602061194c36614b4f565b9390923033148015611a31575b8015611a1d575b8015611a09575b80156119f5575b80156119e1575b80156119cd575b80156119b9575b61198c90614c05565b826040519384928337810160328152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b03163314611983565b506018546001600160a01b0316331461197c565b506014546001600160a01b03163314611975565b506013546001600160a01b0316331461196e565b506012546001600160a01b03163314611967565b506011546001600160a01b03163314611960565b506010546001600160a01b03163314611959565b3461044f57604036600319011261044f57611a5e614890565b611a666148a6565b9060018060a01b038091166000526024602052604060002091166000526020526020604060002054604051908152f35b3461044f57611aa4366148e8565b913033148015611b84575b8015611b70575b8015611b5c575b8015611b48575b8015611b34575b8015611b20575b8015611b0c575b611ae290614c05565b60018060a01b03809116600052602460205260406000209116600052602052604060002055600080f35b506019546001600160a01b03163314611ad9565b506018546001600160a01b03163314611ad2565b506014546001600160a01b03163314611acb565b506013546001600160a01b03163314611ac4565b506012546001600160a01b03163314611abd565b506011546001600160a01b03163314611ab6565b506010546001600160a01b03163314611aaf565b3461044f57602036600319011261044f5760006101a0604051611bba81614990565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152826101808201520152600435600052601e6020526101c060406000206101a0604051611c2e81614990565b600d60018060a01b038454169384835260018060a01b0360018201541660208401526002810154604084015260018060a01b03600382015416606084015260048101546080840152600581015460a0840152600681015460c084015260ff600782015416151560e08401526008810154610100840152600981015461012084015260018060a01b03600a8201541661014084015260018060a01b03600b8201541661016084015260018060a01b03600c8201541661018084015201548282015260405192835260018060a01b0360208201511660208401526040810151604084015260018060a01b0360608201511660608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015161010084015261012081015161012084015260018060a01b036101408201511661014084015260018060a01b036101608201511661016084015260018060a01b036101808201511661018084015201516101a0820152f35b3461044f57602036600319011261044f5733600052602b602052600435604060002055600080f35b3461044f57600036600319011261044f576020601d54604051908152f35b3461044f573660031901610560811261044f576103801361044f57604051611e1781614973565b60043581526024356020808301919091526001600160a01b0390604435828116810361044f5760408401526064356060840152608435608084015260a43560a084015260c43560c084015260e435828116810361044f5760e084015261010091610104358385015261012061012435818601526101443560ff8116810361044f57610140908187015261016095610164358782015261018061018435818301526101a06101a435818401526101c06101c435818501526101e4356101e085015261020435610200850152610224356102208501526102443561024085015261026435610260850152610284356102808501526102a4356102a08501526102c4356102c08501526102e4356102e085015261030435878116810361044f5761030085015261032435801515810361044f5761032085015261034435610340850152610364356103608501523661038319011261044f5760405191611f7983614990565b61038435878116810361044f5783526103a43599878b168b0361044f578884019a8b526103c43560408501526103e435888116810361044f576060850152608084019661040435885260a085019a610424358c526104443560c087015261046435801515810361044f5760e087015261048435908601528401956104a43587526104c43590898216820361044f578501526104e43590888216820361044f578401526105043590878216820361044f5783015261052435908201526105443592303314801561228a575b801561227d575b8015612270575b8015612263575b8015612256575b8015612249575b801561223c575b61207690614c05565b51600281148015612232575b15612177575084815116612106575b508387511661209c57005b603095670de0b6b3a76400006120c36120ef956120bb6120cc9561510f565b905190615040565b04905190615040565b908387511660005260318552604060002090600052845260406000205490614c58565b935116600052526104d16040600020918254614b42565b84612155612133670de0b6b3a764000061212a6121228761510f565b895190615040565b048a5190615040565b8284511660005260318952604060002086600052895260406000205490614c58565b9151166000526030865261216f6040600020918254614b42565b905587612091565b92965092505060038114908115612227575b811561221c575b5061219757005b81815116806121e0575b5050808451169283156109a557603093600052603183526040600020906000528252604060002054935116600052526104d16040600020918254614c58565b60005260318352604060002084600052835281604060002054915116600052603083526122136040600020918254614c58565b905584806121a1565b600491501486612190565b600481149150612189565b5060018114612082565b506019548616331461206d565b5085601854163314612066565b508560145416331461205f565b5085601354163314612058565b5085601254163314612051565b508560115416331461204a565b5085601054163314612043565b3461044f57602036600319011261044f576001600160a01b036122b8614890565b16600052602360205260406000206104d18154614c49565b3461044f57600036600319011261044f5760206040516fa2a8918ca85bafe22016d0b997e4df5f600160ff1b038152f35b3461044f57604036600319011261044f5761231a614890565b30331480156123f1575b80156123dd575b80156123c9575b80156123b5575b80156123a1575b801561238d575b8015612379575b61235790614c05565b60018060a01b0316600052603060205260406000206104d16024358254614b42565b506019546001600160a01b0316331461234e565b506018546001600160a01b03163314612347565b506014546001600160a01b03163314612340565b506013546001600160a01b03163314612339565b506012546001600160a01b03163314612332565b506011546001600160a01b0316331461232b565b506010546001600160a01b03163314612324565b3461044f57602061241536614a44565b929091826040519384928337810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b0361246b614890565b1660005260266020526020604060002054604051908152f35b3461044f57600036600319011261044f576020601b54604051908152f35b3461044f57604036600319011261044f576124bb614890565b3033148015612592575b801561257e575b801561256a575b8015612556575b8015612542575b801561252e575b801561251a575b6124f890614c05565b60018060a01b0316600052602f60205260406000206104d16024358254614b42565b506019546001600160a01b031633146124ef565b506018546001600160a01b031633146124e8565b506014546001600160a01b031633146124e1565b506013546001600160a01b031633146124da565b506012546001600160a01b031633146124d3565b506011546001600160a01b031633146124cc565b506010546001600160a01b031633146124c5565b3461044f57602036600319011261044f576109a56fa2a8918ca85bafe22016d0b997e4df5f600160ff1b036004351061512c565b3461044f5760e036600319011261044f5767ffffffffffffffff60043581811161044f5761260c903690600401614a16565b91606036604319011261044f5760405160608101818110838211176126a25760405260443581526064356001600160a01b038116810361044f5760208201526126536148d2565b6040820152604060a31936011261044f57604051916040830190838210908211176126a25760405260a435825260c4359260ff8416840361044f57602094610445948685015260243591615073565b634e487b7160e01b600052604160045260246000fd5b3461044f57602036600319011261044f5760006103606040516126da81614973565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015282610220820152826102408201528261026082015282610280820152826102a0820152826102c0820152826102e08201528261030082015282610320820152826103408201520152600435600052601c60205261038060406000206103606040516127b081614973565b601a8354938483526001810154602084015260018060a01b0360028201541660408401526003810154606084015260048101546080840152600581015460a0840152600681015460c084015260018060a01b0360078201541660e08401526008810154610100840152600981015461012084015260ff600a82015416610140840152600b810154610160840152600c810154610180840152600d8101546101a0840152600e8101546101c0840152600f8101546101e08401526010810154610200840152601181015461022084015260128101546102408401526013810154610260840152601481015461028084015260158101546102a084015260168101546102c084015260178101546102e084015260ff601882015460018060a01b03811661030086015260a01c16151561032084015260198101546103408401520154828201526040519283526020810151602084015260018060a01b036040820151166040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260018060a01b0360e08201511660e084015261010081015161010084015261012081015161012084015260ff610140820151166101408401526101608101516101608401526101808101516101808401526101a08101516101a08401526101c08101516101c08401526101e08101516101e08401526102008101516102008401526102208101516102208401526102408101516102408401526102608101516102608401526102808101516102808401526102a08101516102a08401526102c08101516102c08401526102e08101516102e084015260018060a01b036103008201511661030084015261032081015115156103208401526103408101516103408401520151610360820152f35b3461044f5761026036600319011261044f57612a65614890565b6001600160a01b039061016435828116919082900361044f57610184359083821680920361044f576101a43584811680910361044f576101c43585811680910361044f576101e43586811680910361044f57610204359187831680930361044f57610224359388851680950361044f57610244359689881680980361044f576037549860ff8a1661044f5760019a6001600160601b0360a01b981688600f541617600f5560243560035560443560045560643560055560843560065560a43560075560c43560085560e43560095561010435600a5561012435600b5561014435600c5587600d541617600d5586600e541617600e55856010541617601055846011541617601155836012541617601255826014541617601455816018541617601855601954161760195560ff191617603755600080f35b3461044f57602036600319011261044f5733600052602c602052600435604060002055600080f35b3461044f57602036600319011261044f576001600160a01b03612be5614890565b1660005260346020526020604060002054604051908152f35b3461044f57612c0c36614abd565b90604051908181519160005b838110612c4d575050602091810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001612c18565b3461044f57600036600319011261044f576020600954604051908152f35b3461044f57604036600319011261044f57612c99614890565b3033148015612d6c575b8015612d58575b8015612d44575b8015612d30575b8015612d1c575b8015612d08575b8015612cf4575b612cd690614c05565b6001600160a01b031660009081526026602052604090206024359055005b506019546001600160a01b03163314612ccd565b506018546001600160a01b03163314612cc6565b506014546001600160a01b03163314612cbf565b506013546001600160a01b03163314612cb8565b506012546001600160a01b03163314612cb1565b506011546001600160a01b03163314612caa565b506010546001600160a01b03163314612ca3565b3461044f57604036600319011261044f57612d99614890565b3033148015612e72575b8015612e5e575b8015612e4a575b8015612e36575b8015612e22575b8015612e0e575b8015612dfa575b612dd690614c05565b6001600160a01b03166000908152602d60205260409020805461044f576024359055005b506019546001600160a01b03163314612dcd565b506018546001600160a01b03163314612dc6565b506014546001600160a01b03163314612dbf565b506013546001600160a01b03163314612db8565b506012546001600160a01b03163314612db1565b506011546001600160a01b03163314612daa565b506010546001600160a01b03163314612da3565b3461044f57602036600319011261044f576001600160a01b03612ea7614890565b16600052602a6020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b03612ee1614890565b1660005260256020526020604060002054604051908152f35b614a87565b3461044f57604036600319011261044f57612f18614890565b602435903033148015613057575b8015613043575b801561302f575b801561301b575b8015613007575b8015612ff3575b8015612fdf575b612f5990614c05565b6001600160a01b0316600081815260346020908152604090912054919290918114612f9b57603692600052603582526040600020555242604060002055600080f35b50603681526040600020546201518081018091116108ec574211612fbb57005b60369160005260358152604060002054603482526040600020555260006040812055005b506019546001600160a01b03163314612f50565b506018546001600160a01b03163314612f49565b506014546001600160a01b03163314612f42565b506013546001600160a01b03163314612f3b565b506012546001600160a01b03163314612f34565b506011546001600160a01b03163314612f2d565b506010546001600160a01b03163314612f26565b3461044f57602036600319011261044f576001600160a01b0361308c614890565b16600052602d6020526020604060002054604051908152f35b3461044f57604036600319011261044f576130be614890565b3033148015613191575b801561317d575b8015613169575b8015613155575b8015613141575b801561312d575b8015613119575b6130fb90614c05565b6001600160a01b031660009081526030602052604090206024359055005b506019546001600160a01b031633146130f2565b506018546001600160a01b031633146130eb565b506014546001600160a01b031633146130e4565b506013546001600160a01b031633146130dd565b506012546001600160a01b031633146130d6565b506011546001600160a01b031633146130cf565b506010546001600160a01b031633146130c8565b3461044f57600036600319011261044f576020600c54604051908152f35b3461044f57604036600319011261044f576131dc614890565b30331480156132b3575b801561329f575b801561328b575b8015613277575b8015613263575b801561324f575b801561323b575b61321990614c05565b60018060a01b0316600052602f60205260406000206104d16024358254614c58565b506019546001600160a01b03163314613210565b506018546001600160a01b03163314613209565b506014546001600160a01b03163314613202565b506013546001600160a01b031633146131fb565b506012546001600160a01b031633146131f4565b506011546001600160a01b031633146131ed565b506010546001600160a01b031633146131e6565b3461044f57600036600319011261044f576020600854604051908152f35b3461044f57604036600319011261044f576132fe614890565b30331480156133d5575b80156133c1575b80156133ad575b8015613399575b8015613385575b8015613371575b801561335d575b61333b90614c05565b60018060a01b0316600052602560205260406000206104d16024358254614c58565b506019546001600160a01b03163314613332565b506018546001600160a01b0316331461332b565b506014546001600160a01b03163314613324565b506013546001600160a01b0316331461331d565b506012546001600160a01b03163314613316565b506011546001600160a01b0316331461330f565b506010546001600160a01b03163314613308565b3461044f5760206133f936614a44565b929091826040519384928337810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f5761014036600319011261044f5761012036602319011261044f576040516134598161491d565b602435815260086020820160443581526040830160643581526060840160843581526080850160a435815261348c6148bc565b9060a0870191825260c087019260e435845260e088019461010435865261010089019661012435885230331480156135cb575b80156135b7575b80156135a3575b801561358f575b801561357b575b8015613567575b8015613553575b6134f290614c05565b6004356000526022602052604060002099518a555160018a0155516002890155516003880155516004870155600586019060018060a01b039051166001600160601b0360a01b82541617905551600685015551600784015551910155600080f35b506019546001600160a01b031633146134e9565b506018546001600160a01b031633146134e2565b506014546001600160a01b031633146134db565b506013546001600160a01b031633146134d4565b506012546001600160a01b031633146134cd565b506011546001600160a01b031633146134c6565b506010546001600160a01b031633146134bf565b3461044f57600036600319011261044f576020600b54604051908152f35b3461044f57602036600319011261044f576001600160a01b0361361e614890565b1660005260286020526020604060002054604051908152f35b3461044f57602036600319011261044f57600060e060405161365881614956565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201520152600435600052601f60205261010060406000206040516136a081614956565b60018060a01b039182815416928383526001820154602084019081528160028401546040860160ff821615158152606087019060ff8360081c161515825283608089019360101c168352836003880154169460a0890195865260e0600560048a01549960c08c019a8b5201549901988952604051998a525160208a01525115156040890152511515606088015251166080860152511660a08401525160c08301525160e0820152f35b3461044f57600036600319011261044f57610180600354600454600554600654600754600854600954600a5491600b5493600c549560018060a01b039788600d541698600e5416996040519b8c5260208c015260408b015260608a0152608089015260a088015260c087015260e0860152610100850152610120840152610140830152610160820152f35b3461044f57604036600319011261044f576137ed614890565b30331480156138c4575b80156138b0575b801561389c575b8015613888575b8015613874575b8015613860575b801561384c575b61382a90614c05565b60018060a01b0316600052601a60205260406000206104d16024358254614b42565b506019546001600160a01b03163314613821565b506018546001600160a01b0316331461381a565b506014546001600160a01b03163314613813565b506013546001600160a01b0316331461380c565b506012546001600160a01b03163314613805565b506011546001600160a01b031633146137fe565b506010546001600160a01b031633146137f7565b3461044f57600036600319011261044f576020600354604051908152f35b3461044f5760e036600319011261044f5761390f6148a6565b60a036604319011261044f576040516139278161493a565b6044358152602081019160643583526040820160843581526060830160a435815260c43591821515830361044f576109a595600494608087019485523033148015613a66575b8015613a52575b8015613a3e575b8015613a2a575b8015613a16575b8015613a02575b80156139ee575b6139a090614c05565b85356000526020805260406000209060018060a01b031660005260205260406000209551865551600186015551600285015551600384015551151591019060ff801983541691151516179055565b506019546001600160a01b03163314613997565b506018546001600160a01b03163314613990565b506014546001600160a01b03163314613989565b506013546001600160a01b03163314613982565b506012546001600160a01b0316331461397b565b506011546001600160a01b03163314613974565b506010546001600160a01b0316331461396d565b3461044f57604036600319011261044f57613a93614890565b3033148015613b6a575b8015613b56575b8015613b42575b8015613b2e575b8015613b1a575b8015613b06575b8015613af2575b613ad090614c05565b60018060a01b0316600052602660205260406000206104d16024358254614c58565b506019546001600160a01b03163314613ac7565b506018546001600160a01b03163314613ac0565b506014546001600160a01b03163314613ab9565b506013546001600160a01b03163314613ab2565b506012546001600160a01b03163314613aab565b506011546001600160a01b03163314613aa4565b506010546001600160a01b03163314613a9d565b3461044f57602036600319011261044f576001600160a01b03613b9f614890565b1660005260236020526020604060002054604051908152f35b3461044f576103a036600319011261044f5761038036602319011261044f57604051613be381614973565b602435815260443560208201526064356001600160a01b038116810361044f576040820152608435606082015260a435608082015260c43560a082015260e43560c0820152610104356001600160a01b038116810361044f5760e082015261012435610100820152610144356101208201526101643560ff8116810361044f57610140820152610184356101608201526101a4356101808201526101c4356101a08201526101e4356101c0820152610204356101e0820152610224356102008201526102443561022082015261026435610240820152610284356102608201526102a4356102808201526102c4356102a08201526102e4356102c0820152610304356102e0820152610324356001600160a01b038116900361044f5761032435610300820152610344351515610344350361044f576103443561032082015261036435610340820152610384356103608201523033148015613f80575b8015613f6c575b8015613f58575b8015613f44575b8015613f30575b8015613f1c575b8015613f08575b613d7390614c05565b600435600052601c602052601a61036060406000209280518455602081015160018501556002840160018060a01b03604083015116906001600160601b0360a01b9182825416179055606082015160038601556080820151600486015560a0820151600586015560c08201516006860155600785019060018060a01b0360e0840151169082541617905561010081015160088501556101208101516009850155600a840160ff6101408301511660ff19825416179055610160810151600b850155610180810151600c8501556101a0810151600d8501556101c0810151600e8501556101e0810151600f850155610200810151601085015561022081015160118501556102408101516012850155610260810151601385015561028081015160148501556102a081015160158501556102c081015160168501556102e081015160178501556018840160018060a01b036103008301511681549060ff60a01b610320850151151560a01b16916affffffffffffffffffffff60a81b161717905561034081015160198501550151910155600080f35b506019546001600160a01b03163314613d6a565b506018546001600160a01b03163314613d63565b506014546001600160a01b03163314613d5c565b506013546001600160a01b03163314613d55565b506012546001600160a01b03163314613d4e565b506011546001600160a01b03163314613d47565b506010546001600160a01b03163314613d40565b3461044f57602036600319011261044f576001600160a01b03613fb5614890565b1660005260306020526020604060002054604051908152f35b3461044f57604036600319011261044f57613fe7614890565b613fef6148a6565b9030331480156140d6575b80156140c2575b80156140ae575b801561409a575b8015614086575b8015614072575b801561405e575b61402d90614c05565b6001600160a01b039081166000908152602e6020526040902080546001600160a01b03191692909116919091179055005b506019546001600160a01b03163314614024565b506018546001600160a01b0316331461401d565b506014546001600160a01b03163314614016565b506013546001600160a01b0316331461400f565b506012546001600160a01b03163314614008565b506011546001600160a01b03163314614001565b506010546001600160a01b03163314613ffa565b6149ed565b3461044f57600036600319011261044f5730331480156141c5575b80156141b1575b801561419d575b8015614189575b8015614175575b8015614161575b801561414d575b61413d90614c05565b614148601b54614c49565b601b55005b506019546001600160a01b03163314614134565b506018546001600160a01b0316331461412d565b506014546001600160a01b03163314614126565b506013546001600160a01b0316331461411f565b506012546001600160a01b03163314614118565b506011546001600160a01b03163314614111565b506010546001600160a01b0316331461410a565b3461044f57600036600319011261044f5730331480156142af575b801561429b575b8015614287575b8015614273575b801561425f575b801561424b575b8015614237575b61422790614c05565b614232601d54614c49565b601d55005b506019546001600160a01b0316331461421e565b506018546001600160a01b03163314614217565b506014546001600160a01b03163314614210565b506013546001600160a01b03163314614209565b506012546001600160a01b03163314614202565b506011546001600160a01b031633146141fb565b506010546001600160a01b031633146141f4565b3461044f576101e036600319011261044f576101c036602319011261044f576040516142ee81614990565b6024356001600160a01b038116810361044f5781526044356001600160a01b038116810361044f57602082015260643560408201526084356001600160a01b038116810361044f57606082015260a435608082015260c43560a082015260e43560c082015261010435801515810361044f5760e08201526101243561010082015261014435610120820152610164356001600160a01b038116810361044f57610140820152610184356001600160a01b038116810361044f576101608201526101a4356001600160a01b038116900361044f576101a4356101808201526101c4356101a082015230331480156145b7575b80156145a3575b801561458f575b801561457b575b8015614567575b8015614553575b801561453f575b61441290614c05565b600435600052601e602052600d6101a060406000209260018060a01b038151166001600160601b0360a01b8554161784556001840160018060a01b036020830151166001600160601b0360a01b825416179055604081015160028501556003840160018060a01b036060830151166001600160601b0360a01b8254161790556080810151600485015560a0810151600585015560c081015160068501556144ce60e08201511515600786019060ff801983541691151516179055565b61010081015160088501556101208101516009850155610140810151600a850180546001600160a01b039283166001600160a01b031991821617909155610160830151600b87018054918416918316919091179055610180830151600c870180549190931691161790550151910155005b506019546001600160a01b03163314614409565b506018546001600160a01b03163314614402565b506014546001600160a01b031633146143fb565b506013546001600160a01b031633146143f4565b506012546001600160a01b031633146143ed565b506011546001600160a01b031633146143e6565b506010546001600160a01b031633146143df565b3461044f57602036600319011261044f576001600160a01b036145ec614890565b1660005260296020526020604060002054604051908152f35b3461044f57602036600319011261044f576101206040516146258161491d565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008092015260043560005260226020526040600020906040516146808161491d565b8254928382526001810154602083019081526002820154604084019081526003830154906060850191825260048401546080860190815260018060a01b0392836005870154169260a0880193845260068701549560c0890196875289600860078a01549960e08c019a8b52015499019889526040519a8b525160208b01525160408a0152516060890152516080880152511660a08601525160c08501525160e08401525190820152f35b3461044f57600036600319011261044f57600d546040516001600160a01b039091168152602090f35b3461044f57614761366148e8565b913033148015614846575b8015614832575b801561481e575b801561480a575b80156147f6575b80156147e2575b80156147ce575b61479f90614c05565b60018060a01b038091166000526024602052604060002091166000526020526104d16040600020918254614b42565b506019546001600160a01b03163314614796565b506018546001600160a01b0316331461478f565b506014546001600160a01b03163314614788565b506013546001600160a01b03163314614781565b506012546001600160a01b0316331461477a565b506011546001600160a01b03163314614773565b506010546001600160a01b0316331461476c565b3461044f57602036600319011261044f576020906001600160a01b0361487e614890565b16600052602f82526040600020548152f35b600435906001600160a01b038216820361044f57565b602435906001600160a01b038216820361044f57565b60c435906001600160a01b038216820361044f57565b608435906001600160a01b038216820361044f57565b606090600319011261044f576001600160a01b0390600435828116810361044f5791602435908116810361044f579060443590565b610120810190811067ffffffffffffffff8211176126a257604052565b60a0810190811067ffffffffffffffff8211176126a257604052565b610100810190811067ffffffffffffffff8211176126a257604052565b610380810190811067ffffffffffffffff8211176126a257604052565b6101c0810190811067ffffffffffffffff8211176126a257604052565b90601f8019910116810190811067ffffffffffffffff8211176126a257604052565b60643590811515820361044f57565b60843590811515820361044f57565b3461044f57600036600319011261044f57600f546040516001600160a01b039091168152602090f35b9181601f8401121561044f5782359167ffffffffffffffff831161044f576020838186019501011161044f57565b604060031982011261044f576004359067ffffffffffffffff821161044f57614a6f91600401614a16565b90916024356001600160a01b038116810361044f5790565b3461044f57602036600319011261044f5760018060a01b03600d5416600052601a60205260406000206104d16004358254614b42565b604060031982011261044f5767ffffffffffffffff60043581811161044f578260238201121561044f5780600401359182116126a25760405192614b0b601f8401601f1916602001856149ad565b8284526024838301011161044f57816000926024602093018386013783010152906024356001600160a01b038116810361044f5790565b919082018092116108ec57565b606060031982011261044f576004359067ffffffffffffffff821161044f57614b7a91600401614a16565b90916024356001600160a01b038116810361044f579060443590565b606090600319011261044f57600435906001600160a01b0390602435828116810361044f5791604435908116810361044f5790565b3461044f57602036600319011261044f576001600160a01b03614bec614890565b16600052601a6020526020604060002054604051908152f35b15614c0c57565b60405162461bcd60e51b815260206004820152601560248201527410d85b1b195c881b9bdd08185d5d1a1bdc9a5e9959605a1b6044820152606490fd5b60001981146108ec5760010190565b919082039182116108ec57565b3033148015614d4d575b8015614d39575b8015614d25575b8015614d11575b8015614cfd575b8015614ce9575b8015614cd5575b614ca290614c05565b60018060a01b03809116600052602460205260406000209116600052602052614cd16040600020918254614c58565b9055565b506019546001600160a01b03163314614c99565b506018546001600160a01b03163314614c92565b506014546001600160a01b03163314614c8b565b506013546001600160a01b03163314614c84565b506012546001600160a01b03163314614c7d565b506011546001600160a01b03163314614c76565b506010546001600160a01b03163314614c6f565b92909115614d9a5750614d748183614e70565b9060018060a01b0316600052601a602052614d956040600020918254614b42565b905590565b6001600160a01b039091166000818152601a60209081526040808320805493969195929493808310614e5d5750508286526029845284862054601a8552614de5868820918254614b42565b905582865260298452848620869055602a8452848620429055601a84528486208054808310614e5d57505050614e25578352601a90528120805491905590565b50606491519062461bcd60e51b8252600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152fd5b925094509450614d959250849150614c58565b60009133835260206027815260409384812054428103614f21575b506001600160a01b03909216808352602582528483205490937fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a93918690828110614ef357505084825260268352614ee7868320918254614b42565b9055935b51848152a290565b92614f1b9360268652614f0a838320918254614b42565b905586815260258552205490614c58565b93614eeb565b614f2b9042614c58565b923382526025835285822054865194632762fe1b60e11b86526702c68af0bb14000060048701526024860152670de0b6b3a764000060448601526064850152828460848173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af48015615036578290614fdf575b7fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a945033835260258452614fcb878420918254614b42565b905533825260278352428683205592614e8b565b509091928381813d831161502f575b614ff881836149ad565b8101031261502b57907fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a93929151614f93565b8280fd5b503d614fee565b86513d84823e3d90fd5b818102929181159184041417156108ec57565b811561505d570490565b634e487b7160e01b600052601260045260246000fd5b9092939161509e90835190602085019660ff885116815191604060018060a01b039101511693615171565b15615106578260ff7f77e158c4de5b89cd65592962239c3cc6136696032ecc462ad1b04af14e8df53b956080946040519687956060875281606088015287870137600085850187015251602085015251166040830152601f01601f19168101030190a1600190565b50505050600090565b9060009160016102c0820151146151235750565b6101e001519150565b1561513357565b60405162461bcd60e51b81526020600482015260166024820152755075626c69632d6b65792078203e3d2048414c465f5160501b6044820152606490fd5b91906151946fa2a8918ca85bafe22016d0b997e4df5f600160ff1b03841061512c565b70014551231950b75fc4402da1732fc9bebe1994858310156152d7576001600160a01b0381811696909590871515806152ce575b806152c5575b806152bc575b1561527e576040519160208301936001600160601b03199060601b168452603483015260348252606082019282841067ffffffffffffffff8511176126a257819084604052835190209587098103908082116108ec5760209660009660ff60c0948160809916158a1461527657601b905b885216878601528160a08601520991015282805260015afa1561526a57600051161490565b6040513d6000823e3d90fd5b601c90615245565b60405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606490fd5b508115156151d4565b508415156151ce565b508515156151c8565b60405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b6064820152608490fdfea264697066735822122017f5ec96ff8ad4ac96867b6e0e81b245759f250ff1144c545235f26d5311c2b564736f6c63430008140033",
  "linkReferences": {
    "contracts/Libs/PionerV1Utils.sol": {
      "PionerV1Utils": [
        {
          "length": 20,
          "start": 20365
        }
      ]
    }
  },
  "deployedLinkReferences": {
    "contracts/Libs/PionerV1Utils.sol": {
      "PionerV1Utils": [
        {
          "length": 20,
          "start": 20337
        }
      ]
    }
  }
}
