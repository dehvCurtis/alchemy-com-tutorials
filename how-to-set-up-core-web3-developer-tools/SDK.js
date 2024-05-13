
import { Network, Alchemy } from 'alchemy-sdk';

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.SOL,
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

// Access standard Ethers.js JSON-RPC node request
alchemy.core.getBlockNumber().then(console.log);

// Access Alchemy Enhanced API requests
alchemy.core.getTokenBalances("0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE").then(console.log);

// Access the Alchemy NFT API
alchemy.nft.getNftsForOwner('vitalik.eth').then(console.log);

// Access WebSockets and Alchemy-specific WS methods
alchemy.ws.on(
  {
    method: 'alchemy_pendingTransactions'
  },
  res => console.log(res)
);
```

