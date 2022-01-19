import React from "react"
import { render, screen } from "@testing-library/react"

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
          date: "28 maja, 2021",
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
          date: "06 maja, 2021",
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
          date: "01 maja, 2021",
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
      render(<Posts></Posts>)
      const message = screen.getByText(/no posts/i, { exact: false })
      const post = screen.queryByRole("article")
      expect(post).not.toBeInTheDocument()
      expect(message).toBeInTheDocument()
    })

    it("data is empty", () => {
      render(<Posts data={emptyData}></Posts>)
      const message = screen.getByText(/no posts/i, { exact: false })
      const post = screen.queryByRole("article")
      expect(post).not.toBeInTheDocument()
      expect(message).toBeInTheDocument()
    })
  })

  describe("renders posts when", () => {
    it("there is data", () => {
      render(<Posts data={defaultData}></Posts>)
      const posts = screen.getAllByRole("article")
      const message = screen.queryByText(/no posts/i, { exact: false })
      expect(message).not.toBeInTheDocument()
      expect(posts.length).toBe(4)
    })
  })
})
