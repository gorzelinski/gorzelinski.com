import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import Landing from "../landing"

describe("Landing component", () => {
  describe("renders", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={light}>
          <Landing></Landing>
        </ThemeProvider>
      )
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
