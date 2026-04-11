import { describe, it, expect, vi } from 'vitest'
import {
  mapStatusToCalloutVariant,
  setValidationMessage
} from '../newsletter.helpers'

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

  describe('setValidationMessage()', () => {
    const validation = {
      valueMissing: 'To which email should I send the newsletter?',
      typeMismatch: 'A valid email is something like name@domain.com'
    }

    it('clears custom validity before checking', () => {
      const input = {
        validity: { valueMissing: true, typeMismatch: false },
        setCustomValidity: vi.fn()
      } as unknown as HTMLInputElement

      setValidationMessage(input, validation)

      expect(input.setCustomValidity).toHaveBeenNthCalledWith(1, '')
    })

    it('sets the valueMissing message when value is missing', () => {
      const input = {
        validity: { valueMissing: true, typeMismatch: false },
        setCustomValidity: vi.fn()
      } as unknown as HTMLInputElement

      setValidationMessage(input, validation)

      expect(input.setCustomValidity).toHaveBeenLastCalledWith(
        validation.valueMissing
      )
    })

    it('sets the typeMismatch message when type mismatches', () => {
      const input = {
        validity: { valueMissing: false, typeMismatch: true },
        setCustomValidity: vi.fn()
      } as unknown as HTMLInputElement

      setValidationMessage(input, validation)

      expect(input.setCustomValidity).toHaveBeenLastCalledWith(
        validation.typeMismatch
      )
    })

    it('only clears when the input is valid', () => {
      const input = {
        validity: { valueMissing: false, typeMismatch: false },
        setCustomValidity: vi.fn()
      } as unknown as HTMLInputElement

      setValidationMessage(input, validation)

      expect(input.setCustomValidity).toHaveBeenCalledTimes(1)
      expect(input.setCustomValidity).toHaveBeenCalledWith('')
    })
  })
})
