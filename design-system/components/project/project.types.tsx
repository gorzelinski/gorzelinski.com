import type { Dictionary, Locale, Project } from '@/types'

export type ProjectProps = {
  lang: Locale
  frontmatter: Project
  dictionary: Dictionary['component']['project']
  priority?: boolean
}
