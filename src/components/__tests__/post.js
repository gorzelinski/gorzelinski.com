import React from "react"
import { render, screen } from "@testing-library/react"

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
    image: {
      alt: "Default alt text",
      src: {
        childImageSharp: {
          gatsbyImageData: {
            layout: "constrained",
            backgroundColor: "#0868c8",
            images: {
              fallback: {
                src: "/static/ea672a9ab189f45e297b00a559bb3962/b8e2d/gorzelinski-thumbnail.png",
                srcSet:
                  "/static/ea672a9ab189f45e297b00a559bb3962/9a63f/gorzelinski-thumbnail.png 640w,\n/static/ea672a9ab189f45e297b00a559bb3962/87706/gorzelinski-thumbnail.png 1280w,\n/static/ea672a9ab189f45e297b00a559bb3962/b8e2d/gorzelinski-thumbnail.png 2560w",
                sizes: "(min-width: 2560px) 2560px, 100vw",
              },
              sources: [
                {
                  srcSet:
                    "/static/ea672a9ab189f45e297b00a559bb3962/17574/gorzelinski-thumbnail.webp 640w,\n/static/ea672a9ab189f45e297b00a559bb3962/71d4d/gorzelinski-thumbnail.webp 1280w,\n/static/ea672a9ab189f45e297b00a559bb3962/c87c1/gorzelinski-thumbnail.webp 2560w",
                  type: "image/webp",
                  sizes: "(min-width: 2560px) 2560px, 100vw",
                },
              ],
            },
            width: 2560,
            height: 1440,
          },
        },
      },
    },
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
      render(<Post data={partialData}></Post>)
      const title = screen.queryByRole("heading", { name: /default title/i })
      const description = screen.queryByText(/default description/i)
      expect(title).not.toBeInTheDocument()
      expect(description).not.toBeInTheDocument()
    })
  })

  describe("renders", () => {
    beforeEach(() => {
      render(<Post data={defaultData}></Post>)
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
      expect(link).toBe(`/blog${defaultData.fields.slug}`)
    })
  })
})
