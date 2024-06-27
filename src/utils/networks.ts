const networks: Network[] = [
  {
    id: 'GRV',
    name: 'Grove',
    short_name: 'GRV',
    currency: 'GRV',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23196.png',
    mainnet: {
      chainId: 770077,
      rpc: 'https://mainnet.grovechain.io/',
      explorer: 'https://grvscan.io/'
    },
    testnet: {
      chainId: 770077,
      rpc: 'https://testnet.grovechain.io/',
      explorer: 'https://testnet.grvscan.io/'
    },
    commission_fee: {
      basic: 10000,
      custom: 35000,
      advance: 150000
    },
    scan_name: "GRVscan",
    routers: [
      {
        name: "BSC",
        address: "0xe4D96Cf7f47656200FBC3b6110DC8E785216EF0E"
      },
      {
        name: "ETH",
        address: "0x3711020351da65a99eb9a821Bb7706E193C9aaa0"
      },
    ]
  },
  {
    id: 'BNB',
    name: 'Binance Smart Chain',
    short_name: 'BNB',
    currency: 'BNB',
    icon: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
    mainnet: {
      chainId: 56,
      rpc: 'https://bsc-dataseed.binance.org/',
      explorer: 'https://bscscan.com/'
    },
    commission_fee: {
      basic: 0.1,
      custom: 0.4,
      advance: 1
    },
    testnet: {
      chainId: 97,
      rpc: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      explorer: 'https://testnet.bscscan.com/'
    },
    scan_name: "Bscscan"
  },
  {
    id: 'ETH',
    name: 'Ethereum',
    short_name: 'ETH',
    currency: 'ETH',
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    mainnet: {
      chainId: 1,
      rpc: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',
      explorer: 'https://etherscan.io/'
    },
    testnet: {
      chainId: 5,
      rpc: 'https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID',
      explorer: 'https://goerli.etherscan.io/'
    },
    commission_fee: {
      basic: 0.028,
      custom: 0.112,
      advance: 0.28
    },
    scan_name: "Etherscan",
    routers: [
      {
        name: "Uniswap V2",
        address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
      },
      {
        name: "Uniswap V3",
        address: "0xE592427A0AEce92De3Edee1F18E0157C05861564"
      },
    ]
  },
  {
    id: 'BASE',
    name: 'Base',
    short_name: 'BASE',
    currency: 'ETH',
    icon: 'https://cryptologos.cc/logos/base-base-logo.png',
    mainnet: {
      chainId: 8453,
      rpc: 'https://mainnet.base.org/',
      explorer: 'https://basescan.org/'
    },
    testnet: {
      chainId: 84531,
      rpc: 'https://goerli.base.org/',
      explorer: 'https://goerli.basescan.org/'
    },
    commission_fee: {
      basic: 0.028,
      custom: 0.112,
      advance: 0.28
    },
    scan_name: "Basescan",
    routers: [
      {
        name: "Uniswap Universal",
        address: "0x198EF79F1F515F02dFE9e3115eD9fC07183f02fC"
      }
    ]
  },
  {
    id: 'SHIB',
    name: 'Shibarium',
    short_name: 'SHIB',
    currency: 'SHIB',
    icon: 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png',
    mainnet: {
      chainId: 969,
      rpc: 'https://rpc.shibarium.network/',
      explorer: 'https://shibariumscan.com/'
    },
    testnet: {
      chainId: 971,
      rpc: 'https://testnet.shibarium.network/',
      explorer: 'https://testnet.shibariumscan.com/'
    },
    commission_fee: {
      basic: 195,
      custom: 780,
      advance: 1950
    },
    scan_name: "Shibariumscan",
    routers: [
      {
        name: "ChewySwap",
        address: "0x2875F2D86d83635A859029872e745581530cEec7"
      },
      {
        name: "Uniswap V2",
        address: "0xEF83bbB63E8A7442E3a4a5d28d9bBf32D7c813c8"
      },
    ]
  },
  {
    id: 'MATIC',
    name: 'Polygon',
    short_name: 'MATIC',
    currency: 'MATIC',
    icon: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
    mainnet: {
      chainId: 137,
      rpc: 'https://rpc-mainnet.maticvigil.com/',
      explorer: 'https://polygonscan.com/'
    },
    testnet: {
      chainId: 80001,
      rpc: 'https://rpc-mumbai.maticvigil.com/',
      explorer: 'https://mumbai.polygonscan.com/'
    },
    commission_fee: {
      basic: 125,
      custom: 500,
      advance: 1250
    },
    scan_name: "Polygonscan",
    routers: [
      {
        name: "QuickStop",
        address: "0xf5b509bB0909a69B1c207E495f687a596C168E12"
      },
      {
        name: "Uniswap V3",
        address: "0xE592427A0AEce92De3Edee1F18E0157C05861564"
      },
    ]
  },
  {
    id: 'ARB',
    name: 'Arbitrum',
    short_name: 'ARB',
    currency: 'ETH',
    icon: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png',
    mainnet: {
      chainId: 42161,
      rpc: 'https://arb1.arbitrum.io/rpc',
      explorer: 'https://arbiscan.io/'
    },
    testnet: {
      chainId: 421611,
      rpc: 'https://rinkeby.arbitrum.io/rpc',
      explorer: 'https://testnet.arbiscan.io/'
    },
    commission_fee: {
      basic: 0.028,
      custom: 0.112,
      advance: 0.28
    },
    scan_name: "Arbiscan",
    routers: [
      {
        name: "GMX",
        address: "0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064"
      },
      {
        name: "Zyber",
        address: "0x16e71B13fE6079B4312063F7E81F76d165Ad32Ad"
      },
    ]
  },
  {
    id: 'AVAX',
    name: 'Avalanche',
    short_name: 'AVAX',
    currency: 'AVAX',
    icon: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
    mainnet: {
      chainId: 43114,
      rpc: 'https://api.avax.network/ext/bc/C/rpc',
      explorer: 'https://cchain.explorer.avax.network/'
    },
    testnet: {
      chainId: 43113,
      rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
      explorer: 'https://cchain.explorer.avax-test.network/'
    },
    commission_fee: {
      basic: 2.5,
      custom: 10,
      advance: 25
    },
    scan_name: "SnowTrace",
    routers: [
      {
        name: "SushiSwap",
        address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"
      }
    ]
  },
  {
    id: 'FTM',
    name: 'Fantom',
    short_name: 'FTM',
    currency: 'FTM',
    icon: 'https://cryptologos.cc/logos/fantom-ftm-logo.png',
    mainnet: {
      chainId: 250,
      rpc: 'https://rpc.ftm.tools/',
      explorer: 'https://ftmscan.com/'
    },
    testnet: {
      chainId: 4002,
      rpc: 'https://rpc.testnet.fantom.network/',
      explorer: 'https://testnet.ftmscan.com/'
    },
    commission_fee: {
      basic: 50,
      custom: 200,
      advance: 500
    },
    scan_name: "FTMscan",
    routers: [
      {
        name: "SpookySwap",
        address: "0xF491e7B69E4244ad4002BC14e878a34207E38c29"
      }
    ]
  },
  {
    id: 'ZKS',
    name: 'zkSync',
    short_name: 'ZKS',
    currency: 'ETH',
    icon: 'https://cryptologos.cc/logos/zksync-zks-logo.png',
    mainnet: {
      chainId: 324,
      rpc: 'https://zksync2-mainnet.zksync.io',
      explorer: 'https://explorer.zksync.io/'
    },
    testnet: {
      chainId: 280,
      rpc: 'https://zksync2-testnet.zksync.dev',
      explorer: 'https://rinkeby-explorer.zksync.io/'
    },
    commission_fee: {
      basic: 0.01,
      custom: 0.04,
      advance: 0.1
    },
    scan_name: "ERA",
    routers: [
      {
        name: "Pancakeswap V2",
        address: "0x5aEaF2883FBf30f3D62471154eDa3C0c1b05942d"
      }
    ]
  },
  {
    id: 'ATOM',
    name: 'Cosmos',
    short_name: 'ATOM',
    currency: 'ATOM',
    icon: 'https://cryptologos.cc/logos/cosmos-atom-logo.png',
    mainnet: {
      chainId: 1,
      rpc: 'https://rpc.cosmos.network',
      explorer: 'https://cosmos.bigdipper.live/'
    },
    commission_fee: {
      basic: 4.4,
      custom: 17.6,
      advance: 44
    },
    testnet: {
      chainId: 2,
      rpc: 'https://rpc.testnet.cosmos.network',
      explorer: 'https://testnet.cosmos.bigdipper.live/'
    },
    scan_name: "ATOMscan"
  },
  {
    id: 'OP',
    name: 'Optimism',
    short_name: 'OP',
    currency: 'ETH',
    icon: 'https://cryptologos.cc/logos/optimism-op-logo.png',
    mainnet: {
      chainId: 10,
      rpc: 'https://mainnet.optimism.io',
      explorer: 'https://optimistic.etherscan.io/'
    },
    testnet: {
      chainId: 420,
      rpc: 'https://goerli.optimism.io',
      explorer: 'https://goerli-optimism.etherscan.io/'
    },
    commission_fee: {
      basic: 28,
      custom: 112,
      advance: 280
    },
    scan_name: "OP Mainnet"
  },
  {
    id: 'BOBA',
    name: 'Boba Network',
    short_name: 'BOBA',
    currency: 'ETH',
    icon: 'https://cryptologos.cc/logos/boba-network-boba-logo.png',
    mainnet: {
      chainId: 288,
      rpc: 'https://mainnet.boba.network/',
      explorer: 'https://blockexplorer.boba.network/'
    },
    testnet: {
      chainId: 28,
      rpc: 'https://rinkeby.boba.network/',
      explorer: 'https://blockexplorer.rinkeby.boba.network/'
    },
    commission_fee: {
      basic: 0.028,
      custom: 0.112,
      advance: 0.28
    },
    scan_name: "Bobascan"
  },
  {
    id: 'TOMO',
    name: 'TomoChain',
    short_name: 'TOMO',
    currency: 'TOMO',
    icon: 'https://cryptologos.cc/logos/tomochain-tomo-logo.png',
    mainnet: {
      chainId: 88,
      rpc: 'https://rpc.tomochain.com',
      explorer: 'https://scan.tomochain.com/'
    },
    testnet: {
      chainId: 89,
      rpc: 'https://rpc.testnet.tomochain.com',
      explorer: 'https://scan.testnet.tomochain.com'
    },
    commission_fee: {
      basic: 75,
      custom: 300,
      advance: 750
    },
    scan_name: "Tomoscan"
  },
  {
    id: 'GNO',
    name: 'Gnosis',
    short_name: 'GNO',
    currency: 'GNO',
    icon: 'https://cryptologos.cc/logos/gnosis-gno-logo.png',
    mainnet: {
      chainId: 100,
      rpc: 'https://rpc.gnosischain.com',
      explorer: 'https://blockscout.com/xdai/mainnet/'
    },
    testnet: {
      chainId: 10200,
      rpc: 'https://rpc.chiadochain.net',
      explorer: 'https://blockscout.com/gnosis/chiado/'
    },
    commission_fee: {
      basic: 0.1,
      custom: 0.4,
      advance: 1
    },
    scan_name: "xDAI"
  },
  {
    id: 'CRO',
    name: 'Cronos',
    short_name: 'CRO',
    currency: 'CRO',
    icon: 'https://cryptologos.cc/logos/cronos-cro-logo.png',
    mainnet: {
      chainId: 25,
      rpc: 'https://evm-cronos.crypto.org/',
      explorer: 'https://cronoscan.com/'
    },
    testnet: {
      chainId: 338,
      rpc: 'https://evm-t3.cronos.org/',
      explorer: 'https://testnet.cronoscan.com/'
    },
    commission_fee: {
      basic: 550,
      custom: 2200,
      advance: 5500
    },
    scan_name: "Cronoscan"
  }
];

export const getNetworkObject = (short_name: string): Network | null => {
  for (let i = 0; i < networks.length; i++) {
    if (networks[i].short_name === short_name) {
      return networks[i];
    }
  }
  return null;
}

export default networks;
