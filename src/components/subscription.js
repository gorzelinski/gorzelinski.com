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

const Subscription = () => {
  return (
    <Section $featured $higher>
      <Tile>
        <H3 as="h2" $top>
          Chcesz być na bieżąco?
        </H3>
        <P $lead>
          Subskrybuj, aby otrzymywać powiadomienia o wpisach, case studies i
          innych treściach. Nie wysyłam spamu. Jeżeli dostaniesz email od
          nigeryjskiego księcia z tej domeny, to nie ja - anuluj jak
          najszybciej.
        </P>
        <Form>
          <Label $hidden htmlFor="name">
            Imię
          </Label>
          <Input
            required
            name="name"
            id="name"
            type="text"
            placeholder="Twoje imię"
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
            placeholder="Twój email"
          ></Input>
          <Button as="button" $grow $primary>
            Subskrybuj
            <Icon>
              <Send></Send>
            </Icon>
          </Button>
        </Form>
      </Tile>
    </Section>
  )
}

export default Subscription
