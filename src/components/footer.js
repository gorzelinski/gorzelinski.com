import React from "react"
import { useTranslation } from "react-i18next"

import {
  Address,
  Button,
  Footer as StyledFooter,
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
        <Small as="p" $top>
          {t("email")}
        </Small>
        <Address>
          <Button as="a" $type="text" $align="left" href={`mailto:${email}`}>
            {email}
          </Button>
        </Address>
      </Tile>
      <Tile>
        <Small as="p" $top>
          {t("socials")}
        </Small>
        <Socials data={links}></Socials>
      </Tile>
      <Tile>
        <Small as="p" $top>
          {t("language")}
        </Small>
        <LanguageSwitcher location={location}></LanguageSwitcher>
      </Tile>
      <Tile $spanAll>
        <Small $top $bottom>
          © {new Date().getFullYear()} {title} • {t("note")}
        </Small>
      </Tile>
    </StyledFooter>
  )
}

export default Footer
