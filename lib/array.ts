export function countSharedItems<T>(a: T[], b: T[]): number {
  const uniqueItems = new Set(a)
  const otherItems = new Set(b)

  let count = 0

  for (const item of uniqueItems) {
    if (otherItems.has(item)) {
      count++
    }
  }

  return count
}
