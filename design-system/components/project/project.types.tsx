import { Project } from '@/lib/mdx'
import { Locale } from '@/i18n.config'
import { Dictionary } from '@/lib/dictionaries'

export type ProjectProps = Pick<
  Project,
  'deliverables' | 'title' | 'description' | 'image' | 'slug'
> & {
  lang: Locale
  dictionary: Dictionary['component']['project']
}
