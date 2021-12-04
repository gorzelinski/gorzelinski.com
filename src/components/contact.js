import React from "react"

import { Button, H2, Hero, P, Tile } from "../elements"
import { useBio } from "../hooks"

const Contact = () => {
  const { bio } = useBio()
  const { email } = bio.site.siteMetadata?.author

  return (
    <Hero id="przywitaj-sie">
      <Tile $center $textCenter>
        <H2 $top>Przywitaj się!</H2>
        <P $lead>
          Jeżeli chcesz porozmawiać o wpółpracy lub na inny, interesujacy temat
          napisz do mnie. Nie kępuj się. Serio.
        </P>
        <Button as="a" $text $elementBuzzOut href={`mailto:${email}`}>
          Skontaktuj się ze mną
        </Button>
      </Tile>
    </Hero>
  )
}

export default Contact
