import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  compareDates,
  formatDate,
  formatReadingTime,
  getCopyright
} from '../date'

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

  describe('getCopyright()', () => {
    beforeEach(() => {
      vi.useFakeTimers()
      vi.setSystemTime(new Date('2026-06-20'))
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('builds a copyright string with the current year and author', () => {
      expect(getCopyright('Mateusz Gorzeliński')).toBe(
        '© 2026 Mateusz Gorzeliński'
      )
    })

    it('reflects the current year', () => {
      vi.setSystemTime(new Date('2030-01-01'))

      expect(getCopyright('Acme')).toBe('© 2030 Acme')
    })
  })

  describe('compareDates()', () => {
    const older = new Date('2024-01-01')
    const newer = new Date('2024-06-01')

    it('orders newer before older by default (descending)', () => {
      expect(compareDates(older, newer)).toBeGreaterThan(0)
      expect(compareDates(newer, older)).toBeLessThan(0)
    })

    it('orders older before newer when ascending', () => {
      expect(compareDates(older, newer, 'asc')).toBeLessThan(0)
      expect(compareDates(newer, older, 'asc')).toBeGreaterThan(0)
    })

    it('returns 0 for equal dates', () => {
      expect(compareDates(older, new Date('2024-01-01'))).toBe(0)
    })

    it('sorts an array newest-first with the default direction', () => {
      const dates = [older, newer, new Date('2024-03-01')]
      const sorted = [...dates].sort((a, b) => compareDates(a, b))

      expect(sorted).toEqual([newer, new Date('2024-03-01'), older])
    })
  })
})
