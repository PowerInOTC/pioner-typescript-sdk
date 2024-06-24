import { Networks } from './types/network';

export const networks: Networks = {
  97: {
    name: 'BNB Smart Chain Testnet',
    pionerChainId: 'bnbTest',
    config: 'BSC testnet',
    chain: 'BSC',
    rpc: [
      'https://data-seed-prebsc-1-s1.bnbchain.org:8545',
      'https://data-seed-prebsc-2-s1.bnbchain.org:8545',
      'https://data-seed-prebsc-1-s2.bnbchain.org:8545',
      'https://data-seed-prebsc-2-s2.bnbchain.org:8545',
      'https://data-seed-prebsc-1-s3.bnbchain.org:8545',
      'https://data-seed-prebsc-2-s3.bnbchain.org:8545',
      'https://bsc-testnet-rpc.publicnode.com',
      'wss://bsc-testnet-rpc.publicnode.com',
    ],
    faucets: ['https://testnet.bnbchain.org/faucet-smart'],
    nativeCurrency: {
      name: 'BNB Chain Native Token',
      symbol: 'tBNB',
      decimals: 18,
    },
    infoURL: 'https://www.bnbchain.org/en',
    shortName: 'bnbt',
    chainId: 97,
    networkId: 97,
    slip44: 1,
    explorers: [
      {
        name: 'bscscan-testnet',
        url: 'https://testnet.bscscan.com',
        standard: 'EIP3091',
      },
    ],
    contracts: {
      FakeUSD: '',
      PionerV1: '',
      PionerV1Compliance: '',
      PionerV1Open: '',
      PionerV1Close: '',
      PionerV1Default: '',
      PionerV1View: '',
      PionerV1Oracle: '',
      PionerV1Wrapper: '',
    },
  },
  421614: {
    name: 'Arbitrum Sepolia',
    pionerChainId: 'arbitrumSepoliaTest',
    config: 'Arbitrum Sepolia',
    title: 'Arbitrum Sepolia Rollup Testnet',
    chain: 'ETH',
    rpc: [
      'https://sepolia-rollup.arbitrum.io/rpc',
      'https://arbitrum-sepolia.infura.io/v3/${INFURA_API_KEY}',
    ],
    faucets: [],
    nativeCurrency: {
      name: 'Sepolia Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    infoURL: 'https://arbitrum.io',
    shortName: 'arb-sep',
    chainId: 421614,
    networkId: 421614,
    slip44: 1,
    explorers: [
      {
        name: 'Arbitrum Sepolia Rollup Testnet Explorer',
        url: 'https://sepolia-explorer.arbitrum.io',
        standard: 'EIP3091',
      },
    ],
    parent: {
      type: 'L2',
      chain: 'eip155-11155111',
      bridges: [
        {
          url: 'https://bridge.arbitrum.io',
        },
      ],
    },
    contracts: {
      FakeUSD: '',
      PionerV1: '',
      PionerV1Compliance: '',
      PionerV1Open: '',
      PionerV1Close: '',
      PionerV1Default: '',
      PionerV1View: '',
      PionerV1Oracle: '',
      PionerV1Wrapper: '',
    },
  },
  80001: {
    name: 'Mumbai',
    pionerChainId: 'mumbai',
    config: 'Mumbai',
    title: 'Polygon Testnet Mumbai',
    chain: 'Polygon',
    icon: 'polygon',
    rpc: [
      'https://rpc-mumbai.maticvigil.com',
      'https://polygon-mumbai-bor-rpc.publicnode.com',
      'wss://polygon-mumbai-bor-rpc.publicnode.com',
      'https://polygon-mumbai.gateway.tenderly.co',
      'wss://polygon-mumbai.gateway.tenderly.co',
    ],
    faucets: ['https://faucet.polygon.technology/'],
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
    infoURL: 'https://polygon.technology/',
    shortName: 'maticmum',
    chainId: 80001,
    networkId: 80001,
    slip44: 1,
    explorers: [
      {
        name: 'polygonscan',
        url: 'https://mumbai.polygonscan.com',
        standard: 'EIP3091',
      },
    ],
    contracts: {
      FakeUSD: '',
      PionerV1: '',
      PionerV1Compliance: '',
      PionerV1Open: '',
      PionerV1Close: '',
      PionerV1Default: '',
      PionerV1View: '',
      PionerV1Oracle: '',
      PionerV1Wrapper: '',
    },
  },
  11155420: {
    name: 'OP Sepolia Testnet',
    pionerChainId: 'opSepoliaTest',
    config: 'Optimism Sepolia',
    chain: 'ETH',
    rpc: ['https://sepolia.optimism.io'],
    faucets: ['https://app.optimism.io/faucet'],
    nativeCurrency: {
      name: 'Sepolia Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    infoURL: 'https://optimism.io',
    shortName: 'opsep',
    chainId: 11155420,
    networkId: 11155420,
    slip44: 1,
    explorers: [
      {
        name: 'opscout',
        url: 'https://optimism-sepolia.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091',
      },
    ],
    contracts: {
      FakeUSD: '',
      PionerV1: '',
      PionerV1Compliance: '',
      PionerV1Open: '',
      PionerV1Close: '',
      PionerV1Default: '',
      PionerV1View: '',
      PionerV1Oracle: '',
      PionerV1Wrapper: '',
    },
  },
  43113: {
    name: 'Avalanche Fuji Testnet',
    pionerChainId: 'fuji',
    config: 'fuji',
    chain: 'AVAX',
    icon: 'avax',
    rpc: [
      'https://api.avax-test.network/ext/bc/C/rpc',
      'https://avalanche-fuji-c-chain-rpc.publicnode.com',
      'wss://avalanche-fuji-c-chain-rpc.publicnode.com',
    ],
    faucets: ['https://faucet.avax-test.network/'],
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18,
    },
    infoURL: 'https://cchain.explorer.avax-test.network',
    shortName: 'Fuji',
    chainId: 43113,
    networkId: 1,
    slip44: 1,
    explorers: [
      {
        name: 'snowtrace',
        url: 'https://testnet.snowtrace.io',
        standard: 'EIP3091',
      },
    ],
    contracts: {
      FakeUSD: '0xF1FBfB0a2Cc4c44253b39542B26716314A34F0B6',
      PionerV1: '0xbfd48b8255FE04615C441EAa7033C145f432A2d0',
      PionerV1Compliance: '0x13DDdc7BfE3bdDCde46249D86C1a23EDd5C3212E',
      PionerV1Open: '0xEf1C0Bc9506BF71A9f489E7f7B559A5DC957362D',
      PionerV1Close: '0xafe3F9845E1023Aa71BE74E9DDCf29402c95Dc25',
      PionerV1Default: '0x4dE711a0aD4e91637F66d0977a79Ce59F0A30B27',
      PionerV1View: '0xB10FFAa9e4facbC3080612b178938431fA7aD9a0',
      PionerV1Oracle: '0x4Eec7C251fc99951B33B8ddB2cB0922f438EF8f2',
      PionerV1Wrapper: '0xD607412293711928C574a5CcF8AF2e1aca0d4543',
    },
  },
  43114: {
    name: 'Avalanche C-Chain',
    pionerChainId: 'avax',
    chain: 'AVAX',
    icon: 'avax',
    rpc: [
      'https://api.avax.network/ext/bc/C/rpc',
      'https://avalanche-c-chain-rpc.publicnode.com',
      'wss://avalanche-c-chain-rpc.publicnode.com',
    ],
    features: [
      {
        name: 'EIP1559',
      },
    ],
    faucets: [],
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18,
    },
    infoURL: 'https://www.avax.network/',
    shortName: 'avax',
    chainId: 43114,
    networkId: 43114,
    slip44: 9005,
    explorers: [
      {
        name: 'snowtrace',
        url: 'https://snowtrace.io',
        standard: 'EIP3091',
      },
    ],
    contracts: {
      FakeUSD: '',
      PionerV1: '',
      PionerV1Compliance: '',
      PionerV1Open: '',
      PionerV1Close: '',
      PionerV1Default: '',
      PionerV1View: '',
      PionerV1Oracle: '',
      PionerV1Wrapper: '',
    },
  },
  3441005: {
    name: 'Manta Pacific Testnet',
    pionerChainId: 'mantaTest',
    config: 'Mantle Testnet',
    chain: 'Manta Pacific',
    rpc: ['https://manta-testnet.calderachain.xyz/http'],
    faucets: [],
    nativeCurrency: {
      name: 'Manta',
      symbol: 'MANTA',
      decimals: 18,
    },
    features: [
      {
        name: 'EIP155',
      },
      {
        name: 'EIP1559',
      },
    ],
    infoURL: 'https://manta-testnet.caldera.dev/',
    shortName: 'mantaTestnet',
    chainId: 3441005,
    networkId: 3441005,
    slip44: 1,
    icon: 'manta',
    explorers: [
      {
        name: 'manta-testnet Explorer',
        url: 'https://manta-testnet.calderaexplorer.xyz',
        standard: 'EIP3091',
      },
    ],
    contracts: {
      FakeUSD: '',
      PionerV1: '',
      PionerV1Compliance: '',
      PionerV1Open: '',
      PionerV1Close: '',
      PionerV1Default: '',
      PionerV1View: '',
      PionerV1Oracle: '',
      PionerV1Wrapper: '',
    },
  },
  84532: {
    name: 'Base Sepolia Testnet',
    pionerChainId: 'baseSepoliaTest',
    config: 'Base Sepolia',
    chain: 'ETH',
    rpc: [
      'https://sepolia.base.org',
      'https://base-sepolia-rpc.publicnode.com',
      'wss://base-sepolia-rpc.publicnode.com',
    ],
    faucets: [],
    nativeCurrency: {
      name: 'Sepolia Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    infoURL: 'https://base.org',
    shortName: 'basesep',
    chainId: 84532,
    networkId: 84532,
    slip44: 1,
    icon: 'baseTestnet',
    explorers: [
      {
        name: 'basescout',
        url: 'https://base-sepolia.blockscout.com',
        icon: 'blockscout',
        standard: 'EIP3091',
      },
    ],
    contracts: {
      FakeUSD: '',
      PionerV1: '',
      PionerV1Compliance: '',
      PionerV1Open: '',
      PionerV1Close: '',
      PionerV1Default: '',
      PionerV1View: '',
      PionerV1Oracle: '',
      PionerV1Wrapper: '',
    },
  },
  1442: {
    name: 'Polygon zkEVM Testnet',
    pionerChainId: 'skevmTest',
    config: 'zkEVM Testnet',
    title: 'Polygon zkEVM Testnet',
    chain: 'Polygon',
    rpc: ['https://rpc.public.zkevm-test.net'],
    faucets: [],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    infoURL: 'https://polygon.technology/solutions/polygon-zkevm/',
    shortName: 'testnet-zkEVM-mango',
    chainId: 1442,
    networkId: 1442,
    slip44: 1,
    explorers: [
      {
        name: 'Polygon zkEVM explorer',
        url: 'https://explorer.public.zkevm-test.net',
        standard: 'EIP3091',
      },
    ],
    contracts: {
      FakeUSD: '',
      PionerV1: '',
      PionerV1Compliance: '',
      PionerV1Open: '',
      PionerV1Close: '',
      PionerV1Default: '',
      PionerV1View: '',
      PionerV1Oracle: '',
      PionerV1Wrapper: '',
    },
  },
  64165: {
    name: 'Sonic Testnet',
    pionerChainId: 'sonic',
    rpc: ['https://rpc.sonic.fantom.network/'],
    faucets: ['https://app.optimism.io/faucet'],
    chainId: 64165,
    networkId: 64165,
    contracts: {
      FakeUSD: '0x22759C3E0d423C57B0679ad66aA4a5a3518d2bFc',
      PionerV1: '0x549A46322eD5428D19748c5Af06b8AeA7BC2368F',
      PionerV1Compliance: '0x68781c846787b1aCB85065A64Bbe6D1ee02c2733',
      PionerV1Open: '0x88dA6dC64A62252972270600299cA58D4fEd2e40',
      PionerV1Close: '0x265Ead7eEE652fA8596Dbd7D3719272e68c96290',
      PionerV1Default: '0xaBABa445c03C9187ab06B03743Fa1d494280657a',
      PionerV1View: '0x926eD3746bd5Cf0DbE10b6C3aC1FDc32F3E78AA1',
      PionerV1Oracle: '0x68326536624FA7d9913540021bDB731DdF11E39F',
      PionerV1Wrapper: '0x5183408e083773DD8c7A4F32021bA11b893DCb94',
    },
  },
  4002: {
    name: 'Ftm Testnet',
    pionerChainId: 'ftmTestnet',
    rpc: ['https://rpc.ankr.com/fantom_testnet/'],
    faucets: ['https://testnet.bnbchain.org/faucet-smart'],
    chainId: 4002,
    networkId: 4002,
    contracts: {
      FakeUSD: '0x9475928a8cb2fD854FA7DBe6A159e53E3CF78cdA',
      PionerV1: '0x1434e964c9C23b2eB3AaE88302c55111866a18fe',
      PionerV1Compliance: '0xAcb99cCE573f42FE0a7F99Da116A3379E2eCC991',
      PionerV1Open: '0x3960e40247455e858A033C7e16ad421122ce892b',
      PionerV1Close: '0x17652c3581b39E41066EA4f6f205714c3C565551',
      PionerV1Default: '0xf2CEdA637CcbEc4b27d551028C39908a8a32380b',
      PionerV1View: '0x037dECfe553C2C75D3b4c9a14d23f0964929Bd23',
      PionerV1Oracle: '0xF00BA267E52636A40093e6868B2c3086567Ab27A',
      PionerV1Wrapper: '0xB8BF4a8C2872C15dB02F9d77e4647DEFe94b653F',
    },
  },
};
