import React from "react"
import {
  LogoGithub,
  LogoDribbble,
  LogoTwitter,
  LogoFacebook,
} from "@styled-icons/ionicons-solid"

import { useBio } from "../hooks"
import {
  Section,
  Card,
  H2,
  P,
  Address,
  Button,
  Navigation,
  Icon,
  Small,
} from "../elements"

const Contact = () => {
  const { bio } = useBio()
  const { name } = bio.site.siteMetadata?.author
  const { email, github, dribbble, twitter, facebook } =
    bio.site.siteMetadata?.social

  return (
    <Section as="footer">
      <Card as="div" $sixeights $centered $textCentered>
        <H2>Przywitaj się!</H2>
        <P>
          Jeżeli chcesz porozmawiać o wpółpracy lub na inny, interesujacy temat
          napisz mi wiadomość prywatną lub email. Nie kępuj się. Serio.
        </P>
        <Address>
          <Button $text $first $last as="a" href={`mailto:${email}`}>
            {email}
          </Button>
          <Navigation $flex>
            <Icon
              $text
              as="a"
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener"
            >
              <LogoGithub></LogoGithub>
            </Icon>
            <Icon
              $text
              as="a"
              href={`https://dribbble.com/${dribbble}`}
              target="_blank"
              rel="noopener"
            >
              <LogoDribbble></LogoDribbble>
            </Icon>
            <Icon
              $text
              as="a"
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener"
            >
              <LogoTwitter></LogoTwitter>
            </Icon>
            <Icon
              $text
              as="a"
              href={`https://www.facebook.com/${facebook}`}
              target="_blank"
              rel="noopener"
            >
              <LogoFacebook></LogoFacebook>
            </Icon>
          </Navigation>
        </Address>
        <Small $top $bottom>
          © {new Date().getFullYear()} | {name} stworzył z miłością tę stronę
        </Small>
      </Card>
    </Section>
  )
}

export default Contact
