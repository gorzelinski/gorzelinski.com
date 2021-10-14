import React from "react"
import { graphql } from "gatsby"

import { H1, Header, Section } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Posts from "../components/posts"

const Blog = ({ data, location }) => {
  return (
    <Layout>
      <Seo title="Blog" slug={location.pathname}></Seo>
      <Section>
        <Header $section>
          <H1>Wszystkie wpisy</H1>
        </Header>
        <Posts data={data}></Posts>
      </Section>
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
  }
`
