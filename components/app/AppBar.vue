<script lang="ts" setup>
withDefaults(defineProps<{ order?: number | string }>(), {
  order: 1,
})

const urls = useUrls()
const appVars = useAppVars()
</script>

<template>
  <v-app-bar :order="order">
    <v-tooltip :text="appVars.name" location="bottom">
      <template #activator="{ props }">
        <v-btn
          :to="urls.index"
          class="mx-3"
          icon
          size="small"
          color="primary"
          v-bind="props"
        >
          <v-icon icon="mdi-alpha-n" size="40" />
        </v-btn>
      </template>
    </v-tooltip>

    <slot />
  </v-app-bar>
</template>
