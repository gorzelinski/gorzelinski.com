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
