import type { Post, Project } from '@/types'
import { describe, expect, it } from 'vitest'
import {
  countSharedFrontmatter,
  getSearchableTextFromFrontmatter
} from '../frontmatter'

describe('frontmatter', () => {
  describe('countSharedFrontmatter()', () => {
    it('returns 0 when nothing is shared', () => {
      const count = countSharedFrontmatter(
        { categories: ['tech'], tags: ['react'] } as Post,
        { categories: ['life'], tags: ['travel'] } as Post
      )

      expect(count).toBe(0)
    })

    it('sums shared items across categories, tags and services', () => {
      const count = countSharedFrontmatter(
        { categories: ['tech', 'web'], tags: ['react', 'next'] } as Post,
        { categories: ['tech', 'web'], tags: ['react'] } as Post
      )

      expect(count).toBe(3)
    })

    it('counts shared services for projects', () => {
      const count = countSharedFrontmatter(
        { services: ['design', 'dev'] } as Project,
        { services: ['design'] } as Project
      )

      expect(count).toBe(1)
    })

    it('ignores fields missing on either side', () => {
      const count = countSharedFrontmatter(
        { categories: ['tech'] } as Post,
        { tags: ['tech'] } as Post
      )

      expect(count).toBe(0)
    })
  })

  describe('getSearchableTextFromFrontmatter()', () => {
    it('joins searchable frontmatter fields into lowercase text', () => {
      const text = getSearchableTextFromFrontmatter({
        title: 'Hello World',
        description: 'A Description',
        categories: ['Tech'],
        tags: ['JavaScript'],
        services: ['Design']
      })

      expect(text).toBe('hello world a description tech javascript design')
    })

    it('omits optional fields when they are not provided', () => {
      const text = getSearchableTextFromFrontmatter({
        title: 'Title',
        description: 'Description'
      })

      expect(text).toBe('title description')
    })
  })
})
