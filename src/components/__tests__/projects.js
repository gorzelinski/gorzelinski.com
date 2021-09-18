import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import Projects from "../projects"

const defaultData = {
  allMdx: {
    nodes: [
      {
        excerpt: "Default excerpt",
        fields: {
          slug: "/default-slug/",
        },
        frontmatter: {
          client: "Default Client",
          date: "2021-09-01T22:12:03.284Z",
          description: "Default description",
          myRole: "Default roles",
          title: "Default title",
          tools: "Default tools",
          live: "https://default-live.com/",
          featuredImage: {
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
      },
      {
        excerpt: "Default excerpt 2",
        fields: {
          slug: "/default-slug-2/",
        },
        frontmatter: {
          client: "Default client 2",
          date: "2021-05-01T22:12:03.284Z",
          description: "Default description 2",
          myRole: "Default roles 2",
          title: "Default title 2",
          tools: "Default tools 2",
          live: "https://default-live-2.com/",
          featuredImage: {
            alt: "Default alt",
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
      },
    ],
  },
}

const emptyData = {
  allMdx: {
    nodes: [],
  },
}

describe("Projects component", () => {
  describe("renders message when", () => {
    it("there is no data", () => {
      render(
        <ThemeProvider theme={light}>
          <Projects></Projects>
        </ThemeProvider>
      )
      const message = screen.getByText(/brak projektów/i)
      const project = screen.queryByRole("article")
      expect(project).not.toBeInTheDocument()
      expect(message).toBeInTheDocument()
    })

    it("data is empty", () => {
      render(
        <ThemeProvider theme={light}>
          <Projects data={emptyData}></Projects>
        </ThemeProvider>
      )
      const message = screen.getByText(/brak projektów/i)
      const project = screen.queryByRole("article")
      expect(project).not.toBeInTheDocument()
      expect(message).toBeInTheDocument()
    })
  })

  describe("renders projects when", () => {
    it("there is data", () => {
      render(
        <ThemeProvider theme={light}>
          <Projects data={defaultData}></Projects>
        </ThemeProvider>
      )
      const projects = screen.getAllByRole("article")
      const message = screen.queryByText(/brak projektów/i)
      expect(message).not.toBeInTheDocument()
      expect(projects.length).toBe(2)
    })
  })
})
