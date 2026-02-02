import type { Dictionary, Locale, Post } from '@/types'

export type PostHeaderProps = {
  lang: Locale
  slug: string
  frontmatter: Post
  dictionary: Dictionary['component']['post']
}
