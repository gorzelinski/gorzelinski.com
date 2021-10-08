import React from "react"
import {
  LogoGithub,
  LogoDribbble,
  LogoTwitter,
  LogoFacebook,
} from "@styled-icons/ionicons-solid"

import { useBio } from "../hooks"
import {
  Footer,
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
  const { title } = bio.site.siteMetadata
  const { email, github, dribbble, twitter, facebook } =
    bio.site.siteMetadata?.social

  return (
    <Footer $lower id="kontakt">
      <Card as="div" $sixEights $centered $textCentered>
        <H2 $top>Przywitaj się!</H2>
        <P>
          Jeżeli chcesz porozmawiać o wpółpracy lub na inny, interesujacy temat
          napisz mi wiadomość prywatną lub email. Nie kępuj się. Serio.
        </P>
        <Address>
          <Button $text as="a" href={`mailto:${email}`}>
            {email}
          </Button>
          <Navigation $flex>
            <Button
              as="a"
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon $text>
                <LogoGithub></LogoGithub>
              </Icon>
            </Button>
            <Button
              as="a"
              href={`https://dribbble.com/${dribbble}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon $text>
                <LogoDribbble></LogoDribbble>
              </Icon>
            </Button>
            <Button
              as="a"
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon $text>
                <LogoTwitter></LogoTwitter>
              </Icon>
            </Button>
            <Button
              as="a"
              href={`https://www.facebook.com/${facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon $text>
                <LogoFacebook></LogoFacebook>
              </Icon>
            </Button>
          </Navigation>
        </Address>
        <Small $top $bottom>
          © {new Date().getFullYear()} {title} | Sam z miłością stworzyłem tę
          stronę
        </Small>
      </Card>
    </Footer>
  )
}

export default Contact
