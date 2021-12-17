import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  A,
  Article,
  Aside,
  Figure,
  H1,
  H3,
  H6,
  Header,
  P,
  Small,
  Subsection,
  Tile,
} from "../elements"
import { createMetaImage, createPaginationLinks } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import Subscription from "../components/subscription"
import ProgressScroll from "../components/progress-scroll"

const PortfolioProjectTemplate = ({ data, location }) => {
  const project = data.mdx
  const image = project.frontmatter?.image
  const metaImage = createMetaImage(image)
  const { previous, next } = data
  const pagination = createPaginationLinks("/portfolio", previous, next)

  return (
    <Layout>
      <Seo
        type="article"
        title={project.frontmatter.title}
        description={project.frontmatter.description || project.excerpt}
        slug={location.pathname}
        image={metaImage}
        meta={[
          {
            property: "article:published_time",
            content: project.frontmatter.date,
          },
        ]}
      />
      <Article>
        <ProgressScroll></ProgressScroll>
        <Figure $wide>
          <GatsbyImage
            image={getImage(image.src)}
            alt={image.alt}
          ></GatsbyImage>
        </Figure>
        <Header>
          <H1 $top>{project.frontmatter.title}</H1>
          <P $lead>{project.frontmatter.description}</P>
          <Subsection>
            <Tile>
              <Small as="p" $top>
                Data:
              </Small>
              <H6 as="h2" $top $bottom>
                {project.frontmatter.date}
              </H6>
            </Tile>
            <Tile>
              <Small as="p" $top>
                Klient:
              </Small>
              <H6 as="h2" $top $bottom>
                {project.frontmatter.client}
              </H6>
            </Tile>
            <Tile>
              <Small as="p" $top>
                Moja rola:
              </Small>
              <H6 as="h2" $top $bottom>
                {project.frontmatter.myRole}
              </H6>
            </Tile>
            <Tile>
              <Small as="p" $top>
                Narzędzia:
              </Small>
              <H6 as="h2" $top $bottom>
                {project.frontmatter.tools}
              </H6>
            </Tile>
            <Tile $spanAll>
              <Small as="p" $top>
                Live:
              </Small>
              <H6 as="h2" $top $bottom>
                <A
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.frontmatter.live}
                >
                  {project.frontmatter.live}
                </A>
              </H6>
            </Tile>
          </Subsection>
        </Header>
        <div>
          <MDXRenderer>{project.body}</MDXRenderer>
        </div>
      </Article>
      <Aside $higher $article>
        <H3 $top>Sprawdź także:</H3>
        <Pagination data={pagination}></Pagination>
      </Aside>
      <Subscription></Subscription>
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
        siteUrl
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
