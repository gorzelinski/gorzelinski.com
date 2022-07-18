import React from "react"
import {
  LogoDribbble,
  LogoFacebook,
  LogoGithub,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
} from "@styled-icons/ionicons-solid"

import { Button, Icon, Navigation } from "../elements"

const Socials = ({ data = {} }) => {
  const selectIcon = name => {
    switch (name) {
      case "github":
        return <LogoGithub></LogoGithub>
      case "twitter":
        return <LogoTwitter></LogoTwitter>
      case "dribbble":
        return <LogoDribbble></LogoDribbble>
      case "facebook":
        return <LogoFacebook></LogoFacebook>
      case "instagram":
        return <LogoInstagram></LogoInstagram>
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
            <Icon>{selectIcon(name)}</Icon>
          </Button>
        )
      })}
    </Navigation>
  )
}

export default Socials
