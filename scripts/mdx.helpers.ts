import type { MDX } from '@/types'
import { countSharedItems } from '@/lib'

type RelatedMetadata = MDX['frontmatter']

export function countSharedMetadata(
  a: RelatedMetadata,
  b: RelatedMetadata
): number {
  let total = 0

  if ('categories' in a && 'categories' in b) {
    total += countSharedItems(a.categories, b.categories)
  }

  if ('tags' in a && 'tags' in b) {
    total += countSharedItems(a.tags, b.tags)
  }

  if ('services' in a && 'services' in b) {
    total += countSharedItems(a.services, b.services)
  }

  return total
}

export function getSearchableText(frontmatter: {
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
