import React from "react"
import { render, screen } from "@testing-library/react"

import Pagination from "../pagination"

const defaultData = {
  prev: {
    text: "Title of previous item",
    slug: "/slug-to-previous-item",
  },
  next: {
    text: "Title of next item",
    slug: "/slug-to-next-item",
  },
}

describe("Pagination component", () => {
  describe("renders", () => {
    it("link to next item", () => {
      render(<Pagination data={defaultData}></Pagination>)
      const next = screen.getByRole("link", {
        name: "Title of next item",
      })
      expect(next.href).toContain("/slug-to-next-item")
    })

    it("link to previous item", () => {
      render(<Pagination data={defaultData}></Pagination>)
      const next = screen.getByRole("link", {
        name: "Title of previous item",
      })
      expect(next.href).toContain("/slug-to-previous-item")
    })
  })

  describe("doesn't render (due to partial data)", () => {
    it("link to next item", () => {
      render(<Pagination data={{ ...defaultData, next: null }}></Pagination>)
      const next = screen.queryByRole("link", {
        name: "Title of next item",
      })
      expect(next).not.toBeInTheDocument()
    })

    it("link to previous item", () => {
      render(<Pagination data={{ ...defaultData, prev: null }}></Pagination>)
      const prev = screen.queryByRole("link", {
        name: "Title of previous item",
      })
      expect(prev).not.toBeInTheDocument()
    })
  })
})
