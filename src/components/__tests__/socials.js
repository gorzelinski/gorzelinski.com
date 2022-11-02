import React from "react"
import { render, screen } from "@testing-library/react"

import { socials } from "./fixtures"
import Socials from "../socials"

describe("Subscirption component", () => {
  describe("renders", () => {
    beforeEach(() => {
      render(<Socials data={socials}></Socials>)
    })

    it("github link", () => {
      const link = screen.getByRole("link", { name: "Github", exact: false })
      expect(link).toBeInTheDocument()
    })

    it("dribbble link", () => {
      const link = screen.getByRole("link", { name: "Dribbble", exact: false })
      expect(link).toBeInTheDocument()
    })

    it("twitter link", () => {
      const link = screen.getByRole("link", { name: "Twitter", exact: false })
      expect(link).toBeInTheDocument()
    })

    it("facebook link", () => {
      const link = screen.getByRole("link", { name: "Facebook", exact: false })
      expect(link).toBeInTheDocument()
    })

    it("linkedin link", () => {
      const link = screen.getByRole("link", { name: "Linkedin", exact: false })
      expect(link).toBeInTheDocument()
    })

    it("all links", () => {
      const links = screen.getAllByRole("link")
      expect(links.length).toEqual(Object.keys(socials).length)
    })
  })

  describe("doesn't render (due to partial data)", () => {
    it("any link", () => {
      render(<Socials data={{}}></Socials>)
      const links = screen.queryAllByRole("link")
      expect(links.length).toEqual(0)
    })
  })
})
