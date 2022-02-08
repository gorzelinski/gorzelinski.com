import React from "react"
import { render, screen } from "@testing-library/react"

import Contact from "../contact"

jest.mock("../../hooks", () => ({
  useBio: () => ({
    bio: {
      site: {
        siteMetadata: {
          title: "siteTitle",
          author: {
            name: "authorsName",
            email: "authorsEmail",
          },
          social: {
            github: "authorsGithub",
            dribbble: "authorsDribbble",
            twitter: "authorsTwitter",
            facebook: "authorsFacebook",
          },
        },
      },
    },
  }),
}))

describe("Contact component", () => {
  describe("renders", () => {
    beforeEach(() => {
      render(<Contact></Contact>)
    })

    it("CTA button", () => {
      const cta = screen.getByRole("link", {
        name: /cta/i,
        exact: false,
      })
      expect(cta.getAttribute("href")).toEqual(
        expect.stringMatching(/mailto:authorsemail/i)
      )
    })
  })
})
