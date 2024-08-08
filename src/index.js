import { createClient, configureChains, defaultChains } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { providers } from 'ethers';

// Configure chains
const { chains, provider } = configureChains(defaultChains, [
  providers.getDefaultProvider(),
]);

// Create a wagmi client
const client = createClient({
  autoConnect: true,
  connectors: [
    new InjectedConnector({ chains }),
  ],
  provider,
});

// Export the client to use in other parts of your application
export default client;
