import { useEffect, useState } from "react"
import { setToLS, getFromLS } from "../utils"
import * as themes from "../themes"

export const useTheme = () => {
  const [theme, setTheme] = useState(themes.light)
  const [themeLoaded, setThemeLoaded] = useState(false)

  const setPreferredTheme = preference => {
    setToLS("preferred-theme", preference)
    setTheme(preference)
  }

  useEffect(() => {
    const localTheme = getFromLS("preferred-theme")
    const isLocalThemeUpToDate =
      localTheme &&
      Object.values(themes).some(
        theme => JSON.stringify(theme) === JSON.stringify(localTheme)
      )
    const upToDateLocalTheme =
      localTheme &&
      Object.values(themes).find(theme => theme.name === localTheme.name)

    if (isLocalThemeUpToDate) {
      setTheme(localTheme)
    } else if (upToDateLocalTheme) {
      setPreferredTheme(upToDateLocalTheme)
    } else setPreferredTheme(themes.light)
    setThemeLoaded(true)
  }, [])

  return { theme, themes, themeLoaded, setPreferredTheme }
}
