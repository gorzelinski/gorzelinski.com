import { describe, expect, it } from 'vitest'

import { countSharedItems } from '../array'

describe('array', () => {
  describe('countSharedItems()', () => {
    it('returns 0 when there is no overlap', () => {
      expect(countSharedItems(['a', 'b'], ['c', 'd'])).toBe(0)
    })

    it('returns 0 when either array is empty', () => {
      expect(countSharedItems([], ['a'])).toBe(0)
      expect(countSharedItems(['a'], [])).toBe(0)
    })

    it('counts shared items', () => {
      expect(countSharedItems(['a', 'b', 'c'], ['b', 'c', 'd'])).toBe(2)
    })

    it('counts each match only once when source has duplicates', () => {
      expect(countSharedItems(['a', 'a', 'b'], ['a'])).toBe(1)
    })
  })
})
