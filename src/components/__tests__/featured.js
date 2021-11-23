import React from "react"
import { render, screen } from "@testing-library/react"

import Featured from "../featured"

const defaultData = {
  title: "Default title",
  slug: "/default-slug",
  buttonText: "Default text",
}

describe("Featured component", () => {
  describe("doesn't render (due to partial data)", () => {
    it("title", () => {
      render(<Featured data={{ slug: "/default-slug" }}></Featured>)
      const title = screen.queryByRole("heading")
      expect(title).not.toBeInTheDocument()
    })

    it("link to more", () => {
      render(
        <Featured
          data={{ title: "Default title", buttonText: "Default text" }}
        ></Featured>
      )
      const button = screen.queryByRole("link")
      expect(button).not.toBeInTheDocument()
    })

    it("children", () => {
      render(<Featured data={defaultData}></Featured>)

      const children = screen.queryAllByRole("article")
      expect(children.length).toBe(0)
    })
  })
  describe("renders", () => {
    beforeEach(() => {
      render(
        <Featured data={defaultData}>
          <article></article>
          <article></article>
        </Featured>
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
