import React from "react"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import { Section, Header, H2, Button, Icon } from "../elements"

const Featured = ({ data, children }) => {
  const { title = "", slug = "", buttonText = "" } = data
  return (
    <Section>
      <Header $type="section">
        {title && <H2 $marginReset="both">{title}</H2>}
        {slug && buttonText && (
          <Button
            $type="text"
            $animation="icon-forward"
            $align="right"
            to={slug}
          >
            {buttonText}
            <Icon>
              <ChevronForward></ChevronForward>
            </Icon>
          </Button>
        )}
      </Header>
      <Section as="div" $marginReset="top">
        {children}
      </Section>
    </Section>
  )
}

export default Featured
