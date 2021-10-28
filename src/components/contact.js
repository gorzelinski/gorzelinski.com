import React from "react"

import { useBio } from "../hooks"
import { Footer, Card, H2, P, Address, Button, Small } from "../elements"
import Share from "./share"

const Contact = () => {
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
    <Footer id="kontakt">
      <Card as="div" $center $textCenter>
        <H2 $top>Przywitaj się!</H2>
        <P $lead>
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
          © {new Date().getFullYear()} {title} | Z miłością stworzyłem tę stronę
        </Small>
      </Card>
    </Footer>
  )
}

export default Contact
