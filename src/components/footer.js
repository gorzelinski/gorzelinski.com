import React from "react"

import {
  Address,
  Button,
  Footer as StyledFooter,
  Small,
  Tile,
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
    <StyledFooter $border id="kontakt">
      <Tile>
        <Small as="p" $top>
          Napisz mi maila
        </Small>
        <Address>
          <Button as="a" $text $first href={`mailto:${email}`}>
            {email}
          </Button>
        </Address>
      </Tile>
      <Tile>
        <Small as="p" $top>
          Znajdź mnie także na
        </Small>
        <Socials data={links}></Socials>
      </Tile>
      <Tile>
        <Small $top $bottom>
          © {new Date().getFullYear()} {title} • Stworzyłem tę stronę z miłością
        </Small>
      </Tile>
    </StyledFooter>
  )
}

export default Footer
