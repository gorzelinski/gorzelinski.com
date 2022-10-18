import React from "react"
import { render, screen } from "@testing-library/react"

import { post, postPartial } from "./fixtures"
import Post from "../post"

describe("Post component", () => {
  describe("doesn't render when", () => {
    it("there is no data", () => {
      render(<Post></Post>)
      const title = screen.queryByRole("heading", { name: /default title/i })
      expect(title).not.toBeInTheDocument()
    })

    it("data is empty", () => {
      render(<Post data={{}}></Post>)
      const description = screen.queryByText(/default description/i)
      expect(description).not.toBeInTheDocument()
    })

    it("data is wrong", () => {
      render(<Post data="wrong data"></Post>)
      const roles = screen.queryByText(/default roles/i)
      expect(roles).not.toBeInTheDocument()
    })

    it("partial data is provided", () => {
      render(<Post data={postPartial}></Post>)
      const title = screen.queryByRole("heading", { name: /default title/i })
      const description = screen.queryByText(/default description/i)
      expect(title).not.toBeInTheDocument()
      expect(description).not.toBeInTheDocument()
    })
  })

  describe("renders", () => {
    beforeEach(() => {
      render(<Post data={post}></Post>)
    })

    it("wrapper", () => {
      const wrapper = screen.getByRole("article")
      expect(wrapper).toBeInTheDocument()
    })

    it("time to read", () => {
      const timeToRead = screen.getByText(/min/i)
      expect(timeToRead).toBeInTheDocument()
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
      expect(link).toBe(`/blog${post.fields.slug}`)
    })
  })
})
