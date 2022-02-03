import React from "react"
import { graphql } from "gatsby"

import { H1, Header, P, Section } from "../elements"
import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Posts from "../components/posts"
import Subscription from "../components/subscription"

const Blog = ({ data, location }) => {
  const { posts } = data
  const metaImage = createMetaImage({
    alt: `Centered text "Blog" on white background`,
    src: data?.metaImage,
  })

  return (
    <Layout location={location}>
      <Seo
        title="Blog"
        description="Here will be description"
        slug={location.pathname}
        image={metaImage}
      ></Seo>
      <Section $lower>
        <Header>
          <H1 $top $decorative>
            Blog
          </H1>
          <P as="h2" $ui>
            All posts
          </P>
        </Header>
        <Section as="div" $top>
          <Posts data={posts}></Posts>
        </Section>
      </Section>
      <Subscription></Subscription>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query AllBlogPosts($locale: String!, $dateFormat: String!) {
    posts: allMdx(
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
