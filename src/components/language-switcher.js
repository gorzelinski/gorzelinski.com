import React from "react"
import { useLocalization } from "gatsby-theme-i18n"
import { Globe } from "@styled-icons/ionicons-solid"

import { Button, Icon, Navigation } from "../elements"

const LanguageSwitcher = ({ location }) => {
  const path = location?.pathname
  const { config, locale } = useLocalization()

  return (
    <Navigation>
      <Icon $type="text">
        <Globe></Globe>
      </Icon>
      {config.map(language => {
        const defaultUrl = "/"
        let baseUrl = ""
        if (path) {
          baseUrl = locale === "en" ? path : path.substring(3)
        }
        const url = baseUrl ? baseUrl : defaultUrl

        return (
          <Button
            $type="nav"
            $size="responsive"
            key={language.code}
            lang={language.code}
            language={language.code}
            hrefLang={language.hrefLang}
            to={url}
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
