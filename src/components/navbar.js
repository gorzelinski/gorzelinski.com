import React from "react"
import { useTranslation } from "react-i18next"
import { useLocalization } from "gatsby-theme-i18n"

import { Button, Header, Navigation } from "../elements"
import { useScrollDirection } from "../hooks"
import Logo from "./logo"
import ThemeSwitcher from "./theme-switcher"

const Navbar = ({ location }) => {
  const { t } = useTranslation("components/navbar")
  const { locale, localizedPath, defaultLang } = useLocalization()
  const { scrollDirection } = useScrollDirection()

  const selectClass = href =>
    href === location?.pathname ? "active" : "active-subtle"

  return (
    <Header $type="main" $direction={scrollDirection}>
      <Navigation $helper aria-label={t("helper")}>
        <Logo></Logo>
        <ThemeSwitcher></ThemeSwitcher>
      </Navigation>
      <Navigation $main aria-label={t("main")} $direction={scrollDirection}>
        <Button
          $size="small"
          $type="nav"
          $animation="underline"
          to="/portfolio/"
          activeClassName={selectClass(
            localizedPath({ path: "/portfolio/", locale, defaultLang })
          )}
          partiallyActive={true}
        >
          {t("portfolio")}
        </Button>
        <Button
          $size="small"
          $type="nav"
          $animation="underline"
          to="/about/"
          activeClassName="active"
        >
          {t("about")}
        </Button>
        <Button
          $size="small"
          $type="nav"
          $animation="underline"
          to="/blog/"
          activeClassName={selectClass(
            localizedPath({ path: "/blog/", locale, defaultLang })
          )}
          partiallyActive={true}
        >
          {t("blog")}
        </Button>
        <Button as="a" $size="small" $type="primary" href="#contact">
          {t("contact")}
        </Button>
      </Navigation>
    </Header>
  )
}

export default Navbar
