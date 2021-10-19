import React from "react"
import {
  LogoDribbble,
  LogoFacebook,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
} from "@styled-icons/ionicons-solid"

import { Button, Icon, Navigation } from "../elements"

const Share = ({ data, children }) => {
  const {
    github = "",
    dribbble = "",
    twitter = "",
    facebook = "",
    linkedin = "",
  } = data

  return (
    <Navigation $full as="div">
      {children}
      {github && (
        <Button as="a" rel="noopener noreferrer" target="_blank" href={github}>
          <Icon $text>
            <LogoGithub></LogoGithub>
          </Icon>
        </Button>
      )}
      {dribbble && (
        <Button
          as="a"
          rel="noopener noreferrer"
          target="_blank"
          href={dribbble}
        >
          <Icon $text>
            <LogoDribbble></LogoDribbble>
          </Icon>
        </Button>
      )}
      {twitter && (
        <Button as="a" rel="noopener noreferrer" target="_blank" href={twitter}>
          <Icon $text>
            <LogoTwitter></LogoTwitter>
          </Icon>
        </Button>
      )}
      {facebook && (
        <Button
          as="a"
          rel="noopener noreferrer"
          target="_blank"
          href={facebook}
        >
          <Icon $text>
            <LogoFacebook></LogoFacebook>
          </Icon>
        </Button>
      )}
      {linkedin && (
        <Button
          as="a"
          rel="noopener noreferrer"
          target="_blank"
          href={linkedin}
        >
          <Icon $text>
            <LogoLinkedin></LogoLinkedin>
          </Icon>
        </Button>
      )}
    </Navigation>
  )
}

export default Share
