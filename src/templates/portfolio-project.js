import React from "react"
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
import ProgressScroll from "../components/progress-scroll"
import SignUp from "../components/sign-up"

const PortfolioProjectTemplate = ({ data, location }) => {
  const project = data.mdx
  const image = project.frontmatter?.image
  const metaImage = createMetaImage(image)
  const { previous, next } = data
  const pagination = createPaginationLinks("/portfolio", previous, next)

  return (
    <Layout>
      <Seo
        lang={project.fields.locale}
        type="article"
        title={project.frontmatter.title}
        description={project.frontmatter.description}
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
                Date:
              </Small>
              <H6 as="h2" $top $bottom>
                {project.frontmatter.date}
              </H6>
            </Tile>
            <Tile>
              <Small as="p" $top>
                Client:
              </Small>
              <H6 as="h2" $top $bottom>
                {project.frontmatter.client}
              </H6>
            </Tile>
            <Tile>
              <Small as="p" $top>
                My role:
              </Small>
              <H6 as="h2" $top $bottom>
                {project.frontmatter.myRole}
              </H6>
            </Tile>
            <Tile>
              <Small as="p" $top>
                Tools:
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
        <H3 $top>Check also</H3>
        <Pagination data={pagination}></Pagination>
      </Aside>
      <SignUp></SignUp>
    </Layout>
  )
}

export default PortfolioProjectTemplate

export const pageQuery = graphql`
  query PortfolioProjectBySlug(
    $locale: String!
    $slug: String!
    $dateFormat: String!
    $previous: String
    $next: String
  ) {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    mdx(fields: { locale: { eq: $locale }, slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      body
      fields {
        locale
      }
      frontmatter {
        title
        date(formatString: $dateFormat, locale: $locale)
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
    previous: mdx(
      fields: { slug: { eq: $previous }, locale: { eq: $locale } }
    ) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(fields: { slug: { eq: $next }, locale: { eq: $locale } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
