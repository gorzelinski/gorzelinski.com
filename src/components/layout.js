import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { useTheme } from "../hooks"

const StyledButton = styled.button`
  background-color: ${props => props.theme.color.primary.base};
  color: ${props => props.theme.color.text.lightness100};
  padding: ${props => props.theme.space.xs};
  border-radius: ${props => props.theme.space.xs};
`

const StyledH1 = styled.h1`
  color: ${props => props.theme.color.text.base};
  background: ${props => props.theme.color.background};
`

const Layout = ({ location, title, children }) => {
  const { themes, theme, themeLoaded, setPreferredTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  useEffect(() => {
    setSelectedTheme(theme)
  }, [themeLoaded, theme])

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          {Object.keys(themes).length > 0 &&
            Object.values(themes).map(theme => (
              <StyledButton
                theme={theme}
                key={theme.id}
                onClick={() => setPreferredTheme(theme)}
              >
                {theme.name}
              </StyledButton>
            ))}
          <StyledH1>To jest mój nagłówek wykorzystujący wybrany motyw</StyledH1>
          <div className="global-wrapper" data-is-root-path={isRootPath}>
            <header className="global-header">{header}</header>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
          </div>
        </ThemeProvider>
      )}
    </>
  )
}

export default Layout
