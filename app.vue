<script lang="ts" setup>
const { themeSetFromStorage } = useUi()

onBeforeMount(async () => {
  themeSetFromStorage()
})
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
