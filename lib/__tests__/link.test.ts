import { generateAlternateLinks, getAbsoluteURL, isInternalURL } from '../link'

describe('link', () => {
  describe('isInternalURL()', () => {
    it('returns true if link is relative', () => {
      expect(isInternalURL('/blog')).toBe(true)
    })

    it('returns true if link is a hash', () => {
      expect(isInternalURL('#contact')).toBe(true)
    })

    it('returns true if link is absolute', () => {
      expect(
        isInternalURL('https://gorzelinski.com', 'https://gorzelinski.com/blog')
      ).toBe(true)
    })

    it('returns false if link is external', () => {
      expect(
        isInternalURL('https://gorzelinski.com', 'https://google.com')
      ).toBe(false)
    })
  })

  describe('getAbsoluteURL()', () => {
    const absoluteURL = 'http://localhost:3000/'

    it('returns default absolute URL', () => {
      expect(getAbsoluteURL()).toBe(absoluteURL)
    })

    it('returns localized absolute URL', () => {
      expect(getAbsoluteURL(undefined, 'pl')).toBe(`${absoluteURL}pl/`)
    })

    it('returns absolute URL with path', () => {
      expect(getAbsoluteURL('/blog/')).toBe(`${absoluteURL}blog/`)
    })

    it('returns localized absolute URL with path', () => {
      expect(getAbsoluteURL('/blog/', 'pl')).toBe(`${absoluteURL}pl/blog/`)
    })
  })

  describe('generateAlternateLinks()', () => {
    it('returns alternate links for each locale', () => {
      const link = '/blog/'
      const alternateLinks = {
        en: '/blog/',
        pl: '/pl/blog/'
      }

      expect(generateAlternateLinks(link)).toEqual(alternateLinks)
    })
  })
})
