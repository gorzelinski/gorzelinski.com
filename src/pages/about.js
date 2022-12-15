import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"

import { H1, P, Section, Tile } from "../elements"
import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import RandomFacts from "../components/random-facts"
import CoreValues from "../components/core-values"
import CulturalCorner from "../components/cultural-corner"
import Featured from "../components/featured"
import Cards from "../components/cards"
import MyTech from "../components/my-tech"

const About = ({ data, location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/about")
  const metaImage = createMetaImage({
    alt: t("metaAlt"),
    src: data?.metaImage,
  })
  const lastPosts = data.lastPosts?.nodes

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
        <Tile $span="all">
          <H1>{t("heading")}</H1>
        </Tile>
        <Section as="div" $marginTop="none">
          <Tile>
            {t("story", { returnObjects: true })
              .filter((_, index, array) => index < (array.length - 1) / 2)
              .map((part, index) => (
                <P key={`story-1-${index + 1}`}>{part}</P>
              ))}
          </Tile>
          <Tile>
            {t("story", { returnObjects: true })
              .filter((_, index, array) => index >= (array.length - 1) / 2)
              .map((part, index) => (
                <P key={`story-2-${index + 1}`}>{part}</P>
              ))}
          </Tile>
        </Section>
      </Section>
      <RandomFacts></RandomFacts>
      <CoreValues></CoreValues>
      <CulturalCorner></CulturalCorner>
      <Featured
        data={{
          title: t("posts.heading"),
          slug: "/blog/",
          buttonText: t("posts.button"),
        }}
      >
        <Cards data={lastPosts}></Cards>
      </Featured>
      <MyTech></MyTech>
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
          width: 2400
          height: 1260
          outputPixelDensities: 1
        )
      }
    }
    lastPosts: allMdx(
      limit: 2
      filter: {
        fields: { locale: { eq: $locale } }
        frontmatter: { type: { eq: "post" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          locale
          slug
        }
        frontmatter {
          type
          date
          title
          description
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(width: 1080)
              }
            }
          }
        }
        timeToRead
      }
    }
  }
`
