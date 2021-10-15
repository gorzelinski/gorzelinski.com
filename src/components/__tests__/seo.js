import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Helmet from "react-helmet"
import SEO from "../seo"

describe("SEO component", () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: `Gorzeliński`,
          description: `Default meta description`,
          siteUrl: `https://gorzelinski.com`,
          social: {
            twitter: `gorzelinski`,
          },
        },
      },
    })
  })

  const mockDefaultDescription = "Default meta description"
  const mockCustomDescription = "Custom meta description"
  const mockDefaultTitle = "Gorzeliński"
  const mockTitle = "Custom title"
  const mockTitleTemplate = "Custom title | Gorzeliński"
  const mockDefaultUrl = "https://gorzelinski.com"
  const mockCustomUrl = "https://gorzelinski.com/custom"
  const mockDefaultType = "website"
  const mockCustomType = "article"
  const mockTwitterHandler = "@gorzelinski"
  const mockImage = {
    src: "https://gorzelinski.com/slug-to-image",
    alt: "Alt text",
    width: 1200,
    height: 628,
  }

  describe("base tags", () => {
    it("title", () => {
      render(<SEO title="Custom title" />)
      const { title } = Helmet.peek()
      expect(title).toBe(mockTitleTemplate)
    })

    it("default description", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[0].content).toBe(mockDefaultDescription)
    })

    it("custom description", () => {
      render(<SEO title="Custom title" description="Custom meta description" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[0].content).toBe(mockCustomDescription)
    })
  })

  describe("og tags", () => {
    it("og:site_name", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[1].content).toBe(mockDefaultTitle)
    })

    it("og:url (base)", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[2].content).toBe(mockDefaultUrl)
    })

    it("og:url (custom)", () => {
      render(<SEO title="Custom title" slug="/custom" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[2].content).toBe(mockCustomUrl)
    })

    it("og:type (default)", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[3].content).toBe(mockDefaultType)
    })

    it("og:type (custom)", () => {
      render(<SEO title="Custom title" type="article" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[3].content).toBe(mockCustomType)
    })

    it("og:title", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[4].content).toBe(mockTitle)
    })

    it("og:description", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[5].content).toBe(mockDefaultDescription)
    })

    it("og:image", () => {
      render(
        <SEO
          title="Custom title"
          image={{
            src: "/slug-to-image",
            alt: "Alt text",
            width: 1200,
            height: 628,
          }}
        />
      )
      const { metaTags } = Helmet.peek()
      expect(metaTags[12].content).toBe(mockImage.src)
    })

    it("og:image:alt", () => {
      render(
        <SEO
          title="Custom title"
          image={{
            src: "/slug-to-image",
            alt: "Alt text",
            width: 1200,
            height: 628,
          }}
        />
      )
      const { metaTags } = Helmet.peek()
      expect(metaTags[13].content).toBe(mockImage.alt)
    })

    it("og:image:wdith", () => {
      render(
        <SEO
          title="Custom title"
          image={{
            src: "/slug-to-image",
            alt: "Alt text",
            width: 1200,
            height: 628,
          }}
        />
      )
      const { metaTags } = Helmet.peek()
      expect(metaTags[14].content).toBe(mockImage.width)
    })

    it("og:image:height", () => {
      render(
        <SEO
          title="Custom title"
          image={{
            src: "/slug-to-image",
            alt: "Alt text",
            width: 1200,
            height: 628,
          }}
        />
      )
      const { metaTags } = Helmet.peek()
      expect(metaTags[15].content).toBe(mockImage.height)
    })
  })

  describe("twitter tags", () => {
    it("twitter:url (base)", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[6].content).toBe(mockDefaultUrl)
    })

    it("twitter:url (custom)", () => {
      render(<SEO title="Custom title" slug="/custom" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[6].content).toBe(mockCustomUrl)
    })

    it("twitter:site", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[7].content).toBe(mockTwitterHandler)
    })

    it("twitter:creator", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[8].content).toBe(mockTwitterHandler)
    })

    it("twitter:title", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[9].content).toBe(mockTitle)
    })

    it("twitter:description", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[10].content).toBe(mockDefaultDescription)
    })

    it("twitter:card (default)", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      expect(metaTags[11].content).toBe("summary")
    })

    it("twitter:card (image)", () => {
      render(
        <SEO
          title="Custom title"
          image={{
            src: "/slug-to-image",
            alt: "Alt text",
            width: 1200,
            height: 628,
          }}
        />
      )
      const { metaTags } = Helmet.peek()
      expect(metaTags[11].content).toBe("summary_large_image")
    })

    it("twitter:image", () => {
      render(
        <SEO
          title="Custom title"
          image={{
            src: "/slug-to-image",
            alt: "Alt text",
            width: 1200,
            height: 628,
          }}
        />
      )
      const { metaTags } = Helmet.peek()
      expect(metaTags[16].content).toBe(mockImage.src)
    })

    it("twitter:image:alt", () => {
      render(
        <SEO
          title="Custom title"
          image={{
            src: "/slug-to-image",
            alt: "Alt text",
            width: 1200,
            height: 628,
          }}
        />
      )
      const { metaTags } = Helmet.peek()
      expect(metaTags[17].content).toBe(mockImage.alt)
    })
  })
})
