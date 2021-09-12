import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import * as themes from "../../themes"
import ThemeSwitcher from "../theme-switcher"

const defaultData = {
  themes,
  selectedTheme: themes.light,
  setPreferredTheme: jest.fn(),
  themeLoaded: true,
}

describe("ThemeSwitcher component", () => {
  describe("renders", () => {
    it("button", () => {
      render(
        <ThemeProvider theme={defaultData.selectedTheme}>
          <ThemeSwitcher data={defaultData}></ThemeSwitcher>
        </ThemeProvider>
      )

      const button = screen.getByLabelText(/zmień motyw/i)
      expect(button).toBeInTheDocument()
    })

    it("moon icon (in light mode)", () => {
      render(
        <ThemeProvider theme={defaultData.selectedTheme}>
          <ThemeSwitcher data={defaultData}></ThemeSwitcher>
        </ThemeProvider>
      )

      const moon = screen.getByTestId(/moon/i)
      const sunny = screen.queryByTestId(/sunny/i)
      expect(sunny).not.toBeInTheDocument()
      expect(moon).toBeInTheDocument()
    })

    it("sunny icon (in dark mode)", () => {
      render(
        <ThemeProvider theme={defaultData.selectedTheme}>
          <ThemeSwitcher
            data={{ ...defaultData, selectedTheme: themes.dark }}
          ></ThemeSwitcher>
        </ThemeProvider>
      )

      const sunny = screen.getByTestId(/sunny/i)
      const moon = screen.queryByTestId(/moon/i)
      expect(moon).not.toBeInTheDocument()
      expect(sunny).toBeInTheDocument()
    })
  })

  describe("doesn't render when", () => {
    it("there is less than two themes", () => {
      render(
        <ThemeProvider theme={defaultData.selectedTheme}>
          <ThemeSwitcher
            data={{ ...defaultData, themes: { light: themes.light } }}
          ></ThemeSwitcher>
        </ThemeProvider>
      )

      const button = screen.queryByRole("button")
      expect(button).not.toBeInTheDocument()
    })

    it("there is no theme", () => {
      render(
        <ThemeProvider theme={defaultData.selectedTheme}>
          <ThemeSwitcher data={{ ...defaultData, themes: {} }}></ThemeSwitcher>
        </ThemeProvider>
      )

      const button = screen.queryByRole("button")
      expect(button).not.toBeInTheDocument()
    })

    it("theme is not loaded", () => {
      render(
        <ThemeProvider theme={defaultData.selectedTheme}>
          <ThemeSwitcher
            data={{ ...defaultData, themeLoaded: false }}
          ></ThemeSwitcher>
        </ThemeProvider>
      )

      const button = screen.queryByRole("button")
      expect(button).not.toBeInTheDocument()
    })
  })
})
