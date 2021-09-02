import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
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
    myRole: "Default roles",
    title: "Default title",
    tools: "Default tools",
    live: "https://default.com/",
    featuredImage: {
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
  it("doesn't render when there is no data", () => {
    render(
      <ThemeProvider theme={light}>
        <Project></Project>
      </ThemeProvider>
    )
    const title = screen.queryByRole("heading", { name: /default title/i })
    expect(title).not.toBeInTheDocument()
  })

  it("doesn't render when data is empty", () => {
    render(
      <ThemeProvider theme={light}>
        <Project data={{}}></Project>
      </ThemeProvider>
    )
    const description = screen.queryByText(/default description/i)
    expect(description).not.toBeInTheDocument()
  })

  it("doesn't render when data is wrong", () => {
    render(
      <ThemeProvider theme={light}>
        <Project data="wrong data"></Project>
      </ThemeProvider>
    )
    const roles = screen.queryByText(/default roles/i)
    expect(roles).not.toBeInTheDocument()
  })

  it("doesn't render when partial data is provided", () => {
    render(
      <ThemeProvider theme={light}>
        <Project data={partialData}></Project>
      </ThemeProvider>
    )
    const title = screen.queryByRole("heading", { name: /default title/i })
    const description = screen.queryByText(/default description/i)
    expect(title).not.toBeInTheDocument()
    expect(description).not.toBeInTheDocument()
  })

  it("renders correctly when data is provided", () => {
    render(
      <ThemeProvider theme={light}>
        <Project data={defaultData}></Project>
      </ThemeProvider>
    )

    const wrapper = screen.getByRole("article")
    const img = screen.getByRole("img")
    const roles = screen.getByText(/default roles/i)
    const title = screen.getByRole("heading", { name: /default title/i })
    const description = screen.getByText(/default description/i)
    const link = screen.getByRole("link").getAttribute("href")

    expect(wrapper).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(roles).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(link).toBe(defaultData.fields.slug)
  })
})
