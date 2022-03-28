import React from "react"
import { useTranslation } from "react-i18next"
import { useLocalization } from "gatsby-theme-i18n"

import { Button, Header, Navigation } from "../elements"
import Logo from "./logo"
import ThemeSwitcher from "./theme-switcher"

const Navbar = ({ location }) => {
  const { t } = useTranslation("components/navbar")
  const { locale } = useLocalization()

  const selectClass = href => {
    if (href === location?.pathname) {
      return "active"
    } else {
      return "active-subtle"
    }
  }

  return (
    <Header $type="main">
      <Navigation $helper aria-label={t("helper")}>
        <Logo></Logo>
        <ThemeSwitcher></ThemeSwitcher>
      </Navigation>
      <Navigation $main aria-label={t("main")}>
        <Button
          $size="responsive"
          $type="nav"
          $animation="underline"
          to="/portfolio/"
          activeClassName={selectClass(
            locale === "en" ? `/portfolio/` : `/${locale}/portfolio/`
          )}
          partiallyActive={true}
        >
          {t("portfolio")}
        </Button>
        <Button
          $size="responsive"
          $type="nav"
          $animation="underline"
          to="/about/"
          activeClassName="active"
        >
          {t("about")}
        </Button>
        <Button
          $size="responsive"
          $type="nav"
          $animation="underline"
          to="/blog/"
          activeClassName={selectClass(
            locale === "en" ? `/blog/` : `/${locale}/blog/`
          )}
          partiallyActive={true}
        >
          {t("blog")}
        </Button>
        <Button as="a" $size="responsive" $type="primary" href="#contact">
          {t("contact")}
        </Button>
      </Navigation>
    </Header>
  )
}

export default Navbar
