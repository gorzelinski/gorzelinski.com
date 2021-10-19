import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import Share from "../share"

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
      render(
        <ThemeProvider theme={light}>
          <Share data={defaultData}></Share>
        </ThemeProvider>
      )
      const links = screen
        .getAllByRole("link")
        .filter(link => link.href.includes("github"))
      expect(links[0].href).toContain("github")
    })

    it("dribbble link", () => {
      render(
        <ThemeProvider theme={light}>
          <Share data={defaultData}></Share>
        </ThemeProvider>
      )
      const links = screen
        .getAllByRole("link")
        .filter(link => link.href.includes("dribbble"))
      expect(links[0].href).toContain("dribbble")
    })

    it("twitter link", () => {
      render(
        <ThemeProvider theme={light}>
          <Share data={defaultData}></Share>
        </ThemeProvider>
      )
      const links = screen
        .getAllByRole("link")
        .filter(link => link.href.includes("twitter"))
      expect(links[0].href).toContain("twitter")
    })

    it("facebook link", () => {
      render(
        <ThemeProvider theme={light}>
          <Share data={defaultData}></Share>
        </ThemeProvider>
      )
      const links = screen
        .getAllByRole("link")
        .filter(link => link.href.includes("facebook"))
      expect(links[0].href).toContain("facebook")
    })

    it("linkedin link", () => {
      render(
        <ThemeProvider theme={light}>
          <Share data={defaultData}></Share>
        </ThemeProvider>
      )
      const links = screen
        .getAllByRole("link")
        .filter(link => link.href.includes("linkedin"))
      expect(links[0].href).toContain("linkedin")
    })

    it("all links", () => {
      render(
        <ThemeProvider theme={light}>
          <Share data={defaultData}></Share>
        </ThemeProvider>
      )
      const links = screen.getAllByRole("link")
      expect(links.length).toEqual(Object.keys(defaultData).length)
    })
  })

  describe("doesn't render (due to partial data)", () => {
    it("github link", () => {
      render(
        <ThemeProvider theme={light}>
          <Share data={{ ...defaultData, github: "" }}></Share>
        </ThemeProvider>
      )
      const links = screen
        .getAllByRole("link")
        .filter(link => link.href.includes("github"))
      expect(links.length).toEqual(0)
    })

    it("dribbble link", () => {
      render(
        <ThemeProvider theme={light}>
          <Share data={{ ...defaultData, dribbble: "" }}></Share>
        </ThemeProvider>
      )
      const links = screen
        .getAllByRole("link")
        .filter(link => link.href.includes("dribbble"))
      expect(links.length).toEqual(0)
    })

    it("twitter link", () => {
      render(
        <ThemeProvider theme={light}>
          <Share data={{ ...defaultData, twitter: "" }}></Share>
        </ThemeProvider>
      )
      const links = screen
        .getAllByRole("link")
        .filter(link => link.href.includes("twitter"))
      expect(links.length).toEqual(0)
    })

    it("facebooklink", () => {
      render(
        <ThemeProvider theme={light}>
          <Share data={{ ...defaultData, facebook: "" }}></Share>
        </ThemeProvider>
      )
      const links = screen
        .getAllByRole("link")
        .filter(link => link.href.includes("facebook"))
      expect(links.length).toEqual(0)
    })

    it("linkedin link", () => {
      render(
        <ThemeProvider theme={light}>
          <Share data={{ ...defaultData, linkedin: "" }}></Share>
        </ThemeProvider>
      )
      const links = screen
        .getAllByRole("link")
        .filter(link => link.href.includes("linkedin"))
      expect(links.length).toEqual(0)
    })

    it("any link", () => {
      render(
        <ThemeProvider theme={light}>
          <Share data={{}}></Share>
        </ThemeProvider>
      )
      const links = screen.queryAllByRole("link")
      expect(links.length).toEqual(0)
    })
  })
})
