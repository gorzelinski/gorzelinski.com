import React from "react"
import { useTranslation } from "react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
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
import { createSocialLinks } from "../utils"
import Socials from "./socials"
import LanguageSwitcher from "./language-switcher"

const Footer = ({ location }) => {
  const { locale, localizedPath, defaultLang } = useLocalization()
  const { t } = useTranslation("components/footer")
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            email
            social {
              github
              twitter
              dribbble
              facebook
              instagram
              linkedin
            }
          }
        }
      }
    }
  `)
  const { email, social } = data.site.siteMetadata?.author
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
        <Navigation as="div" $align="left">
          {t("pages", { returnObjects: true }).map(page => (
            <Button $size="small" $type="nav" key={page.name} to={page.link}>
              {page.name}
            </Button>
          ))}
          <Button
            $type="nav"
            $size="small"
            to="/#newsletter"
            title="Newsletter"
            aria-label="Newsletter"
          >
            Newsletter
          </Button>
          <Button
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            $type="nav"
            $size="small"
            href={localizedPath({
              path: "/rss.xml",
              locale,
              defaultLang,
            })}
          >
            RSS
          </Button>
        </Navigation>
      </Tile>
      <Tile $span="all">
        <Small>
          © {new Date().getFullYear()} {t("copyright")} • {t("note")}
        </Small>
      </Tile>
    </StyledFooter>
  )
}

export default Footer
