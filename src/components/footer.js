import React from "react"
import { useTranslation } from "react-i18next"
import { Mail } from "@styled-icons/ionicons-solid"

import {
  Address,
  Button,
  Footer as StyledFooter,
  Icon,
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
  const { title } = bio.site.siteMetadata
  const { email, social } = bio.site.siteMetadata?.author
  const links = createSocialLinks(social)

  return (
    <StyledFooter $border id="contact">
      <Tile>
        <Small as="p">{t("email")}</Small>
        <Address>
          <Button as="a" $align="left" $type="text" href={`mailto:${email}`}>
            <Icon>
              <Mail></Mail>
            </Icon>
            {email}
          </Button>
        </Address>
      </Tile>
      <Tile>
        <Small as="p">{t("socials")}</Small>
        <Socials data={links}></Socials>
      </Tile>
      <Tile>
        <Small as="p">{t("language")}</Small>
        <LanguageSwitcher location={location}></LanguageSwitcher>
      </Tile>
      <Tile $span="all">
        <Small>
          © {new Date().getFullYear()} {title} • {t("note")}
        </Small>
      </Tile>
    </StyledFooter>
  )
}

export default Footer
