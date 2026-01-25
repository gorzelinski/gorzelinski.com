import { Dictionary } from '@/scripts'
import { Locale } from '@/i18n.config'
import type { Project } from '@/types'

export type ProjectProps = Pick<
  Project,
  'deliverables' | 'title' | 'description' | 'image' | 'slug'
> & {
  lang: Locale
  dictionary: Dictionary['component']['project']
  priority?: boolean
}
