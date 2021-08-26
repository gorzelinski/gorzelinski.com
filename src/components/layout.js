import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import {
  ChevronForward,
  Heart,
  LogoDribbble,
  LogoFacebook,
  LogoGithub,
  LogoTwitter,
} from "@styled-icons/ionicons-solid"
import { useTheme } from "../hooks"
import {
  A,
  Background,
  Blockquote,
  Button,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Icon,
  Li,
  Ol,
  P,
  Small,
  Table,
  UIText,
  Ul,
  Wrapper,
} from "../elements"

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
          <Background>
            <Wrapper global>
              {Object.keys(themes).length > 0 &&
                Object.values(themes).map(theme => (
                  <Button
                    nav
                    theme={selectedTheme}
                    key={theme.id}
                    onClick={() => setPreferredTheme(theme)}
                  >
                    {theme.name}
                  </Button>
                ))}
              <Button nav>Twitter</Button>
              <Button nav>Facebook</Button>
              <Button nav>Github</Button>
              <Button nav>Dribbble</Button>
              <Icon primary>
                <LogoTwitter></LogoTwitter>
              </Icon>
              <Icon primary>
                <LogoFacebook></LogoFacebook>
              </Icon>
              <Icon text>
                <LogoGithub></LogoGithub>
              </Icon>
              <Icon text>
                <LogoDribbble></LogoDribbble>
              </Icon>
              <Small>This is small text for meta information</Small>
              <H1>This is heading 1. This is longer text.</H1>
              <P>
                The purpose of lorem ipsum is to create a natural looking block
                of text (sentence, paragraph, page, etc.) that doesn't distract
                from the layout. A practice not without controversy, laying out
                pages with meaningless filler text can be very useful when the
                focus is meant to be on design, not content.
              </P>
              <P>
                The purpose of lorem ipsum is to create a natural looking block
                of text (sentence, paragraph, page, etc.) that doesn't distract
                from the layout. A practice not without controversy, laying out
                pages with meaningless filler text can be very useful when the
                focus is meant to be on design, not content.
              </P>
              <H2>This is heading 2. This is longer text.</H2>
              <P>
                The purpose of lorem ipsum is to create a natural looking block
                of text (sentence, paragraph, page, etc.) that doesn't distract
                from the layout. A practice not without controversy, laying out
                pages with meaningless filler text can be very useful when the
                focus is meant to be on design, not content.
              </P>
              <Button nav>O mnie</Button>
              <Button text>
                Czytaj więcej
                <Icon>
                  <ChevronForward></ChevronForward>
                </Icon>
              </Button>
              <Button primary>Kontakt</Button>
              <Button primary grow>
                Dodaj do ulubionych
                <Icon>
                  <Heart></Heart>
                </Icon>
              </Button>
              <H3>This is heading 3. This is longer text.</H3>
              <P>
                The purpose of lorem ipsum is to create a natural looking block
                of text (sentence, paragraph, page, etc.) that doesn't distract
                from the layout. A practice not without controversy, laying out
                pages with meaningless filler text can be very useful when the
                focus is meant to be on design, not content.
              </P>
              <H4>This is heading 4. This is longer text.</H4>
              <P>
                The purpose of lorem ipsum is to create a natural looking block
                of text (sentence, paragraph, page, etc.) that doesn't distract
                from the layout. A practice not without controversy, laying out
                pages with meaningless filler text can be very useful when the
                focus is meant to be on design, not content.
              </P>
              <H5>This is heading 5. This is longer text.</H5>
              <P>
                The purpose of lorem ipsum is to create a natural looking block
                of text (sentence, paragraph, page, etc.) that doesn't distract
                from the layout. A practice not without controversy, laying out
                pages with meaningless filler text can be very useful when the
                focus is meant to be on design, not content.
              </P>
              <H6>This is heading 6. This is longer text.</H6>
              <P>
                The purpose of lorem ipsum is to create a natural looking block
                of text (sentence, paragraph, page, etc.) that doesn't distract
                from the layout. A practice not without controversy, laying out
                pages with meaningless filler text can be very useful when the
                focus is meant to be on design, not content.
              </P>
              <UIText>This is ui text</UIText>
              <A href="">This is link</A>
              <Blockquote>
                <P>
                  The purpose of lorem ipsum is to create a natural looking
                  block of text (sentence, paragraph, page, etc.) that doesn't
                  distract from the layout. A practice not without controversy,
                  laying out pages with meaningless filler text can be very
                  useful when the focus is meant to be on design, not content.
                </P>
              </Blockquote>
              <Ul>
                <Li>This is unordered list item</Li>
                <Li>This is unordered list item</Li>
                <Li>
                  <P>This is p inside li</P>
                </Li>
                <Li>
                  This is unordered list item
                  <Ul>
                    <Li>This is list inside a list</Li>
                  </Ul>
                </Li>
              </Ul>
              <Ol>
                <Li>This is ordered list item</Li>
                <Li>This is ordered list item</Li>
              </Ol>
              <Table>
                <thead>
                  <tr>
                    <th align="left">Number</th>
                    <th align="left">Title</th>
                    <th align="right">Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Harry Potter and the Philosopher’s Stone</td>
                    <td align="right">2001</td>
                  </tr>
                </tbody>
              </Table>
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
