import React from "react"
import { render, screen } from "@testing-library/react"

import Navbar from "../navbar"
import ThemeProvider from "../../themes/theme-provider"

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

    it("link to portfolio page", () => {
      const portfolio = screen.getByRole("link", { name: /portfolio/i })
      expect(portfolio.getAttribute("href")).toBe("/portfolio/")
    })

    it("link to about page", () => {
      const about = screen.queryByRole("link", { name: /about/i })
      expect(about.getAttribute("href")).toBe("/about/")
    })

    it("link to blog page", () => {
      const blog = screen.queryByRole("link", { name: /blog/i })
      expect(blog.getAttribute("href")).toBe("/blog/")
    })

    it("link to contact section", () => {
      const contact = screen.getByRole("link", { name: /contact/i })
      expect(contact.getAttribute("href")).toBe("#contact")
    })
  })
})
