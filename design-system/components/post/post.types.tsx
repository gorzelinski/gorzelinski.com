import type { Locale, Post } from '@/types'
import { Dictionary } from '@/scripts'

export type PostProps = Pick<
  Post,
  'image' | 'date' | 'readingTime' | 'title' | 'description' | 'slug'
> & {
  lang: Locale
  dictionary: Dictionary['component']['post']
  priority?: boolean
}
