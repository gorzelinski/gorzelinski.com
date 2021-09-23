import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"

import components from "../templates/mapping"
import { Background, Wrapper } from "../elements"
import { useTheme } from "../hooks"
import Navbar from "./navbar"
import Footer from "./footer"

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
            <Wrapper global>
              <Navbar
                data={{
                  themes,
                  setPreferredTheme,
                  selectedTheme,
                  themeLoaded,
                }}
              ></Navbar>
              <main>{children}</main>
              <Footer></Footer>
            </Wrapper>
          </Background>
        </MDXProvider>
      </ThemeProvider>
    )
  )
}

export default Layout
