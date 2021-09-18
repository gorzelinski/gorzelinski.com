import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import Posts from "../posts"

const defaultData = {
  allMdx: {
    nodes: [
      {
        excerpt: "Default excerpt",
        fields: {
          slug: "/default-slug/",
        },
        frontmatter: {
          date: "01 lipca, 2021",
          title: "Default title",
          description: "Default description",
        },
        timeToRead: 4,
      },
      {
        excerpt: "Default excerpt 2",
        fields: {
          slug: "/default-slug-2/",
        },
        frontmatter: {
          date: "28 maja, 2021",
          title: "Default title 2",
          description: "Default description 2",
        },
        timeToRead: 4,
      },
      {
        excerpt: "Default excerpt 3",
        fields: {
          slug: "/default-slug-3/",
        },
        frontmatter: {
          date: "06 maja, 2021",
          title: "Default title 3",
          description: "Default description 3",
        },
        timeToRead: 1,
      },
      {
        excerpt: "Default excerpt 4",
        fields: {
          slug: "/default-slug-4/",
        },
        frontmatter: {
          date: "01 maja, 2021",
          title: "Default title 4",
          description: "Default description 4",
        },
        timeToRead: 3,
      },
    ],
  },
}

const emptyData = {
  allMdx: {
    nodes: [],
  },
}

describe("Posts component", () => {
  describe("renders message when", () => {
    it("there is no data", () => {
      render(
        <ThemeProvider theme={light}>
          <Posts></Posts>
        </ThemeProvider>
      )
      const message = screen.getByText(/brak wpisów/i)
      const post = screen.queryByRole("article")
      expect(post).not.toBeInTheDocument()
      expect(message).toBeInTheDocument()
    })

    it("data is empty", () => {
      render(
        <ThemeProvider theme={light}>
          <Posts data={emptyData}></Posts>
        </ThemeProvider>
      )
      const message = screen.getByText(/brak wpisów/i)
      const post = screen.queryByRole("article")
      expect(post).not.toBeInTheDocument()
      expect(message).toBeInTheDocument()
    })
  })

  describe("renders posts when", () => {
    it("there is data", () => {
      render(
        <ThemeProvider theme={light}>
          <Posts data={defaultData}></Posts>
        </ThemeProvider>
      )
      const posts = screen.getAllByRole("article")
      const message = screen.queryByText(/brak wpisów/i)
      expect(message).not.toBeInTheDocument()
      expect(posts.length).toBe(4)
    })
  })
})
