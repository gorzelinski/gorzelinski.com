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
    <Navigation $full as="div">
      {Object.entries(data).map(array => {
        const name = array[0]
        const link = array[1]

        return (
          <Button
            as="a"
            key={name}
            aria-label={name}
            rel="noopener noreferrer"
            target="_blank"
            href={link}
          >
            <Icon $text>{selectIcon(name)}</Icon>
          </Button>
        )
      })}
    </Navigation>
  )
}

export default Socials