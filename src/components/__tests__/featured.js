import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import Featured from "../featured"

const defaultData = {
  title: "Default title",
  slug: "/default-slug",
  buttonText: "Default text",
}

describe("Featured component", () => {
  describe("doesn't render (due to partial data)", () => {
    it("title", () => {
      render(
        <ThemeProvider theme={light}>
          <Featured data={{ slug: "/default-slug" }}></Featured>
        </ThemeProvider>
      )
      const title = screen.queryByRole("heading")
      expect(title).not.toBeInTheDocument()
    })

    it("link to more", () => {
      render(
        <ThemeProvider theme={light}>
          <Featured
            data={{ title: "Default title", buttonText: "Default text" }}
          ></Featured>
        </ThemeProvider>
      )
      const button = screen.queryByRole("link")
      expect(button).not.toBeInTheDocument()
    })

    it("children", () => {
      render(
        <ThemeProvider theme={light}>
          <Featured data={defaultData}></Featured>
        </ThemeProvider>
      )

      const children = screen.queryAllByRole("article")
      expect(children.length).toBe(0)
    })
  })
  describe("renders", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={light}>
          <Featured data={defaultData}>
            <article></article>
            <article></article>
          </Featured>
        </ThemeProvider>
      )
    })

    it("title", () => {
      const title = screen.getByRole("heading", { name: /default title/i })
      expect(title).toBeInTheDocument()
    })

    it("link to more", () => {
      const button = screen.getByRole("link", { name: /default text/i })
      expect(button).toBeInTheDocument()
    })

    it("children", () => {
      const children = screen.getAllByRole("article")
      expect(children.length).toBe(2)
    })
  })
})
