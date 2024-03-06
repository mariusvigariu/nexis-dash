<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { xs } = useDisplay()

const roadmap = [
  {
    title: 'PRIVATE SALE - CLOSED',
    subtitle: '$NZT token private sale for strategic parties across crypto',
    disabled: true,
  },
  {
    title: 'COMMUNITY SALE - CLOSED',
    subtitle:
      'COMMUNITY PRESALE - Nexist community presale. The fastest selling Presale of 2024',
    disabled: true,
  },
  {
    title: 'TOKEN LAUNCH - UPCOMING',
    subtitle: 'TOKEN LAUNCH - $NZT launch, more details TBC.',
    disabled: false,
  },
  {
    title: 'NZT ECOSYSTEM GROWTH - 2024',
    subtitle:
      'ECOSYSTEM GROWTH - Nexis platform launch and much more to be shared',
    disabled: false,
  },
]

const activeRoadmapItemIndex = ref(2)

const activeRoadmapItem = computed(() => {
  return roadmap.find((_item, index) => {
    return index === activeRoadmapItemIndex.value
  })
})
</script>

<template>
  <div>
    <app-bar>
      <v-spacer />
      <connect-button />
    </app-bar>

    <v-container class="mt-10">
      <v-row>
        <v-col cols="12" md="3">
          <nzt-overview />
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title class="text-uppercase">
              <v-icon icon="mdi-square-medium" />
              Roadmap
            </v-card-title>

            <v-list class="py-0">
              <v-list-item
                v-for="(item, i) in roadmap"
                :key="i"
                :title="item.title"
                :subtitle="item.subtitle"
                :disabled="item.disabled"
                :active="i === activeRoadmapItemIndex"
                @click="activeRoadmapItemIndex = i"
              >
                <template #prepend>
                  <span
                    :class="{
                      'mr-3': xs,
                      'text-h1 font-weight-bold mx-12 my-12': !xs,
                    }"
                    v-text="i + 1"
                  />
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card class="mb-6" height="140">
            <v-card-title class="text-uppercase">
              <v-icon icon="mdi-square-medium" />
              Info
            </v-card-title>

            <v-card-text class="mt-4">
              {{ activeRoadmapItem?.subtitle }}
            </v-card-text>
          </v-card>

          <v-card>
            <v-card-title class="text-uppercase">
              <v-icon icon="mdi-square-medium" />
              Your Nexis pass nft
            </v-card-title>

            <v-img src="/nft_pass.png" height="220" class="my-12" />

            <v-card-text style="height: 260px;" class="d-flex flex-column align-center justify-center">
              Your on-chain NZT account.
              <br>
              On-chain verification of your $NZT
            </v-card-text>

            <v-card-actions>
              <v-btn
                text="Mint free"
                variant="elevated"
                size="large"
                rounded="0"
                block
                color="#0f1723"
              />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
