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
    localTheme ? setTheme(localTheme) : setTheme(themes.light)
    setThemeLoaded(true)
  }, [])

  return { theme, themes, themeLoaded, setPreferredTheme }
}
