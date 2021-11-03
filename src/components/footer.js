import React from "react"

import { useBio } from "../hooks"
import {
  Address,
  Button,
  Card,
  Footer as StyledFooter,
  H6,
  Navigation,
  Small,
} from "../elements"
import Socials from "../components/socials"

const Footer = () => {
  const { bio } = useBio()
  const { title } = bio.site.siteMetadata
  const { email } = bio.site.siteMetadata?.author

  const links = Object.fromEntries(
    Object.entries(bio.site.siteMetadata?.social).map(array => [
      array[0],
      `https://${array[0]}.com/${array[1]}`,
    ])
  )
  return (
    <StyledFooter $border $lower id="kontakt">
      <Card as="div">
        <H6 as="p" $top>
          Napisz mi maila
        </H6>
        <Address>
          <Button $text $first as="a" href={`mailto:${email}`}>
            {email}
          </Button>
        </Address>
      </Card>
      <Card as="div">
        <H6 as="p" $top>
          Znajdź mnie także na
        </H6>
        <Socials data={links}></Socials>
      </Card>
      <Card as="div">
        <H6 as="p" $top>
          Gorzeliński
        </H6>
        <Navigation as="div">
          <Button $mobile $nav $flex $first to="/portfolio">
            Portfolio
          </Button>
          <Button $mobile $nav $flex to="/o-mnie">
            O mnie
          </Button>
          <Button $mobile $nav $flex to="/blog">
            Blog
          </Button>
        </Navigation>
      </Card>
      <Card as="div" $full>
        <Small $top $bottom>
          © {new Date().getFullYear()} {title} | Z miłością stworzyłem tę stronę
        </Small>
      </Card>
    </StyledFooter>
  )
}

export default Footer
