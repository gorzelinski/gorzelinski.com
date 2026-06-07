export function countSharedItems<T>(a: T[], b: T[]): number {
  return a.filter((item) => b.includes(item)).length
}
