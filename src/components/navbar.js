import React from "react"
import { useTranslation } from "react-i18next"

import { Button, Header, Navigation } from "../elements"
import Logo from "./logo"
import ThemeSwitcher from "./theme-switcher"

const Navbar = ({ location }) => {
  const { t } = useTranslation("components/navbar")
  const selectActiveClass = pathname =>
    location?.pathname === pathname ? "active" : "active-subtle"

  return (
    <Header $section>
      <Navigation $spaceBetween aria-label={t("helper")}>
        <Logo></Logo>
        <ThemeSwitcher></ThemeSwitcher>
      </Navigation>
      <Navigation $main aria-label={t("main")}>
        <Button
          $mobile
          $nav
          to="/portfolio"
          activeClassName={selectActiveClass("/portfolio")}
          partiallyActive={true}
        >
          {t("portfolio")}
        </Button>
        <Button
          $mobile
          $nav
          to="/about"
          activeClassName="active"
          partiallyActive={true}
        >
          {t("about")}
        </Button>
        <Button
          $mobile
          $nav
          to="/blog"
          activeClassName={selectActiveClass("/blog")}
          partiallyActive={true}
        >
          {t("blog")}
        </Button>
        <Button $mobile $primary to="#contact">
          {t("contact")}
        </Button>
      </Navigation>
    </Header>
  )
}

export default Navbar
