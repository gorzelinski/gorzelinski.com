import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import { Pluggable } from 'unified'
import readingTime, { ReadTimeResults } from 'reading-time'
import { LINKS, Pages } from '@/constants'
import { Locale } from '@/i18n.config'
import { localizeFileName, localizePath } from '@/lib'
import { getMDXComponents } from '@/mdx-components'

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
  content: string
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
      slug,
      localizeFileName('index', 'mdx', lang)
    )
  )
  const file = fs.readFileSync(filePath, 'utf-8')

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

  return {
    frontmatter,
    content
  }
}

export function getSlugs(
  page: Extract<Pages, (typeof LINKS)['blog' | 'portfolio']>
) {
  const slugs = fs
    .readdirSync(path.join(root, LINKS.content, page))
    .map((slug) => `/${slug}/`)

  return slugs
}

export async function getMDXes<Type extends MDXTypes>(
  page: Extract<Pages, (typeof LINKS)['blog' | 'portfolio']>,
  lang: Locale,
  number?: number
) {
  const slugs = getSlugs(page)
  const mdxes = await Promise.all(
    slugs.map((slug) => getMDX<Type>(page, slug, lang))
  )

  return mdxes
    .sort((prev, next) => {
      const prevDate = new Date(prev.frontmatter.date).getTime()
      const nextDate = new Date(next.frontmatter.date).getTime()
      return nextDate - prevDate
    })
    .filter((_, index) => index < (number ?? mdxes.length))
}

export async function createPagination(
  page: Extract<Pages, (typeof LINKS)['blog' | 'portfolio']>,
  slug: string,
  lang: Locale
) {
  const mdxes = await getMDXes(page, lang)
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
  number?: number
) {
  const allPosts = await getMDXes<'post'>('/blog/', lang)

  const relatedPosts = allPosts.filter((relatedPost) => {
    const hasRelatedCategory = relatedPost.frontmatter.categories.some(
      (category) => post.categories.includes(category)
    )
    const hasRelatedTag = relatedPost.frontmatter.tags.some((tag) =>
      post.tags.includes(tag)
    )
    const isDuplicate = relatedPost.frontmatter.slug === post.slug

    return !isDuplicate && (hasRelatedCategory || hasRelatedTag)
  })

  return relatedPosts.filter(
    (_, index) => index < (number ?? relatedPosts.length)
  )
}
