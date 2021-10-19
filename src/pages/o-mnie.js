import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card, Figcaption, Figure, Section } from "../elements"
import { MDXRenderer } from "gatsby-plugin-mdx"

const AboutMe = ({ data, location }) => {
  const name = data.site?.siteMetadata?.author?.name
  const text = data.text
  const image = getImage(data?.image)
  const metaImage = {
    alt: `Wycentrowany napis "O mnie" na białym tle`,
    src: getSrc(data?.metaImage),
    width: getImage(data?.metaImage).width,
    height: getImage(data?.metaImage).height,
  }

  return (
    <Layout>
      <Seo
        title="O mnie"
        description="Tu będzie opis o mnie"
        image={metaImage}
        slug={location.pathname}
      ></Seo>
      <Section>
        <Figure $half $portrait>
          <GatsbyImage
            image={image}
            alt={`${name} - zdjęcie profilowe`}
          ></GatsbyImage>
          <Figcaption>
            W rzeczywistości jestem przyjemniejszy niż wyglądam na tym zdjęciu.
            Przyrzekam!
          </Figcaption>
        </Figure>
        <Card $half>
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
        social {
          email
          github
          dribbble
          twitter
          facebook
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
