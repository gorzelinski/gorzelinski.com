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
import SignUp from "../components/sign-up"

const Index = ({ data }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/index")
  const { posts, projects } = data
  const { bio } = useBio()
  const metaImage = createMetaImage({
    alt: t("alt"),
    src: data?.metaImage,
  })

  return (
    <Layout>
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
          slug: "/portfolio",
          buttonText: t("featuredProjects.button"),
        }}
      >
        <Cards data={projects}></Cards>
      </Featured>
      <Bio data={bio}></Bio>
      <Featured
        data={{
          title: t("featuredPosts.title"),
          slug: "/blog",
          buttonText: t("featuredPosts.button"),
        }}
      >
        <Cards data={posts}></Cards>
      </Featured>
      <SignUp></SignUp>
      <Contact></Contact>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexPage($locale: String!, $dateFormat: String!) {
    metaImage: file(relativePath: { eq: "index.png" }) {
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
    posts: allMdx(
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
    projects: allMdx(
      limit: 4
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
          myRole
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
