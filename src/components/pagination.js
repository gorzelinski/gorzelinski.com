import React from "react"
import { ChevronBack, ChevronForward } from "@styled-icons/ionicons-solid"

import { Button, Icon, Navigation } from "../elements"

const Pagination = ({ data, aria }) => {
  const { prev = null, next = null } = data

  return (
    <Navigation aria-label={aria} $spaceBetween>
      {prev && (
        <Button $first $text $iconBack to={prev.slug} rel="prev">
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
          $iconForward
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
