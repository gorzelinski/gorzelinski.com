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
          aria-label="I create (design, code, publish) things on the Internet"
        >
          <Typewriter
            strings={[
              "I design",
              "I code",
              "I publish",
              "I create things on the Internet",
            ]}
          ></Typewriter>
        </H1>
        <P $lead>
          I help individuals and small businesses step into the XXI century. I
          create personalized websites for them, which take care of a
          professional online presence.
        </P>
        <Button $primary $grow to="#say-hello">
          Let's create something
        </Button>
      </header>
    </Hero>
  )
}

export default Landing
