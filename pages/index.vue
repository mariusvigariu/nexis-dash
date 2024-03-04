<script setup lang="ts">
import { useDisplay } from 'vuetify'

const roadmap = [
  {
    title: 'PRIVATE SALE - CLOSED',
    subtitle: '$NZT token private sale for strategic parties across crypto',
    disabled: true,
    active: false,
  },
  {
    title: 'COMMUNITY SALE - CLOSED',
    subtitle:
      'COMMUNITY PRESALE - Nexist community presale. The fastest selling Presale of 2024',
    disabled: true,
    active: false,
  },
  {
    title: 'TOKEN LAUNCH - UPCOMING',
    subtitle: 'TOKEN LAUNCH - $NZT launch, more details TBC.',
    disabled: false,
    active: true,
  },
  {
    title: 'NZT ECOSYSTEM GROWTH - 2024',
    subtitle:
      'ECOSYSTEM GROWTH - Nexis platform launch and much more to be shared',
    disabled: false,
    active: false,
  },
]

const activeRoadmapItem = roadmap.find(i => i.active)

const { xs } = useDisplay()
</script>

<template>
  <div>
    <app-bar>
      NEXIS
      <v-spacer />
    </app-bar>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-card rounded="0">
            <v-card-title class="text-uppercase">
              <v-icon icon="mdi-square-medium" />
              Your NZT
            </v-card-title>

            <v-card-text>
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
                        0.00
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
                block
              />
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card rounded="0">
            <v-card-title class="text-uppercase">
              <v-icon icon="mdi-square-medium" />
              Roadmap
            </v-card-title>

            <v-list>
              <v-list-item
                v-for="(item, i) in roadmap"
                :key="i"
                :title="item.title"
                :subtitle="item.subtitle"
                :disabled="item.disabled"
                :active="item.active"
              >
                <template #prepend>
                  <span
                    :class="{
                      'mr-3': xs,
                      'text-h1 font-weight-bold mx-12 my-6': !xs,
                    }"
                    v-text="i + 1"
                  />
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-card rounded="0" class="mb-6">
            <v-card-title class="text-uppercase">
              <v-icon icon="mdi-square-medium" />
              Info
            </v-card-title>

            <v-card-text>
              {{ activeRoadmapItem.subtitle }}
            </v-card-text>
          </v-card>

          <v-card rounded="0">
            <v-card-title class="text-uppercase">
              <v-icon icon="mdi-square-medium" />
              Your portal pass nft
            </v-card-title>

            <v-card-text>
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
                color="primary"
              />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
