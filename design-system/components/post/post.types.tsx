import { Locale } from '@/i18n.config'
import { Post } from '@/lib/mdx'
import { Dictionary } from '@/lib/dictionaries'

export type PostProps = Pick<
  Post,
  'image' | 'date' | 'readingTime' | 'title' | 'description' | 'slug'
> & {
  lang: Locale
  dictionary: Dictionary['component']['post']
}
