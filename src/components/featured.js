import React from "react"

import { Button, H2, Header, Icon, Section } from "../elements"

const Featured = ({ data, children }) => {
  const { title = "", slug = "", buttonText = "" } = data

  return (
    <Section>
      <Header $type="section">
        {title && <H2>{title}</H2>}
        {slug && buttonText && (
          <Button
            $type="text"
            $animation="icon-forward"
            $align="right"
            to={slug}
          >
            {buttonText}
            <Icon type="chevron-forward"></Icon>
          </Button>
        )}
      </Header>
      <Section as="div" $marginTop="none">
        {children}
      </Section>
    </Section>
  )
}

export default Featured
