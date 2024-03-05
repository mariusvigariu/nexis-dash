<script lang="ts" setup>
import {
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalAccount,
} from '@web3modal/ethers/vue'

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
</script>

<template>
  <v-btn
    :text="isConnected ? addressTruncated : 'CONNECT'"
    color="primary"
    class="text-none"
    :variant="isConnected ? 'text' : 'elevated'"
    @click="modal.open()"
  />
</template>
