import React, { useState, useEffect, createContext } from "react"
import { MDXProvider } from "@mdx-js/react"

import { Background, Wrapper } from "../elements"
import { setToLS } from "../utils"
import GlobalStyles from "../themes/global-styles"
import components from "../templates/mapping"
import Navbar from "./navbar"
import Footer from "./footer"

export const ThemeContext = createContext()

const Layout = ({ children, location }) => {
  const [theme, setTheme] = useState(undefined)

  useEffect(() => {
    const root = document.documentElement
    const initialThemePreference = root.classList.value
    setTheme(initialThemePreference)
  }, [])

  const setClass = newClass => {
    const oldClass = document.documentElement.classList.value
    document.documentElement.classList.replace(oldClass, newClass)
  }

  const saveTheme = preference => {
    setTheme(preference)
    setToLS("theme", preference)
    setClass(preference)
  }

  return (
    <ThemeContext.Provider value={{ theme, saveTheme }}>
      <GlobalStyles />
      <MDXProvider components={components}>
        <Background data-testid="background">
          <Wrapper $global>
            <Navbar location={location}></Navbar>
            <main>{children}</main>
            <Footer></Footer>
          </Wrapper>
        </Background>
      </MDXProvider>
    </ThemeContext.Provider>
  )
}

export default Layout
