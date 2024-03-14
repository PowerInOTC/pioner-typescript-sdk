export const PionerV1Utils = {
  _format: 'hh-sol-artifact-1',
  contractName: 'PionerV1Utils',
  sourceName: 'contracts/Libs/PionerV1Utils.sol',
  abi: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'rate',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'time',
          type: 'uint256',
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
      ],
      name: 'calculateIr',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
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
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'interestRate',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lastPriceUpdateTime',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'isPayingIr',
          type: 'bool',
        },
      ],
      name: 'calculateuPnl',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
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
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'im',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'df',
          type: 'uint256',
        },
      ],
      name: 'dynamicIm',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
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
          internalType: 'bool',
          name: 'isA',
          type: 'bool',
        },
      ],
      name: 'getNotional',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  bytecode:
    '0x6080806040523461001a576105a29081610020823930815050f35b600080fdfe6040608081526004908136101561001557600080fd5b600091823560e01c80634ec5fc36146103715780636d37714a146100cc57806371947b55146100975763c535978e1461004d57600080fd5b60c03660031901126100935760a43590811515820361008f5790610081916084359060643590604435906024359035610462565b825191825215156020820152f35b8380fd5b8280fd5b509160a03660031901126100c957506100c26020926084359060643590604435906024359035610405565b9051908152f35b80fd5b503660031901610560811261008f5761038080911261008f57825190810167ffffffffffffffff908281108282111761035e5784528235825260243560208301526001600160a01b03604435818116810361033357858401526064356060840152608435608084015260a43560a084015260c43560c084015260e43581811681036103335760e0840152610100610104358185015261012061012435818601526101443560ff811681036103375761014090818701526101609161016435838801526101809361018435858901526101a0966101a435888a01526101c0996101c4358b8b01526101e4356101e08b0152610204356102008b0152610224356102208b0152610244356102408b0152610264356102608b0152610284356102808b01526102a4356102a08b01526102c4356102c08b01526102e4356102e08b015261030435888116810361035a576103008b015261032435801515810361035a576103208b0152610344356103408b0152610364356103608b01528a61038319360112610356578b519a8b019182118b83101761034357508a5261038435868116810361033f5789526103a435868116810361033f5760208a01526103c4358a8a01526103e435868116810361033f5760608a01526104043560808a01526104243560a08a01526104443560c08a015261046435801515810361033f5760e08a015261048435908901526104a435908801526104c43590848216820361033b578701526104e43590838216820361033757860152610504359182168203610333578401526105243590830152610544359384151585036100c95750926100c291602094610506565b8680fd5b8880fd5b8980fd5b8b80fd5b634e487b7160e01b8d526041905260248cfd5b8c80fd5b8d80fd5b634e487b7160e01b865260418452602486fd5b509160803660031901126100c957506301e133806020926103b9670de0b6b3a764000091826103b3606435926103ae6044359160243590356103e5565b6103e5565b046103e5565b04049051908152f35b919082039182116103cf57565b634e487b7160e01b600052601160045260246000fd5b818102929181159184041417156103cf57565b919082018092116103cf57565b93909291838510610442579061043e9394610431610438936103ae670de0b6b3a76400009889946103c2565b04926103f8565b906103e5565b0490565b9061043e93610431610438936103ae670de0b6b3a76400009889946103c2565b90949361043861048d846301e13380936103b38a6103ae670de0b6b3a76400009a8b978895426103c2565b0404948181106104dc576104a592916103ae916103c2565b0490156104d2578181106104c357906104bd916103c2565b90600090565b6104cc916103c2565b90600190565b906104bd916103f8565b6103ae906104ed93929695966103c2565b0491156104fd576104cc916103c2565b6104cc916103f8565b90911561054d576105439160a061052c836102206101e061043e960151910151906103f8565b670de0b6b3a76400009485916080850151906103e5565b04910151906103e5565b6105439160a061052c8361024061020061043e960151910151906103f856fea2646970667358221220481e1e2065ddd22093708ecc7660250961b2d333de6b7ab2f2834963d4d73e3f64736f6c63430008140033',
  deployedBytecode:
    '0x6040608081526004908136101561001557600080fd5b600091823560e01c80634ec5fc36146103715780636d37714a146100cc57806371947b55146100975763c535978e1461004d57600080fd5b60c03660031901126100935760a43590811515820361008f5790610081916084359060643590604435906024359035610462565b825191825215156020820152f35b8380fd5b8280fd5b509160a03660031901126100c957506100c26020926084359060643590604435906024359035610405565b9051908152f35b80fd5b503660031901610560811261008f5761038080911261008f57825190810167ffffffffffffffff908281108282111761035e5784528235825260243560208301526001600160a01b03604435818116810361033357858401526064356060840152608435608084015260a43560a084015260c43560c084015260e43581811681036103335760e0840152610100610104358185015261012061012435818601526101443560ff811681036103375761014090818701526101609161016435838801526101809361018435858901526101a0966101a435888a01526101c0996101c4358b8b01526101e4356101e08b0152610204356102008b0152610224356102208b0152610244356102408b0152610264356102608b0152610284356102808b01526102a4356102a08b01526102c4356102c08b01526102e4356102e08b015261030435888116810361035a576103008b015261032435801515810361035a576103208b0152610344356103408b0152610364356103608b01528a61038319360112610356578b519a8b019182118b83101761034357508a5261038435868116810361033f5789526103a435868116810361033f5760208a01526103c4358a8a01526103e435868116810361033f5760608a01526104043560808a01526104243560a08a01526104443560c08a015261046435801515810361033f5760e08a015261048435908901526104a435908801526104c43590848216820361033b578701526104e43590838216820361033757860152610504359182168203610333578401526105243590830152610544359384151585036100c95750926100c291602094610506565b8680fd5b8880fd5b8980fd5b8b80fd5b634e487b7160e01b8d526041905260248cfd5b8c80fd5b8d80fd5b634e487b7160e01b865260418452602486fd5b509160803660031901126100c957506301e133806020926103b9670de0b6b3a764000091826103b3606435926103ae6044359160243590356103e5565b6103e5565b046103e5565b04049051908152f35b919082039182116103cf57565b634e487b7160e01b600052601160045260246000fd5b818102929181159184041417156103cf57565b919082018092116103cf57565b93909291838510610442579061043e9394610431610438936103ae670de0b6b3a76400009889946103c2565b04926103f8565b906103e5565b0490565b9061043e93610431610438936103ae670de0b6b3a76400009889946103c2565b90949361043861048d846301e13380936103b38a6103ae670de0b6b3a76400009a8b978895426103c2565b0404948181106104dc576104a592916103ae916103c2565b0490156104d2578181106104c357906104bd916103c2565b90600090565b6104cc916103c2565b90600190565b906104bd916103f8565b6103ae906104ed93929695966103c2565b0491156104fd576104cc916103c2565b6104cc916103f8565b90911561054d576105439160a061052c836102206101e061043e960151910151906103f8565b670de0b6b3a76400009485916080850151906103e5565b04910151906103e5565b6105439160a061052c8361024061020061043e960151910151906103f856fea2646970667358221220481e1e2065ddd22093708ecc7660250961b2d333de6b7ab2f2834963d4d73e3f64736f6c63430008140033',
  linkReferences: {},
  deployedLinkReferences: {},
};
