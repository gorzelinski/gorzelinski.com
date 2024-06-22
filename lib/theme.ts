import { Theme } from '@/types'
import { COOKIES, THEME } from '@/constants'

export function getThemeAttribute() {
  return document.documentElement.getAttribute(THEME.attribute) as Theme
}

export function setThemeAttribute(theme: Theme) {
  document.documentElement.setAttribute(THEME.attribute, theme)
}

export function setThemeCookie(theme: Theme) {
  document.cookie = `${COOKIES.theme}=${theme}; Path=/;`
}

export function getThemeCookie() {
  return document.cookie.match(/theme=(light|dark)/)?.[1] as Theme
}

export function setInitialTheme() {
  try {
    const isSavedTheme =
      document.cookie.includes('light') || document.cookie.includes('dark')

    if (isSavedTheme) return

    function getOsTheme() {
      const isOsLight = window.matchMedia(
        '(prefers-color-scheme: light)'
      ).matches

      if (isOsLight) return 'light'
      else return 'dark'
    }

    const osTheme = getOsTheme()

    document.documentElement.setAttribute('data-color-mode', osTheme)
    document.cookie = 'theme=' + osTheme + '; Path=/;'
  } catch (_) {}
}
