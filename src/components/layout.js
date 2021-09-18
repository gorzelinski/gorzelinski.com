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

  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath
  // let header

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

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
              {/* <div className="global-wrapper" data-is-root-path={isRootPath}>
                <header className="global-header">{header}</header>
                <main>{children}</main>
                <footer>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
              </div> */}
            </Wrapper>
          </Background>
        </MDXProvider>
      </ThemeProvider>
    )
  )
}

export default Layout
