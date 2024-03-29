import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"

import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/landing"
import Featured from "../components/featured"
import Cards from "../components/cards"
import Bio from "../components/bio"
import Contact from "../components/contact"
import Subscribe from "../components/subscribe"

const Index = ({ data, location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/index")
  const lastPosts = data.lastPosts?.nodes
  const lastProjects = data.lastProjects?.nodes
  const metaImage = createMetaImage({
    alt: t("alt"),
    src: data?.metaImage,
  })

  return (
    <Layout location={location}>
      <Seo
        lang={locale}
        title={t("title")}
        titleTemplate={true}
        description={t("description")}
        image={metaImage}
      ></Seo>
      <Landing></Landing>
      <Featured
        data={{
          title: t("featuredProjects.title"),
          slug: "/portfolio/",
          buttonText: t("featuredProjects.button"),
        }}
      >
        <Cards data={lastProjects}></Cards>
      </Featured>
      <Bio></Bio>
      <Featured
        data={{
          title: t("featuredPosts.title"),
          slug: "/blog/",
          buttonText: t("featuredPosts.button"),
        }}
      >
        <Cards data={lastPosts}></Cards>
      </Featured>
      <Subscribe></Subscribe>
      <Contact></Contact>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexPage($locale: String!) {
    metaImage: file(
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: $locale }
      name: { eq: "index" }
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
      limit: 4
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
    lastProjects: allMdx(
      limit: 2
      filter: {
        fields: { locale: { eq: $locale } }
        frontmatter: { type: { eq: "project" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          type
          services
          title
          description
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(width: 1366)
              }
            }
          }
        }
      }
    }
  }
`
