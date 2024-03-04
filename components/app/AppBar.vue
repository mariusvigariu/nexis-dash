<script lang="ts" setup>
withDefaults(defineProps<{ order?: number | string }>(), {
  order: 1,
})

const urls = useUrls()
const router = useRouter()
</script>

<template>
  <v-app-bar :order="order">
    <span style="cursor: pointer;" @click="router.push(urls.index)">
      <v-img src="/logo.png" width="160" />
    </span>

    <slot />
  </v-app-bar>
</template>
