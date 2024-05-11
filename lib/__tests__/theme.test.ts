import { getThemeAttribute, setThemeAttribute } from '../theme'

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
})
