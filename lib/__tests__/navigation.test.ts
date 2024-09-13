import { selectActiveClass } from '../navigation'

describe('navigation', () => {
  describe('selectActiveClass()', () => {
    it('returns "active" when pathname matches href', () => {
      expect(selectActiveClass('/blog/', '/blog/')).toBe('active')
    })

    it('returns "active-subtle" when pathname includes href and partiallyActive is true', () => {
      expect(selectActiveClass('/blog/hello-world/', '/blog/', true)).toBe(
        'active-subtle'
      )
    })

    it('returns empty string when pathname includes href but partiallyActive is false', () => {
      expect(selectActiveClass('/blog/hello-world/', '/blog/')).toBe('')
    })

    it('returns empty string when pathname does not match href', () => {
      expect(selectActiveClass('/blog/', '/about/')).toBe('')
    })

    it('returns empty string when pathname does not match href and partiallyActive is true', () => {
      expect(selectActiveClass('/blog/', '/about/', true)).toBe('')
    })
  })
})
