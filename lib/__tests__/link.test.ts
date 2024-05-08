import { isInternal } from '../link'

describe('link', () => {
  describe('isInternal()', () => {
    it('returns true if link is relative', () => {
      expect(isInternal('https://gorzelinski.com', '/blog')).toBe(true)
    })

    it('returns true if link is a hash', () => {
      expect(isInternal('https://gorzelinski.com', '#contact')).toBe(true)
    })

    it('returns true if link is absolute', () => {
      expect(
        isInternal('https://gorzelinski.com', 'https://gorzelinski.com/blog')
      ).toBe(true)
    })

    it('returns false if link is external', () => {
      expect(isInternal('https://gorzelinski.com', 'https://google.com')).toBe(
        false
      )
    })
  })
})
