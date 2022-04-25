import React from "react"
import { render, screen } from "@testing-library/react"

import Project from "../project"

const defaultData = {
  excerpt: "Default excerpt",
  fields: {
    slug: "/default/",
  },
  frontmatter: {
    client: "Default client",
    date: "2021-05-01T22:12:03.284Z",
    description: "Default description",
    title: "Default title",
    services: ["Default services"],
    tools: ["Default tools"],
    links: ["https://default.com/"],
    image: {
      alt: "Default alt text",
      src: {
        childImageSharp: {
          gatsbyImageData: {
            layout: "constrained",
            backgroundColor: "#f8f8f8",
            images: {
              fallback: {
                src: "/static/a981da887b6696cf7653715c9fb44557/7659a/an-lam-thumbnail.png",
                srcSet:
                  "/static/a981da887b6696cf7653715c9fb44557/0abbd/an-lam-thumbnail.png 840w,\n/static/a981da887b6696cf7653715c9fb44557/50d48/an-lam-thumbnail.png 1680w,\n/static/a981da887b6696cf7653715c9fb44557/7659a/an-lam-thumbnail.png 3360w",
                sizes: "(min-width: 3360px) 3360px, 100vw",
              },
              sources: [
                {
                  srcSet:
                    "/static/a981da887b6696cf7653715c9fb44557/a0d53/an-lam-thumbnail.webp 840w,\n/static/a981da887b6696cf7653715c9fb44557/2f6d3/an-lam-thumbnail.webp 1680w,\n/static/a981da887b6696cf7653715c9fb44557/2d2bf/an-lam-thumbnail.webp 3360w",
                  type: "image/webp",
                  sizes: "(min-width: 3360px) 3360px, 100vw",
                },
              ],
            },
            width: 3360,
            height: 1440,
          },
        },
      },
    },
  },
}

const partialData = {
  ...defaultData,
  frontmatter: {
    title: "default title",
    description: "default description",
  },
}

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
      render(<Project data={partialData}></Project>)
      const title = screen.queryByRole("heading", { name: /default title/i })
      const description = screen.queryByText(/default description/i)
      expect(title).not.toBeInTheDocument()
      expect(description).not.toBeInTheDocument()
    })
  })

  describe("renders", () => {
    beforeEach(() => {
      render(<Project data={defaultData}></Project>)
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
      expect(link).toBe(`/portfolio${defaultData.fields.slug}`)
    })
  })
})
