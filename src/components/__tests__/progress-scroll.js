import React from "react"
import { render, screen } from "@testing-library/react"

import ProgressScroll from "../progress-scroll"

describe("Progress scroll component", () => {
  describe("renders", () => {
    beforeEach(() => {
      render(<ProgressScroll></ProgressScroll>)
    })

    it("progress bar", () => {
      const progress = screen.getByTestId("progress")

      expect(progress).toBeInTheDocument()
    })

    it("progress value", () => {
      const value = screen.getByTestId("progress-value")

      expect(value).toBeInTheDocument()
    })
  })
})
