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
          title: `Gorzelinski`,
          description: `Default meta description`,
          siteUrl: `https://gorzelinski.com`,
          author: {
            social: {
              twitter: `gorzelinski`,
            },
          },
        },
      },
    })
  })

  const defaultLang = "en"
  const mockDefaultDescription = "description"
  const mockCustomDescription = "Custom meta description"
  const mockDefaultTitle = "title"
  const mockTitle = "Custom title"
  const mockDefaultUrl = "https://gorzelinski.com"
  const mockCustomUrl = "https://gorzelinski.com/custom"
  const mockDefaultType = "website"
  const mockCustomType = "article"
  const mockTwitterHandler = "@gorzelinski"
  const mockImage = {
    src: "/slug-to-image",
    alt: "Alt text",
    width: 2400,
    height: 1260,
  }

  describe("base tags", () => {
    it("default lang", () => {
      render(<SEO title="Custom title" />)
      const {
        htmlAttributes: { lang },
      } = Helmet.peek()
      expect(lang).toBe(defaultLang)
    })

    it("title", () => {
      render(<SEO title="Custom title" />)
      const { title } = Helmet.peek()
      expect(title).toBe(mockTitle)
    })

    it("default description", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const description = metaTags.find(tag => tag.name === "description")
      expect(description.content).toBe(mockDefaultDescription)
    })

    it("custom description", () => {
      render(<SEO title="Custom title" description="Custom meta description" />)
      const { metaTags } = Helmet.peek()
      const description = metaTags.find(tag => tag.name === "description")
      expect(description.content).toBe(mockCustomDescription)
    })
  })

  describe("og tags", () => {
    it("og:site_name", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const ogSiteName = metaTags.find(tag => tag.property === "og:site_name")
      expect(ogSiteName.content).toBe(mockDefaultTitle)
    })

    it("og:url (base)", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const ogUrl = metaTags.find(tag => tag.property === "og:url")
      expect(ogUrl.content).toBe(mockDefaultUrl)
    })

    it("og:url (custom)", () => {
      render(<SEO title="Custom title" slug="/custom" />)
      const { metaTags } = Helmet.peek()
      const ogUrl = metaTags.find(tag => tag.property === "og:url")
      expect(ogUrl.content).toBe(mockCustomUrl)
    })

    it("og:type (default)", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const ogType = metaTags.find(tag => tag.property === "og:type")
      expect(ogType.content).toBe(mockDefaultType)
    })

    it("og:type (custom)", () => {
      render(<SEO title="Custom title" type="article" />)
      const { metaTags } = Helmet.peek()
      const ogType = metaTags.find(tag => tag.property === "og:type")
      expect(ogType.content).toBe(mockCustomType)
    })

    it("og:title", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const ogTitle = metaTags.find(tag => tag.property === "og:title")
      expect(ogTitle.content).toBe(mockTitle)
    })

    it("og:description", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const ogDescription = metaTags.find(
        tag => tag.property === "og:description"
      )
      expect(ogDescription.content).toBe(mockDefaultDescription)
    })

    it("og:image", () => {
      render(<SEO title="Custom title" image={mockImage} />)
      const { metaTags } = Helmet.peek()
      const ogImage = metaTags.find(tag => tag.property === "og:image")
      expect(ogImage.content).toBe(`${mockDefaultUrl}${mockImage.src}`)
    })

    it("og:image:alt", () => {
      render(<SEO title="Custom title" image={mockImage} />)
      const { metaTags } = Helmet.peek()
      const ogImageAlt = metaTags.find(tag => tag.property === "og:image:alt")
      expect(ogImageAlt.content).toBe(mockImage.alt)
    })

    it("og:image:wdith", () => {
      render(<SEO title="Custom title" image={mockImage} />)
      const { metaTags } = Helmet.peek()
      const ogImageWidth = metaTags.find(
        tag => tag.property === "og:image:width"
      )
      expect(ogImageWidth.content).toBe(mockImage.width)
    })

    it("og:image:height", () => {
      render(<SEO title="Custom title" image={mockImage} />)
      const { metaTags } = Helmet.peek()
      const ogImageHeight = metaTags.find(
        tag => tag.property === "og:image:height"
      )
      expect(ogImageHeight.content).toBe(mockImage.height)
    })
  })

  describe("twitter tags", () => {
    it("twitter:url (base)", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const twitterUrl = metaTags.find(tag => tag.name === "twitter:url")
      expect(twitterUrl.content).toBe(mockDefaultUrl)
    })

    it("twitter:url (custom)", () => {
      render(<SEO title="Custom title" slug="/custom" />)
      const { metaTags } = Helmet.peek()
      const twitterUrl = metaTags.find(tag => tag.name === "twitter:url")
      expect(twitterUrl.content).toBe(mockCustomUrl)
    })

    it("twitter:site", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const twitterSite = metaTags.find(tag => tag.name === "twitter:site")
      expect(twitterSite.content).toBe(mockTwitterHandler)
    })

    it("twitter:creator", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const twitterCreator = metaTags.find(
        tag => tag.name === "twitter:creator"
      )
      expect(twitterCreator.content).toBe(mockTwitterHandler)
    })

    it("twitter:title", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const twitterTitle = metaTags.find(tag => tag.name === "twitter:title")
      expect(twitterTitle.content).toBe(mockTitle)
    })

    it("twitter:description", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const twitterDescription = metaTags.find(
        tag => tag.name === "twitter:description"
      )
      expect(twitterDescription.content).toBe(mockDefaultDescription)
    })

    it("twitter:card (default)", () => {
      render(<SEO title="Custom title" />)
      const { metaTags } = Helmet.peek()
      const twitterCard = metaTags.find(tag => tag.name === "twitter:card")
      expect(twitterCard.content).toBe("summary")
    })

    it("twitter:card (image)", () => {
      render(<SEO title="Custom title" image={mockImage} />)
      const { metaTags } = Helmet.peek()
      const twitterCard = metaTags.find(tag => tag.name === "twitter:card")
      expect(twitterCard.content).toBe("summary_large_image")
    })

    it("twitter:image", () => {
      render(<SEO title="Custom title" image={mockImage} />)
      const { metaTags } = Helmet.peek()
      const twitterImage = metaTags.find(tag => tag.name === "twitter:image")
      expect(twitterImage.content).toBe(`${mockDefaultUrl}${mockImage.src}`)
    })

    it("twitter:image:alt", () => {
      render(<SEO title="Custom title" image={mockImage} />)
      const { metaTags } = Helmet.peek()
      const twitterImageAlt = metaTags.find(
        tag => tag.name === "twitter:image:alt"
      )
      expect(twitterImageAlt.content).toBe(mockImage.alt)
    })
  })
})
