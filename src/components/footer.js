import React from "react"

import {
  Address,
  Button,
  Card,
  Footer as StyledFooter,
  Small,
} from "../elements"
import { useBio } from "../hooks"
import { createSocialLinks } from "../utils"
import Socials from "../components/socials"

const Footer = () => {
  const { bio } = useBio()
  const { title, social } = bio.site.siteMetadata
  const { email } = bio.site.siteMetadata?.author
  const links = createSocialLinks(social)

  return (
    <StyledFooter $border $lower id="kontakt">
      <Card as="div">
        <Small $top>Napisz mi maila</Small>
        <Address>
          <Button $text $first as="a" href={`mailto:${email}`}>
            {email}
          </Button>
        </Address>
      </Card>
      <Card as="div">
        <Small $top>Znajdź mnie także na</Small>
        <Socials data={links}></Socials>
      </Card>
      <Card as="div">
        <Small $top $bottom>
          © {new Date().getFullYear()} {title} | Stworzyłem tę stronę z miłością
        </Small>
      </Card>
    </StyledFooter>
  )
}

export default Footer
