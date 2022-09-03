import React from "react"
import { render, screen } from "@testing-library/react"

import Footer from "../footer"

describe("Footer component", () => {
  describe("renders", () => {
    beforeEach(() => {
      render(<Footer></Footer>)
    })

    it("email button", () => {
      const email = screen.getByRole("link", { name: /authorsemail/i })
      expect(email.getAttribute("href")).toEqual(
        expect.stringMatching(/mailto:authorsemail/i)
      )
    })

    it("social media links", () => {
      const socials = screen
        .getAllByRole("link")
        .filter(link => link.hasAttribute("aria-label"))
      expect(socials.length).toBeGreaterThan(4)
    })

    it("copyright info", () => {
      const copyright = screen.getByText(/©/i)
      expect(copyright.innerHTML).toEqual(expect.stringMatching("copyright"))
    })
  })
})
