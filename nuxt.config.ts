import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: process.env.DEV_SERVER_HOST,
    port: process.env.DEV_SERVER_PORT,
  },
  app: {
    head: {
      title: 'Nexis Portal',
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no',
        },
      ],
      noscript: [{ children: 'JavaScript is required' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
        },
      ],
    },
  },
  ssr: false,
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@vueuse/nuxt',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ['vuetify/lib/styles/main.css'],
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      walletConnectProjectId: process.env.WALLET_CONNECT_PROJECT_ID,
    },
  },
})
