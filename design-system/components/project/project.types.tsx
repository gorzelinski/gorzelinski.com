import { Project } from '@/lib/mdx'
import { Locale } from '@/i18n.config'
import { Dictionary } from '@/lib/dictionaries'

export type ProjectProps = Omit<
  Project,
  'client' | 'services' | 'links' | 'date' | 'updated' | 'readingTime' | 'type'
> & {
  lang: Locale
  dictionary: Dictionary['component']['project']
}
