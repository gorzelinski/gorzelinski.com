import React from "react"
import { render, screen } from "@testing-library/react"

import { posts, projects } from "./fixtures"
import Cards from "../cards"

const empty = []

describe("Cards component", () => {
  describe("renders message when", () => {
    it("there is no data", () => {
      render(<Cards></Cards>)
      const message = screen.getByText(/message/i, { exact: false })
      const card = screen.queryByRole("article")
      expect(card).not.toBeInTheDocument()
      expect(message).toBeInTheDocument()
    })
    it("data is empty", () => {
      render(<Cards data={empty}></Cards>)
      const message = screen.getByText(/message/i, { exact: false })
      const card = screen.queryByRole("article")
      expect(card).not.toBeInTheDocument()
      expect(message).toBeInTheDocument()
    })
  })

  describe("renders cards when", () => {
    it("posts are provided", () => {
      render(<Cards data={posts}></Cards>)
      const cards = screen.getAllByRole("article")
      const message = screen.queryByText(/message/i, { exact: false })
      const date = screen.queryByText(/May 1, 2022/i)
      expect(date).toBeInTheDocument()
      expect(message).not.toBeInTheDocument()
      expect(cards.length).toBe(4)
    })
    it("projects are provided", () => {
      render(<Cards data={projects}></Cards>)
      const cards = screen.getAllByRole("article")
      const message = screen.queryByText(/message/i, { exact: false })
      const myRoles = screen.queryByText(/default roles 2/i)
      expect(myRoles).toBeInTheDocument()
      expect(message).not.toBeInTheDocument()
      expect(cards.length).toBe(2)
    })
  })
})
