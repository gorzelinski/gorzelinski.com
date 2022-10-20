import React from "react"
import { render, screen } from "@testing-library/react"

import Landing from "../landing"

jest.mock("../../hooks/useReducedMotion.js", () => ({
  useReducedMotion: () => true,
}))

describe("Landing component", () => {
  describe("renders", () => {
    beforeEach(() => {
      render(<Landing></Landing>)
    })

    it("title", () => {
      const title = screen.getByRole("heading", { level: 1 })
      expect(title).toBeInTheDocument()
    })

    it("cta", () => {
      const cta = screen.getByRole("link")
      expect(cta).toBeInTheDocument()
    })
  })
})
