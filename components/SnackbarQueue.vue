<script lang="ts" setup>
import type { SnackActionButton } from '~/types/snack'

const { queue } = useSnack()

// show is turned on when something is pushed into the queue
// when it gets set to false we pop the first obj from the queue
const show = computed({
  get: () => queue.value.length > 0,
  set: (shown) => {
    if (!shown) {
      queue.value.splice(0, 1)
    }
  },
})

// always show the first object in the queue
const obj = computed(() => queue.value[0])

// hides snackbar and triggers action onclick callback
const handleAction = (action: SnackActionButton) => {
  show.value = false
  action.onclick()
}
</script>

<template>
  <v-snackbar
    v-if="obj"
    v-model="show"
    :timeout="obj.keepOpen ? -1 : obj.timeout"
    position="fixed"
    location="start bottom"
  >
    {{ obj.text }}

    <template #actions>
      <v-btn
        v-for="(action, i) in obj.actions"
        :key="i"
        variant="flat"
        @click="handleAction(action)"
      >
        {{ action.text }}
      </v-btn>

      <v-btn
        icon="mdi-close"
        @click="show = false"
      />
    </template>
  </v-snackbar>
</template>
