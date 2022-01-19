import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Figcaption, Figure, H1, Section, Tile } from "../elements"
import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutMe = ({ data, location }) => {
  const name = data.site?.siteMetadata?.author?.name
  const text = data.text
  const image = getImage(data?.image)
  const metaImage = createMetaImage({
    alt: `Centred text "About" on white background`,
    src: data?.metaImage,
  })

  return (
    <Layout>
      <Seo
        title="About"
        description="Here will be description"
        image={metaImage}
        slug={location.pathname}
      ></Seo>
      <Section>
        <Figure $portrait>
          <GatsbyImage
            image={image}
            alt={`${name} - profile picture`}
          ></GatsbyImage>
          <Figcaption>
            In reality, I'm more pleasant than in this picture. I promise!
          </Figcaption>
        </Figure>
        <Tile as="article">
          <H1 $top>And here's my short story</H1>
          <MDXRenderer>{text.body}</MDXRenderer>
        </Tile>
      </Section>
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query AllBioQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
      }
    }
    text: mdx(fileAbsolutePath: { regex: "/(about)/" }) {
      body
    }
    image: file(relativePath: { eq: "gorzelinski.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    metaImage: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        gatsbyImageData(
          formats: AUTO
          layout: FIXED
          placeholder: NONE
          width: 1200
          aspectRatio: 1.91
          outputPixelDensities: 1
        )
      }
    }
  }
`
