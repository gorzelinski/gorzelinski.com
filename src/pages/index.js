import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"

import { useBio } from "../hooks"
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
  const { bio } = useBio()
  const metaImage = createMetaImage({
    alt: t("alt"),
    src: data?.metaImage,
  })

  return (
    <Layout location={location}>
      <Seo
        lang={locale}
        title={t("title")}
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
      <Bio data={bio}></Bio>
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
  query IndexPage($locale: String!, $dateFormat: String!) {
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
          width: 1200
          height: 630
          outputPixelDensities: 1
        )
      }
    }
    lastPosts: allMdx(
      limit: 4
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: { regex: "/(blog)/" }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: $dateFormat, locale: $locale)
          title
          description
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(breakpoints: [320, 480, 768], width: 768)
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
        fileAbsolutePath: { regex: "/(portfolio)/" }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          services
          title
          description
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
