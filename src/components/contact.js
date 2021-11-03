import React from "react"

import { useBio } from "../hooks"
import { Button, Card, H2, P, Section } from "../elements"

const Contact = () => {
  const { bio } = useBio()
  const { email } = bio.site.siteMetadata?.author

  return (
    <Section $lower>
      <Card as="div" $center $textCenter>
        <H2 $top>Przywitaj się!</H2>
        <P $lead>
          Jeżeli chcesz porozmawiać o wpółpracy lub na inny, interesujacy temat
          napisz do mnie. Nie kępuj się. Serio.
        </P>
        <Button $text as="a" href={`mailto:${email}`}>
          Skontaktuj się ze mną
        </Button>
      </Card>
    </Section>
  )
}

export default Contact
