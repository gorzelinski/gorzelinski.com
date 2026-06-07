import type { Post, Project } from '@/types'
import { describe, expect, it } from 'vitest'
import {
  countSharedFrontmatter,
  enrichFrontmatter,
  isFrontmatterMatchingQuery,
  getSearchableTextFromFrontmatter,
  scoreSharedFrontmatter
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

  describe('scoreSharedFrontmatter()', () => {
    it('returns 0 when nothing is shared', () => {
      const score = scoreSharedFrontmatter(
        { categories: ['tech'], tags: ['react'] } as Post,
        { categories: ['life'], tags: ['travel'] } as Post
      )

      expect(score).toBe(0)
    })

    it('weights tags higher than categories', () => {
      const tagScore = scoreSharedFrontmatter(
        { tags: ['react'] } as Post,
        { tags: ['react'] } as Post
      )
      const categoryScore = scoreSharedFrontmatter(
        { categories: ['tech'] } as Post,
        { categories: ['tech'] } as Post
      )

      expect(tagScore).toBe(3)
      expect(categoryScore).toBe(1)
      expect(tagScore).toBeGreaterThan(categoryScore)
    })

    it('sums weighted scores across multiple fields', () => {
      const score = scoreSharedFrontmatter(
        { categories: ['tech'], tags: ['react', 'next'] } as Post,
        { categories: ['tech'], tags: ['react'] } as Post
      )

      expect(score).toBe(4)
    })

    it('scores shared services and deliverables for projects', () => {
      const score = scoreSharedFrontmatter(
        {
          services: ['design', 'dev'],
          deliverables: ['website', 'logo']
        } as Project,
        { services: ['design'], deliverables: ['logo'] } as Project
      )

      expect(score).toBe(4)
    })
  })

  describe('enrichFrontmatter()', () => {
    it('adds derived fields to frontmatter', () => {
      const frontmatter = {
        title: 'Test Post',
        description: 'Test Description',
        date: '2023-01-01',
        updated: '2023-01-02',
        image: { alt: 'Test', src: '/images/test.jpg' },
        categories: ['tech'],
        tags: ['react'],
        type: 'post' as const,
        slug: '',
        readingTime: { text: '', minutes: 0, time: 0, words: 0 }
      } as unknown as Post

      enrichFrontmatter(frontmatter, {
        page: '/blog/',
        slug: 'test-post',
        lang: 'en',
        file: '# Hello\n\nSome content here.'
      })

      expect(frontmatter.slug).toBe('/blog/test-post/')
      expect(frontmatter.date).toBeInstanceOf(Date)
      expect(frontmatter.updated).toBeInstanceOf(Date)
      expect(frontmatter.readingTime).toBeDefined()
      expect(frontmatter.readingTime.minutes).toBeGreaterThan(0)
    })

    it('localizes the slug for a non-default locale', () => {
      const frontmatter = {
        title: 'Test Post',
        description: 'Test Description',
        date: '2023-01-01',
        updated: '2023-01-02',
        image: { alt: 'Test', src: '/images/test.jpg' },
        categories: ['tech'],
        tags: ['react'],
        type: 'post' as const,
        slug: '',
        readingTime: { text: '', minutes: 0, time: 0, words: 0 }
      } as unknown as Post

      enrichFrontmatter(frontmatter, {
        page: '/blog/',
        slug: 'test-post',
        lang: 'pl',
        file: '# Hello'
      })

      expect(frontmatter.slug).toBe('/pl/blog/test-post/')
    })
  })

  describe('isFrontmatterMatchingQuery()', () => {
    it('returns true when all query terms are found', () => {
      const matches = isFrontmatterMatchingQuery(
        {
          title: 'React Tutorial',
          description: 'Learn React basics'
        },
        'react tutorial'
      )

      expect(matches).toBe(true)
    })

    it('returns false when a term is missing', () => {
      const matches = isFrontmatterMatchingQuery(
        {
          title: 'React Tutorial',
          description: 'Learn React basics'
        },
        'react vue'
      )

      expect(matches).toBe(false)
    })

    it('returns true when terms match categories, tags or services', () => {
      const matches = isFrontmatterMatchingQuery(
        {
          title: 'Post',
          description: 'Desc',
          categories: ['tech'],
          tags: ['nextjs'],
          services: ['design']
        },
        'tech nextjs design'
      )

      expect(matches).toBe(true)
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
