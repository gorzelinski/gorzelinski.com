import { describe, it, expect } from 'vitest'
import { ENGLISH_FORM_ID, POLISH_FORM_ID } from '@/constants'
import { getFormURL } from '../newsletter'

describe('newsletter', () => {
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
})
