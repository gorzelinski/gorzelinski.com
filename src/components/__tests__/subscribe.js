import React from "react"
import { render, screen } from "@testing-library/react"

import Subscribe from "../subscribe"

describe("Subscribe component", () => {
  describe("renders", () => {
    beforeEach(() => {
      render(<Subscribe></Subscribe>)
    })

    it("title", () => {
      const title = screen.getByRole("heading")
      expect(title).toBeInTheDocument()
    })

    it("email input field", () => {
      const input = screen.getByRole("textbox", {
        name: /email/i,
        exact: false,
      })
      expect(input).toBeInTheDocument()
      expect(input).toBeRequired()
      expect(input.getAttribute("type")).toBe("email")
    })

    it("subscribe button", () => {
      const button = screen.getByRole("button")
      expect(button).toBeInTheDocument()
    })
  })
})
