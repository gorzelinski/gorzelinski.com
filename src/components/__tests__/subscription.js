import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import Subscription from "../subscription"

describe("Subscirption component", () => {
  describe("renders", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={light}>
          <Subscription></Subscription>
        </ThemeProvider>
      )
    })

    it("title", () => {
      const title = screen.getByRole("heading")
      expect(title).toBeInTheDocument()
    })

    it("email input field", () => {
      const input = screen.getByRole("textbox")
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
