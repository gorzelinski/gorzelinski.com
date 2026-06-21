import fs from 'fs/promises'
import { compileMDX } from 'next-mdx-remote/rsc'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import {
  createMDXPagination,
  getMDX,
  getMDXes,
  getMDXSlugs,
  getRelatedMDXes,
  searchMDXes
} from '../mdx'

vi.mock('fs/promises', () => ({
  default: {
    readdir: vi.fn(),
    readFile: vi.fn()
  }
}))

vi.mock('next-mdx-remote/rsc', () => ({
  compileMDX: vi.fn()
}))

vi.mock('reading-time', () => ({
  default: vi.fn(() => ({
    text: '2 min read',
    minutes: 2,
    time: 120000,
    words: 400
  }))
}))

vi.mock('@/lib', async () => {
  const actual = await vi.importActual<typeof import('@/lib')>('@/lib')

  return {
    ...actual,
    localizeFileName: vi.fn(
      (fileName: string, extension: string, locale: string) =>
        `${fileName}${locale === 'en' ? '' : `.${locale}`}.${extension}`
    ),
    localizePath: vi.fn((path: string, locale: string) =>
      locale === 'en' ? path : `/${locale}${path}`
    )
  }
})

vi.mock('@/mdx-components', () => ({
  getMDXComponents: vi.fn(() => ({}))
}))

vi.mock('next/cache', () => ({
  unstable_cache: (fn: any) => fn
}))

type MockEntry = {
  slug: string
  frontmatter: Record<string, any>
}

const postFrontmatter = (overrides: Record<string, any> = {}) => ({
  title: 'Post',
  description: 'Description',
  date: new Date('2023-01-01'),
  updated: new Date('2023-01-01'),
  image: { alt: 'Post', src: '/images/post.jpg' },
  categories: ['tech'],
  tags: ['javascript'],
  type: 'post' as const,
  ...overrides
})

const projectFrontmatter = (overrides: Record<string, any> = {}) => ({
  title: 'Project',
  description: 'Description',
  date: new Date('2023-01-01'),
  updated: new Date('2023-01-01'),
  image: { alt: 'Project', src: '/images/project.jpg' },
  client: 'Test Client',
  services: ['design'],
  deliverables: ['website'],
  links: [{ text: 'View Project', href: 'https://example.com' }],
  type: 'project' as const,
  ...overrides
})

/**
 * Wires the fs + compileMDX mocks from a small list of entries. Each entry's
 * file content is just its slug, which compileMDX maps back to the matching
 * frontmatter — so tests only declare the frontmatter that matters to them.
 */
function mockMDXes(entries: MockEntry[]) {
  vi.mocked(fs.readdir).mockResolvedValue(
    entries.map((entry) => entry.slug) as any
  )

  vi.mocked(fs.readFile).mockImplementation((file: any) => {
    const filePath = file.toString()
    const entry = entries.find((item) => filePath.includes(`/${item.slug}/`))

    return Promise.resolve(entry?.slug ?? '')
  })
  ;(vi.mocked(compileMDX) as any).mockImplementation((options: any) => {
    const slug = options.source.toString()
    const entry = entries.find((item) => item.slug === slug)

    return Promise.resolve({
      frontmatter: { ...entry?.frontmatter },
      content: {} as any
    })
  })
}

