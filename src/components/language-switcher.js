import React from "react"
import { Link } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import { Globe } from "@styled-icons/ionicons-solid"

import { Button, Icon, Navigation } from "../elements"

const LanguageSwitcher = ({ location }) => {
  const path = location?.pathname
  const { config, locale } = useLocalization()

  return (
    <Navigation>
      <Icon $text>
        <Globe></Globe>
      </Icon>
      {config.map(language => {
        const { code } = language
        const prefix = code === "en" ? "/" : `/${code}/`
        let baseUrl = ""
        if (path) {
          baseUrl = locale === "en" ? path.replace("/", "") : path.substring(4)
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
  )
}

export default LanguageSwitcher
