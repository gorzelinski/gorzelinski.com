import React from "react"
import Helmet from "react-helmet"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import { seo } from "./fixtures"
import SEO from "../seo"

const {
  defaultLang,
  defaultDescription,
  customDescription,
  defaultTitle,
  title,
  defaultUrl,
  customUrl,
  defaultType,
  customType,
  twitterHandle,
  metaImage,
} = seo

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

      expect(title).toBe(title)
    })

    it("default description", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const description = metaTags.find(tag => tag.name === "description")

      expect(description.content).toBe(defaultDescription)
    })

    it("custom description", () => {
      render(<SEO title="Custom title" description="Custom meta description" />)

      const { metaTags } = Helmet.peek()
      const description = metaTags.find(tag => tag.name === "description")

      expect(description.content).toBe(customDescription)
    })
  })

  describe("og tags", () => {
    it("og:site_name", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const ogSiteName = metaTags.find(tag => tag.property === "og:site_name")

      expect(ogSiteName.content).toBe(defaultTitle)
    })

    it("og:url (base)", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const ogUrl = metaTags.find(tag => tag.property === "og:url")

      expect(ogUrl.content).toBe(defaultUrl)
    })

    it("og:url (custom)", () => {
      render(<SEO title="Custom title" slug="/custom" />)

      const { metaTags } = Helmet.peek()
      const ogUrl = metaTags.find(tag => tag.property === "og:url")

      expect(ogUrl.content).toBe(customUrl)
    })

    it("og:type (default)", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const ogType = metaTags.find(tag => tag.property === "og:type")

      expect(ogType.content).toBe(defaultType)
    })

    it("og:type (custom)", () => {
      render(<SEO title="Custom title" type="article" />)

      const { metaTags } = Helmet.peek()
      const ogType = metaTags.find(tag => tag.property === "og:type")

      expect(ogType.content).toBe(customType)
    })

    it("og:title", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const ogTitle = metaTags.find(tag => tag.property === "og:title")

      expect(ogTitle.content).toBe(title)
    })

    it("og:description", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const ogDescription = metaTags.find(
        tag => tag.property === "og:description"
      )

      expect(ogDescription.content).toBe(defaultDescription)
    })

    it("og:image", () => {
      render(<SEO title="Custom title" image={metaImage} />)

      const { metaTags } = Helmet.peek()
      const ogImage = metaTags.find(tag => tag.property === "og:image")

      expect(ogImage.content).toBe(`${defaultUrl}${metaImage.src}`)
    })

    it("og:image:alt", () => {
      render(<SEO title="Custom title" image={metaImage} />)

      const { metaTags } = Helmet.peek()
      const ogImageAlt = metaTags.find(tag => tag.property === "og:image:alt")

      expect(ogImageAlt.content).toBe(metaImage.alt)
    })

    it("og:image:wdith", () => {
      render(<SEO title="Custom title" image={metaImage} />)

      const { metaTags } = Helmet.peek()
      const ogImageWidth = metaTags.find(
        tag => tag.property === "og:image:width"
      )

      expect(ogImageWidth.content).toBe(metaImage.width)
    })

    it("og:image:height", () => {
      render(<SEO title="Custom title" image={metaImage} />)

      const { metaTags } = Helmet.peek()
      const ogImageHeight = metaTags.find(
        tag => tag.property === "og:image:height"
      )

      expect(ogImageHeight.content).toBe(metaImage.height)
    })
  })

  describe("twitter tags", () => {
    it("twitter:url (base)", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const twitterUrl = metaTags.find(tag => tag.name === "twitter:url")

      expect(twitterUrl.content).toBe(defaultUrl)
    })

    it("twitter:url (custom)", () => {
      render(<SEO title="Custom title" slug="/custom" />)

      const { metaTags } = Helmet.peek()
      const twitterUrl = metaTags.find(tag => tag.name === "twitter:url")

      expect(twitterUrl.content).toBe(customUrl)
    })

    it("twitter:site", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const twitterSite = metaTags.find(tag => tag.name === "twitter:site")

      expect(twitterSite.content).toBe(twitterHandle)
    })

    it("twitter:creator", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const twitterCreator = metaTags.find(
        tag => tag.name === "twitter:creator"
      )

      expect(twitterCreator.content).toBe(twitterHandle)
    })

    it("twitter:title", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const twitterTitle = metaTags.find(tag => tag.name === "twitter:title")

      expect(twitterTitle.content).toBe(title)
    })

    it("twitter:description", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const twitterDescription = metaTags.find(
        tag => tag.name === "twitter:description"
      )

      expect(twitterDescription.content).toBe(defaultDescription)
    })

    it("twitter:card (default)", () => {
      render(<SEO title="Custom title" />)

      const { metaTags } = Helmet.peek()
      const twitterCard = metaTags.find(tag => tag.name === "twitter:card")

      expect(twitterCard.content).toBe("summary")
    })

    it("twitter:card (image)", () => {
      render(<SEO title="Custom title" image={metaImage} />)

      const { metaTags } = Helmet.peek()
      const twitterCard = metaTags.find(tag => tag.name === "twitter:card")

      expect(twitterCard.content).toBe("summary_large_image")
    })

    it("twitter:image", () => {
      render(<SEO title="Custom title" image={metaImage} />)

      const { metaTags } = Helmet.peek()
      const twitterImage = metaTags.find(tag => tag.name === "twitter:image")

      expect(twitterImage.content).toBe(`${defaultUrl}${metaImage.src}`)
    })

    it("twitter:image:alt", () => {
      render(<SEO title="Custom title" image={metaImage} />)

      const { metaTags } = Helmet.peek()
      const twitterImageAlt = metaTags.find(
        tag => tag.name === "twitter:image:alt"
      )

      expect(twitterImageAlt.content).toBe(metaImage.alt)
    })
  })
})
