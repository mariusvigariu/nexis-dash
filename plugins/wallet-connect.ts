import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/vue'

// https://docs.walletconnect.com/web3modal/vue/about

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const projectId = config.public.walletConnectProjectId
  const appVars = useAppVars()

  // const ethereum = {
  //   chainId: 1,
  //   name: 'Ethereum',
  //   currency: 'ETH',
  //   explorerUrl: 'https://etherscan.io',
  //   rpcUrl: 'https://cloudflare-eth.com',
  // }

  const bsc = {
    chainId: 56,
    name: 'BNB Smart Chain',
    currency: 'BNB',
    explorerUrl: 'https://bscscan.com',
    rpcUrl: 'https://bsc-dataseed.binance.org',
  }

  // create modal
  const metadata = {
    name: appVars.name,
    description: appVars.description,
    url: appVars.url,
    // icons: ['https://avatars.mywebsite.com/'],
  }

  const web3modal = createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    // chains: [bsc, ethereum],
    chains: [bsc],
    projectId,
  })

  nuxtApp.provide('w3m', web3modal)
})
