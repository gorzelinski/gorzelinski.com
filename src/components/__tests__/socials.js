import React from "react"
import { render, screen } from "@testing-library/react"

import Socials from "../socials"

const defaultData = {
  github: "https://github.com/link-to-share",
  dribbble: "https://dribbble.com/link-to-share",
  twitter: "https://twitter.com/intent/tweet?url=link-to-share",
  facebook: "https://www.facebook.com/sharer/sharer.php?u=link-to-share",
  linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=link-to-share",
}

describe("Subscirption component", () => {
  describe("renders", () => {
    it("github link", () => {
      render(<Socials data={defaultData}></Socials>)
      const link = screen.getByRole("link", { name: "github", exact: false })
      expect(link).toBeInTheDocument()
    })

    it("dribbble link", () => {
      render(<Socials data={defaultData}></Socials>)
      const link = screen.getByRole("link", { name: "dribbble", exact: false })
      expect(link).toBeInTheDocument()
    })

    it("twitter link", () => {
      render(<Socials data={defaultData}></Socials>)
      const link = screen.getByRole("link", { name: "twitter", exact: false })
      expect(link).toBeInTheDocument()
    })

    it("facebook link", () => {
      render(<Socials data={defaultData}></Socials>)
      const link = screen.getByRole("link", { name: "facebook", exact: false })
      expect(link).toBeInTheDocument()
    })

    it("linkedin link", () => {
      render(<Socials data={defaultData}></Socials>)
      const link = screen.getByRole("link", { name: "linkedin", exact: false })
      expect(link).toBeInTheDocument()
    })

    it("all links", () => {
      render(<Socials data={defaultData}></Socials>)
      const links = screen.getAllByRole("link")
      expect(links.length).toEqual(Object.keys(defaultData).length)
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
