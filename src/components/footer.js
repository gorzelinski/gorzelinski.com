import React from "react"
import { useTranslation } from "react-i18next"
import { Mail } from "@styled-icons/ionicons-solid"

import {
  Address,
  Button,
  Footer as StyledFooter,
  Icon,
  Navigation,
  Small,
  Tile,
} from "../elements"
import { useBio } from "../hooks"
import { createSocialLinks } from "../utils"
import Socials from "../components/socials"
import LanguageSwitcher from "./language-switcher"

const Footer = ({ location }) => {
  const { t } = useTranslation("components/footer")
  const { bio } = useBio()
  const { title, social } = bio.site.siteMetadata
  const { email } = bio.site.siteMetadata?.author
  const links = createSocialLinks(social)

  return (
    <StyledFooter $border id="contact">
      <Tile>
        <Small as="p" $marginReset="top">
          {t("email")}
        </Small>
        <Address>
          <Navigation>
            <Icon $type="text">
              <Mail></Mail>
            </Icon>
            <Button as="a" $type="text" href={`mailto:${email}`}>
              {email}
            </Button>
          </Navigation>
        </Address>
      </Tile>
      <Tile>
        <Small as="p" $marginReset="top">
          {t("socials")}
        </Small>
        <Socials data={links}></Socials>
      </Tile>
      <Tile>
        <Small as="p" $marginReset="top">
          {t("language")}
        </Small>
        <LanguageSwitcher location={location}></LanguageSwitcher>
      </Tile>
      <Tile $span="all">
        <Small $marginReset="both">
          © {new Date().getFullYear()} {title} • {t("note")}
        </Small>
      </Tile>
    </StyledFooter>
  )
}

export default Footer
