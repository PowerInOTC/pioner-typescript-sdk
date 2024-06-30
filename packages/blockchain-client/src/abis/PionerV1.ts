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
        },
        {
          "internalType": "address",
          "name": "winner",
          "type": "address"
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
        }
      ],
      "name": "paySponsor",
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
  "bytecode": "0x6080806040523461001657615427908161001c8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c90816302ad7f43146147e05750806303339c86146146d957806304618e6b146146b057806306faa4481461458b5780630b671e6f146145515780630c965b31146142495780630cdbf9671461415f5780630e1295691461407057806311d7e2a0146140755780631425d2fa14614070578063154c7d1e14613f5457806315c8687814613f1a57806317c6a54914613b3e57806318967df814613b045780631cd8e70014613a005780631d74b67d1461387c5780631da5475e1461385e57806321e5383a1461375a5780632b08fc15146136cf5780632eb41cf8146135bd578063304e24e9146135835780633205b1d714613565578063359c02f0146133b45780633713da6c1461332857806339bbfb91146132e35780633a1ebe0c146131df5780633f06cd66146131c157806343c3cc85146130bd57806345ba6a821461309f57806346192c9c14612f9f57806348d29b1914610a8e5780634f5eddd814612f6957806355804d0614612f2f578063564f360e14612dc35780635dee283914612d8957806361dbb3b214612d4f5780636526adbe14612c495780636639013f14612b4957806367aeb0f314612b2b57806367cf9c3b14612ac75780636836948f14612a8d5780636846ce9314612a655780636e99aa5b1461291457806374f95a40146125815780637669c2bb146124a35780638224604a1461246f578063828b6e9b1461236b57806384ad71691461234d5780638738428d146123135780638da17917146122ce5780638e95b51b146121ca5780638efb3bb214612199578063902319611461216057806391cd1cbf14611cb95780639c13131214611c9b5780639dd87ac814611c73578063a1595d4514611a61578063a24f76cb1461195f578063a67986a21461190e578063a747300414611805578063ad8bd9d01461179e578063af0825af1461169a578063af40d56f1461165f578063af663e9b14611637578063b3f74d8914611619578063b8d98ce514611519578063ba97893c14611415578063bd008a8f14611315578063bd3111711461120c578063c00694141461113c578063c45bee3414611113578063c84aae1714610454578063cb1fb96414611029578063cda25f4114610f25578063d270f04c14610ec1578063d406815814610e87578063db7e8c0f14610e4d578063e1dd0fdc14610cf8578063e3f4740b14610b0e578063e47e445514610ad4578063e493ef8c14610aa7578063e558391f14610a8e578063e57764f61461096f578063e699af8a14610951578063e919aa5f1461077b578063e95e380f14610687578063f0649dcf14610669578063f299ef5714610561578063f4364a2f14610459578063f8b2cb4f146104545763ff51dff21461040857600080fd5b3461044f5760a036600319011261044f5760243560ff8116810361044f57610445602091610434614858565b90606435906044359060043561523b565b6040519015158152f35b600080fd5b614b1b565b3461044f57604036600319011261044f57610472614816565b303314801561054d575b8015610539575b8015610525575b8015610511575b80156104fd575b80156104e9575b80156104d5575b6104af90614b55565b60018060a01b0316600052602960205260406000206104d16024358254614a92565b9055005b506019546001600160a01b031633146104a6565b506018546001600160a01b0316331461049f565b506014546001600160a01b03163314610498565b506013546001600160a01b03163314610491565b506012546001600160a01b0316331461048a565b506011546001600160a01b03163314610483565b506010546001600160a01b0316331461047c565b3461044f5760a036600319011261044f5760206105d561057f614816565b61058761482c565b3033148015610655575b8015610641575b801561062d575b8015610619575b8015610605575b80156105f1575b80156105dd575b6105c490614b55565b608435916064359160443591614fc3565b604051908152f35b506019546001600160a01b031633146105bb565b506018546001600160a01b031633146105b4565b506014546001600160a01b031633146105ad565b506013546001600160a01b031633146105a6565b506012546001600160a01b0316331461059f565b506011546001600160a01b03163314610598565b506010546001600160a01b03163314610591565b3461044f57600036600319011261044f576020600a54604051908152f35b3461044f5760a036600319011261044f576106a061482c565b6001600160a01b03906044358281160361044f576020916105d5916106c3614955565b9061070b6106cf614964565b9330331490811561076c575b811561075d575b811561074e575b811561073f575b8115610730575b8115610721575b8115610713575b50614b55565b600435614cb1565b905060195416331487610705565b809150601854163314906106fe565b809150601454163314906106f7565b809150601354163314906106f0565b809150601254163314906106e9565b809150601154163314906106e2565b809150601054163314906106db565b3461044f5761012036600319011261044f5761010036602319011261044f576040516107a6816148dc565b6107ae61482c565b81526020810160443581526107c1614955565b604083019081526107d0614964565b606084019081526001600160a01b0392909160a43591848316830361044f5760059460808701938452610801614842565b9260a0880193845260c088019460e435865260e08901966101043588523033148015610944575b8015610937575b801561092a575b801561091d575b8015610910575b8015610903575b80156108f6575b61085b90614b55565b600435600052601f6020528360406000209a5116946001600160601b0360a01b95868c5416178b555160018b01556108a660028b0193511515849060ff801983541691151516179055565b5182549151610100600160b01b031990921690151560081b61ff00161760109190911b62010000600160b01b03161790559151600387018054909216921691909117905551600484015551910155005b5060195484163314610852565b508360185416331461084b565b5083601454163314610844565b508360135416331461083d565b5083601254163314610836565b508360115416331461082f565b5083601054163314610828565b3461044f57600036600319011261044f576020602154604051908152f35b3461044f57602036600319011261044f57610988614816565b3033148015610a7a575b8015610a66575b8015610a52575b8015610a3e575b8015610a2a575b8015610a16575b8015610a02575b6109c590614b55565b6001600160a01b03166000908152602360205260409020805480156109ec57600019019055005b634e487b7160e01b600052601160045260246000fd5b506019546001600160a01b031633146109bc565b506018546001600160a01b031633146109b5565b506014546001600160a01b031633146109ae565b506013546001600160a01b031633146109a7565b506012546001600160a01b031633146109a0565b506011546001600160a01b03163314610999565b506010546001600160a01b03163314610992565b3461044f57610aa5610a9f3661486e565b91614bb5565b005b3461044f57600036600319011261044f57602060405170014551231950b75fc4402da1732fc9bebe198152f35b3461044f57602036600319011261044f576001600160a01b03610af5614816565b16600052602c6020526020604060002054604051908152f35b3461044f57604036600319011261044f57610b27614816565b610b2f61482c565b7f9294c47cb49f2703e2d3095ef1f312352722b8664ddb79aa4d4bc4ed0f70246160018060a01b03928381169283600052610baf60209260298452604060002054601a8552610b846040600020918254614a92565b9055856000526029845260006040812055602a845242604060002055601a8452604060002054614dc0565b84600052601a8352604060002055602482526040600020948116948560005282526040600020549084600052602683526040600020549082821015600014610c6e57610c30915085600052602584526040600020610c0e848254614ba8565b905585600052602684526040600020610c28848254614ba8565b905582614dc0565b85600052601a8352610c486040600020918254614a92565b905583600052602482526040600020856000528252600060408120555b604051908152a3005b610cca9160258552610c866040600020918254614ba8565b90558560005260268452604060002054602485526040600020886000528552610cb56040600020918254614ba8565b90558560005260268452604060002054614dc0565b85600052601a8352610ce26040600020918254614a92565b9055836000526026825260006040812055610c65565b3461044f577f899caa590d55a05310519b00a93a11cba0e670b993797f02ed5eff3738747ce46020610d2936614ae6565b93919290923033148015610e39575b8015610e25575b8015610e11575b8015610dfd575b8015610de9575b8015610dd5575b8015610dc1575b610d6b90614b55565b60018060a01b0380941693846000526024835260406000209516948560005282526040600020610d9c828254614a92565b905583600052602582526040600020610db6828254614a92565b9055604051908152a3005b506019546001600160a01b03163314610d62565b506018546001600160a01b03163314610d5b565b506014546001600160a01b03163314610d54565b506013546001600160a01b03163314610d4d565b506012546001600160a01b03163314610d46565b506011546001600160a01b03163314610d3f565b506010546001600160a01b03163314610d38565b3461044f57602036600319011261044f576001600160a01b03610e6e614816565b16600052602b6020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b03610ea8614816565b1660005260276020526020604060002054604051908152f35b3461044f57610ecf36614a0d565b90604051908181519160005b838110610f10575050602091810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001610edb565b3461044f57604036600319011261044f57610f3e614816565b3033148015611015575b8015611001575b8015610fed575b8015610fd9575b8015610fc5575b8015610fb1575b8015610f9d575b610f7b90614b55565b60018060a01b0316600052603060205260406000206104d16024358254614ba8565b506019546001600160a01b03163314610f72565b506018546001600160a01b03163314610f6b565b506014546001600160a01b03163314610f64565b506013546001600160a01b03163314610f5d565b506012546001600160a01b03163314610f56565b506011546001600160a01b03163314610f4f565b506010546001600160a01b03163314610f48565b3461044f57600036600319011261044f5730331480156110ff575b80156110eb575b80156110d7575b80156110c3575b80156110af575b801561109b575b8015611087575b61107790614b55565b611082602154614b99565b602155005b506019546001600160a01b0316331461106e565b506018546001600160a01b03163314611067565b506014546001600160a01b03163314611060565b506013546001600160a01b03163314611059565b506012546001600160a01b03163314611052565b506011546001600160a01b0316331461104b565b506010546001600160a01b03163314611044565b3461044f57600036600319011261044f576019546040516001600160a01b039091168152602090f35b3461044f57604036600319011261044f5760a061115761482c565b60405190611164826148c0565b600082526000608060209382858201528260408201528260608201520152600435600052818052604060002090600180851b031660005281526040600020604051906111af826148c0565b80549283835260018201549080840191825260028301549160408501928352608060ff6004600387015496606089019788520154169501941515855260405195865251908501525160408401525160608301525115156080820152f35b3461044f57602061121c36614a9f565b9390923033148015611301575b80156112ed575b80156112d9575b80156112c5575b80156112b1575b801561129d575b8015611289575b61125c90614b55565b826040519384928337810160338152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b03163314611253565b506018546001600160a01b0316331461124c565b506014546001600160a01b03163314611245565b506013546001600160a01b0316331461123e565b506012546001600160a01b03163314611237565b506011546001600160a01b03163314611230565b506010546001600160a01b03163314611229565b3461044f57604036600319011261044f5761132e614816565b3033148015611401575b80156113ed575b80156113d9575b80156113c5575b80156113b1575b801561139d575b8015611389575b61136b90614b55565b6001600160a01b03166000908152602a602052604090206024359055005b506019546001600160a01b03163314611362565b506018546001600160a01b0316331461135b565b506014546001600160a01b03163314611354565b506013546001600160a01b0316331461134d565b506012546001600160a01b03163314611346565b506011546001600160a01b0316331461133f565b506010546001600160a01b03163314611338565b3461044f57604036600319011261044f5761142e614816565b3033148015611505575b80156114f1575b80156114dd575b80156114c9575b80156114b5575b80156114a1575b801561148d575b61146b90614b55565b60018060a01b0316600052602960205260406000206104d16024358254614ba8565b506019546001600160a01b03163314611462565b506018546001600160a01b0316331461145b565b506014546001600160a01b03163314611454565b506013546001600160a01b0316331461144d565b506012546001600160a01b03163314611446565b506011546001600160a01b0316331461143f565b506010546001600160a01b03163314611438565b3461044f57604036600319011261044f57611532614816565b3033148015611605575b80156115f1575b80156115dd575b80156115c9575b80156115b5575b80156115a1575b801561158d575b61156f90614b55565b6001600160a01b031660009081526025602052604090206024359055005b506019546001600160a01b03163314611566565b506018546001600160a01b0316331461155f565b506014546001600160a01b03163314611558565b506013546001600160a01b03163314611551565b506012546001600160a01b0316331461154a565b506011546001600160a01b03163314611543565b506010546001600160a01b0316331461153c565b3461044f57600036600319011261044f576020600054604051908152f35b3461044f57600036600319011261044f57604060015460ff6002541682519182526020820152f35b3461044f57602036600319011261044f5760206001600160a01b0380611683614816565b16600052602e825260406000205416604051908152f35b3461044f57604036600319011261044f576116b3614816565b303314801561178a575b8015611776575b8015611762575b801561174e575b801561173a575b8015611726575b8015611712575b6116f090614b55565b60018060a01b0316600052601a60205260406000206104d16024358254614ba8565b506019546001600160a01b031633146116e7565b506018546001600160a01b031633146116e0565b506014546001600160a01b031633146116d9565b506013546001600160a01b031633146116d2565b506012546001600160a01b031633146116cb565b506011546001600160a01b031633146116c4565b506010546001600160a01b031633146116bd565b3461044f576117eb6117af36614ae6565b9290916117be60045482614f90565b60018060a01b03809416600052601a6020526117e06040600020918254614a92565b905560055490614f90565b9116600052601a6020526104d16040600020918254614a92565b3461044f57602061181536614a9f565b93909230331480156118fa575b80156118e6575b80156118d2575b80156118be575b80156118aa575b8015611896575b8015611882575b61185590614b55565b826040519384928337810160328152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b0316331461184c565b506018546001600160a01b03163314611845565b506014546001600160a01b0316331461183e565b506013546001600160a01b03163314611837565b506012546001600160a01b03163314611830565b506011546001600160a01b03163314611829565b506010546001600160a01b03163314611822565b3461044f57604036600319011261044f57611927614816565b61192f61482c565b9060018060a01b038091166000526024602052604060002091166000526020526020604060002054604051908152f35b3461044f5761196d3661486e565b913033148015611a4d575b8015611a39575b8015611a25575b8015611a11575b80156119fd575b80156119e9575b80156119d5575b6119ab90614b55565b60018060a01b03809116600052602460205260406000209116600052602052604060002055600080f35b506019546001600160a01b031633146119a2565b506018546001600160a01b0316331461199b565b506014546001600160a01b03163314611994565b506013546001600160a01b0316331461198d565b506012546001600160a01b03163314611986565b506011546001600160a01b0316331461197f565b506010546001600160a01b03163314611978565b3461044f57602036600319011261044f5760006101a0604051611a8381614916565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152826101808201520152600435600052601e6020526101c060406000206101a0604051611af781614916565b600d60018060a01b038454169384835260018060a01b0360018201541660208401526002810154604084015260018060a01b03600382015416606084015260048101546080840152600581015460a0840152600681015460c084015260ff600782015416151560e08401526008810154610100840152600981015461012084015260018060a01b03600a8201541661014084015260018060a01b03600b8201541661016084015260018060a01b03600c8201541661018084015201548282015260405192835260018060a01b0360208201511660208401526040810151604084015260018060a01b0360608201511660608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015161010084015261012081015161012084015260018060a01b036101408201511661014084015260018060a01b036101608201511661016084015260018060a01b036101808201511661018084015201516101a0820152f35b3461044f57602036600319011261044f5733600052602b602052600435604060002055600080f35b3461044f57600036600319011261044f576020601d54604051908152f35b3461044f573660031901610560811261044f576103801361044f57604051611ce0816148f9565b60043581526024356020808301919091526001600160a01b0390604435828116810361044f5760408401526064356060840152608435608084015260a43560a084015260c43560c084015260e435828116810361044f5760e084015261010091610104358385015261012061012435818601526101443560ff8116810361044f57610140908187015261016095610164358782015261018061018435818301526101a06101a435818401526101c06101c435818501526101e4356101e085015261020435610200850152610224356102208501526102443561024085015261026435610260850152610284356102808501526102a4356102a08501526102c4356102c08501526102e4356102e085015261030435878116810361044f5761030085015261032435801515810361044f5761032085015261034435610340850152610364356103608501523661038319011261044f5760405191611e4283614916565b61038435878116810361044f5783526103a43599878b168b0361044f578884019a8b526103c43560408501526103e435888116810361044f576060850152608084019661040435885260a085019a610424358c526104443560c087015261046435801515810361044f5760e087015261048435908601528401956104a43587526104c43590898216820361044f578501526104e43590888216820361044f578401526105043590878216820361044f57830152610524359082015261054435923033148015612153575b8015612146575b8015612139575b801561212c575b801561211f575b8015612112575b8015612105575b611f3f90614b55565b516002811480156120fb575b15612040575084815116611fcf575b5083875116611f6557005b603095670de0b6b3a7640000611f8c611fb895611f84611f95956151d9565b905190614f90565b04905190614f90565b908387511660005260318552604060002090600052845260406000205490614ba8565b935116600052526104d16040600020918254614a92565b8461201e611ffc670de0b6b3a7640000611ff3611feb876151d9565b895190614f90565b048a5190614f90565b8284511660005260318952604060002086600052895260406000205490614ba8565b915116600052603086526120386040600020918254614a92565b905587611f5a565b929650925050600381149081156120f0575b81156120e5575b5061206057005b81815116806120a9575b505080845116928315610aa557603093600052603183526040600020906000528252604060002054935116600052526104d16040600020918254614ba8565b60005260318352604060002084600052835281604060002054915116600052603083526120dc6040600020918254614ba8565b9055848061206a565b600491501486612059565b600481149150612052565b5060018114611f4b565b5060195486163314611f36565b5085601854163314611f2f565b5085601454163314611f28565b5085601354163314611f21565b5085601254163314611f1a565b5085601154163314611f13565b5085601054163314611f0c565b3461044f57602036600319011261044f576001600160a01b03612181614816565b16600052602360205260406000206104d18154614b99565b3461044f57600036600319011261044f5760206040516fa2a8918ca85bafe22016d0b997e4df5f600160ff1b038152f35b3461044f57604036600319011261044f576121e3614816565b30331480156122ba575b80156122a6575b8015612292575b801561227e575b801561226a575b8015612256575b8015612242575b61222090614b55565b60018060a01b0316600052603060205260406000206104d16024358254614a92565b506019546001600160a01b03163314612217565b506018546001600160a01b03163314612210565b506014546001600160a01b03163314612209565b506013546001600160a01b03163314612202565b506012546001600160a01b031633146121fb565b506011546001600160a01b031633146121f4565b506010546001600160a01b031633146121ed565b3461044f5760206122de366149ca565b929091826040519384928337810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b03612334614816565b1660005260266020526020604060002054604051908152f35b3461044f57600036600319011261044f576020601b54604051908152f35b3461044f57604036600319011261044f57612384614816565b303314801561245b575b8015612447575b8015612433575b801561241f575b801561240b575b80156123f7575b80156123e3575b6123c190614b55565b60018060a01b0316600052602f60205260406000206104d16024358254614a92565b506019546001600160a01b031633146123b8565b506018546001600160a01b031633146123b1565b506014546001600160a01b031633146123aa565b506013546001600160a01b031633146123a3565b506012546001600160a01b0316331461239c565b506011546001600160a01b03163314612395565b506010546001600160a01b0316331461238e565b3461044f57602036600319011261044f57610aa56fa2a8918ca85bafe22016d0b997e4df5f600160ff1b03600435106151f6565b3461044f5760e036600319011261044f5767ffffffffffffffff60043581811161044f576124d590369060040161499c565b91606036604319011261044f57604051606081018181108382111761256b5760405260443581526064356001600160a01b038116810361044f57602082015261251c614858565b6040820152604060a31936011261044f576040519160408301908382109082111761256b5760405260a435825260c4359260ff8416840361044f5760209461044594868501526024359161513d565b634e487b7160e01b600052604160045260246000fd5b3461044f57602036600319011261044f5760006103606040516125a3816148f9565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015282610220820152826102408201528261026082015282610280820152826102a0820152826102c0820152826102e08201528261030082015282610320820152826103408201520152600435600052601c6020526103806040600020610360604051612679816148f9565b601a8354938483526001810154602084015260018060a01b0360028201541660408401526003810154606084015260048101546080840152600581015460a0840152600681015460c084015260018060a01b0360078201541660e08401526008810154610100840152600981015461012084015260ff600a82015416610140840152600b810154610160840152600c810154610180840152600d8101546101a0840152600e8101546101c0840152600f8101546101e08401526010810154610200840152601181015461022084015260128101546102408401526013810154610260840152601481015461028084015260158101546102a084015260168101546102c084015260178101546102e084015260ff601882015460018060a01b03811661030086015260a01c16151561032084015260198101546103408401520154828201526040519283526020810151602084015260018060a01b036040820151166040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260018060a01b0360e08201511660e084015261010081015161010084015261012081015161012084015260ff610140820151166101408401526101608101516101608401526101808101516101808401526101a08101516101a08401526101c08101516101c08401526101e08101516101e08401526102008101516102008401526102208101516102208401526102408101516102408401526102608101516102608401526102808101516102808401526102a08101516102a08401526102c08101516102c08401526102e08101516102e084015260018060a01b036103008201511661030084015261032081015115156103208401526103408101516103408401520151610360820152f35b3461044f5761026036600319011261044f5761292e614816565b6001600160a01b039061016435828116919082900361044f57610184359083821680920361044f576101a43584811680910361044f576101c43585811680910361044f576101e43586811680910361044f57610204359187831680930361044f57610224359388851680950361044f57610244359689881680980361044f576037549860ff8a1661044f5760019a6001600160601b0360a01b981688600f541617600f5560243560035560443560045560643560055560843560065560a43560075560c43560085560e43560095561010435600a5561012435600b5561014435600c5587600d541617600d5586600e541617600e55856010541617601055846011541617601155836012541617601255826014541617601455816018541617601855601954161760195560ff191617603755600080f35b3461044f57602036600319011261044f5733600052602c602052600435604060002055600080f35b3461044f57602036600319011261044f576001600160a01b03612aae614816565b1660005260346020526020604060002054604051908152f35b3461044f57612ad536614a0d565b90604051908181519160005b838110612b16575050602091810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001612ae1565b3461044f57600036600319011261044f576020600954604051908152f35b3461044f57604036600319011261044f57612b62614816565b3033148015612c35575b8015612c21575b8015612c0d575b8015612bf9575b8015612be5575b8015612bd1575b8015612bbd575b612b9f90614b55565b6001600160a01b031660009081526026602052604090206024359055005b506019546001600160a01b03163314612b96565b506018546001600160a01b03163314612b8f565b506014546001600160a01b03163314612b88565b506013546001600160a01b03163314612b81565b506012546001600160a01b03163314612b7a565b506011546001600160a01b03163314612b73565b506010546001600160a01b03163314612b6c565b3461044f57604036600319011261044f57612c62614816565b3033148015612d3b575b8015612d27575b8015612d13575b8015612cff575b8015612ceb575b8015612cd7575b8015612cc3575b612c9f90614b55565b6001600160a01b03166000908152602d60205260409020805461044f576024359055005b506019546001600160a01b03163314612c96565b506018546001600160a01b03163314612c8f565b506014546001600160a01b03163314612c88565b506013546001600160a01b03163314612c81565b506012546001600160a01b03163314612c7a565b506011546001600160a01b03163314612c73565b506010546001600160a01b03163314612c6c565b3461044f57602036600319011261044f576001600160a01b03612d70614816565b16600052602a6020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b03612daa614816565b1660005260256020526020604060002054604051908152f35b3461044f57604036600319011261044f57612ddc614816565b602435903033148015612f1b575b8015612f07575b8015612ef3575b8015612edf575b8015612ecb575b8015612eb7575b8015612ea3575b612e1d90614b55565b6001600160a01b0316600081815260346020908152604090912054919290918114612e5f57603692600052603582526040600020555242604060002055600080f35b50603681526040600020546201518081018091116109ec574211612e7f57005b60369160005260358152604060002054603482526040600020555260006040812055005b506019546001600160a01b03163314612e14565b506018546001600160a01b03163314612e0d565b506014546001600160a01b03163314612e06565b506013546001600160a01b03163314612dff565b506012546001600160a01b03163314612df8565b506011546001600160a01b03163314612df1565b506010546001600160a01b03163314612dea565b3461044f57602036600319011261044f576001600160a01b03612f50614816565b16600052602d6020526020604060002054604051908152f35b3461044f57602036600319011261044f5760018060a01b03600d5416600052601a60205260406000206104d16004358254614a92565b3461044f57604036600319011261044f57612fb8614816565b303314801561308b575b8015613077575b8015613063575b801561304f575b801561303b575b8015613027575b8015613013575b612ff590614b55565b6001600160a01b031660009081526030602052604090206024359055005b506019546001600160a01b03163314612fec565b506018546001600160a01b03163314612fe5565b506014546001600160a01b03163314612fde565b506013546001600160a01b03163314612fd7565b506012546001600160a01b03163314612fd0565b506011546001600160a01b03163314612fc9565b506010546001600160a01b03163314612fc2565b3461044f57600036600319011261044f576020600c54604051908152f35b3461044f57604036600319011261044f576130d6614816565b30331480156131ad575b8015613199575b8015613185575b8015613171575b801561315d575b8015613149575b8015613135575b61311390614b55565b60018060a01b0316600052602f60205260406000206104d16024358254614ba8565b506019546001600160a01b0316331461310a565b506018546001600160a01b03163314613103565b506014546001600160a01b031633146130fc565b506013546001600160a01b031633146130f5565b506012546001600160a01b031633146130ee565b506011546001600160a01b031633146130e7565b506010546001600160a01b031633146130e0565b3461044f57600036600319011261044f576020600854604051908152f35b3461044f57604036600319011261044f576131f8614816565b30331480156132cf575b80156132bb575b80156132a7575b8015613293575b801561327f575b801561326b575b8015613257575b61323590614b55565b60018060a01b0316600052602560205260406000206104d16024358254614ba8565b506019546001600160a01b0316331461322c565b506018546001600160a01b03163314613225565b506014546001600160a01b0316331461321e565b506013546001600160a01b03163314613217565b506012546001600160a01b03163314613210565b506011546001600160a01b03163314613209565b506010546001600160a01b03163314613202565b3461044f5760206132f3366149ca565b929091826040519384928337810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f57604036600319011261044f5760043561334461482c565b90670de0b6b3a76400008061335b60065484614f90565b049160018060a01b039283600d5416600052601a6020526133826040600020918254614a92565b905560065482038281116109ec5761339991614f90565b049116600052601a6020526104d16040600020918254614a92565b3461044f5761014036600319011261044f5761012036602319011261044f576040516133df816148a3565b602435815260086020820160443581526040830160643581526060840160843581526080850160a4358152613412614842565b9060a0870191825260c087019260e435845260e08801946101043586526101008901966101243588523033148015613551575b801561353d575b8015613529575b8015613515575b8015613501575b80156134ed575b80156134d9575b61347890614b55565b6004356000526022602052604060002099518a555160018a0155516002890155516003880155516004870155600586019060018060a01b039051166001600160601b0360a01b82541617905551600685015551600784015551910155600080f35b506019546001600160a01b0316331461346f565b506018546001600160a01b03163314613468565b506014546001600160a01b03163314613461565b506013546001600160a01b0316331461345a565b506012546001600160a01b03163314613453565b506011546001600160a01b0316331461344c565b506010546001600160a01b03163314613445565b3461044f57600036600319011261044f576020600b54604051908152f35b3461044f57602036600319011261044f576001600160a01b036135a4614816565b1660005260286020526020604060002054604051908152f35b3461044f57602036600319011261044f57600060e06040516135de816148dc565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201520152600435600052601f6020526101006040600020604051613626816148dc565b60018060a01b039182815416928383526001820154602084019081528160028401546040860160ff821615158152606087019060ff8360081c161515825283608089019360101c168352836003880154169460a0890195865260e0600560048a01549960c08c019a8b5201549901988952604051998a525160208a01525115156040890152511515606088015251166080860152511660a08401525160c08301525160e0820152f35b3461044f57600036600319011261044f57610180600354600454600554600654600754600854600954600a5491600b5493600c549560018060a01b039788600d541698600e5416996040519b8c5260208c015260408b015260608a0152608089015260a088015260c087015260e0860152610100850152610120840152610140830152610160820152f35b3461044f57604036600319011261044f57613773614816565b303314801561384a575b8015613836575b8015613822575b801561380e575b80156137fa575b80156137e6575b80156137d2575b6137b090614b55565b60018060a01b0316600052601a60205260406000206104d16024358254614a92565b506019546001600160a01b031633146137a7565b506018546001600160a01b031633146137a0565b506014546001600160a01b03163314613799565b506013546001600160a01b03163314613792565b506012546001600160a01b0316331461378b565b506011546001600160a01b03163314613784565b506010546001600160a01b0316331461377d565b3461044f57600036600319011261044f576020600354604051908152f35b3461044f5760e036600319011261044f5761389561482c565b60a036604319011261044f576040516138ad816148c0565b6044358152602081019160643583526040820160843581526060830160a435815260c43591821515830361044f57610aa5956004946080870194855230331480156139ec575b80156139d8575b80156139c4575b80156139b0575b801561399c575b8015613988575b8015613974575b61392690614b55565b85356000526020805260406000209060018060a01b031660005260205260406000209551865551600186015551600285015551600384015551151591019060ff801983541691151516179055565b506019546001600160a01b0316331461391d565b506018546001600160a01b03163314613916565b506014546001600160a01b0316331461390f565b506013546001600160a01b03163314613908565b506012546001600160a01b03163314613901565b506011546001600160a01b031633146138fa565b506010546001600160a01b031633146138f3565b3461044f57604036600319011261044f57613a19614816565b3033148015613af0575b8015613adc575b8015613ac8575b8015613ab4575b8015613aa0575b8015613a8c575b8015613a78575b613a5690614b55565b60018060a01b0316600052602660205260406000206104d16024358254614ba8565b506019546001600160a01b03163314613a4d565b506018546001600160a01b03163314613a46565b506014546001600160a01b03163314613a3f565b506013546001600160a01b03163314613a38565b506012546001600160a01b03163314613a31565b506011546001600160a01b03163314613a2a565b506010546001600160a01b03163314613a23565b3461044f57602036600319011261044f576001600160a01b03613b25614816565b1660005260236020526020604060002054604051908152f35b3461044f576103a036600319011261044f5761038036602319011261044f57604051613b69816148f9565b602435815260443560208201526064356001600160a01b038116810361044f576040820152608435606082015260a435608082015260c43560a082015260e43560c0820152610104356001600160a01b038116810361044f5760e082015261012435610100820152610144356101208201526101643560ff8116810361044f57610140820152610184356101608201526101a4356101808201526101c4356101a08201526101e4356101c0820152610204356101e0820152610224356102008201526102443561022082015261026435610240820152610284356102608201526102a4356102808201526102c4356102a08201526102e4356102c0820152610304356102e0820152610324356001600160a01b038116900361044f5761032435610300820152610344351515610344350361044f576103443561032082015261036435610340820152610384356103608201523033148015613f06575b8015613ef2575b8015613ede575b8015613eca575b8015613eb6575b8015613ea2575b8015613e8e575b613cf990614b55565b600435600052601c602052601a61036060406000209280518455602081015160018501556002840160018060a01b03604083015116906001600160601b0360a01b9182825416179055606082015160038601556080820151600486015560a0820151600586015560c08201516006860155600785019060018060a01b0360e0840151169082541617905561010081015160088501556101208101516009850155600a840160ff6101408301511660ff19825416179055610160810151600b850155610180810151600c8501556101a0810151600d8501556101c0810151600e8501556101e0810151600f850155610200810151601085015561022081015160118501556102408101516012850155610260810151601385015561028081015160148501556102a081015160158501556102c081015160168501556102e081015160178501556018840160018060a01b036103008301511681549060ff60a01b610320850151151560a01b16916affffffffffffffffffffff60a81b161717905561034081015160198501550151910155600080f35b506019546001600160a01b03163314613cf0565b506018546001600160a01b03163314613ce9565b506014546001600160a01b03163314613ce2565b506013546001600160a01b03163314613cdb565b506012546001600160a01b03163314613cd4565b506011546001600160a01b03163314613ccd565b506010546001600160a01b03163314613cc6565b3461044f57602036600319011261044f576001600160a01b03613f3b614816565b1660005260306020526020604060002054604051908152f35b3461044f57604036600319011261044f57613f6d614816565b613f7561482c565b90303314801561405c575b8015614048575b8015614034575b8015614020575b801561400c575b8015613ff8575b8015613fe4575b613fb390614b55565b6001600160a01b039081166000908152602e6020526040902080546001600160a01b03191692909116919091179055005b506019546001600160a01b03163314613faa565b506018546001600160a01b03163314613fa3565b506014546001600160a01b03163314613f9c565b506013546001600160a01b03163314613f95565b506012546001600160a01b03163314613f8e565b506011546001600160a01b03163314613f87565b506010546001600160a01b03163314613f80565b614973565b3461044f57600036600319011261044f57303314801561414b575b8015614137575b8015614123575b801561410f575b80156140fb575b80156140e7575b80156140d3575b6140c390614b55565b6140ce601b54614b99565b601b55005b506019546001600160a01b031633146140ba565b506018546001600160a01b031633146140b3565b506014546001600160a01b031633146140ac565b506013546001600160a01b031633146140a5565b506012546001600160a01b0316331461409e565b506011546001600160a01b03163314614097565b506010546001600160a01b03163314614090565b3461044f57600036600319011261044f573033148015614235575b8015614221575b801561420d575b80156141f9575b80156141e5575b80156141d1575b80156141bd575b6141ad90614b55565b6141b8601d54614b99565b601d55005b506019546001600160a01b031633146141a4565b506018546001600160a01b0316331461419d565b506014546001600160a01b03163314614196565b506013546001600160a01b0316331461418f565b506012546001600160a01b03163314614188565b506011546001600160a01b03163314614181565b506010546001600160a01b0316331461417a565b3461044f576101e036600319011261044f576101c036602319011261044f5760405161427481614916565b6024356001600160a01b038116810361044f5781526044356001600160a01b038116810361044f57602082015260643560408201526084356001600160a01b038116810361044f57606082015260a435608082015260c43560a082015260e43560c082015261010435801515810361044f5760e08201526101243561010082015261014435610120820152610164356001600160a01b038116810361044f57610140820152610184356001600160a01b038116810361044f576101608201526101a4356001600160a01b038116900361044f576101a4356101808201526101c4356101a0820152303314801561453d575b8015614529575b8015614515575b8015614501575b80156144ed575b80156144d9575b80156144c5575b61439890614b55565b600435600052601e602052600d6101a060406000209260018060a01b038151166001600160601b0360a01b8554161784556001840160018060a01b036020830151166001600160601b0360a01b825416179055604081015160028501556003840160018060a01b036060830151166001600160601b0360a01b8254161790556080810151600485015560a0810151600585015560c0810151600685015561445460e08201511515600786019060ff801983541691151516179055565b61010081015160088501556101208101516009850155610140810151600a850180546001600160a01b039283166001600160a01b031991821617909155610160830151600b87018054918416918316919091179055610180830151600c870180549190931691161790550151910155005b506019546001600160a01b0316331461438f565b506018546001600160a01b03163314614388565b506014546001600160a01b03163314614381565b506013546001600160a01b0316331461437a565b506012546001600160a01b03163314614373565b506011546001600160a01b0316331461436c565b506010546001600160a01b03163314614365565b3461044f57602036600319011261044f576001600160a01b03614572614816565b1660005260296020526020604060002054604051908152f35b3461044f57602036600319011261044f576101206040516145ab816148a3565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100809201526004356000526022602052604060002090604051614606816148a3565b8254928382526001810154602083019081526002820154604084019081526003830154906060850191825260048401546080860190815260018060a01b0392836005870154169260a0880193845260068701549560c0890196875289600860078a01549960e08c019a8b52015499019889526040519a8b525160208b01525160408a0152516060890152516080880152511660a08601525160c08501525160e08401525190820152f35b3461044f57600036600319011261044f57600d546040516001600160a01b039091168152602090f35b3461044f576146e73661486e565b9130331480156147cc575b80156147b8575b80156147a4575b8015614790575b801561477c575b8015614768575b8015614754575b61472590614b55565b60018060a01b038091166000526024602052604060002091166000526020526104d16040600020918254614a92565b506019546001600160a01b0316331461471c565b506018546001600160a01b03163314614715565b506014546001600160a01b0316331461470e565b506013546001600160a01b03163314614707565b506012546001600160a01b03163314614700565b506011546001600160a01b031633146146f9565b506010546001600160a01b031633146146f2565b3461044f57602036600319011261044f576020906001600160a01b03614804614816565b16600052602f82526040600020548152f35b600435906001600160a01b038216820361044f57565b602435906001600160a01b038216820361044f57565b60c435906001600160a01b038216820361044f57565b608435906001600160a01b038216820361044f57565b606090600319011261044f576001600160a01b0390600435828116810361044f5791602435908116810361044f579060443590565b610120810190811067ffffffffffffffff82111761256b57604052565b60a0810190811067ffffffffffffffff82111761256b57604052565b610100810190811067ffffffffffffffff82111761256b57604052565b610380810190811067ffffffffffffffff82111761256b57604052565b6101c0810190811067ffffffffffffffff82111761256b57604052565b90601f8019910116810190811067ffffffffffffffff82111761256b57604052565b60643590811515820361044f57565b60843590811515820361044f57565b3461044f57600036600319011261044f57600f546040516001600160a01b039091168152602090f35b9181601f8401121561044f5782359167ffffffffffffffff831161044f576020838186019501011161044f57565b604060031982011261044f576004359067ffffffffffffffff821161044f576149f59160040161499c565b90916024356001600160a01b038116810361044f5790565b604060031982011261044f5767ffffffffffffffff60043581811161044f578260238201121561044f57806004013591821161256b5760405192614a5b601f8401601f191660200185614933565b8284526024838301011161044f57816000926024602093018386013783010152906024356001600160a01b038116810361044f5790565b919082018092116109ec57565b606060031982011261044f576004359067ffffffffffffffff821161044f57614aca9160040161499c565b90916024356001600160a01b038116810361044f579060443590565b606090600319011261044f57600435906001600160a01b0390602435828116810361044f5791604435908116810361044f5790565b3461044f57602036600319011261044f576001600160a01b03614b3c614816565b16600052601a6020526020604060002054604051908152f35b15614b5c57565b60405162461bcd60e51b815260206004820152601560248201527410d85b1b195c881b9bdd08185d5d1a1bdc9a5e9959605a1b6044820152606490fd5b60001981146109ec5760010190565b919082039182116109ec57565b3033148015614c9d575b8015614c89575b8015614c75575b8015614c61575b8015614c4d575b8015614c39575b8015614c25575b614bf290614b55565b60018060a01b03809116600052602460205260406000209116600052602052614c216040600020918254614ba8565b9055565b506019546001600160a01b03163314614be9565b506018546001600160a01b03163314614be2565b506014546001600160a01b03163314614bdb565b506013546001600160a01b03163314614bd4565b506012546001600160a01b03163314614bcd565b506011546001600160a01b03163314614bc6565b506010546001600160a01b03163314614bbf565b92909115614cea5750614cc48183614dc0565b9060018060a01b0316600052601a602052614ce56040600020918254614a92565b905590565b6001600160a01b039091166000818152601a60209081526040808320805493969195929493808310614dad5750508286526029845284862054601a8552614d35868820918254614a92565b905582865260298452848620869055602a8452848620429055601a84528486208054808310614dad57505050614d75578352601a90528120805491905590565b50606491519062461bcd60e51b8252600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152fd5b925094509450614ce59250849150614ba8565b60009133835260206027815260409384812054428103614e71575b506001600160a01b03909216808352602582528483205490937fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a93918690828110614e4357505084825260268352614e37868320918254614a92565b9055935b51848152a290565b92614e6b9360268652614e5a838320918254614a92565b905586815260258552205490614ba8565b93614e3b565b614e7b9042614ba8565b923382526025835285822054865194632762fe1b60e11b86526702c68af0bb14000060048701526024860152670de0b6b3a764000060448601526064850152828460848173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af48015614f86578290614f2f575b7fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a945033835260258452614f1b878420918254614a92565b905533825260278352428683205592614ddb565b509091928381813d8311614f7f575b614f488183614933565b81010312614f7b57907fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a93929151614ee3565b8280fd5b503d614f3e565b86513d84823e3d90fd5b818102929181159184041417156109ec57565b8115614fad570490565b634e487b7160e01b600052601260045260246000fd5b9391929060018060a01b0380951691600094838652602094602c865260409788882054941692838603614ffd575b50505050505050905090565b828111806150f1575b1561505757505050828552601a84528585208054838111615031575050505090601a91835252205490565b839697945090615048601a94614ce5979493614a92565b90558652528320918254614ba8565b808311928361509e575b50505061507b575050505090508038808080808080614ff1565b828552601a84528585208054838111615031575050505090601a91835252205490565b909192506150b6670de0b6b3a7640000928392614fa3565b0491670b1a2bc2ec500000908181029181830414901517156150dd57041015388080615061565b634e487b7160e01b88526011600452602488fd5b50670de0b6b3a7640000806151068584614fa3565b0490670b1a2bc2ec50000080850290858204148515171561512957041015615006565b634e487b7160e01b8b52601160045260248bfd5b9092939161516890835190602085019660ff885116815191604060018060a01b03910151169361523b565b156151d0578260ff7f77e158c4de5b89cd65592962239c3cc6136696032ecc462ad1b04af14e8df53b956080946040519687956060875281606088015287870137600085850187015251602085015251166040830152601f01601f19168101030190a1600190565b50505050600090565b9060009160016102c0820151146151ed5750565b6101e001519150565b156151fd57565b60405162461bcd60e51b81526020600482015260166024820152755075626c69632d6b65792078203e3d2048414c465f5160501b6044820152606490fd5b919061525e6fa2a8918ca85bafe22016d0b997e4df5f600160ff1b0384106151f6565b70014551231950b75fc4402da1732fc9bebe1994858310156153a1576001600160a01b038181169690959087151580615398575b8061538f575b80615386575b15615348576040519160208301936001600160601b03199060601b168452603483015260348252606082019282841067ffffffffffffffff85111761256b57819084604052835190209587098103908082116109ec5760209660009660ff60c0948160809916158a1461534057601b905b885216878601528160a08601520991015282805260015afa1561533457600051161490565b6040513d6000823e3d90fd5b601c9061530f565b60405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606490fd5b5081151561529e565b50841515615298565b50851515615292565b60405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b6064820152608490fdfea26469706673582212201b48042480ed582fd859e60838595b1afdbde0a94522359d9100b48c5f92ce7164736f6c63430008140033",
  "deployedBytecode": "0x608080604052600436101561001357600080fd5b60003560e01c90816302ad7f43146147e05750806303339c86146146d957806304618e6b146146b057806306faa4481461458b5780630b671e6f146145515780630c965b31146142495780630cdbf9671461415f5780630e1295691461407057806311d7e2a0146140755780631425d2fa14614070578063154c7d1e14613f5457806315c8687814613f1a57806317c6a54914613b3e57806318967df814613b045780631cd8e70014613a005780631d74b67d1461387c5780631da5475e1461385e57806321e5383a1461375a5780632b08fc15146136cf5780632eb41cf8146135bd578063304e24e9146135835780633205b1d714613565578063359c02f0146133b45780633713da6c1461332857806339bbfb91146132e35780633a1ebe0c146131df5780633f06cd66146131c157806343c3cc85146130bd57806345ba6a821461309f57806346192c9c14612f9f57806348d29b1914610a8e5780634f5eddd814612f6957806355804d0614612f2f578063564f360e14612dc35780635dee283914612d8957806361dbb3b214612d4f5780636526adbe14612c495780636639013f14612b4957806367aeb0f314612b2b57806367cf9c3b14612ac75780636836948f14612a8d5780636846ce9314612a655780636e99aa5b1461291457806374f95a40146125815780637669c2bb146124a35780638224604a1461246f578063828b6e9b1461236b57806384ad71691461234d5780638738428d146123135780638da17917146122ce5780638e95b51b146121ca5780638efb3bb214612199578063902319611461216057806391cd1cbf14611cb95780639c13131214611c9b5780639dd87ac814611c73578063a1595d4514611a61578063a24f76cb1461195f578063a67986a21461190e578063a747300414611805578063ad8bd9d01461179e578063af0825af1461169a578063af40d56f1461165f578063af663e9b14611637578063b3f74d8914611619578063b8d98ce514611519578063ba97893c14611415578063bd008a8f14611315578063bd3111711461120c578063c00694141461113c578063c45bee3414611113578063c84aae1714610454578063cb1fb96414611029578063cda25f4114610f25578063d270f04c14610ec1578063d406815814610e87578063db7e8c0f14610e4d578063e1dd0fdc14610cf8578063e3f4740b14610b0e578063e47e445514610ad4578063e493ef8c14610aa7578063e558391f14610a8e578063e57764f61461096f578063e699af8a14610951578063e919aa5f1461077b578063e95e380f14610687578063f0649dcf14610669578063f299ef5714610561578063f4364a2f14610459578063f8b2cb4f146104545763ff51dff21461040857600080fd5b3461044f5760a036600319011261044f5760243560ff8116810361044f57610445602091610434614858565b90606435906044359060043561523b565b6040519015158152f35b600080fd5b614b1b565b3461044f57604036600319011261044f57610472614816565b303314801561054d575b8015610539575b8015610525575b8015610511575b80156104fd575b80156104e9575b80156104d5575b6104af90614b55565b60018060a01b0316600052602960205260406000206104d16024358254614a92565b9055005b506019546001600160a01b031633146104a6565b506018546001600160a01b0316331461049f565b506014546001600160a01b03163314610498565b506013546001600160a01b03163314610491565b506012546001600160a01b0316331461048a565b506011546001600160a01b03163314610483565b506010546001600160a01b0316331461047c565b3461044f5760a036600319011261044f5760206105d561057f614816565b61058761482c565b3033148015610655575b8015610641575b801561062d575b8015610619575b8015610605575b80156105f1575b80156105dd575b6105c490614b55565b608435916064359160443591614fc3565b604051908152f35b506019546001600160a01b031633146105bb565b506018546001600160a01b031633146105b4565b506014546001600160a01b031633146105ad565b506013546001600160a01b031633146105a6565b506012546001600160a01b0316331461059f565b506011546001600160a01b03163314610598565b506010546001600160a01b03163314610591565b3461044f57600036600319011261044f576020600a54604051908152f35b3461044f5760a036600319011261044f576106a061482c565b6001600160a01b03906044358281160361044f576020916105d5916106c3614955565b9061070b6106cf614964565b9330331490811561076c575b811561075d575b811561074e575b811561073f575b8115610730575b8115610721575b8115610713575b50614b55565b600435614cb1565b905060195416331487610705565b809150601854163314906106fe565b809150601454163314906106f7565b809150601354163314906106f0565b809150601254163314906106e9565b809150601154163314906106e2565b809150601054163314906106db565b3461044f5761012036600319011261044f5761010036602319011261044f576040516107a6816148dc565b6107ae61482c565b81526020810160443581526107c1614955565b604083019081526107d0614964565b606084019081526001600160a01b0392909160a43591848316830361044f5760059460808701938452610801614842565b9260a0880193845260c088019460e435865260e08901966101043588523033148015610944575b8015610937575b801561092a575b801561091d575b8015610910575b8015610903575b80156108f6575b61085b90614b55565b600435600052601f6020528360406000209a5116946001600160601b0360a01b95868c5416178b555160018b01556108a660028b0193511515849060ff801983541691151516179055565b5182549151610100600160b01b031990921690151560081b61ff00161760109190911b62010000600160b01b03161790559151600387018054909216921691909117905551600484015551910155005b5060195484163314610852565b508360185416331461084b565b5083601454163314610844565b508360135416331461083d565b5083601254163314610836565b508360115416331461082f565b5083601054163314610828565b3461044f57600036600319011261044f576020602154604051908152f35b3461044f57602036600319011261044f57610988614816565b3033148015610a7a575b8015610a66575b8015610a52575b8015610a3e575b8015610a2a575b8015610a16575b8015610a02575b6109c590614b55565b6001600160a01b03166000908152602360205260409020805480156109ec57600019019055005b634e487b7160e01b600052601160045260246000fd5b506019546001600160a01b031633146109bc565b506018546001600160a01b031633146109b5565b506014546001600160a01b031633146109ae565b506013546001600160a01b031633146109a7565b506012546001600160a01b031633146109a0565b506011546001600160a01b03163314610999565b506010546001600160a01b03163314610992565b3461044f57610aa5610a9f3661486e565b91614bb5565b005b3461044f57600036600319011261044f57602060405170014551231950b75fc4402da1732fc9bebe198152f35b3461044f57602036600319011261044f576001600160a01b03610af5614816565b16600052602c6020526020604060002054604051908152f35b3461044f57604036600319011261044f57610b27614816565b610b2f61482c565b7f9294c47cb49f2703e2d3095ef1f312352722b8664ddb79aa4d4bc4ed0f70246160018060a01b03928381169283600052610baf60209260298452604060002054601a8552610b846040600020918254614a92565b9055856000526029845260006040812055602a845242604060002055601a8452604060002054614dc0565b84600052601a8352604060002055602482526040600020948116948560005282526040600020549084600052602683526040600020549082821015600014610c6e57610c30915085600052602584526040600020610c0e848254614ba8565b905585600052602684526040600020610c28848254614ba8565b905582614dc0565b85600052601a8352610c486040600020918254614a92565b905583600052602482526040600020856000528252600060408120555b604051908152a3005b610cca9160258552610c866040600020918254614ba8565b90558560005260268452604060002054602485526040600020886000528552610cb56040600020918254614ba8565b90558560005260268452604060002054614dc0565b85600052601a8352610ce26040600020918254614a92565b9055836000526026825260006040812055610c65565b3461044f577f899caa590d55a05310519b00a93a11cba0e670b993797f02ed5eff3738747ce46020610d2936614ae6565b93919290923033148015610e39575b8015610e25575b8015610e11575b8015610dfd575b8015610de9575b8015610dd5575b8015610dc1575b610d6b90614b55565b60018060a01b0380941693846000526024835260406000209516948560005282526040600020610d9c828254614a92565b905583600052602582526040600020610db6828254614a92565b9055604051908152a3005b506019546001600160a01b03163314610d62565b506018546001600160a01b03163314610d5b565b506014546001600160a01b03163314610d54565b506013546001600160a01b03163314610d4d565b506012546001600160a01b03163314610d46565b506011546001600160a01b03163314610d3f565b506010546001600160a01b03163314610d38565b3461044f57602036600319011261044f576001600160a01b03610e6e614816565b16600052602b6020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b03610ea8614816565b1660005260276020526020604060002054604051908152f35b3461044f57610ecf36614a0d565b90604051908181519160005b838110610f10575050602091810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001610edb565b3461044f57604036600319011261044f57610f3e614816565b3033148015611015575b8015611001575b8015610fed575b8015610fd9575b8015610fc5575b8015610fb1575b8015610f9d575b610f7b90614b55565b60018060a01b0316600052603060205260406000206104d16024358254614ba8565b506019546001600160a01b03163314610f72565b506018546001600160a01b03163314610f6b565b506014546001600160a01b03163314610f64565b506013546001600160a01b03163314610f5d565b506012546001600160a01b03163314610f56565b506011546001600160a01b03163314610f4f565b506010546001600160a01b03163314610f48565b3461044f57600036600319011261044f5730331480156110ff575b80156110eb575b80156110d7575b80156110c3575b80156110af575b801561109b575b8015611087575b61107790614b55565b611082602154614b99565b602155005b506019546001600160a01b0316331461106e565b506018546001600160a01b03163314611067565b506014546001600160a01b03163314611060565b506013546001600160a01b03163314611059565b506012546001600160a01b03163314611052565b506011546001600160a01b0316331461104b565b506010546001600160a01b03163314611044565b3461044f57600036600319011261044f576019546040516001600160a01b039091168152602090f35b3461044f57604036600319011261044f5760a061115761482c565b60405190611164826148c0565b600082526000608060209382858201528260408201528260608201520152600435600052818052604060002090600180851b031660005281526040600020604051906111af826148c0565b80549283835260018201549080840191825260028301549160408501928352608060ff6004600387015496606089019788520154169501941515855260405195865251908501525160408401525160608301525115156080820152f35b3461044f57602061121c36614a9f565b9390923033148015611301575b80156112ed575b80156112d9575b80156112c5575b80156112b1575b801561129d575b8015611289575b61125c90614b55565b826040519384928337810160338152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b03163314611253565b506018546001600160a01b0316331461124c565b506014546001600160a01b03163314611245565b506013546001600160a01b0316331461123e565b506012546001600160a01b03163314611237565b506011546001600160a01b03163314611230565b506010546001600160a01b03163314611229565b3461044f57604036600319011261044f5761132e614816565b3033148015611401575b80156113ed575b80156113d9575b80156113c5575b80156113b1575b801561139d575b8015611389575b61136b90614b55565b6001600160a01b03166000908152602a602052604090206024359055005b506019546001600160a01b03163314611362565b506018546001600160a01b0316331461135b565b506014546001600160a01b03163314611354565b506013546001600160a01b0316331461134d565b506012546001600160a01b03163314611346565b506011546001600160a01b0316331461133f565b506010546001600160a01b03163314611338565b3461044f57604036600319011261044f5761142e614816565b3033148015611505575b80156114f1575b80156114dd575b80156114c9575b80156114b5575b80156114a1575b801561148d575b61146b90614b55565b60018060a01b0316600052602960205260406000206104d16024358254614ba8565b506019546001600160a01b03163314611462565b506018546001600160a01b0316331461145b565b506014546001600160a01b03163314611454565b506013546001600160a01b0316331461144d565b506012546001600160a01b03163314611446565b506011546001600160a01b0316331461143f565b506010546001600160a01b03163314611438565b3461044f57604036600319011261044f57611532614816565b3033148015611605575b80156115f1575b80156115dd575b80156115c9575b80156115b5575b80156115a1575b801561158d575b61156f90614b55565b6001600160a01b031660009081526025602052604090206024359055005b506019546001600160a01b03163314611566565b506018546001600160a01b0316331461155f565b506014546001600160a01b03163314611558565b506013546001600160a01b03163314611551565b506012546001600160a01b0316331461154a565b506011546001600160a01b03163314611543565b506010546001600160a01b0316331461153c565b3461044f57600036600319011261044f576020600054604051908152f35b3461044f57600036600319011261044f57604060015460ff6002541682519182526020820152f35b3461044f57602036600319011261044f5760206001600160a01b0380611683614816565b16600052602e825260406000205416604051908152f35b3461044f57604036600319011261044f576116b3614816565b303314801561178a575b8015611776575b8015611762575b801561174e575b801561173a575b8015611726575b8015611712575b6116f090614b55565b60018060a01b0316600052601a60205260406000206104d16024358254614ba8565b506019546001600160a01b031633146116e7565b506018546001600160a01b031633146116e0565b506014546001600160a01b031633146116d9565b506013546001600160a01b031633146116d2565b506012546001600160a01b031633146116cb565b506011546001600160a01b031633146116c4565b506010546001600160a01b031633146116bd565b3461044f576117eb6117af36614ae6565b9290916117be60045482614f90565b60018060a01b03809416600052601a6020526117e06040600020918254614a92565b905560055490614f90565b9116600052601a6020526104d16040600020918254614a92565b3461044f57602061181536614a9f565b93909230331480156118fa575b80156118e6575b80156118d2575b80156118be575b80156118aa575b8015611896575b8015611882575b61185590614b55565b826040519384928337810160328152030190209060018060a01b0316600052602052604060002055600080f35b506019546001600160a01b0316331461184c565b506018546001600160a01b03163314611845565b506014546001600160a01b0316331461183e565b506013546001600160a01b03163314611837565b506012546001600160a01b03163314611830565b506011546001600160a01b03163314611829565b506010546001600160a01b03163314611822565b3461044f57604036600319011261044f57611927614816565b61192f61482c565b9060018060a01b038091166000526024602052604060002091166000526020526020604060002054604051908152f35b3461044f5761196d3661486e565b913033148015611a4d575b8015611a39575b8015611a25575b8015611a11575b80156119fd575b80156119e9575b80156119d5575b6119ab90614b55565b60018060a01b03809116600052602460205260406000209116600052602052604060002055600080f35b506019546001600160a01b031633146119a2565b506018546001600160a01b0316331461199b565b506014546001600160a01b03163314611994565b506013546001600160a01b0316331461198d565b506012546001600160a01b03163314611986565b506011546001600160a01b0316331461197f565b506010546001600160a01b03163314611978565b3461044f57602036600319011261044f5760006101a0604051611a8381614916565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152826101808201520152600435600052601e6020526101c060406000206101a0604051611af781614916565b600d60018060a01b038454169384835260018060a01b0360018201541660208401526002810154604084015260018060a01b03600382015416606084015260048101546080840152600581015460a0840152600681015460c084015260ff600782015416151560e08401526008810154610100840152600981015461012084015260018060a01b03600a8201541661014084015260018060a01b03600b8201541661016084015260018060a01b03600c8201541661018084015201548282015260405192835260018060a01b0360208201511660208401526040810151604084015260018060a01b0360608201511660608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015161010084015261012081015161012084015260018060a01b036101408201511661014084015260018060a01b036101608201511661016084015260018060a01b036101808201511661018084015201516101a0820152f35b3461044f57602036600319011261044f5733600052602b602052600435604060002055600080f35b3461044f57600036600319011261044f576020601d54604051908152f35b3461044f573660031901610560811261044f576103801361044f57604051611ce0816148f9565b60043581526024356020808301919091526001600160a01b0390604435828116810361044f5760408401526064356060840152608435608084015260a43560a084015260c43560c084015260e435828116810361044f5760e084015261010091610104358385015261012061012435818601526101443560ff8116810361044f57610140908187015261016095610164358782015261018061018435818301526101a06101a435818401526101c06101c435818501526101e4356101e085015261020435610200850152610224356102208501526102443561024085015261026435610260850152610284356102808501526102a4356102a08501526102c4356102c08501526102e4356102e085015261030435878116810361044f5761030085015261032435801515810361044f5761032085015261034435610340850152610364356103608501523661038319011261044f5760405191611e4283614916565b61038435878116810361044f5783526103a43599878b168b0361044f578884019a8b526103c43560408501526103e435888116810361044f576060850152608084019661040435885260a085019a610424358c526104443560c087015261046435801515810361044f5760e087015261048435908601528401956104a43587526104c43590898216820361044f578501526104e43590888216820361044f578401526105043590878216820361044f57830152610524359082015261054435923033148015612153575b8015612146575b8015612139575b801561212c575b801561211f575b8015612112575b8015612105575b611f3f90614b55565b516002811480156120fb575b15612040575084815116611fcf575b5083875116611f6557005b603095670de0b6b3a7640000611f8c611fb895611f84611f95956151d9565b905190614f90565b04905190614f90565b908387511660005260318552604060002090600052845260406000205490614ba8565b935116600052526104d16040600020918254614a92565b8461201e611ffc670de0b6b3a7640000611ff3611feb876151d9565b895190614f90565b048a5190614f90565b8284511660005260318952604060002086600052895260406000205490614ba8565b915116600052603086526120386040600020918254614a92565b905587611f5a565b929650925050600381149081156120f0575b81156120e5575b5061206057005b81815116806120a9575b505080845116928315610aa557603093600052603183526040600020906000528252604060002054935116600052526104d16040600020918254614ba8565b60005260318352604060002084600052835281604060002054915116600052603083526120dc6040600020918254614ba8565b9055848061206a565b600491501486612059565b600481149150612052565b5060018114611f4b565b5060195486163314611f36565b5085601854163314611f2f565b5085601454163314611f28565b5085601354163314611f21565b5085601254163314611f1a565b5085601154163314611f13565b5085601054163314611f0c565b3461044f57602036600319011261044f576001600160a01b03612181614816565b16600052602360205260406000206104d18154614b99565b3461044f57600036600319011261044f5760206040516fa2a8918ca85bafe22016d0b997e4df5f600160ff1b038152f35b3461044f57604036600319011261044f576121e3614816565b30331480156122ba575b80156122a6575b8015612292575b801561227e575b801561226a575b8015612256575b8015612242575b61222090614b55565b60018060a01b0316600052603060205260406000206104d16024358254614a92565b506019546001600160a01b03163314612217565b506018546001600160a01b03163314612210565b506014546001600160a01b03163314612209565b506013546001600160a01b03163314612202565b506012546001600160a01b031633146121fb565b506011546001600160a01b031633146121f4565b506010546001600160a01b031633146121ed565b3461044f5760206122de366149ca565b929091826040519384928337810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b03612334614816565b1660005260266020526020604060002054604051908152f35b3461044f57600036600319011261044f576020601b54604051908152f35b3461044f57604036600319011261044f57612384614816565b303314801561245b575b8015612447575b8015612433575b801561241f575b801561240b575b80156123f7575b80156123e3575b6123c190614b55565b60018060a01b0316600052602f60205260406000206104d16024358254614a92565b506019546001600160a01b031633146123b8565b506018546001600160a01b031633146123b1565b506014546001600160a01b031633146123aa565b506013546001600160a01b031633146123a3565b506012546001600160a01b0316331461239c565b506011546001600160a01b03163314612395565b506010546001600160a01b0316331461238e565b3461044f57602036600319011261044f57610aa56fa2a8918ca85bafe22016d0b997e4df5f600160ff1b03600435106151f6565b3461044f5760e036600319011261044f5767ffffffffffffffff60043581811161044f576124d590369060040161499c565b91606036604319011261044f57604051606081018181108382111761256b5760405260443581526064356001600160a01b038116810361044f57602082015261251c614858565b6040820152604060a31936011261044f576040519160408301908382109082111761256b5760405260a435825260c4359260ff8416840361044f5760209461044594868501526024359161513d565b634e487b7160e01b600052604160045260246000fd5b3461044f57602036600319011261044f5760006103606040516125a3816148f9565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015282610220820152826102408201528261026082015282610280820152826102a0820152826102c0820152826102e08201528261030082015282610320820152826103408201520152600435600052601c6020526103806040600020610360604051612679816148f9565b601a8354938483526001810154602084015260018060a01b0360028201541660408401526003810154606084015260048101546080840152600581015460a0840152600681015460c084015260018060a01b0360078201541660e08401526008810154610100840152600981015461012084015260ff600a82015416610140840152600b810154610160840152600c810154610180840152600d8101546101a0840152600e8101546101c0840152600f8101546101e08401526010810154610200840152601181015461022084015260128101546102408401526013810154610260840152601481015461028084015260158101546102a084015260168101546102c084015260178101546102e084015260ff601882015460018060a01b03811661030086015260a01c16151561032084015260198101546103408401520154828201526040519283526020810151602084015260018060a01b036040820151166040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260018060a01b0360e08201511660e084015261010081015161010084015261012081015161012084015260ff610140820151166101408401526101608101516101608401526101808101516101808401526101a08101516101a08401526101c08101516101c08401526101e08101516101e08401526102008101516102008401526102208101516102208401526102408101516102408401526102608101516102608401526102808101516102808401526102a08101516102a08401526102c08101516102c08401526102e08101516102e084015260018060a01b036103008201511661030084015261032081015115156103208401526103408101516103408401520151610360820152f35b3461044f5761026036600319011261044f5761292e614816565b6001600160a01b039061016435828116919082900361044f57610184359083821680920361044f576101a43584811680910361044f576101c43585811680910361044f576101e43586811680910361044f57610204359187831680930361044f57610224359388851680950361044f57610244359689881680980361044f576037549860ff8a1661044f5760019a6001600160601b0360a01b981688600f541617600f5560243560035560443560045560643560055560843560065560a43560075560c43560085560e43560095561010435600a5561012435600b5561014435600c5587600d541617600d5586600e541617600e55856010541617601055846011541617601155836012541617601255826014541617601455816018541617601855601954161760195560ff191617603755600080f35b3461044f57602036600319011261044f5733600052602c602052600435604060002055600080f35b3461044f57602036600319011261044f576001600160a01b03612aae614816565b1660005260346020526020604060002054604051908152f35b3461044f57612ad536614a0d565b90604051908181519160005b838110612b16575050602091810160338152030190209060018060a01b03166000526020526020604060002054604051908152f35b60208282018101518683015285935001612ae1565b3461044f57600036600319011261044f576020600954604051908152f35b3461044f57604036600319011261044f57612b62614816565b3033148015612c35575b8015612c21575b8015612c0d575b8015612bf9575b8015612be5575b8015612bd1575b8015612bbd575b612b9f90614b55565b6001600160a01b031660009081526026602052604090206024359055005b506019546001600160a01b03163314612b96565b506018546001600160a01b03163314612b8f565b506014546001600160a01b03163314612b88565b506013546001600160a01b03163314612b81565b506012546001600160a01b03163314612b7a565b506011546001600160a01b03163314612b73565b506010546001600160a01b03163314612b6c565b3461044f57604036600319011261044f57612c62614816565b3033148015612d3b575b8015612d27575b8015612d13575b8015612cff575b8015612ceb575b8015612cd7575b8015612cc3575b612c9f90614b55565b6001600160a01b03166000908152602d60205260409020805461044f576024359055005b506019546001600160a01b03163314612c96565b506018546001600160a01b03163314612c8f565b506014546001600160a01b03163314612c88565b506013546001600160a01b03163314612c81565b506012546001600160a01b03163314612c7a565b506011546001600160a01b03163314612c73565b506010546001600160a01b03163314612c6c565b3461044f57602036600319011261044f576001600160a01b03612d70614816565b16600052602a6020526020604060002054604051908152f35b3461044f57602036600319011261044f576001600160a01b03612daa614816565b1660005260256020526020604060002054604051908152f35b3461044f57604036600319011261044f57612ddc614816565b602435903033148015612f1b575b8015612f07575b8015612ef3575b8015612edf575b8015612ecb575b8015612eb7575b8015612ea3575b612e1d90614b55565b6001600160a01b0316600081815260346020908152604090912054919290918114612e5f57603692600052603582526040600020555242604060002055600080f35b50603681526040600020546201518081018091116109ec574211612e7f57005b60369160005260358152604060002054603482526040600020555260006040812055005b506019546001600160a01b03163314612e14565b506018546001600160a01b03163314612e0d565b506014546001600160a01b03163314612e06565b506013546001600160a01b03163314612dff565b506012546001600160a01b03163314612df8565b506011546001600160a01b03163314612df1565b506010546001600160a01b03163314612dea565b3461044f57602036600319011261044f576001600160a01b03612f50614816565b16600052602d6020526020604060002054604051908152f35b3461044f57602036600319011261044f5760018060a01b03600d5416600052601a60205260406000206104d16004358254614a92565b3461044f57604036600319011261044f57612fb8614816565b303314801561308b575b8015613077575b8015613063575b801561304f575b801561303b575b8015613027575b8015613013575b612ff590614b55565b6001600160a01b031660009081526030602052604090206024359055005b506019546001600160a01b03163314612fec565b506018546001600160a01b03163314612fe5565b506014546001600160a01b03163314612fde565b506013546001600160a01b03163314612fd7565b506012546001600160a01b03163314612fd0565b506011546001600160a01b03163314612fc9565b506010546001600160a01b03163314612fc2565b3461044f57600036600319011261044f576020600c54604051908152f35b3461044f57604036600319011261044f576130d6614816565b30331480156131ad575b8015613199575b8015613185575b8015613171575b801561315d575b8015613149575b8015613135575b61311390614b55565b60018060a01b0316600052602f60205260406000206104d16024358254614ba8565b506019546001600160a01b0316331461310a565b506018546001600160a01b03163314613103565b506014546001600160a01b031633146130fc565b506013546001600160a01b031633146130f5565b506012546001600160a01b031633146130ee565b506011546001600160a01b031633146130e7565b506010546001600160a01b031633146130e0565b3461044f57600036600319011261044f576020600854604051908152f35b3461044f57604036600319011261044f576131f8614816565b30331480156132cf575b80156132bb575b80156132a7575b8015613293575b801561327f575b801561326b575b8015613257575b61323590614b55565b60018060a01b0316600052602560205260406000206104d16024358254614ba8565b506019546001600160a01b0316331461322c565b506018546001600160a01b03163314613225565b506014546001600160a01b0316331461321e565b506013546001600160a01b03163314613217565b506012546001600160a01b03163314613210565b506011546001600160a01b03163314613209565b506010546001600160a01b03163314613202565b3461044f5760206132f3366149ca565b929091826040519384928337810160328152030190209060018060a01b03166000526020526020604060002054604051908152f35b3461044f57604036600319011261044f5760043561334461482c565b90670de0b6b3a76400008061335b60065484614f90565b049160018060a01b039283600d5416600052601a6020526133826040600020918254614a92565b905560065482038281116109ec5761339991614f90565b049116600052601a6020526104d16040600020918254614a92565b3461044f5761014036600319011261044f5761012036602319011261044f576040516133df816148a3565b602435815260086020820160443581526040830160643581526060840160843581526080850160a4358152613412614842565b9060a0870191825260c087019260e435845260e08801946101043586526101008901966101243588523033148015613551575b801561353d575b8015613529575b8015613515575b8015613501575b80156134ed575b80156134d9575b61347890614b55565b6004356000526022602052604060002099518a555160018a0155516002890155516003880155516004870155600586019060018060a01b039051166001600160601b0360a01b82541617905551600685015551600784015551910155600080f35b506019546001600160a01b0316331461346f565b506018546001600160a01b03163314613468565b506014546001600160a01b03163314613461565b506013546001600160a01b0316331461345a565b506012546001600160a01b03163314613453565b506011546001600160a01b0316331461344c565b506010546001600160a01b03163314613445565b3461044f57600036600319011261044f576020600b54604051908152f35b3461044f57602036600319011261044f576001600160a01b036135a4614816565b1660005260286020526020604060002054604051908152f35b3461044f57602036600319011261044f57600060e06040516135de816148dc565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201520152600435600052601f6020526101006040600020604051613626816148dc565b60018060a01b039182815416928383526001820154602084019081528160028401546040860160ff821615158152606087019060ff8360081c161515825283608089019360101c168352836003880154169460a0890195865260e0600560048a01549960c08c019a8b5201549901988952604051998a525160208a01525115156040890152511515606088015251166080860152511660a08401525160c08301525160e0820152f35b3461044f57600036600319011261044f57610180600354600454600554600654600754600854600954600a5491600b5493600c549560018060a01b039788600d541698600e5416996040519b8c5260208c015260408b015260608a0152608089015260a088015260c087015260e0860152610100850152610120840152610140830152610160820152f35b3461044f57604036600319011261044f57613773614816565b303314801561384a575b8015613836575b8015613822575b801561380e575b80156137fa575b80156137e6575b80156137d2575b6137b090614b55565b60018060a01b0316600052601a60205260406000206104d16024358254614a92565b506019546001600160a01b031633146137a7565b506018546001600160a01b031633146137a0565b506014546001600160a01b03163314613799565b506013546001600160a01b03163314613792565b506012546001600160a01b0316331461378b565b506011546001600160a01b03163314613784565b506010546001600160a01b0316331461377d565b3461044f57600036600319011261044f576020600354604051908152f35b3461044f5760e036600319011261044f5761389561482c565b60a036604319011261044f576040516138ad816148c0565b6044358152602081019160643583526040820160843581526060830160a435815260c43591821515830361044f57610aa5956004946080870194855230331480156139ec575b80156139d8575b80156139c4575b80156139b0575b801561399c575b8015613988575b8015613974575b61392690614b55565b85356000526020805260406000209060018060a01b031660005260205260406000209551865551600186015551600285015551600384015551151591019060ff801983541691151516179055565b506019546001600160a01b0316331461391d565b506018546001600160a01b03163314613916565b506014546001600160a01b0316331461390f565b506013546001600160a01b03163314613908565b506012546001600160a01b03163314613901565b506011546001600160a01b031633146138fa565b506010546001600160a01b031633146138f3565b3461044f57604036600319011261044f57613a19614816565b3033148015613af0575b8015613adc575b8015613ac8575b8015613ab4575b8015613aa0575b8015613a8c575b8015613a78575b613a5690614b55565b60018060a01b0316600052602660205260406000206104d16024358254614ba8565b506019546001600160a01b03163314613a4d565b506018546001600160a01b03163314613a46565b506014546001600160a01b03163314613a3f565b506013546001600160a01b03163314613a38565b506012546001600160a01b03163314613a31565b506011546001600160a01b03163314613a2a565b506010546001600160a01b03163314613a23565b3461044f57602036600319011261044f576001600160a01b03613b25614816565b1660005260236020526020604060002054604051908152f35b3461044f576103a036600319011261044f5761038036602319011261044f57604051613b69816148f9565b602435815260443560208201526064356001600160a01b038116810361044f576040820152608435606082015260a435608082015260c43560a082015260e43560c0820152610104356001600160a01b038116810361044f5760e082015261012435610100820152610144356101208201526101643560ff8116810361044f57610140820152610184356101608201526101a4356101808201526101c4356101a08201526101e4356101c0820152610204356101e0820152610224356102008201526102443561022082015261026435610240820152610284356102608201526102a4356102808201526102c4356102a08201526102e4356102c0820152610304356102e0820152610324356001600160a01b038116900361044f5761032435610300820152610344351515610344350361044f576103443561032082015261036435610340820152610384356103608201523033148015613f06575b8015613ef2575b8015613ede575b8015613eca575b8015613eb6575b8015613ea2575b8015613e8e575b613cf990614b55565b600435600052601c602052601a61036060406000209280518455602081015160018501556002840160018060a01b03604083015116906001600160601b0360a01b9182825416179055606082015160038601556080820151600486015560a0820151600586015560c08201516006860155600785019060018060a01b0360e0840151169082541617905561010081015160088501556101208101516009850155600a840160ff6101408301511660ff19825416179055610160810151600b850155610180810151600c8501556101a0810151600d8501556101c0810151600e8501556101e0810151600f850155610200810151601085015561022081015160118501556102408101516012850155610260810151601385015561028081015160148501556102a081015160158501556102c081015160168501556102e081015160178501556018840160018060a01b036103008301511681549060ff60a01b610320850151151560a01b16916affffffffffffffffffffff60a81b161717905561034081015160198501550151910155600080f35b506019546001600160a01b03163314613cf0565b506018546001600160a01b03163314613ce9565b506014546001600160a01b03163314613ce2565b506013546001600160a01b03163314613cdb565b506012546001600160a01b03163314613cd4565b506011546001600160a01b03163314613ccd565b506010546001600160a01b03163314613cc6565b3461044f57602036600319011261044f576001600160a01b03613f3b614816565b1660005260306020526020604060002054604051908152f35b3461044f57604036600319011261044f57613f6d614816565b613f7561482c565b90303314801561405c575b8015614048575b8015614034575b8015614020575b801561400c575b8015613ff8575b8015613fe4575b613fb390614b55565b6001600160a01b039081166000908152602e6020526040902080546001600160a01b03191692909116919091179055005b506019546001600160a01b03163314613faa565b506018546001600160a01b03163314613fa3565b506014546001600160a01b03163314613f9c565b506013546001600160a01b03163314613f95565b506012546001600160a01b03163314613f8e565b506011546001600160a01b03163314613f87565b506010546001600160a01b03163314613f80565b614973565b3461044f57600036600319011261044f57303314801561414b575b8015614137575b8015614123575b801561410f575b80156140fb575b80156140e7575b80156140d3575b6140c390614b55565b6140ce601b54614b99565b601b55005b506019546001600160a01b031633146140ba565b506018546001600160a01b031633146140b3565b506014546001600160a01b031633146140ac565b506013546001600160a01b031633146140a5565b506012546001600160a01b0316331461409e565b506011546001600160a01b03163314614097565b506010546001600160a01b03163314614090565b3461044f57600036600319011261044f573033148015614235575b8015614221575b801561420d575b80156141f9575b80156141e5575b80156141d1575b80156141bd575b6141ad90614b55565b6141b8601d54614b99565b601d55005b506019546001600160a01b031633146141a4565b506018546001600160a01b0316331461419d565b506014546001600160a01b03163314614196565b506013546001600160a01b0316331461418f565b506012546001600160a01b03163314614188565b506011546001600160a01b03163314614181565b506010546001600160a01b0316331461417a565b3461044f576101e036600319011261044f576101c036602319011261044f5760405161427481614916565b6024356001600160a01b038116810361044f5781526044356001600160a01b038116810361044f57602082015260643560408201526084356001600160a01b038116810361044f57606082015260a435608082015260c43560a082015260e43560c082015261010435801515810361044f5760e08201526101243561010082015261014435610120820152610164356001600160a01b038116810361044f57610140820152610184356001600160a01b038116810361044f576101608201526101a4356001600160a01b038116900361044f576101a4356101808201526101c4356101a0820152303314801561453d575b8015614529575b8015614515575b8015614501575b80156144ed575b80156144d9575b80156144c5575b61439890614b55565b600435600052601e602052600d6101a060406000209260018060a01b038151166001600160601b0360a01b8554161784556001840160018060a01b036020830151166001600160601b0360a01b825416179055604081015160028501556003840160018060a01b036060830151166001600160601b0360a01b8254161790556080810151600485015560a0810151600585015560c0810151600685015561445460e08201511515600786019060ff801983541691151516179055565b61010081015160088501556101208101516009850155610140810151600a850180546001600160a01b039283166001600160a01b031991821617909155610160830151600b87018054918416918316919091179055610180830151600c870180549190931691161790550151910155005b506019546001600160a01b0316331461438f565b506018546001600160a01b03163314614388565b506014546001600160a01b03163314614381565b506013546001600160a01b0316331461437a565b506012546001600160a01b03163314614373565b506011546001600160a01b0316331461436c565b506010546001600160a01b03163314614365565b3461044f57602036600319011261044f576001600160a01b03614572614816565b1660005260296020526020604060002054604051908152f35b3461044f57602036600319011261044f576101206040516145ab816148a3565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100809201526004356000526022602052604060002090604051614606816148a3565b8254928382526001810154602083019081526002820154604084019081526003830154906060850191825260048401546080860190815260018060a01b0392836005870154169260a0880193845260068701549560c0890196875289600860078a01549960e08c019a8b52015499019889526040519a8b525160208b01525160408a0152516060890152516080880152511660a08601525160c08501525160e08401525190820152f35b3461044f57600036600319011261044f57600d546040516001600160a01b039091168152602090f35b3461044f576146e73661486e565b9130331480156147cc575b80156147b8575b80156147a4575b8015614790575b801561477c575b8015614768575b8015614754575b61472590614b55565b60018060a01b038091166000526024602052604060002091166000526020526104d16040600020918254614a92565b506019546001600160a01b0316331461471c565b506018546001600160a01b03163314614715565b506014546001600160a01b0316331461470e565b506013546001600160a01b03163314614707565b506012546001600160a01b03163314614700565b506011546001600160a01b031633146146f9565b506010546001600160a01b031633146146f2565b3461044f57602036600319011261044f576020906001600160a01b03614804614816565b16600052602f82526040600020548152f35b600435906001600160a01b038216820361044f57565b602435906001600160a01b038216820361044f57565b60c435906001600160a01b038216820361044f57565b608435906001600160a01b038216820361044f57565b606090600319011261044f576001600160a01b0390600435828116810361044f5791602435908116810361044f579060443590565b610120810190811067ffffffffffffffff82111761256b57604052565b60a0810190811067ffffffffffffffff82111761256b57604052565b610100810190811067ffffffffffffffff82111761256b57604052565b610380810190811067ffffffffffffffff82111761256b57604052565b6101c0810190811067ffffffffffffffff82111761256b57604052565b90601f8019910116810190811067ffffffffffffffff82111761256b57604052565b60643590811515820361044f57565b60843590811515820361044f57565b3461044f57600036600319011261044f57600f546040516001600160a01b039091168152602090f35b9181601f8401121561044f5782359167ffffffffffffffff831161044f576020838186019501011161044f57565b604060031982011261044f576004359067ffffffffffffffff821161044f576149f59160040161499c565b90916024356001600160a01b038116810361044f5790565b604060031982011261044f5767ffffffffffffffff60043581811161044f578260238201121561044f57806004013591821161256b5760405192614a5b601f8401601f191660200185614933565b8284526024838301011161044f57816000926024602093018386013783010152906024356001600160a01b038116810361044f5790565b919082018092116109ec57565b606060031982011261044f576004359067ffffffffffffffff821161044f57614aca9160040161499c565b90916024356001600160a01b038116810361044f579060443590565b606090600319011261044f57600435906001600160a01b0390602435828116810361044f5791604435908116810361044f5790565b3461044f57602036600319011261044f576001600160a01b03614b3c614816565b16600052601a6020526020604060002054604051908152f35b15614b5c57565b60405162461bcd60e51b815260206004820152601560248201527410d85b1b195c881b9bdd08185d5d1a1bdc9a5e9959605a1b6044820152606490fd5b60001981146109ec5760010190565b919082039182116109ec57565b3033148015614c9d575b8015614c89575b8015614c75575b8015614c61575b8015614c4d575b8015614c39575b8015614c25575b614bf290614b55565b60018060a01b03809116600052602460205260406000209116600052602052614c216040600020918254614ba8565b9055565b506019546001600160a01b03163314614be9565b506018546001600160a01b03163314614be2565b506014546001600160a01b03163314614bdb565b506013546001600160a01b03163314614bd4565b506012546001600160a01b03163314614bcd565b506011546001600160a01b03163314614bc6565b506010546001600160a01b03163314614bbf565b92909115614cea5750614cc48183614dc0565b9060018060a01b0316600052601a602052614ce56040600020918254614a92565b905590565b6001600160a01b039091166000818152601a60209081526040808320805493969195929493808310614dad5750508286526029845284862054601a8552614d35868820918254614a92565b905582865260298452848620869055602a8452848620429055601a84528486208054808310614dad57505050614d75578352601a90528120805491905590565b50606491519062461bcd60e51b8252600482015260126024820152714e6f7420656e6f7567682062616c616e636560701b6044820152fd5b925094509450614ce59250849150614ba8565b60009133835260206027815260409384812054428103614e71575b506001600160a01b03909216808352602582528483205490937fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a93918690828110614e4357505084825260268352614e37868320918254614a92565b9055935b51848152a290565b92614e6b9360268652614e5a838320918254614a92565b905586815260258552205490614ba8565b93614e3b565b614e7b9042614ba8565b923382526025835285822054865194632762fe1b60e11b86526702c68af0bb14000060048701526024860152670de0b6b3a764000060448601526064850152828460848173__$04afeda1751f1fab6ddfb73e5b53963b72$__5af48015614f86578290614f2f575b7fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a945033835260258452614f1b878420918254614a92565b905533825260278352428683205592614ddb565b509091928381813d8311614f7f575b614f488183614933565b81010312614f7b57907fc92893341acd93f991b534dda4ab5ff9a2ef4eaa9bf1c1b7a35d32d70a75f18a93929151614ee3565b8280fd5b503d614f3e565b86513d84823e3d90fd5b818102929181159184041417156109ec57565b8115614fad570490565b634e487b7160e01b600052601260045260246000fd5b9391929060018060a01b0380951691600094838652602094602c865260409788882054941692838603614ffd575b50505050505050905090565b828111806150f1575b1561505757505050828552601a84528585208054838111615031575050505090601a91835252205490565b839697945090615048601a94614ce5979493614a92565b90558652528320918254614ba8565b808311928361509e575b50505061507b575050505090508038808080808080614ff1565b828552601a84528585208054838111615031575050505090601a91835252205490565b909192506150b6670de0b6b3a7640000928392614fa3565b0491670b1a2bc2ec500000908181029181830414901517156150dd57041015388080615061565b634e487b7160e01b88526011600452602488fd5b50670de0b6b3a7640000806151068584614fa3565b0490670b1a2bc2ec50000080850290858204148515171561512957041015615006565b634e487b7160e01b8b52601160045260248bfd5b9092939161516890835190602085019660ff885116815191604060018060a01b03910151169361523b565b156151d0578260ff7f77e158c4de5b89cd65592962239c3cc6136696032ecc462ad1b04af14e8df53b956080946040519687956060875281606088015287870137600085850187015251602085015251166040830152601f01601f19168101030190a1600190565b50505050600090565b9060009160016102c0820151146151ed5750565b6101e001519150565b156151fd57565b60405162461bcd60e51b81526020600482015260166024820152755075626c69632d6b65792078203e3d2048414c465f5160501b6044820152606490fd5b919061525e6fa2a8918ca85bafe22016d0b997e4df5f600160ff1b0384106151f6565b70014551231950b75fc4402da1732fc9bebe1994858310156153a1576001600160a01b038181169690959087151580615398575b8061538f575b80615386575b15615348576040519160208301936001600160601b03199060601b168452603483015260348252606082019282841067ffffffffffffffff85111761256b57819084604052835190209587098103908082116109ec5760209660009660ff60c0948160809916158a1461534057601b905b885216878601528160a08601520991015282805260015afa1561533457600051161490565b6040513d6000823e3d90fd5b601c9061530f565b60405162461bcd60e51b81526020600482015260166024820152751b9bc81e995c9bc81a5b9c1d5d1cc8185b1b1bddd95960521b6044820152606490fd5b5081151561529e565b50841515615298565b50851515615292565b60405162461bcd60e51b815260206004820152602260248201527f7369676e6174757265206d7573742062652072656475636564206d6f64756c6f604482015261205160f01b6064820152608490fdfea26469706673582212201b48042480ed582fd859e60838595b1afdbde0a94522359d9100b48c5f92ce7164736f6c63430008140033",
  "linkReferences": {
    "contracts/Libs/PionerV1Utils.sol": {
      "PionerV1Utils": [
        {
          "length": 20,
          "start": 20189
        }
      ]
    }
  },
  "deployedLinkReferences": {
    "contracts/Libs/PionerV1Utils.sol": {
      "PionerV1Utils": [
        {
          "length": 20,
          "start": 20161
        }
      ]
    }
  }
}
