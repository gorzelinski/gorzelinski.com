import { ENGLISH_FORM_ID, POLISH_FORM_ID } from '../newsletter.constants'
import { getFormURL, mapStateToCalloutVariant } from '../newsletter.helpers'

describe('Newsletter helpers', () => {
  describe('getFormURL()', () => {
    it('returns the URL with the polish ID', () => {
      const url = getFormURL('pl')

      expect(url).toContain('https://app.convertkit.com/forms/')
      expect(url).toContain(POLISH_FORM_ID)
    })

    it('returns the URL with the english ID', () => {
      const url = getFormURL('en')

      expect(url).toContain('https://app.convertkit.com/forms/')
      expect(url).toContain(ENGLISH_FORM_ID)
    })
  })

  describe('mapStateToCalloutVariants()', () => {
    it('returns the success variant', () => {
      expect(mapStateToCalloutVariant('success')).toBe('success')
    })

    it('returns the warning variant', () => {
      expect(mapStateToCalloutVariant('quarantined')).toBe('warning')
    })

    it('returns the danger variant', () => {
      expect(mapStateToCalloutVariant('error')).toBe('danger')
    })

    it('returns the info variant', () => {
      expect(mapStateToCalloutVariant('idle')).toBe('info')
    })
  })
})
