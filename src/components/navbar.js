import React from "react"

import { Button, Header, Navigation } from "../elements"
import Logo from "./logo"
import ThemeSwitcher from "./theme-switcher"

const Navbar = ({ location }) => {
  const selectActiveClass = pathname =>
    location?.pathname === pathname ? "active" : "active-subtle"
  return (
    <Header $section>
      <Navigation $spaceBetween aria-label="Helper">
        <Logo></Logo>
        <ThemeSwitcher></ThemeSwitcher>
      </Navigation>
      <Navigation $main aria-label="Main">
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
          to="/about"
          activeClassName="active"
          partiallyActive={true}
        >
          About
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
        <Button $mobile $primary to="#contact">
          Contact
        </Button>
      </Navigation>
    </Header>
  )
}

export default Navbar
