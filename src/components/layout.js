import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import { ChevronForward } from "@styled-icons/ionicons-solid"
import { useTheme, usePortfolioProjects, useBlogPosts, useBio } from "../hooks"
import {
  A,
  Background,
  Button,
  Card,
  Figcaption,
  Figure,
  H1,
  H2,
  H3,
  H4,
  Header,
  Hero,
  Icon,
  Navigation,
  P,
  Section,
  Small,
  Wrapper,
} from "../elements"
import Logo from "./logo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Project from "./project"
import Post from "./post"

const Layout = ({ location, title, children }) => {
  const { themes, theme, themeLoaded, setPreferredTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)
  const { projects } = usePortfolioProjects()
  const { posts } = useBlogPosts()
  const { bio } = useBio()
  const profilePicture = getImage(bio.image)

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
                <Header>
                  <H2>Ostatnie projekty</H2>
                  <Button $text $last>
                    Wszystkie projekty{" "}
                    <Icon>
                      <ChevronForward></ChevronForward>
                    </Icon>
                  </Button>
                </Header>
                {projects.allMarkdownRemark.nodes.map(project => (
                  <Project data={project}></Project>
                ))}
              </Section>
              <Section>
                <Figure $half $portrait>
                  <GatsbyImage
                    image={profilePicture}
                    alt={`${bio.site.siteMetadata?.author.name} - zdjęcie profilowe`}
                  ></GatsbyImage>
                  <Figcaption>
                    W rzeczywistości jestem przyjemniejszy niż wyglądam na tym
                    zdjęciu. Przyrzekam!
                  </Figcaption>
                </Figure>
                <Card $half>
                  <Small as="p" $top>
                    Cześć, nazywam się
                  </Small>
                  <H2>{bio.site.siteMetadata?.author.name}</H2>
                  <P>{bio.site.siteMetadata?.author.summary}</P>
                  <Button $text $first to="/o-mnie">
                    Więcej o mnie
                    <Icon>
                      <ChevronForward></ChevronForward>
                    </Icon>
                  </Button>
                </Card>
              </Section>
              <Section>
                <Header>
                  <H2>Ostatnie wpisy</H2>
                  <Button $text $last>
                    Wszystkie wpisy{" "}
                    <Icon>
                      <ChevronForward></ChevronForward>
                    </Icon>
                  </Button>
                </Header>
                {posts.allMarkdownRemark.nodes.map(post => (
                  <Post data={post}></Post>
                ))}
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
