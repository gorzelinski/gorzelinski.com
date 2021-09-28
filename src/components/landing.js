import React from "react"

import { Hero, H1, P, Button } from "../elements"

const Landing = () => {
  return (
    <Hero>
      <div>
        <H1 $top>
          Tworzę
          <br />
          rzeczy w internecie
        </H1>
        <P $lead>
          Pomagam małym firmom i jednostkom wkroczyć w XXI wiek. Tworzę dla nich
          wydajne i spersonalizowane strony internetowe, które dbają o
          profesjonalny wizerunek online.
        </P>
        <Button $primary $grow to="#kontakt">
          Stwórzmy coś razem
        </Button>
      </div>
    </Hero>
  )
}

export default Landing
