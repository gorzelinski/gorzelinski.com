import type { Dictionary, Locale, Post } from '@/types'

export type PostProps = {
  lang: Locale
  dictionary: Dictionary['component']['post']
  frontmatter: Post
  priority?: boolean
}
