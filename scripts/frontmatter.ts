import type { Locale, MDX, MDXTypes, Pages } from '@/types'
import readingTime from 'reading-time'
import { countSharedItems, localizeSlug } from '@/lib'

const RELATED_FRONTMATTER_WEIGHTS = {
  category: 1,
  tag: 3,
  service: 3,
  deliverable: 1
} as const

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

export function scoreSharedFrontmatter(
  first: MDX['frontmatter'],
  second: MDX['frontmatter']
): number {
  let score = 0

  if ('categories' in first && 'categories' in second) {
    score +=
      countSharedItems(first.categories, second.categories) *
      RELATED_FRONTMATTER_WEIGHTS.category
  }

  if ('tags' in first && 'tags' in second) {
    score +=
      countSharedItems(first.tags, second.tags) *
      RELATED_FRONTMATTER_WEIGHTS.tag
  }

  if ('services' in first && 'services' in second) {
    score +=
      countSharedItems(first.services, second.services) *
      RELATED_FRONTMATTER_WEIGHTS.service
  }

  if ('deliverables' in first && 'deliverables' in second) {
    score +=
      countSharedItems(first.deliverables, second.deliverables) *
      RELATED_FRONTMATTER_WEIGHTS.deliverable
  }

  return score
}

export function enrichFrontmatter<Type extends MDXTypes>(
  frontmatter: Extract<MDX['frontmatter'], { type: Type }>,
  options: {
    page: Pages
    slug: string
    lang: Locale
    file: string
  }
) {
  frontmatter.readingTime = readingTime(options.file)
  frontmatter.slug = localizeSlug(options.page, options.slug, options.lang)
  frontmatter.date = new Date(frontmatter.date)
  frontmatter.updated = new Date(frontmatter.updated)

  return frontmatter
}

export function isFrontmatterMatchingQuery(
  frontmatter: {
    title: string
    description: string
    categories?: string[]
    tags?: string[]
    services?: string[]
  },
  query: string
) {
  const searchTerms = query.toLowerCase().split(' ').filter(Boolean)
  const searchableText = getSearchableTextFromFrontmatter(frontmatter)

  return searchTerms.every((term) => searchableText.includes(term))
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
