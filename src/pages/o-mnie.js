import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Card, Figcaption, Figure, H1, Section } from "../elements"
import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutMe = ({ data, location }) => {
  const name = data.site?.siteMetadata?.author?.name
  const text = data.text
  const image = getImage(data?.image)
  const metaImage = createMetaImage({
    alt: `Wycentrowany napis "O mnie" na białym tle`,
    src: data?.metaImage,
  })

  return (
    <Layout>
      <Seo
        title="O mnie"
        description="Tu będzie opis o mnie"
        image={metaImage}
        slug={location.pathname}
      ></Seo>
      <Section>
        <Figure $portrait>
          <GatsbyImage
            image={image}
            alt={`${name} - zdjęcie profilowe`}
          ></GatsbyImage>
          <Figcaption>
            W rzeczywistości jestem przyjemniejszy niż wyglądam na tym zdjęciu.
            Przyrzekam!
          </Figcaption>
        </Figure>
        <Card>
          <H1 $top>A oto moja krótka historia</H1>
          <MDXRenderer>{text.body}</MDXRenderer>
        </Card>
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
    text: mdx(fileAbsolutePath: { regex: "/(about-me)/" }) {
      body
    }
    image: file(relativePath: { eq: "gorzelinski.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    metaImage: file(relativePath: { eq: "about-me.png" }) {
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
