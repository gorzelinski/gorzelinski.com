import React from "react"
import * as Gatsby from "gatsby"
import { render, screen } from "@testing-library/react"

import { image } from "./fixtures"
import Bio from "../bio"

const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
useStaticQuery.mockImplementation(() => ({
  themeI18N: {
    defaultLang: "en",
    config: [
      {
        code: "en",
        hrefLang: "en-US",
        name: "English",
        localName: "English",
        langDir: "ltr",
        dateFormat: "MMMM DD, YYYY",
      },
      {
        code: "pl",
        hrefLang: "pl-PL",
        name: "Polish",
        localName: "Polski",
        langDir: "ltr",
        dateFormat: "DD MMMM, YYYY",
      },
    ],
  },
  ...image,
}))

describe("Bio component", () => {
  describe("renders", () => {
    beforeEach(() => {
      jest.clearAllMocks()
      render(<Bio></Bio>)
    })

    it("image", () => {
      const image = screen.getByRole("img")
      expect(image).toBeInTheDocument()
    })

    it("name", () => {
      const name = screen.getByRole("heading", { name: /name/i })
      expect(name).toBeInTheDocument()
    })

    it("link to more", () => {
      const link = screen.getByRole("link", { name: /story/i, exact: false })
      expect(link.getAttribute("href")).toBe("/about/")
    })
  })
})
