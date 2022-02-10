import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import { Globe } from "@styled-icons/ionicons-solid"

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

const Footer = ({ location }) => {
  const path = location?.pathname
  const { config, locale } = useLocalization()
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
          <Button as="a" $text $first href={`mailto:${email}`}>
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
        <Navigation>
          <Icon $text>
            <Globe></Globe>
          </Icon>
          {config.map(language => {
            const { code } = language
            const prefix = code === "en" ? "/" : `/${code}/`
            let baseUrl = ""
            if (path) {
              baseUrl =
                locale === "en" ? path.replace("/", "") : path.substring(4)
            }
            const url = `${prefix}${baseUrl}`

            return (
              <Button
                as={Link}
                key={language.code}
                lang={language.code}
                hrefLang={language.hrefLang}
                to={url}
                $nav
                $responsive
                activeClassName="active-subtle"
              >
                {language.localName}
              </Button>
            )
          })}
        </Navigation>
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
