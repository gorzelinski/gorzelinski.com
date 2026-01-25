import { ReactElement, JSXElementConstructor } from 'react'
import { ReadTimeResults } from 'reading-time'

export type Frontmatter = {
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

export type MDX = {
  frontmatter: Post | Project | Page
  content: ReactElement<any, string | JSXElementConstructor<any>>
}

export type MDXTypes = Post['type'] | Project['type'] | Page['type']

export type Pagination = {
  title: string
  slug: string
} | null
