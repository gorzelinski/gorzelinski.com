import React from "react"
import { render, screen } from "@testing-library/react"

import Cards from "../cards"

const postsMock = [
  {
    excerpt: "Default excerpt",
    fields: {
      slug: "/default-slug/",
    },
    frontmatter: {
      date: "May 1, 2022",
      title: "Default title",
      description: "Default description",
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
    timeToRead: 4,
  },
  {
    excerpt: "Default excerpt 2",
    fields: {
      slug: "/default-slug-2/",
    },
    frontmatter: {
      date: "May 2, 2022",
      title: "Default title 2",
      description: "Default description 2",
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
    timeToRead: 4,
  },
  {
    excerpt: "Default excerpt 3",
    fields: {
      slug: "/default-slug-3/",
    },
    frontmatter: {
      date: "May 3, 2022",
      title: "Default title 3",
      description: "Default description 3",
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
    timeToRead: 1,
  },
  {
    excerpt: "Default excerpt 4",
    fields: {
      slug: "/default-slug-4/",
    },
    frontmatter: {
      date: "May 4, 2022",
      title: "Default title 4",
      description: "Default description 4",
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
    timeToRead: 3,
  },
]

const projectsMock = [
  {
    excerpt: "Default excerpt",
    fields: {
      slug: "/default-slug/",
    },
    frontmatter: {
      description: "Default description",
      services: ["Default roles"],
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
  },
  {
    excerpt: "Default excerpt 2",
    fields: {
      slug: "/default-slug-2/",
    },
    frontmatter: {
      description: "Default description 2",
      services: ["Default roles 2"],
      title: "Default title 2",
      image: {
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
]

const emptyData = []

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
      render(<Cards data={emptyData}></Cards>)
      const message = screen.getByText(/message/i, { exact: false })
      const card = screen.queryByRole("article")
      expect(card).not.toBeInTheDocument()
      expect(message).toBeInTheDocument()
    })
  })

  describe("renders cards when", () => {
    it("posts are provided", () => {
      render(<Cards data={postsMock}></Cards>)
      const posts = screen.getAllByRole("article")
      const message = screen.queryByText(/message/i, { exact: false })
      const date = screen.queryByText(/May 1, 2022/i)
      expect(date).toBeInTheDocument()
      expect(message).not.toBeInTheDocument()
      expect(posts.length).toBe(4)
    })
    it("projects are provided", () => {
      render(<Cards data={projectsMock}></Cards>)
      const projects = screen.getAllByRole("article")
      const message = screen.queryByText(/message/i, { exact: false })
      const myRoles = screen.queryByText(/default roles 2/i)
      expect(myRoles).toBeInTheDocument()
      expect(message).not.toBeInTheDocument()
      expect(projects.length).toBe(2)
    })
  })
})
