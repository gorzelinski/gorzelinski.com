import React from "react"
import { render, screen } from "@testing-library/react"

import About from "../about"

const defaultData = {
  image: {
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
  site: {
    siteMetadata: {
      author: {
        name: "Default name",
        summary: "Default summary",
      },
    },
  },
}

describe("About component", () => {
  describe("doesn't render (due to partial data)", () => {
    it("image", () => {
      render(<About data={{ ...defaultData, image: {} }}></About>)

      const image = screen.queryByRole("img")
      expect(image).not.toBeInTheDocument()
    })

    it("name", () => {
      render(
        <About
          data={{
            ...defaultData,
            site: { siteMetadata: { author: { name: "" } } },
          }}
        ></About>
      )

      const name = screen.queryByRole("heading", { name: /default name/i })
      expect(name).not.toBeInTheDocument()
    })
  })

  describe("renders", () => {
    beforeEach(() => {
      render(<About data={defaultData}></About>)
    })

    it("figure", () => {
      const figure = screen.getByRole("figure")
      expect(figure).toBeInTheDocument()
    })

    it("image", () => {
      const image = screen.getByRole("img")
      expect(image).toBeInTheDocument()
    })

    it("name", () => {
      const name = screen.getByRole("heading", { name: /default name/i })
      expect(name).toBeInTheDocument()
    })

    it("link to more", () => {
      const link = screen.getByRole("link", { name: /story/i, exact: false })
      expect(link.getAttribute("href")).toBe("/about")
    })
  })
})
