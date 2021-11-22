export const getInitialTheme = () => {
  const savedPreference = window.localStorage.getItem("theme")
  const hasSavedPreference = typeof savedPreference === "string"

  if (hasSavedPreference) {
    return JSON.parse(savedPreference)
  }

  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const hasOsPreference = typeof mql.matches === "boolean"

  if (hasOsPreference) {
    return mql.matches ? "dark" : "light"
  }

  return "light"
}
