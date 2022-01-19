import React from "react"
import { graphql } from "gatsby"

import { H1, Header, P, Section } from "../elements"
import { createMetaImage } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/projects"
import Subscription from "../components/subscription"

const Portfolio = ({ data, location }) => {
  const metaImage = createMetaImage({
    alt: `Centered text "Portfolio" on white background`,
    src: data?.metaImage,
  })

  return (
    <Layout location={location}>
      <Seo
        title="Portfolio"
        description="Here will be description"
        slug={location.pathname}
        image={metaImage}
      ></Seo>
      <Section $lower>
        <Header>
          <H1 $top $decorative>
            Portfolio
          </H1>
          <P as="h2" $ui>
            All projects
          </P>
        </Header>
        <Section as="div" $top>
          <Projects data={data}></Projects>
        </Section>
      </Section>
      <Subscription></Subscription>
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
    metaImage: file(relativePath: { eq: "portfolio.png" }) {
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
