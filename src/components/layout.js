import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"

import { Background, Button, Header, Navigation, Wrapper } from "../elements"
import { useTheme } from "../hooks"
import Logo from "./logo"
import Footer from "./footer"

import ThemeSwitcher from "./theme-switcher"

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
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <Background>
            <Wrapper global>
              <Header>
                <Navigation>
                  <Logo></Logo>
                  <ThemeSwitcher
                    data={{
                      themes,
                      setPreferredTheme,
                      selectedTheme,
                      themeLoaded,
                    }}
                  ></ThemeSwitcher>
                </Navigation>
                <Navigation $main>
                  <Button $nav to="/portfolio">
                    Portfolio
                  </Button>
                  <Button $nav to="/o-mnie">
                    O mnie
                  </Button>
                  <Button $nav to="/blog">
                    Blog
                  </Button>
                  <Button $primary to="/#kontakt">
                    Kontakt
                  </Button>
                </Navigation>
              </Header>
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
        </ThemeProvider>
      )}
    </>
  )
}

export default Layout
