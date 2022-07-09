import React, { createContext, useEffect, useState } from "react"
import { MDXProvider } from "@mdx-js/react"

import { setToLS } from "../utils"
import components from "./mapping"
import GlobalStyles from "./global-styles"

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(undefined)

  const saveTheme = preference => {
    setTheme(preference)
    setToLS("theme", preference)
    setClass(preference)
  }

  useEffect(() => {
    const root = document.documentElement
    const initialThemePreference = root.classList.value
    setTheme(initialThemePreference)
  }, [])

  const setClass = newClass => {
    const oldClass = document.documentElement.classList.value
    document.documentElement.classList.replace(oldClass, newClass)
  }

  return (
    <ThemeContext.Provider value={{ theme, saveTheme }}>
      <GlobalStyles />
      <MDXProvider components={components}>{children}</MDXProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
