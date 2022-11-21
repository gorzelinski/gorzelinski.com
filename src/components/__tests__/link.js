import React from "react"
import * as Gatsby from "gatsby"
import { render, screen } from "@testing-library/react"

import { link } from "./fixtures/links"
import Link from "../link"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
useStaticQuery.mockImplementation(() => ({
  themeI18N: {
    defaultLang: "en",
  },
  site: {
    siteMetadata: {
      siteUrl: link.site,
    },
  },
}))

describe("Link component", () => {
  describe("renders a custom link when the url is", () => {
    it("a slug", () => {
      render(<Link href={link.slug}></Link>)

      const a = screen.getByRole("link")

      expect(a).not.toHaveAttribute("target", "_blank")
    })

    it("internal", () => {
      render(<Link href={link.internal}></Link>)

      const a = screen.getByRole("link")

      expect(a).not.toHaveAttribute("target", "_blank")
    })

    it("a hash", () => {
      render(<Link href={link.hash}></Link>)

      const a = screen.getByRole("link")

      expect(a).not.toHaveAttribute("target", "_blank")
    })
  })

  describe("renders a standard link when the url is", () => {
    it("external", () => {
      render(<Link href={link.external}></Link>)

      const a = screen.getByRole("link")

      expect(a).toHaveAttribute("target", "_blank")
      expect(a).toHaveAttribute("rel", "nofollow noopener noreferrer")
    })
  })
})
