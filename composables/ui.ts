import colors from 'vuetify/lib/util/colors.mjs'
import { useStorage } from '@vueuse/core'
import { useTheme } from 'vuetify'

export const useUi = () => {
  const theme = useTheme()

  const themeName = useStorage('theme:name', 'dark')

  const themeSetFromStorage = () => {
    theme.global.name.value = themeName.value
  }

  const themeToggle = () => {
    theme.global.name.value = theme.global.current.value.dark
      ? 'light'
      : 'darl'

    themeName.value = theme.global.name.value
  }

  const isDark = computed(() => {
    return themeName.value === 'dark'
  })

  const themeObj = computed(() => {
    return {
      isDark: isDark.value,
      icon: isDark.value ? 'mdi-weather-night' : 'mdi-weather-sunny',
      text: isDark.value ? 'Dark theme is on' : 'Dark theme is off',
    }
  })

  return {
    theme,
    isDark,
    themeToggle,
    themeSetFromStorage,
    themeObj,
    colors,
  }
}
