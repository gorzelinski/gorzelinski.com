import React from "react"
import { graphql } from "gatsby"

import { H1, Header, Section } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/projects"

const Portfolio = ({ data, location }) => {
  return (
    <Layout>
      <Seo title="Portfolio" slug={location.pathname}></Seo>
      <Section>
        <Header $section>
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
