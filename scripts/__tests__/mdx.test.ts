import { describe, expect, it, vi, beforeEach } from 'vitest'
import fs from 'fs/promises'
import { getMDX, getMDXSlugs, getMDXes } from '../mdx'

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
  })
})
