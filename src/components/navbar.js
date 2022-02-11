import React from "react"
import { useTranslation } from "react-i18next"

import { Button, Header, Navigation } from "../elements"
import Logo from "./logo"
import ThemeSwitcher from "./theme-switcher"

const Navbar = () => {
  const { t } = useTranslation("components/navbar")

  return (
    <Header $section>
      <Navigation $spaceBetween aria-label={t("helper")}>
        <Logo></Logo>
        <ThemeSwitcher></ThemeSwitcher>
      </Navigation>
      <Navigation $main aria-label={t("main")}>
        <Button $responsive $nav to="/portfolio/" activeClassName="active">
          {t("portfolio")}
        </Button>
        <Button $responsive $nav to="/about" activeClassName="active">
          {t("about")}
        </Button>
        <Button $responsive $nav to="/blog/" activeClassName="active">
          {t("blog")}
        </Button>
        <Button $responsive $primary to="#contact">
          {t("contact")}
        </Button>
      </Navigation>
    </Header>
  )
}

export default Navbar
