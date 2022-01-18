import React from "react"

import { Hero, H1, P, Button } from "../elements"
import Typewriter from "./typewriter"

const Landing = () => {
  return (
    <Hero>
      <header>
        <H1
          $top
          $decorative
          aria-label="Tworzę (koduję, projektuję, publikuję) rzeczy w internecie"
        >
          <Typewriter
            strings={[
              "Projektuję",
              "Koduję",
              "Publikuję",
              "Tworzę rzeczy w internecie",
            ]}
          ></Typewriter>
        </H1>
        <P $lead>
          Pomagam małym firmom i jednostkom wkroczyć w XXI wiek, tworząc dla
          nich spersonalizowane strony internetowe, które dbają o profesjonalny
          wizerunek online.
        </P>
        <Button $primary $grow to="#przywitaj-sie">
          Stwórzmy coś razem
        </Button>
      </header>
    </Hero>
  )
}

export default Landing
