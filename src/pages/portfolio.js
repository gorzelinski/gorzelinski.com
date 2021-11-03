import React from "react"
import { graphql } from "gatsby"
import { getImage, getSrc } from "gatsby-plugin-image"

import { H1, Header, P, Section } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Projects from "../components/projects"
import Subscription from "../components/subscription"

const Portfolio = ({ data, location }) => {
  const metaImage = {
    alt: `Wycentrowany napis "Portfolio" na białym tle`,
    src: getSrc(data?.metaImage),
    width: getImage(data?.metaImage).width,
    height: getImage(data?.metaImage).height,
  }

  return (
    <Layout location={location}>
      <Seo
        title="Portfolio"
        description="Tu będzie opis portfolio"
        slug={location.pathname}
        image={metaImage}
      ></Seo>
      <Section $lower>
        <Header>
          <H1 $top>Portfolio</H1>
          <P as="h2" $ui>
            Wszystkie projekty
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
