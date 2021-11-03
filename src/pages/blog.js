import React from "react"
import { graphql } from "gatsby"
import { getImage, getSrc } from "gatsby-plugin-image"

import { H1, Header, P, Section } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Posts from "../components/posts"
import Subscription from "../components/subscription"

const Blog = ({ data, location }) => {
  const metaImage = {
    alt: `Wycentrowany napis "Blog" na białym tle`,
    src: getSrc(data?.metaImage),
    width: getImage(data?.metaImage).width,
    height: getImage(data?.metaImage).height,
  }

  return (
    <Layout>
      <Seo
        title="Blog"
        description="Tu będzie opis bloga"
        slug={location.pathname}
        image={metaImage}
      ></Seo>
      <Section $lower>
        <Header>
          <H1 $top>Blog</H1>
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
