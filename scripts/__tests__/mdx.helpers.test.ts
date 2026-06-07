import { describe, expect, it } from 'vitest'
import { countSharedMetadata, getSearchableText } from '../mdx.helpers'

describe('mdx.helpers', () => {
  describe('countSharedMetadata()', () => {
    it('returns 0 when nothing is shared', () => {
      const count = countSharedMetadata(
        { categories: ['tech'], tags: ['react'] },
        { categories: ['life'], tags: ['travel'] }
      )

      expect(count).toBe(0)
    })

    it('sums shared items across categories, tags and services', () => {
      const count = countSharedMetadata(
        { categories: ['tech', 'web'], tags: ['react', 'next'] },
        { categories: ['tech', 'web'], tags: ['react'] }
      )

      expect(count).toBe(3)
    })

    it('counts shared services for projects', () => {
      const count = countSharedMetadata(
        { services: ['design', 'dev'] },
        { services: ['design'] }
      )

      expect(count).toBe(1)
    })

    it('ignores fields missing on either side', () => {
      const count = countSharedMetadata(
        { categories: ['tech'] },
        { tags: ['tech'] }
      )

      expect(count).toBe(0)
    })
  })

  describe('getSearchableText()', () => {
    it('joins searchable frontmatter fields into lowercase text', () => {
      const text = getSearchableText({
        title: 'Hello World',
        description: 'A Description',
        categories: ['Tech'],
        tags: ['JavaScript'],
        services: ['Design']
      })

      expect(text).toBe(
        'hello world a description tech javascript design'
      )
    })

    it('omits optional fields when they are not provided', () => {
      const text = getSearchableText({
        title: 'Title',
        description: 'Description'
      })

      expect(text).toBe('title description')
    })
  })
})
