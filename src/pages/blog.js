import React from "react"
import { graphql } from "gatsby"

import { H1, Header, P, Section } from "../elements"
import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Posts from "../components/posts"
import Subscription from "../components/subscription"

const Blog = ({ data, location }) => {
  const metaImage = createMetaImage({
    alt: `Wycentrowany napis "Blog" na białym tle`,
    src: data?.metaImage,
  })

  return (
    <Layout location={location}>
      <Seo
        title="Blog"
        description="Tu będzie opis bloga"
        slug={location.pathname}
        image={metaImage}
      ></Seo>
      <Section $lower>
        <Header>
          <H1 $top $decorative>
            Blog
          </H1>
          <P as="h2" $ui>
            Wszystkie wpisy
          </P>
        </Header>
        <Section as="div" $top>
          <Posts data={data}></Posts>
        </Section>
      </Section>
      <Subscription></Subscription>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query AllBlogPosts {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM, YYYY", locale: "pl")
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
    metaImage: file(relativePath: { eq: "blog.png" }) {
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
