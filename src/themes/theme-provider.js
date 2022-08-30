import React, { createContext } from "react"
import { MDXProvider } from "@mdx-js/react"

import { useTheme } from "../hooks/useTheme"
import components from "./mapping"
import GlobalStyles from "./global-styles"

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const { theme, saveTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, saveTheme }}>
      <GlobalStyles />
      <MDXProvider components={components}>{children}</MDXProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
