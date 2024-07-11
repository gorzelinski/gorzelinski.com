import {
  isDefaultLocale,
  localizePath,
  delocalizePath,
  localizeFileName
} from '../i18n'

describe('i18n', () => {
  describe('isDefaultLocale()', () => {
    it('returns true if locale is default', () => {
      expect(isDefaultLocale('en')).toBe(true)
    })

    it('returns false if locale is not default', () => {
      expect(isDefaultLocale('pl')).toBe(false)
    })

    it('should return false if locale is not default and default locale is provided', () => {
      expect(isDefaultLocale('pl', 'en')).toBe(false)
    })
  })

  describe('localizePath()', () => {
    it('returns only path if locale is default', () => {
      expect(localizePath('en', '/')).toBe('/')
    })

    it('returns only path if locale is default and default locale is provided', () => {
      expect(localizePath('pl', '/', 'pl')).toBe('/')
    })

    it('returns locale + path if locale is not default and is in the path', () => {
      expect(localizePath('pl', '/pl')).toBe('/pl')
    })

    it('returns locale + path if locale is not default and is not in the path', () => {
      expect(localizePath('pl', '/')).toBe('/pl/')
    })

    it('returns locale + path if locale is not default and default locale is provided', () => {
      expect(localizePath('pl', '/', 'en')).toBe('/pl/')
    })
  })

  describe('delocalizePath()', () => {
    it('removes locale prefix from path', () => {
      expect(delocalizePath('pl', '/pl/')).toBe('/')
    })
  })

  describe('localizeFileName()', () => {
    it('returns "index" file name without locale prefix if locale is default', () => {
      expect(localizeFileName('index', 'mdx', 'en')).toBe('index.mdx')
    })

    it('returns "index" file name with locale prefix if locale is not default', () => {
      expect(localizeFileName('index', 'mdx', 'pl')).toBe('index.pl.mdx')
    })

    it('returns file name with locale prefix if locale is not default and file name is provided', () => {
      expect(localizeFileName('about', 'mdx', 'pl')).toBe('about.pl.mdx')
    })

    it('returns file name with locale prefix if locale is not default and file name and extension are provided', () => {
      expect(localizeFileName('about', 'md', 'pl')).toBe('about.pl.md')
    })
  })
})
