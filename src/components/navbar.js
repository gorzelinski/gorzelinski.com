import React from "react"

import { Button, Header, Navigation } from "../elements"
import Logo from "./logo"
import ThemeSwitcher from "./theme-switcher"

const Navbar = ({ data, location }) => {
  const selectActiveClass = pathname =>
    location?.pathname === pathname ? "active" : "active-subtle"
  return (
    <Header $section>
      <Navigation aria-label="Pomocnicza">
        <Logo></Logo>
        <ThemeSwitcher data={data}></ThemeSwitcher>
      </Navigation>
      <Navigation $main aria-label="Główna">
        <Button
          $mobile
          $nav
          to="/portfolio"
          activeClassName={selectActiveClass("/portfolio")}
          partiallyActive={true}
        >
          Portfolio
        </Button>
        <Button
          $mobile
          $nav
          to="/o-mnie"
          activeClassName="active"
          partiallyActive={true}
        >
          O mnie
        </Button>
        <Button
          $mobile
          $nav
          to="/blog"
          activeClassName={selectActiveClass("/blog")}
          partiallyActive={true}
        >
          Blog
        </Button>
        <Button $mobile $primary to="#kontakt">
          Kontakt
        </Button>
      </Navigation>
    </Header>
  )
}

export default Navbar
