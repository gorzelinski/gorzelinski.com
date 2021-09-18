import React from "react"
import { graphql } from "gatsby"

import { H1, Header, Section } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/projects"

const Portfolio = ({ data }) => {
  return (
    <Layout>
      <Seo title="Portfolio"></Seo>
      <Section>
        <Header>
          <H1>Wszystkie projekty</H1>
        </Header>
        <Projects data={data}></Projects>
      </Section>
    </Layout>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query AllPortfolioProjects {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          client
          date
          description
          myRole
          title
          tools
          live
          featuredImage {
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
