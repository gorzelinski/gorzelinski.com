import { THEME } from '@/constants'

export type Theme = 'light' | 'dark'

export function getThemeAttribute() {
  return document.documentElement.getAttribute(THEME.attribute) as Theme
}

export function setThemeAttribute(theme: Theme) {
  document.documentElement.setAttribute(THEME.attribute, theme)
}

export const setInitialTheme = `
  (function() {
    try {
      function getInitialTheme() {
        const savedTheme = window.localStorage.getItem('theme')
        const isOsLight = window.matchMedia('(prefers-color-scheme: light)').matches
  
        if (savedTheme) return JSON.parse(savedTheme)
        else if (isOsLight) return 'light'
        else return 'dark'
      }
  
      const initialTheme = getInitialTheme()
      document.documentElement.setAttribute('data-color-mode', initialTheme)
    } catch (_) {}
  })()
`
