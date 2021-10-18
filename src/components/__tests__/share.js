import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import Share from "../share"

const defaultData = {
  twitter: "https://twitter.com/intent/tweet?url=link-to-share",
  facebook: "https://www.facebook.com/sharer/sharer.php?u=link-to-share",
  linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=link-to-share",
}

describe("Subscirption component", () => {
  describe("renders", () => {
    it("twitter share link", () => {
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

    it("facebook share link", () => {
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

    it("linkedin share link", () => {
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
    it("twitter share link", () => {
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

    it("facebook share link", () => {
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

    it("linkedin share link", () => {
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
