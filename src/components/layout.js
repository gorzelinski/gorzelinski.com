import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import { ChevronForward } from "@styled-icons/ionicons-solid"
import { useTheme, usePortfolioProjects } from "../hooks"
import {
  Background,
  Button,
  Figure,
  H1,
  Header,
  Hero,
  Icon,
  Navigation,
  P,
  Section,
  Wrapper,
} from "../elements"
import Logo from "./logo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const { themes, theme, themeLoaded, setPreferredTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)
  const { projects } = usePortfolioProjects()
  const images = projects.allMarkdownRemark.nodes.map(
    node => node.frontmatter.featuredImage
  )

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
          <Background>
            <Wrapper global>
              <Header>
                <Navigation>
                  <Logo></Logo>
                  {Object.keys(themes).length > 0 &&
                    Object.values(themes).map(theme => (
                      <Button
                        $nav
                        as="button"
                        theme={selectedTheme}
                        key={theme.id}
                        onClick={() => setPreferredTheme(theme)}
                      >
                        {theme.name}
                      </Button>
                    ))}
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
              <Hero>
                <div>
                  <H1>
                    Tworzę <br />
                    rzeczy w internecie
                  </H1>
                  <P>
                    The purpose of lorem ipsum is to create a natural looking
                    block of text (sentence, paragraph, page, etc.) that doesn't
                    distract from the layout. A practice not without
                    controversy, laying out pages with meaningless filler text
                    can be very useful when the focus is meant to be on design,
                    not content.
                  </P>
                  <Button $text $first to="/#kontakt">
                    Stwórzmy coś razem
                    <Icon>
                      <ChevronForward></ChevronForward>
                    </Icon>
                  </Button>
                </div>
              </Hero>
              <Section>
                {images.map(image => {
                  const data = getImage(image.src)
                  return (
                    <Figure $half $golden>
                      <GatsbyImage image={data} alt={image.alt}></GatsbyImage>
                    </Figure>
                  )
                })}
              </Section>
              <div className="global-wrapper" data-is-root-path={isRootPath}>
                <header className="global-header">{header}</header>
                <main>{children}</main>
                <footer>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
              </div>
            </Wrapper>
          </Background>
        </ThemeProvider>
      )}
    </>
  )
}

export default Layout
