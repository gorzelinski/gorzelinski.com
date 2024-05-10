export type Theme = 'light' | 'dark'

export const THEME_ATTRIBUTE = 'data-color-mode'
export const THEME_LS_KEY = 'theme'
export const THEME_OS_MEDIA = '(prefers-color-scheme: light)'

export function getThemeAttribute() {
  return document.documentElement.getAttribute(THEME_ATTRIBUTE) as Theme
}

export function setThemeAttribute(theme: Theme) {
  document.documentElement.setAttribute(THEME_ATTRIBUTE, theme)
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
