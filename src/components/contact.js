import React from "react"

import { Button, H2, Hero, P, Tile } from "../elements"
import { useBio } from "../hooks"

const Contact = () => {
  const { bio } = useBio()
  const { email } = bio.site.siteMetadata?.author

  return (
    <Hero id="say-hello">
      <Tile $center $textCenter>
        <H2 $top>Say hello!</H2>
        <P $lead>
          If you want to talk about cooperation - or anything interesting -
          write me an email or dm. Don't hesitate. Seriously.
        </P>
        <Button as="a" $text $elementBuzzOut href={`mailto:${email}`}>
          Contact me
        </Button>
      </Tile>
    </Hero>
  )
}

export default Contact
