import React from "react"
import { render } from "@testing-library/react"
import Button from "../example"

describe("Example", () => {
  it("renders the tests correctly", () => {
    const { getByText } = render(<Button />)
    expect(getByText("My button")).toBeInTheDocument()
  })
})
