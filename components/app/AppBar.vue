<script lang="ts" setup>
withDefaults(defineProps<{ order?: number | string }>(), {
  order: 1,
})

const urls = useUrls()
const router = useRouter()

const { theme } = useUi()
</script>

<template>
  <v-app-bar :order="order" border :color="theme.current.value.colors.background">
    <span class="d-flex align-center" style="cursor: pointer;" @click="router.push(urls.index)">
      <v-img src="/logo.png" width="160" />
      <v-chip color="primary" text="Beta" rounded variant="elevated" class="mt-1" />
    </span>

    <slot />
  </v-app-bar>
</template>
