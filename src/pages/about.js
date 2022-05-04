import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { useLocalization } from "gatsby-theme-i18n"

import { H1, H2, H6, Image, P, Section, Tile } from "../elements"
import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/about")
  const name = data.site?.siteMetadata?.author?.name
  const image = getImage(data?.image)
  const metaImage = createMetaImage({
    alt: t("metaAlt"),
    src: data?.metaImage,
  })

  return (
    <Layout location={location}>
      <Seo
        lang={locale}
        title={t("title")}
        description={t("description")}
        image={metaImage}
        slug={location.pathname}
      ></Seo>
      <Section>
        {/* TODO: change image */}
        <Image
          $aspectRatio="wide"
          $span="all"
          image={image}
          alt={`${name} - ${t("alt")}`}
        ></Image>
        <Tile $span="all">
          <H1 $marginReset="both">{t("heading")}</H1>
        </Tile>
        <Section as="div" $marginReset="top">
          <Tile>
            {t("story", { returnObjects: true })
              .filter((_, index, array) => index < array.length / 2)
              .map((part, index) => (
                <P key={`story-1-${index + 1}`}>{part}</P>
              ))}
          </Tile>
          <Tile>
            {t("story", { returnObjects: true })
              .filter((_, index, array) => index >= array.length / 2)
              .map((part, index) => (
                <P key={`story-2-${index + 1}`}>{part}</P>
              ))}
          </Tile>
        </Section>
      </Section>
      <Section>
        <Tile $span="all">
          <H2 $marginReset="both">{t("weird")}</H2>
        </Tile>
        {t("facts", { returnObjects: true }).map((fact, index) => (
          <Tile key={`fact-${index + 1}`}>
            <H6 as="h3" $marginReset="top">
              {fact.heading}
            </H6>
            <P $marginReset="both">{fact.description}</P>
          </Tile>
        ))}
      </Section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query AllBioQuery($locale: String!) {
    site {
      siteMetadata {
        author {
          name
          summary
        }
      }
    }
    image: file(relativePath: { eq: "gorzelinski.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    metaImage: file(
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: $locale }
      name: { eq: "about" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: AUTO
          layout: FIXED
          placeholder: NONE
          width: 1200
          height: 630
          outputPixelDensities: 1
        )
      }
    }
  }
`
