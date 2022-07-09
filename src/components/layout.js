import React from "react"

import { Background, Wrapper } from "../elements"
import Footer from "./footer"
import Navbar from "./navbar"
import ThemeProvider from "../themes/theme-provider"

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider>
      <Background data-testid="background">
        <Wrapper $global>
          <Navbar location={location}></Navbar>
          <main>{children}</main>
          <Footer location={location}></Footer>
        </Wrapper>
      </Background>
    </ThemeProvider>
  )
}

export default Layout
