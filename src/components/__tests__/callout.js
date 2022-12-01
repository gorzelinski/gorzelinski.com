import React from "react"
import { screen, render } from "@testing-library/react"

import Callout from "../callout"

describe("Callout component", () => {
  describe("renders", () => {
    it("children", () => {
      render(
        <Callout>
          <h1>Header</h1>
        </Callout>
      )

      const h1 = screen.getByRole("heading")

      expect(h1).toBeInTheDocument()
    })

    describe("types", () => {
      it("info", () => {
        const { container } = render(<Callout type="info"></Callout>)

        const icon = screen.getByTestId("icon")
        const svg = icon.firstChild

        expect(container.firstChild).toHaveStyleRule(
          "color",
          "var(--color-primary-base)"
        )
        expect(svg).toBeInTheDocument()
      })

      it("success", () => {
        const { container } = render(<Callout type="success"></Callout>)

        const icon = screen.getByTestId("icon")
        const svg = icon.firstChild

        expect(container.firstChild).toHaveStyleRule(
          "color",
          "var(--color-green-base)"
        )
        expect(svg).toBeInTheDocument()
      })

      it("warning", () => {
        const { container } = render(<Callout type="warning"></Callout>)

        const icon = screen.getByTestId("icon")
        const svg = icon.firstChild

        expect(container.firstChild).toHaveStyleRule(
          "color",
          "var(--color-orange-base)"
        )
        expect(svg).toBeInTheDocument()
      })

      it("danger", () => {
        const { container } = render(<Callout type="danger"></Callout>)

        const icon = screen.getByTestId("icon")
        const svg = icon.firstChild

        expect(container.firstChild).toHaveStyleRule(
          "color",
          "var(--color-red-base)"
        )
        expect(svg).toBeInTheDocument()
      })
    })
  })
})
