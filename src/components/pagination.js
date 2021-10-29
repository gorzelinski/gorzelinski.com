import React from "react"
import { ChevronBack, ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Icon, Navigation } from "../elements"

const Pagination = ({ data }) => {
  const { prev = null, next = null } = data

  return (
    <Navigation $spaceBetween>
      {prev && (
        <Button $first $text to={prev.slug} rel="prev">
          <Icon>
            <ChevronBack></ChevronBack>
          </Icon>
          {prev.text}
        </Button>
      )}
      {next && (
        <Button
          {...(!prev ? { $first: true } : { $last: true })}
          $text
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
