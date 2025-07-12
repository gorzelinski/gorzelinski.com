import { describe, it, expect } from 'vitest'
import { mapStateToCalloutVariant } from '../newsletter.helpers'

describe('Newsletter helpers', () => {
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

    it('returns the default variant', () => {
      expect(mapStateToCalloutVariant('loading')).toBe('info')
    })
  })
})
