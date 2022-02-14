import React from "react"
import {
  LogoDribbble,
  LogoFacebook,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
} from "@styled-icons/ionicons-solid"

import { Button, Icon, Navigation } from "../elements"

const Socials = ({ data = {} }) => {
  const selectIcon = name => {
    switch (name) {
      case "github":
        return <LogoGithub></LogoGithub>
      case "dribbble":
        return <LogoDribbble></LogoDribbble>
      case "twitter":
        return <LogoTwitter></LogoTwitter>
      case "facebook":
        return <LogoFacebook></LogoFacebook>
      case "linkedin":
        return <LogoLinkedin></LogoLinkedin>
      default:
        return null
    }
  }

  return (
    <Navigation as="div" $align="left" $span="all">
      {Object.entries(data).map(array => {
        const name = array[0]
        const link = array[1]

        return (
          <Button
            as="a"
            $type="text"
            key={name}
            aria-label={name}
            rel="noopener noreferrer"
            target="_blank"
            href={link}
          >
            <Icon $type="text">{selectIcon(name)}</Icon>
          </Button>
        )
      })}
    </Navigation>
  )
}

export default Socials
