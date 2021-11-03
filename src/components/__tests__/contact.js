import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
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
      render(
        <ThemeProvider theme={light}>
          <Contact></Contact>
        </ThemeProvider>
      )
    })

    it("CTA button", () => {
      const cta = screen.getByRole("link", {
        name: /skontaktuj/i,
        exact: false,
      })
      expect(cta.getAttribute("href")).toEqual(
        expect.stringMatching(/mailto:authorsemail/i)
      )
    })
  })
})
