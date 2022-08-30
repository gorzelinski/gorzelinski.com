import { useCallback, useEffect, useState } from "react"

import { setToLS } from "../utils"

export const useTheme = () => {
  const [theme, setTheme] = useState(undefined)

  const saveTheme = useCallback(preference => {
    const setClass = newClass => {
      const oldClass = document.documentElement.classList.value
      document.documentElement.classList.replace(oldClass, newClass)
    }

    setTheme(preference)
    setToLS("theme", preference)
    setClass(preference)
  }, [])

  useEffect(() => {
    const initialThemePreference = document.documentElement.classList.value
    setTheme(initialThemePreference)

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
    const listener = event => {
      saveTheme(event.matches ? "dark" : "light")
    }
    mediaQueryList.addEventListener("change", listener)
    return () => {
      mediaQueryList.removeEventListener("change", listener)
    }
  }, [saveTheme])

  return { theme, saveTheme }
}
