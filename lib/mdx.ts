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

type Frontmatter = {
  slug: string
  title: string
  description: string
  readingTime: ReadTimeResults
  date: Date
  updated: Date
  image: {
    alt: string
    caption: string
    src: string
  }
}

type Post = Frontmatter & {
  categories: string[]
  tags: string[]
  type: 'post'
}

type Options = Post

type MDX = {
  frontmatter: Options
  content: string
}

const root = process.cwd()

export async function getMDX(
  page: (typeof LINKS)['blog' | 'portfolio'],
  slug: string,
  locale: Locale
) {
  const filePath = path.join(
    root,
    LINKS.content,
    page,
    slug,
    localizeFileName(locale)
  )
  const file = fs.readFileSync(filePath, 'utf-8')

  const { frontmatter, content } = await compileMDX<MDX['frontmatter']>({
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

export async function getMDXes(
  page: (typeof LINKS)['blog' | 'portfolio'],
  locale: Locale
) {
  const directories = fs.readdirSync(path.join(root, LINKS.content, page))
  const mdxes = await Promise.all(
    directories.map((slug) => getMDX(page, slug, locale))
  )

  return mdxes.sort((prev, next) => {
    const prevDate = new Date(prev.frontmatter.date).getTime()
    const nextDate = new Date(next.frontmatter.date).getTime()
    return nextDate - prevDate
  })
}
