<script lang="ts" setup>
import { useDisplay } from 'vuetify'

import {
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalAccount,
} from '@web3modal/ethers/vue'

const { xs } = useDisplay()
const events = useWeb3ModalEvents()
const modal = useWeb3Modal()
const { address, isConnected } = useWeb3ModalAccount()

watch(events, (v: ReturnType<typeof useWeb3ModalEvents>) => {
  console.log('[web3modal]', JSON.stringify(v.data))
})

const addressTruncated = computed(() => {
  const a = address.value
  if (!a) {
    return ''
  }
  return a.slice(0, 6) + '...' + a.slice(a.length - 4, a.length)
})

const connectWallet = computed(() => {
  if (xs.value) {
    return 'Connect'
  }
  return 'Connect Wallet'
})
</script>

<template>
  <v-btn
    class="text-none"
    :variant="isConnected ? 'text' : 'elevated'"
    style="background: linear-gradient(90deg, #3ED0F0 0%, #179EFF 24.5%, #0057FF 67%, #0A4BCA 95%);"
    size="large"
    @click="modal.open()"
  >
    <v-icon icon="mdi-wallet" start />
    <span v-text="isConnected ? addressTruncated : connectWallet" />
  </v-btn>
</template>
