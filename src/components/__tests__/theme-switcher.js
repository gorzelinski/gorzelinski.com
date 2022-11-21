import React from "react"
import { render, screen } from "@testing-library/react"

import { ThemeContext } from "../../themes/theme-provider"
import ThemeSwitcher from "../theme-switcher"

describe("ThemeSwitcher component", () => {
  describe("renders", () => {
    beforeEach(() => {
      render(
        <ThemeContext.Provider value={{ theme: "light", saveTheme: jest.fn() }}>
          <ThemeSwitcher></ThemeSwitcher>
        </ThemeContext.Provider>
      )
    })

    it("button", () => {
      const button = screen.getByLabelText(/aria/i)

      expect(button).toBeInTheDocument()
    })

    it("sun and moon icon", () => {
      const icon = screen.getByTestId(/sun-and-moon/i)

      expect(icon).toBeInTheDocument()
    })
  })

  describe("doesn't render", () => {
    it("component without theme", () => {
      render(
        <ThemeContext.Provider
          value={{ theme: undefined, saveTheme: jest.fn() }}
        >
          <ThemeSwitcher></ThemeSwitcher>
        </ThemeContext.Provider>
      )

      const button = screen.queryByLabelText(/aria/i)
      const sunny = screen.queryByTestId(/sunny/i)

      expect(button).not.toBeInTheDocument()
      expect(sunny).not.toBeInTheDocument()
    })
  })
})
