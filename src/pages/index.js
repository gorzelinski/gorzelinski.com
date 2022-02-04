import React from "react"
import { graphql } from "gatsby"

import { useBio } from "../hooks"
import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/landing"
import Featured from "../components/featured"
import Cards from "../components/cards"
import About from "../components/about"
import Contact from "../components/contact"
import Subscription from "../components/subscription"

const Index = ({ data }) => {
  const { posts, projects } = data
  const { bio } = useBio()
  const metaImage = createMetaImage({
    alt: `Centred text "I create things on the Internet" on white background`,
    src: data?.metaImage,
  })

  return (
    <Layout>
      <Seo title="I create things on the Internet" image={metaImage}></Seo>
      <Landing></Landing>
      <Featured
        data={{
          title: "Recent projects",
          slug: "/portfolio",
          buttonText: "All projects",
        }}
      >
        <Cards data={projects}></Cards>
      </Featured>
      <About data={bio}></About>
      <Featured
        data={{
          title: "Recent posts",
          slug: "/blog",
          buttonText: "All posts",
        }}
      >
        <Cards data={posts}></Cards>
      </Featured>
      <Subscription></Subscription>
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
