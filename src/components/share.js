import React from "react"
import {
  LogoFacebook,
  LogoLinkedin,
  LogoTwitter,
} from "@styled-icons/ionicons-solid"

import { Button, Icon, Navigation, P } from "../elements"

const Share = ({ data }) => {
  const { twitter = "", facebook = "", linkedin = "" } = data

  return (
    <Navigation $full as="div">
      <P $ui>Udostępnij:</P>
      {twitter && (
        <Button as="a" rel="noopener noreferrer" target="blank" href={twitter}>
          <Icon $text>
            <LogoTwitter></LogoTwitter>
          </Icon>
        </Button>
      )}
      {facebook && (
        <Button as="a" rel="noopener noreferrer" target="blank" href={facebook}>
          <Icon $text>
            <LogoFacebook></LogoFacebook>
          </Icon>
        </Button>
      )}
      {linkedin && (
        <Button as="a" rel="noopener noreferrer" target="blank" href={linkedin}>
          <Icon $text>
            <LogoLinkedin></LogoLinkedin>
          </Icon>
        </Button>
      )}
    </Navigation>
  )
}

export default Share
