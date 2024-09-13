import {
  getThemeAttribute,
  getThemeCookie,
  hslToRgb,
  setThemeAttribute,
  setThemeCookie
} from '../theme'

describe('theme', () => {
  describe('getThemeAttribute()', () => {
    it('returns the theme attribute from the html element', () => {
      document.documentElement.setAttribute('data-color-mode', 'dark')

      expect(getThemeAttribute()).toBe('dark')
    })
  })

  describe('setThemeAttribute()', () => {
    it('sets the theme attribute on the html element', () => {
      setThemeAttribute('light')

      expect(document.documentElement.getAttribute('data-color-mode')).toBe(
        'light'
      )
    })
  })

  describe('getThemeCookie()', () => {
    it('returns the theme cookie', () => {
      document.cookie = 'theme=dark'

      expect(getThemeCookie()).toBe('dark')
    })
  })

  describe('setThemeCookie()', () => {
    it('sets the theme cookie', () => {
      setThemeCookie('light')

      expect(document.cookie).toBe('theme=light')
    })
  })

  describe('hslToRgb()', () => {
    it('converts an HSL string to an RGB string', () => {
      expect(hslToRgb('hsl(208, 7%, 100%)')).toBe('rgb(255, 255, 255)')
      expect(hslToRgb('hsl(208, 7%, 98%)')).toBe('rgb(250, 250, 250)')
      expect(hslToRgb('hsl(208, 7%, 42%)')).toBe('rgb(100, 108, 115)')
      expect(hslToRgb('hsl(210, 100%, 54%)')).toBe('rgb(20, 138, 255)')
      expect(hslToRgb('hsl(208, 7%, 0%)')).toBe('rgb(0, 0, 0)')
    })

    it('throws an error if the string is incorrect', () => {
      expect(() => hslToRgb('something')).toThrow(TypeError)
    })

    it('throws an error if the hue value is incorrect', () => {
      expect(() => hslToRgb('hsl(361, 100%, 100%)')).toThrow(RangeError)
    })

    it('throws an error if the saturation value is incorrect', () => {
      expect(() => hslToRgb('hsl(100, -100%, 100%)')).toThrow(RangeError)
    })

    it('throws an error if the lightness value is incorrect', () => {
      expect(() => hslToRgb('hsl(100, 100%, 101%)')).toThrow(RangeError)
    })
  })
})
