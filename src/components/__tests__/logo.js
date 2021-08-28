import React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import Logo from "../logo"

describe("Logo component", () => {
  it("has link to home page", () => {
    const { getByRole } = render(
      <ThemeProvider theme={light}>
        <Logo></Logo>
      </ThemeProvider>
    )
    expect(getByRole("link").getAttribute("href")).toBe("/")
  })
})
