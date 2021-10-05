import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ChevronBack, ChevronForward } from "@styled-icons/ionicons-solid"

import {
  A,
  Article,
  Aside,
  Button,
  Card,
  Figure,
  H1,
  H3,
  H6,
  Hr,
  Icon,
  Navigation,
  P,
  Small,
  Subsection,
} from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PortfolioProjectTemplate = ({ data, location }) => {
  const project = data.mdx
  const image = project.frontmatter.featuredImage
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={project.frontmatter.title}
        description={project.frontmatter.description || project.excerpt}
      />
      <Article>
        <Figure $wide>
          <GatsbyImage
            image={getImage(image.src)}
            alt={image.alt}
          ></GatsbyImage>
        </Figure>
        <header>
          <H1>{project.frontmatter.title}</H1>
          <P $lead>{project.frontmatter.description}</P>
          <Subsection as="div">
            <Card as="div" $half>
              <Small $top>Data:</Small>
              <H6 as="h3" $top>
                {project.frontmatter.date}
              </H6>
            </Card>
            <Card as="div" $half>
              <Small $top>Klient:</Small>
              <H6 as="h3" $top>
                {project.frontmatter.client}
              </H6>
            </Card>
            <Card as="div" $half>
              <Small $top>Moja rola:</Small>
              <H6 as="h3" $top>
                {project.frontmatter.myRole}
              </H6>
            </Card>
            <Card as="div" $half>
              <Small $top>Narzędzia:</Small>
              <H6 as="h3" $top>
                {project.frontmatter.tools}
              </H6>
            </Card>
            <Card as="div" $full>
              <Small $top>Live:</Small>
              <H6 as="h3" $top>
                <A href={project.frontmatter.live}>
                  {project.frontmatter.live}
                </A>
              </H6>
            </Card>
          </Subsection>
        </header>
        <div>
          <MDXRenderer>{project.body}</MDXRenderer>
          <Hr />
        </div>
      </Article>
      <Aside $higher $article>
        <H3 $top>Sprawdź także:</H3>
        <Navigation $spaceBetween>
          {previous && (
            <Button
              $text
              $first
              to={`/portfolio${previous.fields.slug}`}
              rel="prev"
            >
              <Icon>
                <ChevronBack></ChevronBack>
              </Icon>
              {previous.frontmatter.title}
            </Button>
          )}
          {next && (
            <Button $text $last to={`/portfolio${next.fields.slug}`} rel="next">
              {next.frontmatter.title}
              <Icon>
                <ChevronForward></ChevronForward>
              </Icon>
            </Button>
          )}
        </Navigation>
      </Aside>
    </Layout>
  )
}

export default PortfolioProjectTemplate

export const pageQuery = graphql`
  query PortfolioProjectBySlug(
    $id: String!
    $previousProjectId: String
    $nextProjectId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY", locale: "pl")
        description
        client
        myRole
        tools
        live
        featuredImage {
          alt
          src {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousProjectId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextProjectId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
