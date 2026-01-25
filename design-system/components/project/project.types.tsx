import { Dictionary } from '@/scripts'
import type { Locale, Project } from '@/types'

export type ProjectProps = Pick<
  Project,
  'deliverables' | 'title' | 'description' | 'image' | 'slug'
> & {
  lang: Locale
  dictionary: Dictionary['component']['project']
  priority?: boolean
}
