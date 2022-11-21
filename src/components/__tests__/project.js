import React from "react"
import { render, screen } from "@testing-library/react"

import { project, projectPartial } from "./fixtures"
import Project from "../project"

describe("Project component", () => {
  describe("doesn't render when", () => {
    it("there is no data", () => {
      render(<Project></Project>)

      const title = screen.queryByRole("heading", { name: /default title/i })

      expect(title).not.toBeInTheDocument()
    })

    it("data is empty", () => {
      render(<Project data={{}}></Project>)

      const description = screen.queryByText(/default description/i)

      expect(description).not.toBeInTheDocument()
    })

    it("data is wrong", () => {
      render(<Project data="wrong data"></Project>)

      const roles = screen.queryByText(/default roles/i)

      expect(roles).not.toBeInTheDocument()
    })

    it("partial data is provided", () => {
      render(<Project data={projectPartial}></Project>)

      const title = screen.queryByRole("heading", { name: /default title/i })
      const description = screen.queryByText(/default description/i)

      expect(title).not.toBeInTheDocument()
      expect(description).not.toBeInTheDocument()
    })
  })

  describe("renders", () => {
    beforeEach(() => {
      render(<Project data={project}></Project>)
    })

    it("wrapper", () => {
      const wrapper = screen.getByRole("article")

      expect(wrapper).toBeInTheDocument()
    })

    it("image", () => {
      const img = screen.getByRole("img")

      expect(img).toBeInTheDocument()
    })

    it("services", () => {
      const roles = screen.getByText(/default services/i)

      expect(roles).toBeInTheDocument()
    })

    it("title", () => {
      const title = screen.getByRole("heading", { name: /default title/i })

      expect(title).toBeInTheDocument()
    })

    it("description", () => {
      const description = screen.getByText(/default description/i)

      expect(description).toBeInTheDocument()
    })

    it("link", () => {
      const link = screen.getByRole("link").getAttribute("href")

      expect(link).toBe(`/portfolio${project.fields.slug}`)
    })
  })
})
