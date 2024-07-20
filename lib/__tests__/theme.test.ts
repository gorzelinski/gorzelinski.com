import {
  getThemeAttribute,
  getThemeCookie,
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
})
