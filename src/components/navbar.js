import React from "react"

import { Button, Header, Navigation } from "../elements"
import Logo from "./logo"
import ThemeSwitcher from "./theme-switcher"

const Navbar = ({ data }) => {
  return (
    <Header>
      <Navigation aria-label="Pomocnicza">
        <Logo></Logo>
        <ThemeSwitcher data={data}></ThemeSwitcher>
      </Navigation>
      <Navigation $main aria-label="Główna">
        <Button
          $nav
          to="/portfolio"
          activeClassName="active"
          partiallyActive={true}
        >
          Portfolio
        </Button>
        <Button
          $nav
          to="/o-mnie"
          activeClassName="active"
          partiallyActive={true}
        >
          O mnie
        </Button>
        <Button $nav to="/blog" activeClassName="active" partiallyActive={true}>
          Blog
        </Button>
        <Button
          $primary
          to="#kontakt"
          activeClassName="active"
          partiallyActive={true}
        >
          Kontakt
        </Button>
      </Navigation>
    </Header>
  )
}

export default Navbar
