import { describe, it, expect } from 'vitest'
import { mapStatusToCalloutVariant } from '../newsletter.helpers'

describe('Newsletter helpers', () => {
  describe('mapStatusToCalloutVariant()', () => {
    it('returns the success variant', () => {
      expect(mapStatusToCalloutVariant('success')).toBe('success')
    })

    it('returns the warning variant', () => {
      expect(mapStatusToCalloutVariant('quarantined')).toBe('warning')
    })

    it('returns the danger variant', () => {
      expect(mapStatusToCalloutVariant('error')).toBe('danger')
    })

    it('returns the info variant', () => {
      expect(mapStatusToCalloutVariant('idle')).toBe('info')
    })
  })
})
