import { Locale } from '@/i18n.config'
import { Dictionary, Post } from '@/scripts'

export type PostProps = Pick<
  Post,
  'image' | 'date' | 'readingTime' | 'title' | 'description' | 'slug'
> & {
  lang: Locale
  dictionary: Dictionary['component']['post']
}
