import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import Post from "../post"

const defaultData = {
  excerpt: "Default excerpt",
  fields: {
    slug: "/default/",
  },
  frontmatter: {
    date: "2021-05-01T22:12:03.284Z",
    description: "Default description",
    title: "Default title",
  },
  timeToRead: 5,
}

const partialData = {
  ...defaultData,
  frontmatter: {
    title: "default title",
    description: "default description",
  },
}

describe("Post component", () => {
  describe("doesn't render when", () => {
    it("there is no data", () => {
      render(
        <ThemeProvider theme={light}>
          <Post></Post>
        </ThemeProvider>
      )
      const title = screen.queryByRole("heading", { name: /default title/i })
      expect(title).not.toBeInTheDocument()
    })

    it("data is empty", () => {
      render(
        <ThemeProvider theme={light}>
          <Post data={{}}></Post>
        </ThemeProvider>
      )
      const description = screen.queryByText(/default description/i)
      expect(description).not.toBeInTheDocument()
    })

    it("data is wrong", () => {
      render(
        <ThemeProvider theme={light}>
          <Post data="wrong data"></Post>
        </ThemeProvider>
      )
      const roles = screen.queryByText(/default roles/i)
      expect(roles).not.toBeInTheDocument()
    })

    it("partial data is provided", () => {
      render(
        <ThemeProvider theme={light}>
          <Post data={partialData}></Post>
        </ThemeProvider>
      )
      const title = screen.queryByRole("heading", { name: /default title/i })
      const description = screen.queryByText(/default description/i)
      expect(title).not.toBeInTheDocument()
      expect(description).not.toBeInTheDocument()
    })
  })

  describe("renders", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={light}>
          <Post data={defaultData}></Post>
        </ThemeProvider>
      )
    })

    it("wrapper", () => {
      const wrapper = screen.getByRole("article")
      expect(wrapper).toBeInTheDocument()
    })

    it("time to read", () => {
      const timeToRead = screen.getByText(/min./i)
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
      expect(link).toBe(`/blog${defaultData.fields.slug}`)
    })
  })
})
