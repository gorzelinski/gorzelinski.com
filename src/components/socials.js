import React from "react"

import { Button, Icon, Navigation } from "../elements"

const Socials = ({ data = {} }) => (
  <Navigation as="div" $align="left" $span="all">
    {Object.entries(data).map(array => {
      const name = array[0]
      const title = name[0].toUpperCase() + name.slice(1)
      const link = array[1]

      return (
        <Button
          as="a"
          $type="icon"
          key={name}
          aria-label={title}
          title={title}
          rel="noopener noreferrer"
          target="_blank"
          href={link}
        >
          <Icon type={name}></Icon>
        </Button>
      )
    })}
  </Navigation>
)

export default Socials
