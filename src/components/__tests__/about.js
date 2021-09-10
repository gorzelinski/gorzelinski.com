import React from "react"
import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { light } from "../../themes"
import About from "../about"

const defaultData = {
  figcaption: "Default figcaption",
  meta: "Default meta",
  buttonText: "Default text",
  slug: "/default-slug",
  title: "Default Title",
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
      render(
        <ThemeProvider theme={light}>
          <About data={{ ...defaultData, image: {} }}></About>
        </ThemeProvider>
      )

      const image = screen.queryByRole("img")
      expect(image).not.toBeInTheDocument()
    })

    it("image caption", () => {
      render(
        <ThemeProvider theme={light}>
          <About data={{ ...defaultData, figcaption: "" }}></About>
        </ThemeProvider>
      )

      const figcaption = screen.queryByText(/default figcaption/i)
      expect(figcaption).not.toBeInTheDocument()
    })

    it("meta info", () => {
      render(
        <ThemeProvider theme={light}>
          <About data={{ ...defaultData, meta: "" }}></About>
        </ThemeProvider>
      )

      const meta = screen.queryByText(/default meta/i)
      expect(meta).not.toBeInTheDocument()
    })

    it("name (renders title instead)", () => {
      render(
        <ThemeProvider theme={light}>
          <About
            data={{
              ...defaultData,
              site: { siteMetadata: { author: { name: "" } } },
            }}
          ></About>
        </ThemeProvider>
      )

      const name = screen.queryByRole("heading", { name: /default name/i })
      const title = screen.queryByRole("heading", { name: /default title/i })
      expect(name).not.toBeInTheDocument()
      expect(title).toBeInTheDocument()
    })

    it("summary", () => {
      render(
        <ThemeProvider theme={light}>
          <About
            data={{
              ...defaultData,
              site: { siteMetadata: { author: { summary: "" } } },
            }}
          ></About>
        </ThemeProvider>
      )

      const summary = screen.queryByText(/default summary/i)
      expect(summary).not.toBeInTheDocument()
    })

    it("link to more", () => {
      render(
        <ThemeProvider theme={light}>
          <About
            data={{
              ...defaultData,
              slug: "",
            }}
          ></About>
        </ThemeProvider>
      )

      const link = screen.queryByRole("link", { name: /default text/i })
      expect(link).not.toBeInTheDocument()
    })
  })

  describe("renders", () => {
    beforeEach(() => {
      render(
        <ThemeProvider theme={light}>
          <About data={defaultData}></About>
        </ThemeProvider>
      )
    })

    it("image", () => {
      const image = screen.getByRole("img")
      expect(image).toBeInTheDocument()
    })

    it("image caption", () => {
      const figcaption = screen.getByText(/default figcaption/i)
      expect(figcaption).toBeInTheDocument()
    })

    it("meta info", () => {
      const meta = screen.getByText(/default meta/i)
      expect(meta).toBeInTheDocument()
    })

    it("name", () => {
      const name = screen.getByRole("heading", { name: /default name/i })
      expect(name).toBeInTheDocument()
    })

    it("summary", () => {
      const name = screen.getByText(/default summary/i)
      expect(name).toBeInTheDocument()
    })

    it("link to more", () => {
      const link = screen.getByRole("link", { name: /default text/i })
      expect(link.getAttribute("href")).toBe("/default-slug")
    })
  })
})
