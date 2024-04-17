import { Locale } from '@/i18n.config'
import { Post } from '@/lib/mdx'
import { Dictionary } from '@/lib/dictionaries'

export type PostProps = Omit<
  Post,
  'categories' | 'tags' | 'type' | 'updated'
> & {
  lang: Locale
  dictionary: Dictionary['component']['post']
}
