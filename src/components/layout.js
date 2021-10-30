import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"

import components from "../templates/mapping"
import { Background, Wrapper } from "../elements"
import { useTheme } from "../hooks"
import Navbar from "./navbar"
import Subscription from "./subscription"
import Contact from "./contact"

const Layout = ({ children }) => {
  const { themes, theme, themeLoaded, setPreferredTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  useEffect(() => {
    setSelectedTheme(theme)
  }, [themeLoaded, theme])

  return (
    themeLoaded && (
      <ThemeProvider theme={selectedTheme}>
        <MDXProvider components={components}>
          <Background>
            <Wrapper $global>
              <Navbar
                data={{
                  themes,
                  setPreferredTheme,
                  selectedTheme,
                  themeLoaded,
                }}
              ></Navbar>
              <main>
                {children}
                <Subscription></Subscription>
              </main>
              <Contact></Contact>
            </Wrapper>
          </Background>
        </MDXProvider>
      </ThemeProvider>
    )
  )
}

export default Layout
