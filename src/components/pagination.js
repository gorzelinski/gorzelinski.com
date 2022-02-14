import React from "react"
import { ChevronBack, ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Icon, Navigation } from "../elements"

const Pagination = ({ data, aria }) => {
  const { prev = null, next = null } = data

  return (
    <Navigation aria-label={aria} $spaceBetween>
      {prev && (
        <Button
          $align="left"
          $type="text"
          $animation="icon-back"
          to={prev.slug}
          rel="prev"
        >
          <Icon>
            <ChevronBack></ChevronBack>
          </Icon>
          {prev.text}
        </Button>
      )}
      {next && (
        <Button
          {...(!prev ? { $align: "left" } : { $align: "right" })}
          $type="text"
          $animation="icon-forward"
          to={next.slug}
          rel="next"
        >
          {next.text}
          <Icon>
            <ChevronForward></ChevronForward>
          </Icon>
        </Button>
      )}
    </Navigation>
  )
}

export default Pagination
