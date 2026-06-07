import type { MDX } from '@/types'
import { countSharedItems } from '@/lib'

export function countSharedFrontmatter(
  first: MDX['frontmatter'],
  second: MDX['frontmatter']
): number {
  let total = 0

  if ('categories' in first && 'categories' in second) {
    total += countSharedItems(first.categories, second.categories)
  }

  if ('tags' in first && 'tags' in second) {
    total += countSharedItems(first.tags, second.tags)
  }

  if ('services' in first && 'services' in second) {
    total += countSharedItems(first.services, second.services)
  }

  return total
}

export function getSearchableTextFromFrontmatter(frontmatter: {
  title: string
  description: string
  categories?: string[]
  tags?: string[]
  services?: string[]
}) {
  return [
    frontmatter.title,
    frontmatter.description,
    ...(frontmatter.categories ?? []),
    ...(frontmatter.tags ?? []),
    ...(frontmatter.services ?? [])
  ]
    .join(' ')
    .toLowerCase()
}
