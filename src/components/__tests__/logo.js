import React from "react"
import { render, screen } from "@testing-library/react"

import Logo from "../logo"

describe("Logo component", () => {
  it("has link to home page", () => {
    render(<Logo></Logo>)

    const logo = screen.getByRole("link")
    expect(logo.getAttribute("href")).toBe("/")
  })
})
