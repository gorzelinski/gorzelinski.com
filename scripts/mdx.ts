import fs from 'fs/promises'
import path from 'path'
import { unstable_cache } from 'next/cache'
import { JSXElementConstructor, ReactElement } from 'react'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import { Pluggable } from 'unified'
import readingTime, { ReadTimeResults } from 'reading-time'
import { LINKS, Pages } from '@/constants'
import { Locale } from '@/i18n.config'
import { localizeFileName, localizePath } from '@/lib'
import { getMDXComponents } from '@/mdx-components'
import { generatePlaiceholder } from './image'

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
    blur: string
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
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeMdxCodeProps as Pluggable]
      }
    }
  })

  frontmatter.readingTime = readingTime(file)
  frontmatter.slug = path.normalize(localizePath(`${page}${slug}/`, lang))
  frontmatter.image.blur = await generatePlaiceholder(
    page,
    slug,
    frontmatter.image.src
  )

  return {
    frontmatter,
    content
  }
}

export const getCachedMDX = unstable_cache(
  async <Type extends MDXTypes>(page: Pages, slug: string, lang: Locale) =>
    getMDX<Type>(page, slug, lang)
)

export async function getSlugs(
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
  const slugs = await getSlugs(page)
  const mdxes = await Promise.all(
    slugs.map((slug) => getCachedMDX<Type>(page, slug, lang))
  )
  const sorted = sort === 'none' ? mdxes : sortMDXes<Type>(mdxes, sort)
  const filtered =
    number === 'all' ? sorted : sorted.filter((_, index) => index < number)

  return filtered
}

export async function createPagination(
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

export async function getRelatedPosts(
  post: Post,
  lang: Locale,
  number: number | 'all' = 'all'
) {
  const posts = await getMDXes<'post'>('/blog/', lang)

  const related = posts.filter((relatedPost) => {
    const hasRelatedCategory = relatedPost.frontmatter.categories.some(
      (category) => post.categories.includes(category)
    )
    const hasRelatedTag = relatedPost.frontmatter.tags.some((tag) =>
      post.tags.includes(tag)
    )
    const isDuplicate = relatedPost.frontmatter.slug === post.slug

    return !isDuplicate && (hasRelatedCategory || hasRelatedTag)
  })

  const filtered =
    number === 'all' ? related : related.filter((_, index) => index < number)

  return filtered
}
