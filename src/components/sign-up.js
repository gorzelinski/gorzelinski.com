import React from "react"
import { Send } from "@styled-icons/ionicons-solid"

import {
  Button,
  Form,
  H3,
  Icon,
  Input,
  Label,
  P,
  Section,
  Tile,
} from "../elements"

const SignUp = () => {
  return (
    <Section $featured>
      <Tile>
        <H3 as="h2" $top>
          Stay up to date
        </H3>
        <P $lead>
          Subscribe to get notifications about posts, case studies and other
          content. But be aware - if you get a lucrative offer from a Nigerian
          prince from this domain, it's not me - unsubscribe fast. I don't send
          spam.
        </P>
        <Form>
          <Label $hidden htmlFor="name">
            Name
          </Label>
          <Input
            required
            name="name"
            id="name"
            type="text"
            placeholder="Your name"
            autoComplete="off"
          ></Input>
          <Label $hidden htmlFor="email">
            Email
          </Label>
          <Input
            required
            name="email"
            id="email"
            type="email"
            placeholder="Your email"
          ></Input>
          <Button as="button" $grow $primary $iconWobble>
            Subscribe
            <Icon>
              <Send></Send>
            </Icon>
          </Button>
        </Form>
      </Tile>
    </Section>
  )
}

export default SignUp
