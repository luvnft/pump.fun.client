import { http, createConfig } from 'wagmi';
import { harmonyOne } from 'wagmi/chains';
import { getDefaultConfig } from 'connectkit';
import { appConfig } from './config.ts';
import { type Chain } from 'viem';

// Define Harmony Testnet as a custom chain
export const harmonyOneTestnet = {
  id: 1666700000, // Chain ID for Harmony Testnet
  name: 'Harmony Testnet', // Updated name for clarity
  nativeCurrency: {
    name: 'Harmony',
    symbol: 'ONE',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://api.s0.b.hmny.io'] }, // Testnet RPC URL
  },
  blockExplorers: {
    default: { name: 'Harmony Explorer', url: 'https://explorer.testnet.harmony.one' }, // Testnet Explorer
  },
  contracts: {}, // No specific contracts defined
} as const satisfies Chain;

// Create the wagmi configuration
export const config = createConfig(
  getDefaultConfig({
    // Define the chains your dApp supports
    chains: [harmonyOne, harmonyOneTestnet], // Include both Harmony Mainnet and Testnet
    transports: {
      [harmonyOne.id]: http(), // Transport for Harmony Mainnet
      [harmonyOneTestnet.id]: http(), // Transport for Harmony Testnet
    },
    walletConnectProjectId: appConfig.walletConnectProjectId, // WalletConnect Project ID
    appName: 'MEMECO.', // Your dApp name
    appDescription: 'MEMECO.', // Your dApp description
    appUrl: 'https://memeco.luvnft.com', // Your dApp URL
    appIcon: 'https://cryptologos.cc/logos/harmony-one-logo.png?v=040', // Your dApp icon
  }),
);

// Extend wagmi's type definitions
declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}