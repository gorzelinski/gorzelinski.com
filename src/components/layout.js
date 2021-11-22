import React from "react"

import { Background, Wrapper } from "../elements"
import ThemeProvider from "./theme-provider"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider>
      <Background data-testid="background">
        <Wrapper $global>
          <Navbar location={location}></Navbar>
          <main>{children}</main>
          <Footer></Footer>
        </Wrapper>
      </Background>
    </ThemeProvider>
  )
}

export default Layout
