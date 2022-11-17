import React from "react"
import { useLocalization } from "gatsby-theme-i18n"

import { Button, Icon, Navigation } from "../elements"

const LanguageSwitcher = ({ location }) => {
  const { config, locale } = useLocalization()
  const path = location?.pathname
    ? location.pathname.replace(`/${locale}/`, "/")
    : "/"

  return (
    <Navigation>
      <Icon type="globe" $color="text"></Icon>
      {config.map(language => {
        const { code, hrefLang, localName } = language

        return (
          <Button
            $type="nav"
            $size="responsive"
            key={code}
            language={code}
            lang={code}
            hrefLang={hrefLang}
            to={path}
            activeClassName="active-subtle"
          >
            {localName}
          </Button>
        )
      })}
    </Navigation>
  )
}

export default LanguageSwitcher
