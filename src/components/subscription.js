import React from "react"
import { Button, Card, Form, H3, Input, P, Section } from "../elements"

const Subscription = () => {
  return (
    <Section as="aside" $border $higher>
      <Card as="div" $sixEights $centered $textCentered>
        <H3 as="h2" $top>
          Chcesz być na bierząco?
        </H3>
        <P>
          Subskrybuj, aby otrzymywać powiadomienia o moich najnowszych
          treściach.
          <br />
          Anuluj subskrybcję w dowolnym momencie.
          <br /> Nie wysyłam spamu. Słowo.
        </P>
        <Form>
          <Input
            required
            name="email"
            id="email"
            type="email"
            placeholder="Twój email"
            autoComplete="off"
          ></Input>
          <Button as="button" $grow $primary>
            Subskrybuj
          </Button>
        </Form>
      </Card>
    </Section>
  )
}

export default Subscription