describe('mdx', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(process, 'cwd').mockReturnValue('/test/project')
  })

  describe('getMDX()', () => {
    it('reads and compiles MDX file for blog post', async () => {
      mockMDXes([
        {
          slug: 'test-post',
          frontmatter: postFrontmatter({
            title: 'Test Post',
            description: 'Test Description'
          })
        }
      ])

      const result = await getMDX<'post'>('/blog/', 'test-post', 'en')

      expect(fs.readFile).toHaveBeenCalledWith(
        expect.stringContaining('content/blog/test-post/index.mdx'),
        'utf-8'
      )
      expect(compileMDX).toHaveBeenCalledWith(
        expect.objectContaining({
          options: expect.objectContaining({
            parseFrontmatter: true,
            mdxOptions: expect.objectContaining({
              format: 'mdx',
              remarkPlugins: expect.any(Array),
              rehypePlugins: expect.any(Array)
            })
          })
        })
      )
      expect(result.frontmatter.title).toBe('Test Post')
      expect(result.frontmatter.type).toBe('post')
      expect(result.content).toBeDefined()
    })

    it('reads and compiles MDX file for portfolio project', async () => {
      mockMDXes([
        {
          slug: 'test-project',
          frontmatter: projectFrontmatter({
            title: 'Test Project',
            description: 'Test Project Description',
            client: 'Test Client',
            services: ['design', 'development']
          })
        }
      ])

      const result = await getMDX<'project'>(
        '/portfolio/',
        'test-project',
        'en'
      )

      expect(fs.readFile).toHaveBeenCalledWith(
        expect.stringContaining('content/portfolio/test-project/index.mdx'),
        'utf-8'
      )
      expect(result.frontmatter.title).toBe('Test Project')
      expect(result.frontmatter.type).toBe('project')
      expect((result.frontmatter as any).client).toBe('Test Client')
    })

    it('handles localized file names for non-English locale', async () => {
      mockMDXes([
        {
          slug: 'test-post',
          frontmatter: postFrontmatter({ title: 'Test Post PL' })
        }
      ])

      const result = await getMDX<'post'>('/blog/', 'test-post', 'pl')

      expect(fs.readFile).toHaveBeenCalledWith(
        expect.stringContaining('content/blog/test-post/index.pl.mdx'),
        'utf-8'
      )
      expect(result.frontmatter.title).toBe('Test Post PL')
      expect(result.frontmatter.slug).toBe('/pl/blog/test-post/')
    })
  })

  describe('getMDXSlugs()', () => {
    it('reads directory and returns slugs for blog page', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const result = await getMDXSlugs('/blog/')

      expect(fs.readdir).toHaveBeenCalledWith(
        expect.stringContaining('content/blog')
      )
      expect(result).toEqual(mockSlugs)
    })

    it('reads directory and returns slugs for portfolio page', async () => {
      const mockSlugs = ['project-1', 'project-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const result = await getMDXSlugs('/portfolio/')

      expect(fs.readdir).toHaveBeenCalledWith(
        expect.stringContaining('content/portfolio')
      )
      expect(result).toEqual(mockSlugs)
    })

    it('handles empty directory', async () => {
      vi.mocked(fs.readdir).mockResolvedValue([] as any)

      const result = await getMDXSlugs('/blog/')

      expect(result).toEqual([])
    })
  })

  describe('getMDXes()', () => {
    it('retrieves and sorts MDXes in descending order by default', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1',
            date: new Date('2023-01-01')
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2',
            date: new Date('2023-01-03')
          })
        },
        {
          slug: 'post-3',
          frontmatter: postFrontmatter({
            title: 'Post 3',
            date: new Date('2023-01-02')
          })
        }
      ])

      const result = await getMDXes<'post'>('/blog/', 'en', 'all', 'desc')

      expect(result.map((mdx) => mdx.frontmatter.title)).toEqual([
        'Post 2',
        'Post 3',
        'Post 1'
      ])
    })

    it('retrieves and sorts MDXes in ascending order', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1',
            date: new Date('2023-01-01')
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2',
            date: new Date('2023-01-03')
          })
        },
        {
          slug: 'post-3',
          frontmatter: postFrontmatter({
            title: 'Post 3',
            date: new Date('2023-01-02')
          })
        }
      ])

      const result = await getMDXes<'post'>('/blog/', 'en', 'all', 'asc')

      expect(result.map((mdx) => mdx.frontmatter.title)).toEqual([
        'Post 1',
        'Post 3',
        'Post 2'
      ])
    })

    it('retrieves MDXes without sorting when sort is none', async () => {
      mockMDXes([
        { slug: 'post-1', frontmatter: postFrontmatter({ title: 'Post 1' }) },
        { slug: 'post-2', frontmatter: postFrontmatter({ title: 'Post 2' }) }
      ])

      const result = await getMDXes<'post'>('/blog/', 'en', 'all', 'none')

      expect(result.map((mdx) => mdx.frontmatter.title)).toEqual([
        'Post 1',
        'Post 2'
      ])
    })

    it('limits the number of returned MDXes', async () => {
      mockMDXes([
        { slug: 'post-1', frontmatter: postFrontmatter() },
        { slug: 'post-2', frontmatter: postFrontmatter() },
        { slug: 'post-3', frontmatter: postFrontmatter() },
        { slug: 'post-4', frontmatter: postFrontmatter() }
      ])

      const result = await getMDXes<'post'>('/blog/', 'en', 2, 'desc')

      expect(result).toHaveLength(2)
    })

    it('handles portfolio projects with different frontmatter structure', async () => {
      mockMDXes([
        {
          slug: 'project-1',
          frontmatter: projectFrontmatter({ title: 'Project 1' })
        },
        {
          slug: 'project-2',
          frontmatter: projectFrontmatter({ title: 'Project 2' })
        }
      ])

      const result = await getMDXes<'project'>(
        '/portfolio/',
        'en',
        'all',
        'desc'
      )

      expect(result).toHaveLength(2)
      expect(result[0].frontmatter.type).toBe('project')
      expect((result[0].frontmatter as any).client).toBe('Test Client')
    })

    it('handles invalid sort parameter by using default case (descending order)', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1',
            date: new Date('2023-01-01')
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2',
            date: new Date('2023-01-03')
          })
        },
        {
          slug: 'post-3',
          frontmatter: postFrontmatter({
            title: 'Post 3',
            date: new Date('2023-01-02')
          })
        }
      ])

      const result = await (getMDXes as any)('/blog/', 'en', 'all', 'invalid')

      expect(result.map((mdx: any) => mdx.frontmatter.title)).toEqual([
        'Post 2',
        'Post 3',
        'Post 1'
      ])
    })
  })

  describe('createMDXPagination()', () => {
    it('creates pagination for middle post with prev and next', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1',
            date: new Date('2023-01-01')
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2',
            date: new Date('2023-01-02')
          })
        },
        {
          slug: 'post-3',
          frontmatter: postFrontmatter({
            title: 'Post 3',
            date: new Date('2023-01-03')
          })
        }
      ])

      const result = await createMDXPagination('/blog/', 'post-2', 'en')

      expect(result.prev).toEqual({ title: 'Post 1', slug: '/blog/post-1/' })
      expect(result.next).toEqual({ title: 'Post 3', slug: '/blog/post-3/' })
    })

    it('creates pagination for newest post with prev and no next', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1',
            date: new Date('2023-01-02')
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2',
            date: new Date('2023-01-01')
          })
        }
      ])

      const result = await createMDXPagination('/blog/', 'post-1', 'en')

      expect(result.prev).toEqual({ title: 'Post 2', slug: '/blog/post-2/' })
      expect(result.next).toBeNull()
    })

    it('creates pagination for oldest post with next and no prev', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1',
            date: new Date('2023-01-02')
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2',
            date: new Date('2023-01-01')
          })
        }
      ])

      const result = await createMDXPagination('/blog/', 'post-2', 'en')

      expect(result.prev).toBeNull()
      expect(result.next).toEqual({ title: 'Post 1', slug: '/blog/post-1/' })
    })

    it('handles portfolio projects with different frontmatter structure', async () => {
      mockMDXes([
        {
          slug: 'project-1',
          frontmatter: projectFrontmatter({
            title: 'Project 1',
            date: new Date('2023-01-03')
          })
        },
        {
          slug: 'project-2',
          frontmatter: projectFrontmatter({
            title: 'Project 2',
            date: new Date('2023-01-02')
          })
        },
        {
          slug: 'project-3',
          frontmatter: projectFrontmatter({
            title: 'Project 3',
            date: new Date('2023-01-01')
          })
        }
      ])

      const result = await createMDXPagination('/portfolio/', 'project-2', 'en')

      expect(result.prev).toEqual({
        title: 'Project 3',
        slug: '/portfolio/project-3/'
      })
      expect(result.next).toEqual({
        title: 'Project 1',
        slug: '/portfolio/project-1/'
      })
    })

    it('handles localized paths for non-English locale', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1',
            date: new Date('2023-01-01')
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2',
            date: new Date('2023-01-01')
          })
        }
      ])

      const result = await createMDXPagination('/blog/', 'post-1', 'pl')

      expect(result.prev).toEqual({ title: 'Post 2', slug: '/pl/blog/post-2/' })
      expect(result.next).toBeNull()
    })

    it('returns null for both prev and next when post not found', async () => {
      mockMDXes([
        { slug: 'post-1', frontmatter: postFrontmatter({ title: 'Post 1' }) },
        { slug: 'post-2', frontmatter: postFrontmatter({ title: 'Post 2' }) }
      ])

      const result = await createMDXPagination('/blog/', 'non-existent', 'en')

      expect(result.prev).toBeNull()
      expect(result.next).toBeNull()
    })
  })

  describe('getRelatedMDXes()', () => {
    it('finds related posts that share categories or tags', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1',
            categories: ['tech', 'javascript'],
            tags: ['react', 'nextjs']
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2',
            categories: ['tech'],
            tags: ['vue']
          })
        },
        {
          slug: 'post-3',
          frontmatter: postFrontmatter({
            title: 'Post 3',
            categories: ['design'],
            tags: ['react']
          })
        },
        {
          slug: 'post-4',
          frontmatter: postFrontmatter({
            title: 'Post 4',
            categories: ['design'],
            tags: ['css']
          })
        }
      ])

      const currentPost = postFrontmatter({
        title: 'Post 1',
        categories: ['tech', 'javascript'],
        tags: ['react', 'nextjs'],
        slug: '/blog/post-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }) as any

      const result = await getRelatedMDXes(currentPost, '/blog/', 'en')

      expect(result).toHaveLength(2)
      expect(result[0].frontmatter.title).toBe('Post 3')
      expect(result[1].frontmatter.title).toBe('Post 2')
    })

    it('ranks related posts by score with newer posts breaking ties', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1',
            categories: ['tech'],
            tags: ['react']
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2',
            categories: ['tech'],
            tags: ['react'],
            date: new Date('2023-01-02')
          })
        },
        {
          slug: 'post-3',
          frontmatter: postFrontmatter({
            title: 'Post 3',
            categories: ['tech'],
            tags: ['react'],
            date: new Date('2023-01-03')
          })
        }
      ])

      const currentPost = postFrontmatter({
        title: 'Post 1',
        categories: ['tech'],
        tags: ['react'],
        slug: '/blog/post-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }) as any

      const result = await getRelatedMDXes(currentPost, '/blog/', 'en')

      expect(result.map((mdx) => mdx.frontmatter.title)).toEqual([
        'Post 3',
        'Post 2'
      ])
    })

    it('limits the number of related MDXes when number parameter is specified', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1',
            categories: ['tech']
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2',
            categories: ['tech']
          })
        },
        {
          slug: 'post-3',
          frontmatter: postFrontmatter({
            title: 'Post 3',
            categories: ['tech']
          })
        },
        {
          slug: 'post-4',
          frontmatter: postFrontmatter({
            title: 'Post 4',
            categories: ['tech']
          })
        }
      ])

      const currentPost = postFrontmatter({
        title: 'Post 1',
        categories: ['tech'],
        slug: '/blog/post-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }) as any

      const result = await getRelatedMDXes(currentPost, '/blog/', 'en', 2)

      const titles = result.map((mdx) => mdx.frontmatter.title)
      expect(result).toHaveLength(2)
      expect(titles).toContain('Post 2')
      expect(titles).toContain('Post 3')
      expect(titles).not.toContain('Post 1')
      expect(titles).not.toContain('Post 4')
    })

    it('returns empty array when no related MDXes found', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1',
            categories: ['tech'],
            tags: ['javascript']
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2',
            categories: ['design'],
            tags: ['css']
          })
        }
      ])

      const currentPost = postFrontmatter({
        title: 'Post 1',
        categories: ['tech'],
        tags: ['javascript'],
        slug: '/blog/post-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }) as any

      const result = await getRelatedMDXes(currentPost, '/blog/', 'en')

      expect(result).toHaveLength(0)
    })

    it('handles localized content for non-English locale', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'Post 1 PL',
            categories: ['tech']
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'Post 2 PL',
            categories: ['tech']
          })
        }
      ])

      const currentPost = postFrontmatter({
        title: 'Post 1 PL',
        categories: ['tech'],
        slug: '/pl/blog/post-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }) as any

      const result = await getRelatedMDXes(currentPost, '/blog/', 'pl')

      expect(result).toHaveLength(1)
      expect(result[0].frontmatter.title).toBe('Post 2 PL')
      expect(result[0].frontmatter.slug).toBe('/pl/blog/post-2/')
    })

    it('ranks related projects by shared services and deliverables', async () => {
      mockMDXes([
        {
          slug: 'project-1',
          frontmatter: projectFrontmatter({
            title: 'Project 1',
            services: ['design', 'development'],
            deliverables: ['website']
          })
        },
        {
          slug: 'project-2',
          frontmatter: projectFrontmatter({
            title: 'Project 2',
            services: ['design'],
            deliverables: ['logo']
          })
        },
        {
          slug: 'project-3',
          frontmatter: projectFrontmatter({
            title: 'Project 3',
            services: ['branding'],
            deliverables: ['website']
          })
        },
        {
          slug: 'project-4',
          frontmatter: projectFrontmatter({
            title: 'Project 4',
            services: ['branding'],
            deliverables: ['mobile app']
          })
        }
      ])

      const currentProject = projectFrontmatter({
        title: 'Project 1',
        services: ['design', 'development'],
        deliverables: ['website'],
        slug: '/portfolio/project-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }) as any

      const result = await getRelatedMDXes(currentProject, '/portfolio/', 'en')

      // Project 2 shares a service (score 3) > Project 3 shares a deliverable
      // (score 1). Project 4 shares nothing and is excluded.
      expect(result.map((mdx) => mdx.frontmatter.title)).toEqual([
        'Project 2',
        'Project 3'
      ])
    })
  })

  describe('searchMDXes()', () => {
    it('returns all MDXes when query is empty', async () => {
      mockMDXes([
        { slug: 'post-1', frontmatter: postFrontmatter({ title: 'Post 1' }) },
        { slug: 'post-2', frontmatter: postFrontmatter({ title: 'Post 2' }) },
        { slug: 'post-3', frontmatter: postFrontmatter({ title: 'Post 3' }) }
      ])

      const result = await searchMDXes<'post'>('/blog/', 'en', '')

      expect(result).toHaveLength(3)
    })

    it('finds MDXes matching the query across frontmatter fields', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'React Tutorial',
            description: 'Learn React basics',
            tags: ['react', 'javascript']
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'TypeScript Guide',
            description: 'TypeScript fundamentals',
            tags: ['typescript', 'javascript']
          })
        },
        {
          slug: 'post-3',
          frontmatter: postFrontmatter({
            title: 'CSS Styling',
            description: 'Advanced styling',
            categories: ['design'],
            tags: ['css']
          })
        }
      ])

      const result = await searchMDXes<'post'>('/blog/', 'en', 'react')

      expect(result).toHaveLength(1)
      expect(result[0].frontmatter.title).toBe('React Tutorial')
    })

    it('returns empty array when no matches found', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({ title: 'React Tutorial' })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({ title: 'TypeScript Guide' })
        }
      ])

      const result = await searchMDXes<'post'>('/blog/', 'en', 'python')

      expect(result).toHaveLength(0)
    })

    it('handles localized content for non-English locale', async () => {
      mockMDXes([
        {
          slug: 'post-1',
          frontmatter: postFrontmatter({
            title: 'React Tutorial PL',
            description: 'Learn React basics PL'
          })
        },
        {
          slug: 'post-2',
          frontmatter: postFrontmatter({
            title: 'TypeScript Guide PL',
            description: 'TypeScript fundamentals PL'
          })
        }
      ])

      const result = await searchMDXes<'post'>('/blog/', 'pl', 'React')

      expect(result).toHaveLength(1)
      expect(result[0].frontmatter.title).toBe('React Tutorial PL')
      expect(result[0].frontmatter.slug).toBe('/pl/blog/post-1/')
    })
  })
})
