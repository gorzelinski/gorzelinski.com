import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import Navbar from "../navbar"

describe("Navbar component", () => {
  describe("renders", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={light}>
          <Navbar></Navbar>
        </ThemeProvider>
      )
    })

    it("helper navigation", () => {
      const helper = screen.getByRole("navigation", { name: /pomocnicza/i })
      expect(helper).toBeInTheDocument()
    })

    it("main navigation", () => {
      const main = screen.getByRole("navigation", { name: /główna/i })
      expect(main).toBeInTheDocument()
    })

    it("link to home page", () => {
      const home = screen.getByRole("link", { name: /gorzeliński/i })
      expect(home.getAttribute("href")).toBe("/")
    })

    it("link to portfolio page", () => {
      const portfolio = screen.getByRole("link", { name: /portfolio/i })
      expect(portfolio.getAttribute("href")).toBe("/portfolio")
    })

    it("link to contact section", () => {
      const contact = screen.getByRole("link", { name: /kontakt/i })
      expect(contact.getAttribute("href")).toBe("#kontakt")
    })
  })

  describe("doesn't render", () => {
    it("link to about page (default on mobile)", () => {
      const about = screen.queryByRole("link", { name: /o mnie/i })
      expect(about).not.toBeInTheDocument()
    })

    it("link to blog page (default on mobile)", () => {
      const blog = screen.queryByRole("link", { name: /blog/i })
      expect(blog).not.toBeInTheDocument()
    })
  })
})
