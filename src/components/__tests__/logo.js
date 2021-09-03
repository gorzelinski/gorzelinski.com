import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import Logo from "../logo"

describe("Logo component", () => {
  it("has link to home page", () => {
    render(
      <ThemeProvider theme={light}>
        <Logo></Logo>
      </ThemeProvider>
    )

    const logo = screen.getByRole("link")
    expect(logo.getAttribute("href")).toBe("/")
  })
})
