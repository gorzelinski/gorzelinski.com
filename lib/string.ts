export function capitalize(string: string): string {
  return string[0].toUpperCase() + string.slice(1)
}

export function slugify(string: string): string {
  return string
    .toLowerCase()
    .replace(/\u0142/g, 'l')
    .normalize('NFD')
    .replace(/\./g, ' ')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
