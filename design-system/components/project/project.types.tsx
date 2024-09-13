import { Dictionary, Project } from '@/scripts'
import { Locale } from '@/i18n.config'

export type ProjectProps = Pick<
  Project,
  'deliverables' | 'title' | 'description' | 'image' | 'slug'
> & {
  lang: Locale
  dictionary: Dictionary['component']['project']
}
