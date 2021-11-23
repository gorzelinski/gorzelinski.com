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

      const button = screen.getByLabelText(/zmień motyw/i)
      expect(button).toBeInTheDocument()
    })

    it("sunny icon (in light mode)", () => {
      render(
        <ThemeContext.Provider value={{ theme: "light", saveTheme: jest.fn() }}>
          <ThemeSwitcher></ThemeSwitcher>
        </ThemeContext.Provider>
      )

      const sunny = screen.getByTestId(/sunny/i)
      const moon = screen.queryByTestId(/moon/i)
      expect(moon).not.toBeInTheDocument()
      expect(sunny).toBeInTheDocument()
    })

    it("moon icon (in dark mode)", () => {
      render(
        <ThemeContext.Provider value={{ theme: "dark", saveTheme: jest.fn() }}>
          <ThemeSwitcher></ThemeSwitcher>
        </ThemeContext.Provider>
      )

      const moon = screen.getByTestId(/moon/i)
      const sunny = screen.queryByTestId(/sunny/i)
      expect(sunny).not.toBeInTheDocument()
      expect(moon).toBeInTheDocument()
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
      const button = screen.queryByLabelText(/zmień motyw/i)
      const sunny = screen.queryByTestId(/sunny/i)

      expect(button).not.toBeInTheDocument()
      expect(sunny).not.toBeInTheDocument()
    })
  })
})
