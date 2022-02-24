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
        <Button
          $size="responsive"
          $type="nav"
          $animation="underline"
          to="/portfolio/"
          activeClassName="active"
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
          activeClassName="active"
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
