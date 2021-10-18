import React from "react"
import { ChevronBack, ChevronForward } from "@styled-icons/ionicons-solid"

import { Aside, Button, Icon, Navigation } from "../elements"

const Pagination = ({ data, children }) => {
  const { prev = null, next = null } = data

  return (
    <Aside $higher $article>
      {children}
      <Navigation $spaceBetween>
        {prev && (
          <Button $text $first to={prev.slug} rel="prev">
            <Icon>
              <ChevronBack></ChevronBack>
            </Icon>
            {prev.text}
          </Button>
        )}
        {next && (
          <Button $text $last to={next.slug} rel="next">
            {next.text}
            <Icon>
              <ChevronForward></ChevronForward>
            </Icon>
          </Button>
        )}
      </Navigation>
    </Aside>
  )
}

export default Pagination
