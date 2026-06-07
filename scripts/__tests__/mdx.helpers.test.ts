import { describe, expect, it } from 'vitest'
import { getSearchableText } from '../mdx.helpers'

describe('mdx.helpers', () => {
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
