import React from "react"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Section, Header, H2, Button, Icon } from "../elements"

const Featured = ({ data, children }) => {
  const { title = "", slug = "", buttonText = "" } = data
  return (
    <Section>
      <Header>
        {title && (
          <H2 $top $bottom>
            {title}
          </H2>
        )}
        {slug && buttonText && (
          <Button $text $last to={slug}>
            {buttonText}
            <Icon>
              <ChevronForward></ChevronForward>
            </Icon>
          </Button>
        )}
      </Header>
      {children}
    </Section>
  )
}

export default Featured
