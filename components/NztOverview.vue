<script lang="ts" setup>
import { BrowserProvider, Contract, formatUnits } from 'ethers'
import { useWeb3ModalAccount } from '@web3modal/ethers/vue'

const abi = useAbi()
const contractAddress = useContractAddress()
const { address, isConnected } = useWeb3ModalAccount()

const balance = reactive({
  // all expressed in wei
  total: 0,

  // TODO update below values
  claimable: 0,
  locked: 0,
  claimed: 0,
})

const getBalance = async () => {
  if (!isConnected.value) {
    // user is not connected so nothing to do here
    return
  }

  const { $w3m } = useNuxtApp()
  const ethersProvider = new BrowserProvider($w3m.getWalletProvider())
  const signer = await ethersProvider.getSigner()

  const contract = new Contract(contractAddress.bsc.pnzt, abi, signer)
  const total = await contract.balanceOf(address.value)

  balance.total = total
}

const resetBalance = () => {
  balance.total = 0
  balance.claimable = 0
  balance.locked = 0
  balance.claimed = 0
}

onMounted(getBalance)

watch(isConnected, (connected: boolean) => {
  if (connected) {
    getBalance()
  } else {
    resetBalance()
  }
})
</script>

<template>
  <v-card>
    <v-card-title class="text-uppercase">
      <v-icon icon="mdi-square-medium" />
      Your NZT
    </v-card-title>

    <v-img src="/bubbles.png" height="800" cover>
      <div class="d-flex flex-column" style="height: 790px;">
        <v-img src="/ring.png" height="250" class="mt-16" />
        <v-spacer />
        <v-card-text class="mx-4">
          <v-row>
            <v-col>
              <div class="text-h1 font-weight-bold">
                0<span class="text-h6 font-weight-bold">.00</span>
              </div>
              <div class="text-subtitle-1">
                Claimable
              </div>
            </v-col>
            <v-col>
              <v-list density="compact">
                <v-list-item subtitle="Total">
                  <template #append>
                    {{ parseFloat(formatUnits(balance.total, 18)).toPrecision(3) }}
                  </template>
                </v-list-item>
                <v-list-item subtitle="Locked">
                  <template #append>
                    0.00
                  </template>
                </v-list-item>
                <v-list-item subtitle="Claimed">
                  <template #append>
                    0.00
                  </template>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn
            text="Buy now"
            size="large"
            rounded="0"
            variant="elevated"
            color="yellow"
            href="https://buy.nexislabs.io"
            target="_blank"
            block
          />
        </v-card-actions>
      </div>
    </v-img>
  </v-card>
</template>
