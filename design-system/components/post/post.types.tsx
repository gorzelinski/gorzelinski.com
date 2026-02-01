import type { Dictionary, Locale, Post } from '@/types'

export type PostProps = Pick<
  Post,
  'image' | 'date' | 'readingTime' | 'title' | 'description' | 'slug'
> & {
  lang: Locale
  dictionary: Dictionary['component']['post']
  priority?: boolean
}
