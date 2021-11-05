import React from "react"

import { useBio } from "../hooks"
import {
  Address,
  Button,
  Card,
  Footer as StyledFooter,
  Small,
} from "../elements"
import Socials from "../components/socials"

const Footer = () => {
  const { bio } = useBio()
  const { title, social } = bio.site.siteMetadata
  const { email } = bio.site.siteMetadata?.author

  const links = Object.fromEntries(
    Object.entries(social).map(array => [
      array[0],
      `https://${array[0]}.com/${array[1]}`,
    ])
  )
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
