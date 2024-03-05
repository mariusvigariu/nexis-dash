export const useAppVars = () => {
  return {
    name: 'Nexis Portal',
    description: 'Nexis Portal',
    domain: 'portal.nexis.network',
    url: 'https://portal.nexis.network',
  }
}

export const useContractAddress = () => {
  return {
    ethereum: {
      exzo: '0xD098A30AE6C4A202DAD8155DC68e2494eBAc871c',
    },
    bsc: {
      pnzt: '0x5f60B76cC8ca25EC18958e8291521aa006BeD2aD',
    },
  }
}

export const useAbi = () => {
  // human readable abi format
  return [
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function balanceOf(address) view returns (uint)',
    'function transfer(address to, uint amount)',
    'event Transfer(address indexed from, address indexed to, uint amount)',
  ]
}
