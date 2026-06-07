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
