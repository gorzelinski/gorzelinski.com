import { describe, it, expect } from 'vitest'
import {
  isDefaultLocale,
  localizePath,
  delocalizePath,
  localizeFileName,
  createLocaleWithTerritory,
  getLocaleDisplayName
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
    it('returns only the root path if the locale is the default', () => {
      expect(localizePath('/', 'en')).toBe('/')
    })

    it('returns the whole path if the locale is the default', () => {
      expect(localizePath('/en/path/to/blog/', 'en')).toBe('/en/path/to/blog/')
    })

    it('returns the whole path if the locale is the default and the default locale is provided', () => {
      expect(localizePath('/en/path/to/blog/', 'en', 'en')).toBe(
        '/en/path/to/blog/'
      )
    })

    it('returns only the path if the locale is the default and the default locale is provided', () => {
      expect(localizePath('/', 'pl', 'pl')).toBe('/')
    })

    it('returns path + locale if the locale is not the default and is in the path', () => {
      expect(localizePath('/pl', 'pl')).toBe('/pl')
    })

    it('returns path + locale if the locale is not the default and is not in the path', () => {
      expect(localizePath('/', 'pl')).toBe('/pl/')
    })

    it('returns path + locale if the locale is not the default and the default locale is provided', () => {
      expect(localizePath('/', 'pl', 'en')).toBe('/pl/')
    })
  })

  describe('delocalizePath()', () => {
    it('removes locale prefix from path', () => {
      expect(delocalizePath('/pl/', 'pl')).toBe('/')
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

  describe('createLocaleWithTerritory()', () => {
    it('returns english locale with territory', () => {
      expect(createLocaleWithTerritory('en')).toBe('en_US')
    })

    it('returns polish locale with territory', () => {
      expect(createLocaleWithTerritory('pl')).toBe('pl_PL')
    })
  })

  describe('getLocaleDisplayName()', () => {
    it('returns a capitalized human-readable locale name (English)', () => {
      expect(getLocaleDisplayName('en')).toBe('English')
    })

    it('returns a capitalized human-readable locale name (Polish)', () => {
      expect(getLocaleDisplayName('pl')).toBe('Polski')
    })
  })
})
