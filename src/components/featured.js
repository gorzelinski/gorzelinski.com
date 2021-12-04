import React from "react"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Section, Header, H2, Button, Icon } from "../elements"

const Featured = ({ data, children }) => {
  const { title = "", slug = "", buttonText = "" } = data
  return (
    <Section>
      <Header $section>
        {title && (
          <H2 $top $bottom>
            {title}
          </H2>
        )}
        {slug && buttonText && (
          <Button $text $iconForward $last to={slug}>
            {buttonText}
            <Icon>
              <ChevronForward></ChevronForward>
            </Icon>
          </Button>
        )}
      </Header>
      <Section as="div" $top>
        {children}
      </Section>
    </Section>
  )
}

export default Featured
