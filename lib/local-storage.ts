export function setToLS(key: string, value: string) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getFromLS(key: string): string | undefined {
  const value = localStorage.getItem(key)

  if (value) return JSON.parse(value)
}
