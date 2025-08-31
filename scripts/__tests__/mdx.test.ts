import { describe, expect, it, vi, beforeEach } from 'vitest'
import fs from 'fs/promises'
import {
  getMDX,
  getMDXSlugs,
  getMDXes,
  createMDXPagination,
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

vi.mock('@/lib', () => ({
  localizeFileName: vi.fn(
    (fileName: string, extension: string, locale: string) =>
      `${fileName}${locale === 'en' ? '' : `.${locale}`}.${extension}`
  ),
  localizePath: vi.fn((path: string, locale: string) =>
    locale === 'en' ? path : `/${locale}${path}`
  )
}))

vi.mock('@/mdx-components', () => ({
  getMDXComponents: vi.fn(() => ({}))
}))

vi.mock('next/cache', () => ({
  unstable_cache: (fn: any) => fn
}))

describe('mdx', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(process, 'cwd').mockReturnValue('/test/project')
  })

  describe('getMDX()', () => {
    it('reads and compiles MDX file for blog post', async () => {
      const mockFileContent = `---
title: Test Post
description: Test Description
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Test Image
  src: /images/test.jpg
categories: [tech]
tags: [javascript]
---

# Test Content
This is a test post.`

      vi.mocked(fs.readFile).mockResolvedValue(mockFileContent)

      const mockFrontmatter = {
        title: 'Test Post',
        description: 'Test Description',
        date: new Date('2023-01-01'),
        updated: new Date('2023-01-01'),
        image: {
          alt: 'Test Image',
          src: '/images/test.jpg'
        },
        categories: ['tech'],
        tags: ['javascript'],
        type: 'post' as const
      }

      const mockContent = {} as any

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockResolvedValue({
        frontmatter: mockFrontmatter,
        content: mockContent
      })

      const result = await getMDX<'post'>('/blog/', 'test-post', 'en')

      expect(fs.readFile).toHaveBeenCalledWith(
        expect.stringContaining('content/blog/test-post/index.mdx'),
        'utf-8'
      )
      expect(compileMDX).toHaveBeenCalledWith({
        source: mockFileContent,
        components: expect.any(Object),
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            format: 'mdx',
            remarkPlugins: expect.any(Array),
            rehypePlugins: expect.any(Array)
          }
        }
      })
      expect(result.frontmatter.title).toBe('Test Post')
      expect(result.frontmatter.type).toBe('post')
      expect(result.content).toBe(mockContent)
    })

    it('reads and compiles MDX file for portfolio project', async () => {
      const mockFileContent = `---
title: Test Project
description: Test Project Description
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Test Project Image
  src: /images/test-project.jpg
client: Test Client
services: [design, development]
deliverables: [website, mobile app]
links:
  - text: View Project
    href: https://example.com
---

# Test Project Content
This is a test project.`

      vi.mocked(fs.readFile).mockResolvedValue(mockFileContent)

      const mockFrontmatter = {
        title: 'Test Project',
        description: 'Test Project Description',
        date: new Date('2023-01-01'),
        updated: new Date('2023-01-01'),
        image: {
          alt: 'Test Project Image',
          src: '/images/test-project.jpg'
        },
        client: 'Test Client',
        services: ['design', 'development'],
        deliverables: ['website', 'mobile app'],
        links: [{ text: 'View Project', href: 'https://example.com' }],
        type: 'project' as const
      }

      const mockContent = {} as any

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockResolvedValue({
        frontmatter: mockFrontmatter,
        content: mockContent
      })

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
      expect(result.frontmatter.client).toBe('Test Client')
    })

    it('handles localized file names for non-English locale', async () => {
      const mockFileContent = `---
title: Test Post PL
description: Test Description PL
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Test Image PL
  src: /images/test.jpg
categories: [tech]
tags: [javascript]
---

# Test Content PL
This is a test post in Polish.`

      vi.mocked(fs.readFile).mockResolvedValue(mockFileContent)

      const mockFrontmatter = {
        title: 'Test Post PL',
        description: 'Test Description PL',
        date: new Date('2023-01-01'),
        updated: new Date('2023-01-01'),
        image: {
          alt: 'Test Image PL',
          src: '/images/test.jpg'
        },
        categories: ['tech'],
        tags: ['javascript'],
        type: 'post' as const
      }

      const mockContent = {} as any

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockResolvedValue({
        frontmatter: mockFrontmatter,
        content: mockContent
      })

      const result = await getMDX<'post'>('/blog/', 'test-post', 'pl')

      expect(fs.readFile).toHaveBeenCalledWith(
        expect.stringContaining('content/blog/test-post/index.pl.mdx'),
        'utf-8'
      )
      expect(result.frontmatter.title).toBe('Test Post PL')
    })

    it('throws error when file reading fails', async () => {
      const error = new Error('File not found')
      vi.mocked(fs.readFile).mockRejectedValue(error)

      await expect(getMDX<'post'>('/blog/', 'test-post', 'en')).rejects.toThrow(
        'File not found'
      )
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

    it('throws error when directory reading fails', async () => {
      const error = new Error('Directory not found')
      vi.mocked(fs.readdir).mockRejectedValue(error)

      await expect(getMDXSlugs('/blog/')).rejects.toThrow('Directory not found')
    })
  })

  describe('getMDXes()', () => {
    it('retrieves and sorts MDXes in descending order by default', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      // Mock different file contents for each slug
      const mockContents = {
        'post-1': `---
title: Post 1
description: First post
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 1
  src: /images/post1.jpg
categories: [tech]
tags: [javascript]
---`,
        'post-2': `---
title: Post 2
description: Second post
date: 2023-01-03
updated: 2023-01-03
image:
  alt: Post 2
  src: /images/post2.jpg
categories: [tech]
tags: [typescript]
---`,
        'post-3': `---
title: Post 3
description: Third post
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 3
  src: /images/post3.jpg
categories: [design]
tags: [css]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : 'post-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1')
          ? 'Post 1'
          : sourceStr.includes('Post 2')
            ? 'Post 2'
            : 'Post 3'
        const date = sourceStr.includes('2023-01-01')
          ? '2023-01-01'
          : sourceStr.includes('2023-01-02')
            ? '2023-01-02'
            : '2023-01-03'

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date(date),
            updated: new Date(date),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories: ['tech'],
            tags: ['javascript'],
            type: 'post' as const
          },
          content: {} as any
        })
      })

      const result = await getMDXes<'post'>('/blog/', 'en', 'all', 'desc')

      expect(result).toHaveLength(3)
      expect(result[0].frontmatter.title).toBe('Post 2') // Latest date
      expect(result[1].frontmatter.title).toBe('Post 3') // Middle date
      expect(result[2].frontmatter.title).toBe('Post 1') // Earliest date
    })

    it('retrieves and sorts MDXes in ascending order', async () => {
      const mockSlugs = ['post-1', 'post-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      vi.mocked(fs.readFile).mockResolvedValue(`---
title: Test Post
description: Test Description
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Test Image
  src: /images/test.jpg
categories: [tech]
tags: [javascript]
---`)

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockResolvedValue({
        frontmatter: {
          title: 'Test Post',
          description: 'Test Description',
          date: new Date('2023-01-01'),
          updated: new Date('2023-01-01'),
          image: { alt: 'Test Image', src: '/images/test.jpg' },
          categories: ['tech'],
          tags: ['javascript'],
          type: 'post' as const
        },
        content: {} as any
      })

      const result = await getMDXes<'post'>('/blog/', 'en', 'all', 'asc')

      expect(result).toHaveLength(2)
    })

    it('retrieves MDXes without sorting when sort is none', async () => {
      const mockSlugs = ['post-1', 'post-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      vi.mocked(fs.readFile).mockResolvedValue(`---
title: Test Post
description: Test Description
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Test Image
  src: /images/test.jpg
categories: [tech]
tags: [javascript]
---`)

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockResolvedValue({
        frontmatter: {
          title: 'Test Post',
          description: 'Test Description',
          date: new Date('2023-01-01'),
          updated: new Date('2023-01-01'),
          image: { alt: 'Test Image', src: '/images/test.jpg' },
          categories: ['tech'],
          tags: ['javascript'],
          type: 'post' as const
        },
        content: {} as any
      })

      const result = await getMDXes<'post'>('/blog/', 'en', 'all', 'none')

      expect(result).toHaveLength(2)
    })

    it('limits the number of returned MDXes', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3', 'post-4']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      vi.mocked(fs.readFile).mockResolvedValue(`---
title: Test Post
description: Test Description
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Test Image
  src: /images/test.jpg
categories: [tech]
tags: [javascript]
---`)

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockResolvedValue({
        frontmatter: {
          title: 'Test Post',
          description: 'Test Description',
          date: new Date('2023-01-01'),
          updated: new Date('2023-01-01'),
          image: { alt: 'Test Image', src: '/images/test.jpg' },
          categories: ['tech'],
          tags: ['javascript'],
          type: 'post' as const
        },
        content: {} as any
      })

      const result = await getMDXes<'post'>('/blog/', 'en', 2, 'desc')

      expect(result).toHaveLength(2)
    })

    it('handles portfolio projects with different frontmatter structure', async () => {
      const mockSlugs = ['project-1', 'project-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      vi.mocked(fs.readFile).mockResolvedValue(`---
title: Test Project
description: Test Project Description
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Test Project Image
  src: /images/test-project.jpg
client: Test Client
services: [design, development]
deliverables: [website, mobile app]
links:
  - text: View Project
    href: https://example.com
---`)

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockResolvedValue({
        frontmatter: {
          title: 'Test Project',
          description: 'Test Project Description',
          date: new Date('2023-01-01'),
          updated: new Date('2023-01-01'),
          image: { alt: 'Test Project Image', src: '/images/test-project.jpg' },
          client: 'Test Client',
          services: ['design', 'development'],
          deliverables: ['website', 'mobile app'],
          links: [{ text: 'View Project', href: 'https://example.com' }],
          type: 'project' as const
        },
        content: {} as any
      })

      const result = await getMDXes<'project'>(
        '/portfolio/',
        'en',
        'all',
        'desc'
      )

      expect(result).toHaveLength(2)
      expect(result[0].frontmatter.type).toBe('project')
      expect(result[0].frontmatter.client).toBe('Test Client')
    })

    it('throws error when getMDXSlugs fails', async () => {
      const error = new Error('Directory not found')
      vi.mocked(fs.readdir).mockRejectedValue(error)

      await expect(getMDXes<'post'>('/blog/', 'en')).rejects.toThrow(
        'Directory not found'
      )
    })

    it('handles invalid sort parameter by using default case (descending order)', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: Post 1
description: First post
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 1
  src: /images/post1.jpg
categories: [tech]
tags: [javascript]
---`,
        'post-2': `---
title: Post 2
description: Second post
date: 2023-01-03
updated: 2023-01-03
image:
  alt: Post 2
  src: /images/post2.jpg
categories: [tech]
tags: [typescript]
---`,
        'post-3': `---
title: Post 3
description: Third post
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 3
  src: /images/post3.jpg
categories: [design]
tags: [css]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : 'post-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1')
          ? 'Post 1'
          : sourceStr.includes('Post 2')
            ? 'Post 2'
            : 'Post 3'
        const date = sourceStr.includes('2023-01-01')
          ? '2023-01-01'
          : sourceStr.includes('2023-01-02')
            ? '2023-01-02'
            : '2023-01-03'

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date(date),
            updated: new Date(date),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories: ['tech'],
            tags: ['javascript'],
            type: 'post' as const
          },
          content: {} as any
        })
      })

      const result = await (getMDXes as any)('/blog/', 'en', 'all', 'invalid')

      expect(result).toHaveLength(3)
      expect(result[0].frontmatter.title).toBe('Post 2')
      expect(result[1].frontmatter.title).toBe('Post 3')
      expect(result[2].frontmatter.title).toBe('Post 1')
    })
  })

  describe('createMDXPagination()', () => {
    it('creates pagination for middle post with prev and next', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: Post 1
description: First post
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 1
  src: /images/post1.jpg
categories: [tech]
tags: [javascript]
---`,
        'post-2': `---
title: Post 2
description: Second post
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 2
  src: /images/post2.jpg
categories: [tech]
tags: [typescript]
---`,
        'post-3': `---
title: Post 3
description: Third post
date: 2023-01-03
updated: 2023-01-03
image:
  alt: Post 3
  src: /images/post3.jpg
categories: [design]
tags: [css]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : 'post-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1')
          ? 'Post 1'
          : sourceStr.includes('Post 2')
            ? 'Post 2'
            : 'Post 3'
        const date = sourceStr.includes('2023-01-01')
          ? '2023-01-01'
          : sourceStr.includes('2023-01-02')
            ? '2023-01-02'
            : '2023-01-03'
        const slug = sourceStr.includes('Post 1')
          ? '/blog/post-1/'
          : sourceStr.includes('Post 2')
            ? '/blog/post-2/'
            : '/blog/post-3/'

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date(date),
            updated: new Date(date),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories: ['tech'],
            tags: ['javascript'],
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await createMDXPagination('/blog/', 'post-2', 'en')

      expect(result.prev).toEqual({
        title: 'Post 1',
        slug: '/blog/post-1/'
      })
      expect(result.next).toEqual({
        title: 'Post 3',
        slug: '/blog/post-3/'
      })
    })

    it('creates pagination for newest post with prev and no next', async () => {
      const mockSlugs = ['post-1', 'post-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: Post 1
description: First post
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 1
  src: /images/post1.jpg
categories: [tech]
tags: [javascript]
---`,
        'post-2': `---
title: Post 2
description: Second post
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 2
  src: /images/post2.jpg
categories: [tech]
tags: [typescript]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1') ? 'post-1' : 'post-2'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1') ? 'Post 1' : 'Post 2'
        const date = sourceStr.includes('2023-01-02')
          ? '2023-01-02'
          : '2023-01-01'
        const slug = sourceStr.includes('Post 1')
          ? '/blog/post-1/'
          : '/blog/post-2/'

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date(date),
            updated: new Date(date),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories: ['tech'],
            tags: ['javascript'],
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await createMDXPagination('/blog/', 'post-1', 'en')

      expect(result.prev).toEqual({
        title: 'Post 2',
        slug: '/blog/post-2/'
      })
      expect(result.next).toBeNull()
    })

    it('creates pagination for oldest post with next and no prev', async () => {
      const mockSlugs = ['post-1', 'post-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: Post 1
description: First post
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 1
  src: /images/post1.jpg
categories: [tech]
tags: [javascript]
---`,
        'post-2': `---
title: Post 2
description: Second post
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 2
  src: /images/post2.jpg
categories: [tech]
tags: [typescript]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1') ? 'post-1' : 'post-2'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1') ? 'Post 1' : 'Post 2'
        const date = sourceStr.includes('2023-01-02')
          ? '2023-01-02'
          : '2023-01-01'
        const slug = sourceStr.includes('Post 1')
          ? '/blog/post-1/'
          : '/blog/post-2/'

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date(date),
            updated: new Date(date),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories: ['tech'],
            tags: ['javascript'],
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await createMDXPagination('/blog/', 'post-2', 'en')

      expect(result.prev).toBeNull()
      expect(result.next).toEqual({
        title: 'Post 1',
        slug: '/blog/post-1/'
      })
    })

    it('handles portfolio projects with different frontmatter structure', async () => {
      const mockSlugs = ['project-1', 'project-2', 'project-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'project-1': `---
title: Project 1
description: First project
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Project 1
  src: /images/project1.jpg
client: Client 1
services: [design]
deliverables: [website]
links:
  - text: View Project
    href: https://example1.com
---`,
        'project-2': `---
title: Project 2
description: Second project
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Project 2
  src: /images/project2.jpg
client: Client 2
services: [development]
deliverables: [mobile app]
links:
  - text: View Project
    href: https://example2.com
---`,
        'project-3': `---
title: Project 3
description: Third project
date: 2023-01-03
updated: 2023-01-03
image:
  alt: Project 3
  src: /images/project3.jpg
client: Client 3
services: [design, development]
deliverables: [website, mobile app]
links:
  - text: View Project
    href: https://example3.com
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('project-1')
          ? 'project-1'
          : pathStr.includes('project-2')
            ? 'project-2'
            : 'project-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Project 1')
          ? 'Project 1'
          : sourceStr.includes('Project 2')
            ? 'Project 2'
            : 'Project 3'
        const slug = sourceStr.includes('Project 1')
          ? '/portfolio/project-1/'
          : sourceStr.includes('Project 2')
            ? '/portfolio/project-2/'
            : '/portfolio/project-3/'

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            client: 'Test Client',
            services: ['design', 'development'],
            deliverables: ['website', 'mobile app'],
            links: [{ text: 'View Project', href: 'https://example.com' }],
            type: 'project' as const,
            slug
          },
          content: {} as any
        })
      })

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
      const mockSlugs = ['post-1', 'post-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: Post 1
description: First post
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 1
  src: /images/post1.jpg
categories: [tech]
tags: [javascript]
---`,
        'post-2': `---
title: Post 2
description: Second post
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 2
  src: /images/post2.jpg
categories: [tech]
tags: [typescript]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1') ? 'post-1' : 'post-2'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1') ? 'Post 1' : 'Post 2'
        const slug = sourceStr.includes('Post 1')
          ? '/pl/blog/post-1/'
          : '/pl/blog/post-2/'

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories: ['tech'],
            tags: ['javascript'],
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await createMDXPagination('/blog/', 'post-1', 'pl')

      expect(result.prev).toEqual({
        title: 'Post 2',
        slug: '/pl/blog/post-2/'
      })
      expect(result.next).toBeNull()
    })

    it('returns null for both prev and next when post not found', async () => {
      const mockSlugs = ['post-1', 'post-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: Post 1
description: First post
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 1
  src: /images/post1.jpg
categories: [tech]
tags: [javascript]
---`,
        'post-2': `---
title: Post 2
description: Second post
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 2
  src: /images/post2.jpg
categories: [tech]
tags: [typescript]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1') ? 'post-1' : 'post-2'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1') ? 'Post 1' : 'Post 2'
        const slug = sourceStr.includes('Post 1')
          ? '/blog/post-1/'
          : '/blog/post-2/'

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories: ['tech'],
            tags: ['javascript'],
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await createMDXPagination(
        '/blog/',
        'non-existent-post',
        'en'
      )

      expect(result.prev).toBeNull()
      expect(result.next).toBeNull()
    })
  })

  describe('getRelatedMDXes()', () => {
    it('finds related blog posts by shared categories', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3', 'post-4']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: Post 1
description: First post
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 1
  src: /images/post1.jpg
categories: [tech, javascript]
tags: [react, nextjs]
---`,
        'post-2': `---
title: Post 2
description: Second post
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 2
  src: /images/post2.jpg
categories: [tech, typescript]
tags: [angular, vue]
---`,
        'post-3': `---
title: Post 3
description: Third post
date: 2023-01-03
updated: 2023-01-03
image:
  alt: Post 3
  src: /images/post3.jpg
categories: [design, css]
tags: [styling, layout]
---`,
        'post-4': `---
title: Post 4
description: Fourth post
date: 2023-01-04
updated: 2023-01-04
image:
  alt: Post 4
  src: /images/post4.jpg
categories: [tech, javascript]
tags: [nodejs, backend]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : pathStr.includes('post-3')
              ? 'post-3'
              : 'post-4'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1')
          ? 'Post 1'
          : sourceStr.includes('Post 2')
            ? 'Post 2'
            : sourceStr.includes('Post 3')
              ? 'Post 3'
              : 'Post 4'
        const categories = sourceStr.includes('javascript')
          ? ['tech', 'javascript']
          : sourceStr.includes('typescript')
            ? ['tech', 'typescript']
            : ['design', 'css']
        const tags = sourceStr.includes('react')
          ? ['react', 'nextjs']
          : sourceStr.includes('angular')
            ? ['angular', 'vue']
            : sourceStr.includes('nodejs')
              ? ['nodejs', 'backend']
              : ['styling', 'layout']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const currentPost = {
        title: 'Post 1',
        description: 'First post',
        date: new Date('2023-01-01'),
        updated: new Date('2023-01-01'),
        image: { alt: 'Post 1', src: '/images/post1.jpg' },
        categories: ['tech', 'javascript'],
        tags: ['react', 'nextjs'],
        type: 'post' as const,
        slug: '/blog/post-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }

      const result = await getRelatedMDXes(currentPost, '/blog/', 'en')

      expect(result).toHaveLength(2)
      expect(result.map((r) => r.frontmatter.title)).toContain('Post 2')
      expect(result.map((r) => r.frontmatter.title)).toContain('Post 4')
      expect(result.map((r) => r.frontmatter.title)).not.toContain('Post 1')
      expect(result.map((r) => r.frontmatter.title)).not.toContain('Post 3')
    })

    it('finds related blog posts by shared tags', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: Post 1
description: First post
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 1
  src: /images/post1.jpg
categories: [tech]
tags: [react, nextjs, javascript]
---`,
        'post-2': `---
title: Post 2
description: Second post
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 2
  src: /images/post2.jpg
categories: [design]
tags: [css, nextjs, styling]
---`,
        'post-3': `---
title: Post 3
description: Third post
date: 2023-01-03
updated: 2023-01-03
image:
  alt: Post 3
  src: /images/post3.jpg
categories: [backend]
tags: [nodejs, python, api]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : 'post-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1')
          ? 'Post 1'
          : sourceStr.includes('Post 2')
            ? 'Post 2'
            : 'Post 3'
        const categories = sourceStr.includes('tech')
          ? ['tech']
          : sourceStr.includes('design')
            ? ['design']
            : ['backend']
        const tags = sourceStr.includes('react')
          ? ['react', 'nextjs', 'javascript']
          : sourceStr.includes('css')
            ? ['css', 'nextjs', 'styling']
            : ['nodejs', 'python', 'api']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const currentPost = {
        title: 'Post 1',
        description: 'First post',
        date: new Date('2023-01-01'),
        updated: new Date('2023-01-01'),
        image: { alt: 'Post 1', src: '/images/post1.jpg' },
        categories: ['tech'],
        tags: ['react', 'nextjs', 'javascript'],
        type: 'post' as const,
        slug: '/blog/post-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }

      const result = await getRelatedMDXes(currentPost, '/blog/', 'en')

      expect(result).toHaveLength(1)
      expect(result[0].frontmatter.title).toBe('Post 2')
      expect(result.map((r) => r.frontmatter.title)).not.toContain('Post 1')
      expect(result.map((r) => r.frontmatter.title)).not.toContain('Post 3')
    })

    it('finds related portfolio projects by shared services', async () => {
      const mockSlugs = ['project-1', 'project-2', 'project-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'project-1': `---
title: Project 1
description: First project
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Project 1
  src: /images/project1.jpg
client: Client 1
services: [design, development]
deliverables: [website]
links:
  - text: View Project
    href: https://example1.com
---`,
        'project-2': `---
title: Project 2
description: Second project
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Project 2
  src: /images/project2.jpg
client: Client 2
services: [design, branding]
deliverables: [logo, website]
links:
  - text: View Project
    href: https://example2.com
---`,
        'project-3': `---
title: Project 3
description: Third project
date: 2023-01-03
updated: 2023-01-03
image:
  alt: Project 3
  src: /images/project3.jpg
client: Client 3
services: [development, consulting]
deliverables: [mobile app]
links:
  - text: View Project
    href: https://example3.com
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('project-1')
          ? 'project-1'
          : pathStr.includes('project-2')
            ? 'project-2'
            : 'project-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Project 1')
          ? 'Project 1'
          : sourceStr.includes('Project 2')
            ? 'Project 2'
            : 'Project 3'
        const services = sourceStr.includes('design, development')
          ? ['design', 'development']
          : sourceStr.includes('design, branding')
            ? ['design', 'branding']
            : ['development', 'consulting']
        const slug = `/portfolio/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            client: 'Test Client',
            services,
            deliverables: ['website'],
            links: [{ text: 'View Project', href: 'https://example.com' }],
            type: 'project' as const,
            slug
          },
          content: {} as any
        })
      })

      const currentProject = {
        title: 'Project 1',
        description: 'First project',
        date: new Date('2023-01-01'),
        updated: new Date('2023-01-01'),
        image: { alt: 'Project 1', src: '/images/project1.jpg' },
        client: 'Client 1',
        services: ['design', 'development'],
        deliverables: ['website'],
        links: [{ text: 'View Project', href: 'https://example1.com' }] as [
          { text: string; href: string }
        ],
        type: 'project' as const,
        slug: '/portfolio/project-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }

      const result = await getRelatedMDXes(currentProject, '/portfolio/', 'en')

      expect(result).toHaveLength(2)
      expect(result.map((r) => r.frontmatter.title)).toContain('Project 2')
      expect(result.map((r) => r.frontmatter.title)).toContain('Project 3')
      expect(result.map((r) => r.frontmatter.title)).not.toContain('Project 1')
    })

    it('limits the number of related MDXes when number parameter is specified', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3', 'post-4']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: Post 1
description: First post
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 1
  src: /images/post1.jpg
categories: [tech]
tags: [javascript]
---`,
        'post-2': `---
title: Post 2
description: Second post
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 2
  src: /images/post2.jpg
categories: [tech]
tags: [typescript]
---`,
        'post-3': `---
title: Post 3
description: Third post
date: 2023-01-03
updated: 2023-01-03
image:
  alt: Post 3
  src: /images/post3.jpg
categories: [tech]
tags: [react]
---`,
        'post-4': `---
title: Post 4
description: Fourth post
date: 2023-01-04
updated: 2023-01-04
image:
  alt: Post 4
  src: /images/post4.jpg
categories: [design]
tags: [css]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : pathStr.includes('post-3')
              ? 'post-3'
              : 'post-4'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1')
          ? 'Post 1'
          : sourceStr.includes('Post 2')
            ? 'Post 2'
            : sourceStr.includes('Post 3')
              ? 'Post 3'
              : 'Post 4'
        const categories = sourceStr.includes('design') ? ['design'] : ['tech']
        const tags = sourceStr.includes('javascript')
          ? ['javascript']
          : sourceStr.includes('typescript')
            ? ['typescript']
            : sourceStr.includes('react')
              ? ['react']
              : ['css']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const currentPost = {
        title: 'Post 1',
        description: 'First post',
        date: new Date('2023-01-01'),
        updated: new Date('2023-01-01'),
        image: { alt: 'Post 1', src: '/images/post1.jpg' },
        categories: ['tech'],
        tags: ['javascript'],
        type: 'post' as const,
        slug: '/blog/post-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }

      const result = await getRelatedMDXes(currentPost, '/blog/', 'en', 2)

      // Should find 2 related posts (Post 2 and Post 3 share 'tech' category)
      expect(result).toHaveLength(2)
      expect(result.map((r) => r.frontmatter.title)).toContain('Post 2')
      expect(result.map((r) => r.frontmatter.title)).toContain('Post 3')
      // Should not include Post 1 (current post) or Post 4 (no shared categories)
      expect(result.map((r) => r.frontmatter.title)).not.toContain('Post 1')
      expect(result.map((r) => r.frontmatter.title)).not.toContain('Post 4')
    })

    it('returns empty array when no related MDXes found', async () => {
      const mockSlugs = ['post-1', 'post-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: Post 1
description: First post
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 1
  src: /images/post1.jpg
categories: [tech]
tags: [javascript]
---`,
        'post-2': `---
title: Post 2
description: Second post
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 2
  src: /images/post2.jpg
categories: [design]
tags: [css]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1') ? 'post-1' : 'post-2'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1') ? 'Post 1' : 'Post 2'
        const categories = sourceStr.includes('tech') ? ['tech'] : ['design']
        const tags = sourceStr.includes('javascript') ? ['javascript'] : ['css']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const currentPost = {
        title: 'Post 1',
        description: 'First post',
        date: new Date('2023-01-01'),
        updated: new Date('2023-01-01'),
        image: { alt: 'Post 1', src: '/images/post1.jpg' },
        categories: ['tech'],
        tags: ['javascript'],
        type: 'post' as const,
        slug: '/blog/post-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }

      const result = await getRelatedMDXes(currentPost, '/blog/', 'en')

      expect(result).toHaveLength(0)
    })

    it('handles localized content for non-English locale', async () => {
      const mockSlugs = ['post-1', 'post-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: Post 1 PL
description: First post PL
date: 2023-01-01
updated: 2023-01-01
image:
  alt: Post 1 PL
  src: /images/post1.jpg
categories: [tech]
tags: [javascript]
---`,
        'post-2': `---
title: Post 2 PL
description: Second post PL
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Post 2 PL
  src: /images/post2.jpg
categories: [tech]
tags: [typescript]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1') ? 'post-1' : 'post-2'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('Post 1') ? 'Post 1 PL' : 'Post 2 PL'
        const slug = sourceStr.includes('Post 1')
          ? '/pl/blog/post-1/'
          : '/pl/blog/post-2/'

        return Promise.resolve({
          frontmatter: {
            title,
            description: `${title} description`,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '').replace(' pl', '')}.jpg`
            },
            categories: ['tech'],
            tags: sourceStr.includes('Post 1')
              ? ['javascript']
              : ['typescript'],
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const currentPost = {
        title: 'Post 1 PL',
        description: 'First post PL',
        date: new Date('2023-01-01'),
        updated: new Date('2023-01-01'),
        image: { alt: 'Post 1 PL', src: '/images/post1.jpg' },
        categories: ['tech'],
        tags: ['javascript'],
        type: 'post' as const,
        slug: '/pl/blog/post-1/',
        readingTime: {
          text: '2 min read',
          minutes: 2,
          time: 120000,
          words: 400
        }
      }

      const result = await getRelatedMDXes(currentPost, '/blog/', 'pl')

      expect(result).toHaveLength(1)
      expect(result[0].frontmatter.title).toBe('Post 2 PL')
      expect(result[0].frontmatter.slug).toBe('/pl/blog/post-2/')
    })
  })

  describe('searchMDXes()', () => {
    it('returns all MDXes when query is empty', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: React Tutorial
description: Learn React basics
date: 2023-01-01
updated: 2023-01-01
image:
  alt: React Tutorial
  src: /images/react.jpg
categories: [tech]
tags: [react, javascript]
---`,
        'post-2': `---
title: TypeScript Guide
description: TypeScript fundamentals
date: 2023-01-02
updated: 2023-01-02
image:
  alt: TypeScript Guide
  src: /images/typescript.jpg
categories: [tech]
tags: [typescript, javascript]
---`,
        'post-3': `---
title: CSS Styling
description: Advanced CSS techniques
date: 2023-01-03
updated: 2023-01-03
image:
  alt: CSS Styling
  src: /images/css.jpg
categories: [design]
tags: [css, styling]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : 'post-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('React')
          ? 'React Tutorial'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript Guide'
            : 'CSS Styling'
        const description = sourceStr.includes('React')
          ? 'Learn React basics'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript fundamentals'
            : 'Advanced CSS techniques'
        const categories = sourceStr.includes('design') ? ['design'] : ['tech']
        const tags = sourceStr.includes('React')
          ? ['react', 'javascript']
          : sourceStr.includes('TypeScript')
            ? ['typescript', 'javascript']
            : ['css', 'styling']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await searchMDXes<'post'>('/blog/', 'en', '')

      expect(result).toHaveLength(3)
      expect(result.map((r) => r.frontmatter.title)).toContain('React Tutorial')
      expect(result.map((r) => r.frontmatter.title)).toContain(
        'TypeScript Guide'
      )
      expect(result.map((r) => r.frontmatter.title)).toContain('CSS Styling')
    })

    it('finds MDXes by title', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: React Tutorial
description: Learn React basics
date: 2023-01-01
updated: 2023-01-01
image:
  alt: React Tutorial
  src: /images/react.jpg
categories: [tech]
tags: [react, javascript]
---`,
        'post-2': `---
title: TypeScript Guide
description: TypeScript fundamentals
date: 2023-01-02
updated: 2023-01-02
image:
  alt: TypeScript Guide
  src: /images/typescript.jpg
categories: [tech]
tags: [typescript, javascript]
---`,
        'post-3': `---
title: CSS Styling
description: Advanced CSS techniques
date: 2023-01-03
updated: 2023-01-03
image:
  alt: CSS Styling
  src: /images/css.jpg
categories: [design]
tags: [css, styling]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : 'post-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('React')
          ? 'React Tutorial'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript Guide'
            : 'CSS Styling'
        const description = sourceStr.includes('React')
          ? 'Learn React basics'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript fundamentals'
            : 'Advanced CSS techniques'
        const categories = sourceStr.includes('design') ? ['design'] : ['tech']
        const tags = sourceStr.includes('React')
          ? ['react', 'javascript']
          : sourceStr.includes('TypeScript')
            ? ['typescript', 'javascript']
            : ['css', 'styling']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await searchMDXes<'post'>('/blog/', 'en', 'React')

      expect(result).toHaveLength(1)
      expect(result[0].frontmatter.title).toBe('React Tutorial')
    })

    it('finds MDXes by description', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: React Tutorial
description: Learn React basics
date: 2023-01-01
updated: 2023-01-01
image:
  alt: React Tutorial
  src: /images/react.jpg
categories: [tech]
tags: [react, javascript]
---`,
        'post-2': `---
title: TypeScript Guide
description: TypeScript fundamentals
date: 2023-01-02
updated: 2023-01-02
image:
  alt: TypeScript Guide
  src: /images/typescript.jpg
categories: [tech]
tags: [typescript, javascript]
---`,
        'post-3': `---
title: CSS Styling
description: Advanced CSS techniques
date: 2023-01-03
updated: 2023-01-03
image:
  alt: CSS Styling
  src: /images/css.jpg
categories: [design]
tags: [css, styling]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : 'post-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('React')
          ? 'React Tutorial'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript Guide'
            : 'CSS Styling'
        const description = sourceStr.includes('React')
          ? 'Learn React basics'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript fundamentals'
            : 'Advanced CSS techniques'
        const categories = sourceStr.includes('design') ? ['design'] : ['tech']
        const tags = sourceStr.includes('React')
          ? ['react', 'javascript']
          : sourceStr.includes('TypeScript')
            ? ['typescript', 'javascript']
            : ['css', 'styling']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await searchMDXes<'post'>('/blog/', 'en', 'fundamentals')

      expect(result).toHaveLength(1)
      expect(result[0].frontmatter.title).toBe('TypeScript Guide')
    })

    it('finds MDXes by categories', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: React Tutorial
description: Learn React basics
date: 2023-01-01
updated: 2023-01-01
image:
  alt: React Tutorial
  src: /images/react.jpg
categories: [tech]
tags: [react, javascript]
---`,
        'post-2': `---
title: TypeScript Guide
description: TypeScript fundamentals
date: 2023-01-02
updated: 2023-01-02
image:
  alt: TypeScript Guide
  src: /images/typescript.jpg
categories: [tech]
tags: [typescript, javascript]
---`,
        'post-3': `---
title: CSS Styling
description: Advanced styling methods
date: 2023-01-03
updated: 2023-01-03
image:
  alt: CSS Styling
  src: /images/css.jpg
categories: [design]
tags: [css, styling]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : 'post-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('React')
          ? 'React Tutorial'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript Guide'
            : 'CSS Styling'
        const description = sourceStr.includes('React')
          ? 'Learn React basics'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript fundamentals'
            : 'Advanced styling methods'
        const categories = sourceStr.includes('design') ? ['design'] : ['tech']
        const tags = sourceStr.includes('React')
          ? ['react', 'javascript']
          : sourceStr.includes('TypeScript')
            ? ['typescript', 'javascript']
            : ['css', 'styling']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await searchMDXes<'post'>('/blog/', 'en', 'tech')

      expect(result).toHaveLength(2)
      expect(result.map((r) => r.frontmatter.title)).toContain('React Tutorial')
      expect(result.map((r) => r.frontmatter.title)).toContain(
        'TypeScript Guide'
      )
      expect(result.map((r) => r.frontmatter.title)).not.toContain(
        'CSS Styling'
      )
    })

    it('finds MDXes by tags', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: React Tutorial
description: Learn React basics
date: 2023-01-01
updated: 2023-01-01
image:
  alt: React Tutorial
  src: /images/react.jpg
categories: [tech]
tags: [react, javascript]
---`,
        'post-2': `---
title: TypeScript Guide
description: TypeScript fundamentals
date: 2023-01-02
updated: 2023-01-02
image:
  alt: TypeScript Guide
  src: /images/typescript.jpg
categories: [tech]
tags: [typescript, javascript]
---`,
        'post-3': `---
title: CSS Styling
description: Advanced CSS techniques
date: 2023-01-03
updated: 2023-01-03
image:
  alt: CSS Styling
  src: /images/css.jpg
categories: [design]
tags: [css, styling]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : 'post-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('React')
          ? 'React Tutorial'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript Guide'
            : 'CSS Styling'
        const description = sourceStr.includes('React')
          ? 'Learn React basics'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript fundamentals'
            : 'Advanced CSS techniques'
        const categories = sourceStr.includes('design') ? ['design'] : ['tech']
        const tags = sourceStr.includes('React')
          ? ['react', 'javascript']
          : sourceStr.includes('TypeScript')
            ? ['typescript', 'javascript']
            : ['css', 'styling']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await searchMDXes<'post'>('/blog/', 'en', 'javascript')

      expect(result).toHaveLength(2)
      expect(result.map((r) => r.frontmatter.title)).toContain('React Tutorial')
      expect(result.map((r) => r.frontmatter.title)).toContain(
        'TypeScript Guide'
      )
      expect(result.map((r) => r.frontmatter.title)).not.toContain(
        'CSS Styling'
      )
    })

    it('finds MDXes with multiple search terms (AND logic)', async () => {
      const mockSlugs = ['post-1', 'post-2', 'post-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: React Tutorial
description: Learn React basics
date: 2023-01-01
updated: 2023-01-01
image:
  alt: React Tutorial
  src: /images/react.jpg
categories: [tech]
tags: [react, javascript]
---`,
        'post-2': `---
title: TypeScript Guide
description: TypeScript fundamentals
date: 2023-01-02
updated: 2023-01-02
image:
  alt: TypeScript Guide
  src: /images/typescript.jpg
categories: [tech]
tags: [typescript, javascript]
---`,
        'post-3': `---
title: CSS Styling
description: Advanced CSS techniques
date: 2023-01-03
updated: 2023-01-03
image:
  alt: CSS Styling
  src: /images/css.jpg
categories: [design]
tags: [css, styling]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1')
          ? 'post-1'
          : pathStr.includes('post-2')
            ? 'post-2'
            : 'post-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('React')
          ? 'React Tutorial'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript Guide'
            : 'CSS Styling'
        const description = sourceStr.includes('React')
          ? 'Learn React basics'
          : sourceStr.includes('TypeScript')
            ? 'TypeScript fundamentals'
            : 'Advanced CSS techniques'
        const categories = sourceStr.includes('design') ? ['design'] : ['tech']
        const tags = sourceStr.includes('React')
          ? ['react', 'javascript']
          : sourceStr.includes('TypeScript')
            ? ['typescript', 'javascript']
            : ['css', 'styling']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await searchMDXes<'post'>(
        '/blog/',
        'en',
        'tech javascript'
      )

      expect(result).toHaveLength(2)
      expect(result.map((r) => r.frontmatter.title)).toContain('React Tutorial')
      expect(result.map((r) => r.frontmatter.title)).toContain(
        'TypeScript Guide'
      )
      expect(result.map((r) => r.frontmatter.title)).not.toContain(
        'CSS Styling'
      )
    })

    it('returns empty array when no matches found', async () => {
      const mockSlugs = ['post-1', 'post-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: React Tutorial
description: Learn React basics
date: 2023-01-01
updated: 2023-01-01
image:
  alt: React Tutorial
  src: /images/react.jpg
categories: [tech]
tags: [react, javascript]
---`,
        'post-2': `---
title: TypeScript Guide
description: TypeScript fundamentals
date: 2023-01-02
updated: 2023-01-02
image:
  alt: TypeScript Guide
  src: /images/typescript.jpg
categories: [tech]
tags: [typescript, javascript]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1') ? 'post-1' : 'post-2'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('React')
          ? 'React Tutorial'
          : 'TypeScript Guide'
        const description = sourceStr.includes('React')
          ? 'Learn React basics'
          : 'TypeScript fundamentals'
        const categories = ['tech']
        const tags = sourceStr.includes('React')
          ? ['react', 'javascript']
          : ['typescript', 'javascript']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await searchMDXes<'post'>('/blog/', 'en', 'python')

      expect(result).toHaveLength(0)
    })

    it('handles case-insensitive search', async () => {
      const mockSlugs = ['post-1', 'post-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: React Tutorial
description: Learn React basics
date: 2023-01-01
updated: 2023-01-01
image:
  alt: React Tutorial
  src: /images/react.jpg
categories: [tech]
tags: [react, javascript]
---`,
        'post-2': `---
title: TypeScript Guide
description: TypeScript fundamentals
date: 2023-01-02
updated: 2023-01-02
image:
  alt: TypeScript Guide
  src: /images/typescript.jpg
categories: [tech]
tags: [typescript, javascript]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1') ? 'post-1' : 'post-2'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('React')
          ? 'React Tutorial'
          : 'TypeScript Guide'
        const description = sourceStr.includes('React')
          ? 'Learn React basics'
          : 'TypeScript fundamentals'
        const categories = ['tech']
        const tags = sourceStr.includes('React')
          ? ['react', 'javascript']
          : ['typescript', 'javascript']
        const slug = `/blog/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            categories,
            tags,
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await searchMDXes<'post'>('/blog/', 'en', 'REACT')

      expect(result).toHaveLength(1)
      expect(result[0].frontmatter.title).toBe('React Tutorial')
    })

    it('handles portfolio projects with services', async () => {
      const mockSlugs = ['project-1', 'project-2', 'project-3']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'project-1': `---
title: E-commerce Website
description: Modern e-commerce platform
date: 2023-01-01
updated: 2023-01-01
image:
  alt: E-commerce Website
  src: /images/ecommerce.jpg
client: TechCorp
services: [design, development]
deliverables: [website]
links:
  - text: View Project
    href: https://example1.com
---`,
        'project-2': `---
title: Mobile App
description: Cross-platform mobile application
date: 2023-01-02
updated: 2023-01-02
image:
  alt: Mobile App
  src: /images/mobile.jpg
client: StartupInc
services: [development]
deliverables: [mobile app]
links:
  - text: View Project
    href: https://example2.com
---`,
        'project-3': `---
title: Brand Identity
description: Complete brand identity design
date: 2023-01-03
updated: 2023-01-03
image:
  alt: Brand Identity
  src: /images/brand.jpg
client: DesignStudio
services: [design]
deliverables: [logo, guidelines]
links:
  - text: View Project
    href: https://example3.com
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('project-1')
          ? 'project-1'
          : pathStr.includes('project-2')
            ? 'project-2'
            : 'project-3'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('E-commerce')
          ? 'E-commerce Website'
          : sourceStr.includes('Mobile')
            ? 'Mobile App'
            : 'Brand Identity'
        const description = sourceStr.includes('E-commerce')
          ? 'Modern e-commerce platform'
          : sourceStr.includes('Mobile')
            ? 'Cross-platform mobile application'
            : 'Complete brand identity design'
        const services = sourceStr.includes('E-commerce')
          ? ['design', 'development']
          : sourceStr.includes('Mobile')
            ? ['development']
            : ['design']
        const slug = `/portfolio/${title.toLowerCase().replace(' ', '-')}/`

        return Promise.resolve({
          frontmatter: {
            title,
            description,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '')}.jpg`
            },
            client: 'Test Client',
            services,
            deliverables: ['website'],
            links: [{ text: 'View Project', href: 'https://example.com' }],
            type: 'project' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await searchMDXes<'project'>('/portfolio/', 'en', 'design')

      expect(result).toHaveLength(2)
      expect(result.map((r) => r.frontmatter.title)).toContain(
        'E-commerce Website'
      )
      expect(result.map((r) => r.frontmatter.title)).toContain('Brand Identity')
      expect(result.map((r) => r.frontmatter.title)).not.toContain('Mobile App')
    })

    it('handles localized content for non-English locale', async () => {
      const mockSlugs = ['post-1', 'post-2']
      vi.mocked(fs.readdir).mockResolvedValue(mockSlugs as any)

      const mockContents = {
        'post-1': `---
title: React Tutorial PL
description: Learn React basics PL
date: 2023-01-01
updated: 2023-01-01
image:
  alt: React Tutorial PL
  src: /images/react.jpg
categories: [tech]
tags: [react, javascript]
---`,
        'post-2': `---
title: TypeScript Guide PL
description: TypeScript fundamentals PL
date: 2023-01-02
updated: 2023-01-02
image:
  alt: TypeScript Guide PL
  src: /images/typescript.jpg
categories: [tech]
tags: [typescript, javascript]
---`
      }

      vi.mocked(fs.readFile).mockImplementation((path: any) => {
        const pathStr = path.toString()
        const slug = pathStr.includes('post-1') ? 'post-1' : 'post-2'
        return Promise.resolve(mockContents[slug as keyof typeof mockContents])
      })

      const { compileMDX } = await import('next-mdx-remote/rsc')
      vi.mocked(compileMDX).mockImplementation(({ source }: any) => {
        const sourceStr = source.toString()
        const title = sourceStr.includes('React')
          ? 'React Tutorial PL'
          : 'TypeScript Guide PL'
        const description = sourceStr.includes('React')
          ? 'Learn React basics PL'
          : 'TypeScript fundamentals PL'
        const slug = sourceStr.includes('React')
          ? '/pl/blog/post-1/'
          : '/pl/blog/post-2/'

        return Promise.resolve({
          frontmatter: {
            title,
            description,
            date: new Date('2023-01-01'),
            updated: new Date('2023-01-01'),
            image: {
              alt: title,
              src: `/images/${title.toLowerCase().replace(' ', '').replace(' pl', '')}.jpg`
            },
            categories: ['tech'],
            tags: sourceStr.includes('React')
              ? ['react', 'javascript']
              : ['typescript', 'javascript'],
            type: 'post' as const,
            slug
          },
          content: {} as any
        })
      })

      const result = await searchMDXes<'post'>('/blog/', 'pl', 'React')

      expect(result).toHaveLength(1)
      expect(result[0].frontmatter.title).toBe('React Tutorial PL')
      expect(result[0].frontmatter.slug).toBe('/pl/blog/post-1/')
    })
  })
})
