import React from "react"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Hero, H1, P, Button, Icon } from "../elements"

const Landing = () => {
  return (
    <Hero>
      <div>
        <H1 $top>
          Tworzę
          <br />
          rzeczy w internecie
        </H1>
        <P>
          The purpose of lorem ipsum is to create a natural looking block of
          text (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy, laying out pages with
          meaningless filler text can be very useful when the focus is meant to
          be on design, not content.
        </P>
        <Button $text $first to="/#kontakt">
          Stwórzmy coś razem
          <Icon>
            <ChevronForward></ChevronForward>
          </Icon>
        </Button>
      </div>
    </Hero>
  )
}

export default Landing
