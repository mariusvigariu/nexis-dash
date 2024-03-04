<script lang="ts" setup>
import { useWeb3Modal } from '@web3modal/ethers/vue'
// 4. Use modal composable
const modal = useWeb3Modal()
</script>

<template>
  <v-btn
    text="Connect"
    color="primary"
    variant="elevated"
    @click="modal.open()"
  />
</template>
