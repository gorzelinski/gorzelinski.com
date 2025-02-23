import { describe, expect, it } from 'vitest'
import { formatDate, formatReadingTime } from '../date'

describe('date', () => {
  describe('formatDate()', () => {
    it('formats the date correctly (English)', () => {
      const date = new Date('2024-01-01')
      const formatted = formatDate(date, 'en')

      expect(formatted).toBe('January 1, 2024')
    })

    it('formats the date correctly (Polish)', () => {
      const date = new Date('2024-01-01')
      const formatted = formatDate(date, 'pl')

      expect(formatted).toBe('1 stycznia 2024')
    })
  })

  describe('formatReadingTime()', () => {
    it('rounds up the reading time', () => {
      const formatted = formatReadingTime(1.4)

      expect(formatted).toBe(2)
    })
  })
})
