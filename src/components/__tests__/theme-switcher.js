import React from "react"
import { render, screen } from "@testing-library/react"

import ThemeSwitcher from "../theme-switcher"
import { ThemeContext } from "../theme-provider"

describe("ThemeSwitcher component", () => {
  describe("renders", () => {
    it("button", () => {
      render(
        <ThemeContext.Provider value={{ theme: "light", saveTheme: jest.fn() }}>
          <ThemeSwitcher></ThemeSwitcher>
        </ThemeContext.Provider>
      )

      const button = screen.getByLabelText(/aria/i)
      expect(button).toBeInTheDocument()
    })

    it("sun and moon icon", () => {
      render(
        <ThemeContext.Provider value={{ theme: "light", saveTheme: jest.fn() }}>
          <ThemeSwitcher></ThemeSwitcher>
        </ThemeContext.Provider>
      )

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
