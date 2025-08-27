import { describe, expect, it, vi, beforeEach } from 'vitest'
import fs from 'fs/promises'
import { getMDX } from '../mdx'

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
})
