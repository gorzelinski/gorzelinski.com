import React from "react"
import { render, screen } from "@testing-library/react"

import Footer from "../footer"

jest.mock("../../hooks", () => ({
  useBio: () => ({
    bio: {
      site: {
        siteMetadata: {
          title: "siteTitle",
          author: {
            name: "authorsName",
            email: "authorsEmail",
            social: {
              github: "authorsGithub",
              dribbble: "authorsDribbble",
              twitter: "authorsTwitter",
              facebook: "authorsFacebook",
            },
          },
        },
      },
    },
  }),
}))

jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: str => (str === "pages" ? [] : str),
    }
  },
}))

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
