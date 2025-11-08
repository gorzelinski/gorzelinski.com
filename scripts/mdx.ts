import fs from 'fs/promises'
import path from 'path'
import { JSXElementConstructor, ReactElement } from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import { Pluggable } from 'unified'
import readingTime, { ReadTimeResults } from 'reading-time'
import { LINKS, Pages } from '@/constants'
import { Locale } from '@/i18n.config'
import { localizeFileName, localizePath } from '@/lib'
import { getMDXComponents } from '@/mdx-components'
import { unstable_cache } from 'next/cache'

type Frontmatter = {
  slug: string
  title: string
  description: string
  readingTime: ReadTimeResults
  date: Date
  updated: Date
  image: {
    alt: string
    src: string
    caption?: string
  }
}

export type Page = Frontmatter & {
  type: 'page'
}

export type Post = Frontmatter & {
  categories: string[]
  tags: string[]
  type: 'post'
}

export type Project = Frontmatter & {
  client: string
  services: string[]
  deliverables: string[]
  links: [{ text: string; href: string }]
  type: 'project'
}

type MDX = {
  frontmatter: Post | Project | Page
  content: ReactElement<any, string | JSXElementConstructor<any>>
}

type MDXTypes = Post['type'] | Project['type'] | Page['type']

export type Pagination = {
  title: string
  slug: string
} | null

const root = process.cwd()

export async function getMDX<Type extends MDXTypes>(
  page: Pages,
  slug: string,
  lang: Locale
) {
  const filePath = path.normalize(
    path.join(
      root,
      LINKS.content,
      page,
      `${slug}/`,
      localizeFileName('index', 'mdx', lang)
    )
  )
  const file = await fs.readFile(filePath, 'utf-8')

  const { frontmatter, content } = await compileMDX<
    Extract<MDX['frontmatter'], { type: Type }>
  >({
    source: file,
    components: getMDXComponents(page, slug),
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        format: 'mdx',
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
          rehypeKatex as Pluggable,
          rehypeMdxCodeProps as Pluggable,
          rehypeUnwrapImages as Pluggable
        ]
      }
    }
  })
  frontmatter.readingTime = readingTime(file)
  frontmatter.slug = path.normalize(localizePath(`${page}${slug}/`, lang))
  frontmatter.date = new Date(frontmatter.date)
  frontmatter.updated = new Date(frontmatter.updated)

  return {
    frontmatter,
    content
  }
}

export const getCachedMDX = unstable_cache(
  async <Type extends MDXTypes>(page: Pages, slug: string, lang: Locale) =>
    getMDX<Type>(page, slug, lang)
)

export async function getMDXSlugs(
  page: Extract<Pages, (typeof LINKS)['blog' | 'portfolio']>
) {
  const slugs = await fs.readdir(path.join(root, LINKS.content, page))

  return slugs
}

function sortMDXes<Type extends MDXTypes>(
  mdxes: {
    frontmatter: Extract<MDX['frontmatter'], { type: Type }>
    content: ReactElement<any, string | JSXElementConstructor<any>>
  }[],
  sort: 'asc' | 'desc'
) {
  switch (sort) {
    case 'desc':
      return mdxes.sort((prev, next) => {
        const prevDate = new Date(prev.frontmatter.date).getTime()
        const nextDate = new Date(next.frontmatter.date).getTime()
        return nextDate - prevDate
      })
    case 'asc':
      return mdxes.sort((prev, next) => {
        const prevDate = new Date(prev.frontmatter.date).getTime()
        const nextDate = new Date(next.frontmatter.date).getTime()
        return prevDate - nextDate
      })
    default:
      return mdxes.sort((prev, next) => {
        const prevDate = new Date(prev.frontmatter.date).getTime()
        const nextDate = new Date(next.frontmatter.date).getTime()
        return nextDate - prevDate
      })
  }
}

export async function getMDXes<Type extends MDXTypes>(
  page: Extract<Pages, (typeof LINKS)['blog' | 'portfolio']>,
  lang: Locale,
  number: number | 'all' = 'all',
  sort: 'asc' | 'desc' | 'none' = 'none'
) {
  const slugs = await getMDXSlugs(page)
  const mdxes = await Promise.all(
    slugs.map((slug) => getCachedMDX<Type>(page, slug, lang))
  )
  const sorted = sort === 'none' ? mdxes : sortMDXes<Type>(mdxes, sort)
  const filtered =
    number === 'all' ? sorted : sorted.filter((_, index) => index < number)

  return filtered
}

export async function createMDXPagination(
  page: Extract<Pages, (typeof LINKS)['blog' | 'portfolio']>,
  slug: string,
  lang: Locale
) {
  const mdxes = await getMDXes(page, lang, 'all', 'desc')
  const currentIndex = mdxes.findIndex(
    (mdx) =>
      mdx.frontmatter.slug ===
      path.normalize(localizePath(`${page}${slug}/`, lang))
  )

  if (currentIndex === -1) {
    return {
      prev: null,
      next: null
    }
  }

  const prevMDX =
    currentIndex === mdxes.length - 1 ? null : mdxes[currentIndex + 1]
  const nextMDX = currentIndex === 0 ? null : mdxes[currentIndex - 1]

  const prev = prevMDX && {
    title: prevMDX.frontmatter.title,
    slug: prevMDX.frontmatter.slug
  }

  const next = nextMDX && {
    title: nextMDX.frontmatter.title,
    slug: nextMDX.frontmatter.slug
  }

  return {
    prev,
    next
  }
}

export async function getRelatedMDXes<Type extends MDXTypes>(
  mdx: Type extends 'post' ? Post : Project,
  page: Extract<Pages, (typeof LINKS)['blog' | 'portfolio']>,
  lang: Locale,
  number: number | 'all' = 'all'
) {
  const mdxes = await getMDXes<Type>(page, lang)

  const related = mdxes.filter((relatedMDX) => {
    const hasRelatedCategory =
      'categories' in relatedMDX.frontmatter &&
      'categories' in mdx &&
      relatedMDX.frontmatter.categories.some((category) =>
        mdx.categories.includes(category)
      )
    const hasRelatedTag =
      'tags' in relatedMDX.frontmatter &&
      'tags' in mdx &&
      relatedMDX.frontmatter.tags.some((tag) => mdx.tags.includes(tag))

    const hasRelatedService =
      'services' in relatedMDX.frontmatter &&
      'services' in mdx &&
      relatedMDX.frontmatter.services.some((service) =>
        mdx.services.includes(service)
      )

    const isDuplicate = relatedMDX.frontmatter.slug === mdx.slug

    return (
      !isDuplicate && (hasRelatedCategory || hasRelatedTag || hasRelatedService)
    )
  })

  const filtered =
    number === 'all' ? related : related.filter((_, index) => index < number)

  return filtered
}

export async function searchMDXes<Type extends MDXTypes>(
  page: Extract<Pages, (typeof LINKS)['blog' | 'portfolio']>,
  lang: Locale,
  query: string
) {
  const mdxes = await getMDXes<Type>(page, lang, 'all', 'desc')

  if (!query) return mdxes

  const searchTerms = query.toLowerCase().split(' ').filter(Boolean)

  return mdxes.filter(({ frontmatter }) => {
    const searchableText = [
      frontmatter.title,
      frontmatter.description,
      ...('categories' in frontmatter ? frontmatter.categories : []),
      ...('tags' in frontmatter ? frontmatter.tags : []),
      ...('services' in frontmatter ? frontmatter.services : [])
    ]
      .join(' ')
      .toLowerCase()

    return searchTerms.every((term) => searchableText.includes(term))
  })
}
