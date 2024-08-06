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

export function hslToRgb(hsl: string) {
  let [h, s, l] = hsl
    .replace('hsl(', '')
    .replace(')', '')
    .replace(/,/g, '')
    .replace(/%/g, '')
    .split(' ')
    .map((string) => Number(string))

  if (typeof h !== 'number' || typeof s !== 'number' || typeof l !== 'number') {
    throw new TypeError(
      'The parameter is not a correct HSL string: hsl(h, s, l)'
    )
  }

  if (h < 0 || h > 360) {
    throw new RangeError('The hue value must be in the range 0 - 360')
  }

  if (s < 0 || s > 100) {
    throw new RangeError('The saturation value must be in the range 0 - 100%')
  }

  if (l < 0 || l > 100) {
    throw new RangeError('The lightness value must be in the range 0 - 100%')
  }

  s /= 100
  l /= 100

  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))

  let r, g, b

  r = f(0)
  g = f(8)
  b = f(4)

  const rgb = `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`
  return rgb
}
