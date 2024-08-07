// context/Web3Modal.tsx
'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
import { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { Web3Modal } from '@web3modal/ethers'
import networks from 'src/utils/networks';

// Your WalletConnect Cloud project ID
export const projectId = 'd8b2c472e28bcf134eb8aed8b8c9ed22'

const chains: any[] = [];

chains.push({
  name: networks[0].name,
  currency: networks[0].currency,
  rpcUrl: networks[0].mainnet.rpc,
  chainId: networks[0].mainnet.chainId,
  explorerUrl: networks[0].mainnet.explorer,
})

chains.push({
  name: networks[0].name + ' Testnet',
  currency: networks[0].currency,
  rpcUrl: networks[0]?.testnet?.rpc,
  chainId: networks[0]?.testnet?.chainId,
  explorerUrl: networks[0]?.testnet?.explorer,
})

chains.push({
  name: networks[1].name + ' Testnet',
  currency: networks[1].currency,
  rpcUrl: networks[1]?.testnet?.rpc,
  chainId: networks[1]?.testnet?.chainId,
  explorerUrl: networks[1]?.testnet?.explorer,
})

for (let i = 1; i < networks.length; i++) {
  chains.push({
    name: networks[i].mainnet.name ?? networks[i].name,
    currency: networks[i].currency,
    rpcUrl: networks[i].mainnet.rpc,
    chainId: networks[i].mainnet.chainId,
    explorerUrl: networks[i].mainnet.explorer,
  })
}

const chainImages = {
  770077: 'https://assets-global.website-files.com/62b03f7c4e77803f83b758a2/62b0c510ac78ba061da94401_newgrove-01_edited.png',
  109: 'https://cryptologos.cc/logos/shiba-inu-shib-logo.png',
  288: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14556.png',
  88: 'https://cryptologos.cc/logos/tomochain-tomo-logo.png',
  25: 'https://cryptologos.cc/logos/cronos-cro-logo.png',
};

// Metadata
const metadata = {
  name: 'Grove Token Launch',
  description: 'Launch your custom token on various blockchain networks.',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Ethers config
const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  rpcUrl: '...',
  defaultChainId: 1,
})

const createWeb3ModalInstance = (): Web3Modal => {
  // Create Web3Modal instance
  return createWeb3Modal({
    ethersConfig,
    chains,
    projectId,
    enableAnalytics: true,
    enableOnramp: true,
    chainImages,
  });
};

export default createWeb3ModalInstance;