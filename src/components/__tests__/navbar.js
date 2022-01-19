import React from "react"
import { render, screen } from "@testing-library/react"

import Navbar from "../navbar"
import ThemeProvider from "../theme-provider"

describe("Navbar component", () => {
  describe("renders", () => {
    beforeEach(() => {
      render(
        <ThemeProvider>
          <Navbar></Navbar>
        </ThemeProvider>
      )
    })

    it("helper navigation", () => {
      const helper = screen.getByRole("navigation", { name: /helper/i })
      expect(helper).toBeInTheDocument()
    })

    it("main navigation", () => {
      const main = screen.getByRole("navigation", { name: /main/i })
      expect(main).toBeInTheDocument()
    })

    it("link to home page", () => {
      const home = screen.getByRole("link", { name: /mg/i })
      expect(home.getAttribute("href")).toBe("/")
    })

    it("link to portfolio page", () => {
      const portfolio = screen.getByRole("link", { name: /portfolio/i })
      expect(portfolio.getAttribute("href")).toBe("/portfolio")
    })

    it("link to contact section", () => {
      const contact = screen.getByRole("link", { name: /contact/i })
      expect(contact.getAttribute("href")).toBe("#contact")
    })
  })

  describe("doesn't render", () => {
    it("link to about page (default on mobile)", () => {
      const about = screen.queryByRole("link", { name: /about/i })
      expect(about).not.toBeInTheDocument()
    })

    it("link to blog page (default on mobile)", () => {
      const blog = screen.queryByRole("link", { name: /blog/i })
      expect(blog).not.toBeInTheDocument()
    })
  })
})
