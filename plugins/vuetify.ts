import '@mdi/font/css/materialdesignicons.css'
import { md3 } from 'vuetify/blueprints'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    blueprint: md3,
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
  nuxtApp.provide('vuetify', vuetify)
})
