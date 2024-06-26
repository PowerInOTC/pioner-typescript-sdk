export const PionerV1Wrapper = {
  "_format": "hh-sol-artifact-1",
  "contractName": "PionerV1Wrapper",
  "sourceName": "contracts/Functions/PionerV1Wrapper.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "pionerV1Address",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "pionerV1ComplianceAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "pionerV1OpenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "pionerV1CloseAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "pionerV1DefaultAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "pionerV1OracleAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ECDSAInvalidSignature",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "length",
          "type": "uint256"
        }
      ],
      "name": "ECDSAInvalidSignatureLength",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "ECDSAInvalidSignatureS",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidShortString",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "str",
          "type": "string"
        }
      ],
      "name": "StringTooLong",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "EIP712DomainChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes",
          "name": "signatureHashCloseQuote",
          "type": "bytes"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "bContractId",
          "type": "uint256"
        }
      ],
      "name": "acceptCloseQuoteEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes",
          "name": "signatureHashOpenQuote",
          "type": "bytes"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "bContractId",
          "type": "uint256"
        }
      ],
      "name": "acceptQuoteEvent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "eip712Domain",
      "outputs": [
        {
          "internalType": "bytes1",
          "name": "fields",
          "type": "bytes1"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "version",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "verifyingContract",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "salt",
          "type": "bytes32"
        },
        {
          "internalType": "uint256[]",
          "name": "extensions",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
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
              "name": "authorized",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.OpenCloseQuoteSign",
          "name": "quote",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "signHash",
          "type": "bytes"
        }
      ],
      "name": "wrapperCloseLimitMM",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
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
            },
            {
              "internalType": "uint256",
              "name": "maxConfidence",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "assetHex",
              "type": "bytes32"
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
              "internalType": "bytes",
              "name": "signatureHashOpenQuote",
              "type": "bytes"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.bOracleSign",
          "name": "bOracleSign",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "signaturebOracleSign",
          "type": "bytes"
        },
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isLong",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "bOracleId",
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
              "name": "interestRate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isAPayingAPR",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "frontEnd",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "affiliate",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "authorized",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            }
          ],
          "internalType": "struct PionerV1Utils.OpenQuoteSign",
          "name": "openQuoteSign",
          "type": "tuple"
        },
        {
          "internalType": "bytes",
          "name": "openQuoteSignature",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "_acceptPrice",
          "type": "uint256"
        }
      ],
      "name": "wrapperOpenQuoteMM",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "int256",
              "name": "appId",
              "type": "int256"
            },
            {
              "internalType": "bytes",
              "name": "reqId",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "requestassetHex",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "requestPairBid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "requestPairAsk",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "requestConfidence",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "requestSignTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "requestPrecision",
              "type": "uint256"
            },
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
          "internalType": "struct PionerV1Utils.pionSign",
          "name": "priceSignature",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "bOracleId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bCloseQuoteId",
          "type": "uint256"
        }
      ],
      "name": "wrapperUpdatePriceAndCloseMarket",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "int256",
              "name": "appId",
              "type": "int256"
            },
            {
              "internalType": "bytes",
              "name": "reqId",
              "type": "bytes"
            },
            {
              "internalType": "bytes32",
              "name": "requestassetHex",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "requestPairBid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "requestPairAsk",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "requestConfidence",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "requestSignTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "requestPrecision",
              "type": "uint256"
            },
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
          "internalType": "struct PionerV1Utils.pionSign",
          "name": "priceSignature",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "bContractId",
          "type": "uint256"
        }
      ],
      "name": "wrapperUpdatePriceAndDefault",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x610160346200023257601f62001b6638819003918201601f19168301926001600160401b03929091838511838610176200021c578160c092849260409788528339810103126200023257620000548162000253565b620000626020830162000253565b906200007085840162000253565b6200007e6060850162000253565b906200009b60a0620000936080880162000253565b960162000253565b90875195620000aa8762000237565b600f875260208701956e2834b7b732b92b18abb930b83832b960891b87528951620000d58162000237565b6003815260208101620312e360ec1b8152620000f18a62000268565b98610120998a5262000103836200043b565b9a6101409b8c52519020918260e0525190206101009b818d524660a05280519160208301937f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f85528284015260608301524660808301523060a083015260a0825260c082019b828d10908d11176200021c578b90525190206080523060c05260018060a01b03948580948180948160018060a01b03199b168b6002541617600255168960035416176003551687600454161760045516856005541617600555168360065416176006551690600754161760075561157d9384620005e9853960805184611456015260a05184611521015260c05184611420015260e051846114a5015251836114cb015251826103ba015251816103e40152f35b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b038211176200021c57604052565b51906001600160a01b03821682036200023257565b8051602091908281101562000307575090601f825111620002a657808251920151908083106200029757501790565b82600019910360031b1b161790565b90604051809263305a27a960e01b82528060048301528251908160248401526000935b828510620002ed575050604492506000838284010152601f80199101168101030190fd5b8481018201518686016044015293810193859350620002c9565b6001600160401b0381116200021c576000928354926001938481811c9116801562000430575b838210146200041c57601f8111620003e6575b5081601f84116001146200037f5750928293918392869462000373575b50501b916000199060031b1c191617905560ff90565b0151925038806200035d565b919083601f1981168780528488209488905b88838310620003cb5750505010620003b1575b505050811b01905560ff90565b015160001960f88460031b161c19169055388080620003a4565b85870151885590960195948501948793509081019062000391565b85805284601f848820920160051c820191601f860160051c015b8281106200041057505062000340565b87815501859062000400565b634e487b7160e01b86526022600452602486fd5b90607f16906200032d565b805160209081811015620004c95750601f8251116200046857808251920151908083106200029757501790565b90604051809263305a27a960e01b82528060048301528251908160248401526000935b828510620004af575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506200048b565b9192916001600160401b0381116200021c5760019182548381811c91168015620005dd575b82821014620005c757601f81116200058e575b5080601f83116001146200054157508192939460009262000535575b5050600019600383901b1c191690821b17905560ff90565b0151905038806200051d565b90601f198316958460005282600020926000905b888210620005765750508385969710620003b157505050811b01905560ff90565b80878596829496860151815501950193019062000555565b8360005283601f83600020920160051c820191601f850160051c015b828110620005ba57505062000501565b60008155018490620005aa565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004ee56fe6080604052600436101561001257600080fd5b6000803560e01c806305944e6b146106c757806354d9a634146104ae57806384b0196e146103a4578063867ce86e1461015557639e203b771461005457600080fd5b3461012057606036600319011261012057806004356001600160401b03811161012e57610085903690600401610ef2565b6007546001600160a01b0391908216803b1561015057604051639b4e19e360e01b815291849183918290849082906100c49060243590600484016111cd565b03925af1908115610145578391610131575b505060055416803b1561012e5781809160246040518094819363ae41809560e01b835260443560048401525af18015610123576101105750f35b61011990610e49565b6101205780f35b80fd5b6040513d84823e3d90fd5b50fd5b61013a90610e49565b61012e5781386100d6565b6040513d85823e3d90fd5b505050fd5b503461012057604036600319011261012057806001600160401b0360043581811161025057610188903690600401610ef2565b60025460405163a1595d4560e01b81526024803560048301819052946001600160a01b0394929390916101c09182918691829089165afa938415610399578794610277575b50505060408360075416920151823b156102735761020492869283604051809681958294639b4e19e360e01b8452600484016111cd565b03925af1908115610268578491610254575b50506006541690813b15610250578291602483926040519485938492632d01fce560e11b845260048401525af18015610123576101105750f35b5050fd5b61025d90610e49565b610250578238610216565b6040513d86823e3d90fd5b8580fd5b8092975081809495503d8311610392575b6102928183610e77565b81010312610378576040519182019586118287101761037c5786956040526102b9816111b9565b82526102c7602082016111b9565b6020830152604081015160408301526102e2606082016111b9565b60608301526080810151608083015260a081015160a083015260c081015160c083015260e081015180151581036103785760e08301526101008082015190830152610120808201519083015261014061033c8183016111b9565b9083015261016061034e8183016111b9565b908301526101806103608183016111b9565b908301526101a08091015190820152903880806101cd565b8680fd5b634e487b7160e01b600052604160045260246000fd5b503d610288565b6040513d89823e3d90fd5b50346101205780600319360112610120576103de7f0000000000000000000000000000000000000000000000000000000000000000610fc0565b906104087f00000000000000000000000000000000000000000000000000000000000000006110e6565b9060405190602090818301938385106001600160401b0386111761037c5792828593610464889661045698604052858552604051988998600f60f81b8a5260e0858b015260e08a0190610e09565b9088820360408a0152610e09565b924660608801523060808801528460a088015286840360c088015251928381520193925b82811061049757505050500390f35b835185528695509381019392810192600101610488565b503461012057366003190161010081126106c35760e0136101205760e4356001600160401b0381116106c3576104e8903690600401610ddc565b6005546001600160a01b039081169290833b156106bf57604051631ec0e12d60e11b8152600435948560048301526024356024830152604435918260448201526064356064820152608435608482015260a4359184831680930361069e5781899391849260a483015260c43560c483015261012060e483015281838161057361012482018d8d61126b565b3361010483015203925af18015610123576106ab575b505060046020836005541693600254166040519283809263734cd7c560e11b82525afa908115610399578791610675575b5060001981019081116106615790829187933b1561065d57604051631d1f113760e21b8152600481019190915260248101919091523360448201529082908290606490829084905af1801561012357610649575b50508160405192839283378101600081520390207f0ecbdc2fd9d1501cf7ae586dbed627507d44d798b28299d51214cd4d149935bf8380a380f35b61065290610e49565b61065d57833861060e565b8380fd5b634e487b7160e01b87526011600452602487fd5b90506020813d82116106a3575b8161068f60209383610e77565b8101031261069e5751386105ba565b600080fd5b3d9150610682565b6106b490610e49565b610273578538610589565b8480fd5b5080fd5b5034610120576003196101c0368201126106c3576001600160401b03600435116106c3576101e09060043536030112610120576024356001600160401b0381116106c357610719903690600401610ddc565b610140366043190112610cc857610184356001600160401b03811161065d57610746903690600401610ddc565b919092610754368486610e98565b6020815191012061077a6107736101a46004350160043560040161128c565b3691610e98565b6020815191012003610d97576107946024600435016112be565b6107a96101a46004350160043560040161128c565b6107cc602060405183819483830196873781018b83820152038084520182610e77565b51902060ff604051927fc552563fe214e9438df0f867f3ce1729c388727735cc0e3c00282fdc7d65bd9b60208501526004356004013560408501521660608301526044600435013560808301526064600435013560a08301526084600435013560c083015260a4600435013560e083015260c4600435013561010083015260e4600435013561012083015261010460043501356101408301526101246004350135610160830152610144600435013561018083015261016460043501356101a083015261018460043501356101c08301526101e08201526102006101c46004350135818301528152806102208101106001600160401b0361022083011117610d835791610913610919926042856102206109229701604052602081519101206108f361141d565b906040519161190160f01b83526002830152602282015220923691610e98565b906112cc565b90929192611398565b6007546001600160a01b03168461093d6004356024016112be565b823b156106c3576101c460ff9183604051958694859363063e858f60e01b855260043560040135600486015216602484015260446004350135604484015260646004350135606484015260846004350135608484015260a4600435013560a484015260c4600435013560c484015260e4600435013560e48401526101046004350135610104840152610124600435013561012484015261014460043501356101448401526101646004350135610164840152610184600435013561018484015260016101a48401525af18015610d7857610d65575b50600480546002546040516384ad716960e01b81526001600160a01b039283169390926020928492918391165afa908115610d14578691610d33575b5080600019810111610ccc57813b15610273576040516359883fa160e01b8152916044358015159081900361069e5760048401526064356024840152608435604484015260a435606484015260c435608484015260e43580151580910361069e5760a4840152610104356001600160a01b0381169081900361069e5760c4840152610124356001600160a01b0381169081900361069e5760e4840152610144356001600160a01b038116919082900361069e57838881819782968296610104840152610164356101248401526101c0610144840152610b338c8c6101c486019161126b565b6001600160a01b0390921661016484015260001901610184830152336101a483015203925af1801561012357610d1f575b505060048054600254604051634e09898960e11b808252959390926001600160a01b0390811692602092859290918391165afa918215610d14578692610ce0575b506000198201918211610ccc57908186923b15610cc8576040516323c2979f60e01b815260048101929092526101a435602483015233604483015282908290606490829084905af1801561012357610cb4575b5050600254604051938452602090849060049082906001600160a01b03165afa928315610268578493610c80575b506000198301928311610c6c578160405192839283378101600081520390207ff0a5df06f49109c80c106fa270db56cb5d2d10a1ebd5dd2431fc6ee0fe79c3ea8380a380f35b634e487b7160e01b84526011600452602484fd5b9092506020813d602011610cac575b81610c9c60209383610e77565b8101031261069e57519138610c26565b3d9150610c8f565b610cbd90610e49565b61065d578338610bf8565b8280fd5b634e487b7160e01b86526011600452602486fd5b9091506020813d602011610d0c575b81610cfc60209383610e77565b8101031261069e57519038610ba5565b3d9150610cef565b6040513d88823e3d90fd5b610d2890610e49565b610cc8578238610b64565b90506020813d602011610d5d575b81610d4e60209383610e77565b8101031261069e575138610a4e565b3d9150610d41565b610d7190949194610e49565b9238610a12565b6040513d87823e3d90fd5b634e487b7160e01b86526041600452602486fd5b60405162461bcd60e51b815260206004820152601760248201527f5369676e61747572652068617368206d69736d617463680000000000000000006044820152606490fd5b9181601f8401121561069e578235916001600160401b03831161069e576020838186019501011161069e57565b919082519283825260005b848110610e35575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610e14565b6001600160401b03811161037c57604052565b604081019081106001600160401b0382111761037c57604052565b90601f801991011681019081106001600160401b0382111761037c57604052565b9291926001600160401b03821161037c5760405191610ec1601f8201601f191660200184610e77565b82948184528183011161069e578281602093846000960137010152565b35906001600160a01b038216820361069e57565b91909161016090818185031261069e57604051918201936001600160401b03948381108682111761037c57604052829482358452602083013590811161069e5782019080601f8301121561069e57816020610f4f93359101610e98565b602083015260408101356040830152606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301526101008082013590830152610120610fa9818301610ede565b90830152610fbb610140809201610ede565b910152565b60ff8114610ffe5760ff811690601f8211610fec5760405191610fe283610e5c565b8252602082015290565b604051632cd44ac360e21b8152600490fd5b506040516000805490600182811c908084169384156110dc575b60209485841081146110c857838752869493929181156110a8575060011461104c575b505061104992500382610e77565b90565b60008080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56395935091905b8183106110905750506110499350820101388061103b565b85548784018501529485019486945091830191611078565b91505061104994925060ff191682840152151560051b820101388061103b565b634e487b7160e01b85526022600452602485fd5b91607f1691611018565b60ff81146111085760ff811690601f8211610fec5760405191610fe283610e5c565b50604051600060019081549182811c908084169384156111af575b60209485841081146110c857838752869493929181156110a8575060011461115357505061104992500382610e77565b60008181527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf695935091905b8183106111975750506110499350820101388061103b565b8554878401850152948501948694509183019161117f565b91607f1691611123565b51906001600160a01b038216820361069e57565b929190602090604085528051604086015281810151906111fb610160928360608901526101a0880190610e09565b9160408201516080880152606082015160a0880152608082015160c088015260a082015160e088015260c082015191610100928389015260e08101519261012093848a01528101519161014092838a015260018060a01b0380948301511690890152015116610180860152930152565b908060209392818452848401376000828201840152601f01601f1916010190565b903590601e198136030182121561069e57018035906001600160401b03821161069e5760200191813603831361069e57565b3560ff8116810361069e5790565b81519190604183036112fd576112f692506020820151906060604084015193015160001a90611308565b9192909190565b505060009160029190565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841161138c57926020929160ff608095604051948552168484015260408301526060820152600092839182805260015afa156113805780516001600160a01b0381161561137757918190565b50809160019190565b604051903d90823e3d90fd5b50505060009160039190565b600481101561140757806113aa575050565b600181036113c45760405163f645eedf60e01b8152600490fd5b600281036113e55760405163fce698f760e01b815260048101839052602490fd5b6003146113ef5750565b602490604051906335e2f38360e21b82526004820152fd5b634e487b7160e01b600052602160045260246000fd5b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316148061151e575b15611478577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c081018181106001600160401b0382111761037c5760405251902090565b507f0000000000000000000000000000000000000000000000000000000000000000461461144f56fea2646970667358221220d1f789ae1b28aeca46b448a5dbda290106a6d5030e5bd73c84b268073c2c0dfa64736f6c63430008140033",
  "deployedBytecode": "0x6080604052600436101561001257600080fd5b6000803560e01c806305944e6b146106c757806354d9a634146104ae57806384b0196e146103a4578063867ce86e1461015557639e203b771461005457600080fd5b3461012057606036600319011261012057806004356001600160401b03811161012e57610085903690600401610ef2565b6007546001600160a01b0391908216803b1561015057604051639b4e19e360e01b815291849183918290849082906100c49060243590600484016111cd565b03925af1908115610145578391610131575b505060055416803b1561012e5781809160246040518094819363ae41809560e01b835260443560048401525af18015610123576101105750f35b61011990610e49565b6101205780f35b80fd5b6040513d84823e3d90fd5b50fd5b61013a90610e49565b61012e5781386100d6565b6040513d85823e3d90fd5b505050fd5b503461012057604036600319011261012057806001600160401b0360043581811161025057610188903690600401610ef2565b60025460405163a1595d4560e01b81526024803560048301819052946001600160a01b0394929390916101c09182918691829089165afa938415610399578794610277575b50505060408360075416920151823b156102735761020492869283604051809681958294639b4e19e360e01b8452600484016111cd565b03925af1908115610268578491610254575b50506006541690813b15610250578291602483926040519485938492632d01fce560e11b845260048401525af18015610123576101105750f35b5050fd5b61025d90610e49565b610250578238610216565b6040513d86823e3d90fd5b8580fd5b8092975081809495503d8311610392575b6102928183610e77565b81010312610378576040519182019586118287101761037c5786956040526102b9816111b9565b82526102c7602082016111b9565b6020830152604081015160408301526102e2606082016111b9565b60608301526080810151608083015260a081015160a083015260c081015160c083015260e081015180151581036103785760e08301526101008082015190830152610120808201519083015261014061033c8183016111b9565b9083015261016061034e8183016111b9565b908301526101806103608183016111b9565b908301526101a08091015190820152903880806101cd565b8680fd5b634e487b7160e01b600052604160045260246000fd5b503d610288565b6040513d89823e3d90fd5b50346101205780600319360112610120576103de7f0000000000000000000000000000000000000000000000000000000000000000610fc0565b906104087f00000000000000000000000000000000000000000000000000000000000000006110e6565b9060405190602090818301938385106001600160401b0386111761037c5792828593610464889661045698604052858552604051988998600f60f81b8a5260e0858b015260e08a0190610e09565b9088820360408a0152610e09565b924660608801523060808801528460a088015286840360c088015251928381520193925b82811061049757505050500390f35b835185528695509381019392810192600101610488565b503461012057366003190161010081126106c35760e0136101205760e4356001600160401b0381116106c3576104e8903690600401610ddc565b6005546001600160a01b039081169290833b156106bf57604051631ec0e12d60e11b8152600435948560048301526024356024830152604435918260448201526064356064820152608435608482015260a4359184831680930361069e5781899391849260a483015260c43560c483015261012060e483015281838161057361012482018d8d61126b565b3361010483015203925af18015610123576106ab575b505060046020836005541693600254166040519283809263734cd7c560e11b82525afa908115610399578791610675575b5060001981019081116106615790829187933b1561065d57604051631d1f113760e21b8152600481019190915260248101919091523360448201529082908290606490829084905af1801561012357610649575b50508160405192839283378101600081520390207f0ecbdc2fd9d1501cf7ae586dbed627507d44d798b28299d51214cd4d149935bf8380a380f35b61065290610e49565b61065d57833861060e565b8380fd5b634e487b7160e01b87526011600452602487fd5b90506020813d82116106a3575b8161068f60209383610e77565b8101031261069e5751386105ba565b600080fd5b3d9150610682565b6106b490610e49565b610273578538610589565b8480fd5b5080fd5b5034610120576003196101c0368201126106c3576001600160401b03600435116106c3576101e09060043536030112610120576024356001600160401b0381116106c357610719903690600401610ddc565b610140366043190112610cc857610184356001600160401b03811161065d57610746903690600401610ddc565b919092610754368486610e98565b6020815191012061077a6107736101a46004350160043560040161128c565b3691610e98565b6020815191012003610d97576107946024600435016112be565b6107a96101a46004350160043560040161128c565b6107cc602060405183819483830196873781018b83820152038084520182610e77565b51902060ff604051927fc552563fe214e9438df0f867f3ce1729c388727735cc0e3c00282fdc7d65bd9b60208501526004356004013560408501521660608301526044600435013560808301526064600435013560a08301526084600435013560c083015260a4600435013560e083015260c4600435013561010083015260e4600435013561012083015261010460043501356101408301526101246004350135610160830152610144600435013561018083015261016460043501356101a083015261018460043501356101c08301526101e08201526102006101c46004350135818301528152806102208101106001600160401b0361022083011117610d835791610913610919926042856102206109229701604052602081519101206108f361141d565b906040519161190160f01b83526002830152602282015220923691610e98565b906112cc565b90929192611398565b6007546001600160a01b03168461093d6004356024016112be565b823b156106c3576101c460ff9183604051958694859363063e858f60e01b855260043560040135600486015216602484015260446004350135604484015260646004350135606484015260846004350135608484015260a4600435013560a484015260c4600435013560c484015260e4600435013560e48401526101046004350135610104840152610124600435013561012484015261014460043501356101448401526101646004350135610164840152610184600435013561018484015260016101a48401525af18015610d7857610d65575b50600480546002546040516384ad716960e01b81526001600160a01b039283169390926020928492918391165afa908115610d14578691610d33575b5080600019810111610ccc57813b15610273576040516359883fa160e01b8152916044358015159081900361069e5760048401526064356024840152608435604484015260a435606484015260c435608484015260e43580151580910361069e5760a4840152610104356001600160a01b0381169081900361069e5760c4840152610124356001600160a01b0381169081900361069e5760e4840152610144356001600160a01b038116919082900361069e57838881819782968296610104840152610164356101248401526101c0610144840152610b338c8c6101c486019161126b565b6001600160a01b0390921661016484015260001901610184830152336101a483015203925af1801561012357610d1f575b505060048054600254604051634e09898960e11b808252959390926001600160a01b0390811692602092859290918391165afa918215610d14578692610ce0575b506000198201918211610ccc57908186923b15610cc8576040516323c2979f60e01b815260048101929092526101a435602483015233604483015282908290606490829084905af1801561012357610cb4575b5050600254604051938452602090849060049082906001600160a01b03165afa928315610268578493610c80575b506000198301928311610c6c578160405192839283378101600081520390207ff0a5df06f49109c80c106fa270db56cb5d2d10a1ebd5dd2431fc6ee0fe79c3ea8380a380f35b634e487b7160e01b84526011600452602484fd5b9092506020813d602011610cac575b81610c9c60209383610e77565b8101031261069e57519138610c26565b3d9150610c8f565b610cbd90610e49565b61065d578338610bf8565b8280fd5b634e487b7160e01b86526011600452602486fd5b9091506020813d602011610d0c575b81610cfc60209383610e77565b8101031261069e57519038610ba5565b3d9150610cef565b6040513d88823e3d90fd5b610d2890610e49565b610cc8578238610b64565b90506020813d602011610d5d575b81610d4e60209383610e77565b8101031261069e575138610a4e565b3d9150610d41565b610d7190949194610e49565b9238610a12565b6040513d87823e3d90fd5b634e487b7160e01b86526041600452602486fd5b60405162461bcd60e51b815260206004820152601760248201527f5369676e61747572652068617368206d69736d617463680000000000000000006044820152606490fd5b9181601f8401121561069e578235916001600160401b03831161069e576020838186019501011161069e57565b919082519283825260005b848110610e35575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610e14565b6001600160401b03811161037c57604052565b604081019081106001600160401b0382111761037c57604052565b90601f801991011681019081106001600160401b0382111761037c57604052565b9291926001600160401b03821161037c5760405191610ec1601f8201601f191660200184610e77565b82948184528183011161069e578281602093846000960137010152565b35906001600160a01b038216820361069e57565b91909161016090818185031261069e57604051918201936001600160401b03948381108682111761037c57604052829482358452602083013590811161069e5782019080601f8301121561069e57816020610f4f93359101610e98565b602083015260408101356040830152606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301526101008082013590830152610120610fa9818301610ede565b90830152610fbb610140809201610ede565b910152565b60ff8114610ffe5760ff811690601f8211610fec5760405191610fe283610e5c565b8252602082015290565b604051632cd44ac360e21b8152600490fd5b506040516000805490600182811c908084169384156110dc575b60209485841081146110c857838752869493929181156110a8575060011461104c575b505061104992500382610e77565b90565b60008080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56395935091905b8183106110905750506110499350820101388061103b565b85548784018501529485019486945091830191611078565b91505061104994925060ff191682840152151560051b820101388061103b565b634e487b7160e01b85526022600452602485fd5b91607f1691611018565b60ff81146111085760ff811690601f8211610fec5760405191610fe283610e5c565b50604051600060019081549182811c908084169384156111af575b60209485841081146110c857838752869493929181156110a8575060011461115357505061104992500382610e77565b60008181527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf695935091905b8183106111975750506110499350820101388061103b565b8554878401850152948501948694509183019161117f565b91607f1691611123565b51906001600160a01b038216820361069e57565b929190602090604085528051604086015281810151906111fb610160928360608901526101a0880190610e09565b9160408201516080880152606082015160a0880152608082015160c088015260a082015160e088015260c082015191610100928389015260e08101519261012093848a01528101519161014092838a015260018060a01b0380948301511690890152015116610180860152930152565b908060209392818452848401376000828201840152601f01601f1916010190565b903590601e198136030182121561069e57018035906001600160401b03821161069e5760200191813603831361069e57565b3560ff8116810361069e5790565b81519190604183036112fd576112f692506020820151906060604084015193015160001a90611308565b9192909190565b505060009160029190565b91907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841161138c57926020929160ff608095604051948552168484015260408301526060820152600092839182805260015afa156113805780516001600160a01b0381161561137757918190565b50809160019190565b604051903d90823e3d90fd5b50505060009160039190565b600481101561140757806113aa575050565b600181036113c45760405163f645eedf60e01b8152600490fd5b600281036113e55760405163fce698f760e01b815260048101839052602490fd5b6003146113ef5750565b602490604051906335e2f38360e21b82526004820152fd5b634e487b7160e01b600052602160045260246000fd5b307f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316148061151e575b15611478577f000000000000000000000000000000000000000000000000000000000000000090565b60405160208101907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f82527f000000000000000000000000000000000000000000000000000000000000000060408201527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260a0815260c081018181106001600160401b0382111761037c5760405251902090565b507f0000000000000000000000000000000000000000000000000000000000000000461461144f56fea2646970667358221220d1f789ae1b28aeca46b448a5dbda290106a6d5030e5bd73c84b268073c2c0dfa64736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
