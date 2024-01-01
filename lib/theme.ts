export type Theme = 'light' | 'dark'

export const THEME_ATTRIBUTE = 'data-color-mode'
export const THEME_LS_KEY = 'theme'
export const THEME_OS_MEDIA = '(prefers-color-scheme: light)'

export function getThemeAttribute(): Theme {
  const html = document.documentElement

  if (html) return html.getAttribute(THEME_ATTRIBUTE) as Theme
  else return 'light'
}

export function setThemeAttribute(theme: Theme) {
  const html = document.documentElement

  if (html) html.setAttribute(THEME_ATTRIBUTE, theme)
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
