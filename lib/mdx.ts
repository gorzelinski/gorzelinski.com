import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import { Pluggable } from 'unified'
import readingTime, { ReadTimeResults } from 'reading-time'
import { LINKS } from '@/constants'
import { getMDXComponents } from '@/mdx-components'
import { Locale } from '@/i18n.config'
import { localizeFileName } from './i18n'

type Pages = (typeof LINKS)['blog' | 'portfolio']

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
  frontmatter: Post | Project
  content: string
}

type MDXTypes = Post['type'] | Project['type']

const root = process.cwd()

export async function getMDX<Type extends MDXTypes>(
  page: Pages,
  slug: string,
  lang: Locale
) {
  const filePath = path.join(
    root,
    LINKS.content,
    page,
    slug,
    localizeFileName(lang)
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
  frontmatter.slug = slug

  return {
    frontmatter,
    content
  }
}

export async function getMDXes<Type extends MDXTypes>(
  page: (typeof LINKS)['blog' | 'portfolio'],
  lang: Locale,
  number?: number
) {
  const directories = fs.readdirSync(path.join(root, LINKS.content, page))
  const mdxes = await Promise.all(
    directories.map((slug) => getMDX<Type>(page, slug, lang))
  )

  return mdxes
    .sort((prev, next) => {
      const prevDate = new Date(prev.frontmatter.date).getTime()
      const nextDate = new Date(next.frontmatter.date).getTime()
      return nextDate - prevDate
    })
    .filter((_, index) => index < (number ?? mdxes.length))
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
