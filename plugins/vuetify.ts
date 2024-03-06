import '@mdi/font/css/materialdesignicons.css'
import { md3 } from 'vuetify/blueprints'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const dark: ThemeDefinition = {
    dark: true,
    colors: {
      background: '#060606',
      surface: '#060606',
      'surface-variant': '#BDBDBD',
      'on-surface-variant': '#424242',
      primary: '#0057FFFB',
      'primary-darken-1': '#0057FFFB',
      secondary: '#0057FFFB',
      'secondary-darken-1': '#0057FFFB',
      error: '#CF6679',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
      'on-background': '#fff',
      'on-surface': '#fff',
      'on-primary': '#fff',
      'on-primary-darken-1': '#fff',
      'on-secondary': '#000',
      'on-secondary-darken-1': '#000',
      'on-error': '#fff',
      'on-info': '#fff',
      'on-success': '#fff',
      'on-warning': '#fff',
    },
    variables: {
      'border-color': '#FFFFFF',
      'border-opacity': 0.12,
      'high-emphasis-opacity': 1,
      'medium-emphasis-opacity': 0.7,
      'disabled-opacity': 0.5,
      'idle-opacity': 0.1,
      'hover-opacity': 0.04,
      'focus-opacity': 0.12,
      'selected-opacity': 0.08,
      'activated-opacity': 0.12,
      'pressed-opacity': 0.16,
      'dragged-opacity': 0.08,
      'theme-kbd': '#212529',
      'theme-on-kbd': '#FFFFFF',
      'theme-code': '#343434',
      'theme-on-code': '#CCCCCC',
    },
  }

  const vuetify = createVuetify({
    ssr: false,
    blueprint: md3,
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark,
      },
    },
    defaults: {
      VCard: {
        rounded: 0,
        border: true,
      },
      VCardTitle: {
        style: {
          background: '#FFFFFF08',
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
  nuxtApp.provide('vuetify', vuetify)
})
