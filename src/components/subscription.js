import React from "react"
import { Aside, Button, Card, Form, H3, Input, P } from "../elements"

const Subscription = () => {
  return (
    <Aside $border $higher>
      <Card as="div" $center $textCenter>
        <H3 as="h2" $top>
          Chcesz być na bierząco?
        </H3>
        <P>
          Subskrybuj, aby otrzymywać powiadomienia o najnowszych treściach.
          <br />
          Anuluj w dowolnym momencie.
          <br />
          Nie wysyłam spamu. Słowo.
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
    </Aside>
  )
}

export default Subscription
