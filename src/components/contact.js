import React from "react"

import { useBio } from "../hooks"
import { Footer, Card, H2, P, Address, Button, Small } from "../elements"
import Share from "./share"

const Contact = () => {
  const { bio } = useBio()
  const { title } = bio.site.siteMetadata
  const { email, github, dribbble, twitter, facebook } =
    bio.site.siteMetadata?.social
  const links = {
    github: `https://github.com/${github}`,
    dribbble: `https://dribbble.com/${dribbble}`,
    twitter: `https://twitter.com/${twitter}`,
    facebook: `https://www.facebook.com/${facebook}`,
  }

  return (
    <Footer id="kontakt">
      <Card as="div" $center $textCenter>
        <H2 $top>Przywitaj się!</H2>
        <P>
          Jeżeli chcesz porozmawiać o wpółpracy lub na inny, interesujacy temat
          napisz mi wiadomość prywatną lub email. Nie kępuj się. Serio.
        </P>
        <Address>
          <Button $text as="a" href={`mailto:${email}`}>
            {email}
          </Button>
          <Share data={links}></Share>
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
