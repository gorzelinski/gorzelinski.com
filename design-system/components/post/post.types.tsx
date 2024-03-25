import { Locale } from '@/i18n.config'
import { FrontmatterPost } from '@/lib/mdx'
import { Dictionary } from '@/lib/dictionaries'

export type PostProps = Omit<
  FrontmatterPost,
  'categories' | 'tags' | 'type' | 'updated'
> & {
  lang: Locale
  dictionary: Dictionary['component']['post']
}
