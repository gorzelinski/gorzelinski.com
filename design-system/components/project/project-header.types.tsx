import type { Dictionary, Project } from '@/types'

export type ProjectHeaderProps = {
  slug: string
  frontmatter: Project
  dictionary: Dictionary['page']['portfolioProject']
}
