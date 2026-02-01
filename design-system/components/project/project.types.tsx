import type { Dictionary, Locale, Project } from '@/types'

export type ProjectProps = Pick<
  Project,
  'deliverables' | 'title' | 'description' | 'image' | 'slug'
> & {
  lang: Locale
  dictionary: Dictionary['component']['project']
  priority?: boolean
}
