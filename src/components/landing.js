import React from "react"
import TypewriterComponent from "typewriter-effect"

import { Hero, H1, P, Button } from "../elements"

const Landing = () => {
  return (
    <Hero>
      <div>
        <H1 $top>
          <TypewriterComponent
            onInit={typewriter => {
              typewriter
                .changeDelay(75)
                .pauseFor(250)
                .typeString("Projektuję")
                .pauseFor(500)
                .deleteAll()
                .typeString("Koduję")
                .pauseFor(500)
                .deleteAll()
                .typeString("Publikuję")
                .pauseFor(500)
                .deleteAll()
                .typeString("Hmm...")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Tworzę")
                .start()
            }}
          />
          rzeczy w internecie
        </H1>
        <P $lead>
          Pomagam małym firmom i jednostkom wkroczyć w XXI wiek, tworząc dla
          nich spersonalizowane strony internetowe, które dbają o profesjonalny
          wizerunek online.
        </P>
        <Button $primary $grow to="#kontakt">
          Stwórzmy coś razem
        </Button>
      </div>
    </Hero>
  )
}

export default Landing
