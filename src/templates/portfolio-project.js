import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  A,
  Article,
  Card,
  Figure,
  Footer,
  H1,
  H3,
  H6,
  Header,
  Hr,
  P,
  Small,
  Subsection,
} from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"
import Pagination from "../components/pagination"

const PortfolioProjectTemplate = ({ data, location }) => {
  const { siteUrl } = data.site.siteMetadata
  const project = data.mdx
  const image = project.frontmatter?.image
  const metaImage = {
    alt: image.alt,
    src: getSrc(image.src),
    width: getImage(image.src).width,
    height: getImage(image.src).height,
  }
  const links = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      `${siteUrl}${location.pathname}`
    )}&text=${encodeURIComponent(project.frontmatter.title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      `${siteUrl}${location.pathname}`
    )}&quote=${encodeURIComponent(project.frontmatter.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      `${siteUrl}${location.pathname}`
    )}`,
  }
  const { previous, next } = data
  const pagination = {
    prev: previous && {
      text: previous.frontmatter.title,
      slug: `/portfolio${previous.fields.slug}`,
    },
    next: next && {
      text: next.frontmatter.title,
      slug: `/portfolio${next.fields.slug}`,
    },
  }

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
        <Figure $wide>
          <GatsbyImage
            image={getImage(image.src)}
            alt={image.alt}
          ></GatsbyImage>
        </Figure>
        <Header>
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
                <A
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.frontmatter.live}
                >
                  {project.frontmatter.live}
                </A>
              </H6>
            </Card>
          </Subsection>
        </Header>
        <div>
          <MDXRenderer>{project.body}</MDXRenderer>
          <Hr />
        </div>
        <Footer $top>
          <Share data={links}>
            <P $ui>Udostępnij:</P>
          </Share>
        </Footer>
      </Article>
      <Pagination data={pagination}>
        <H3 $top>Sprawdź także:</H3>
      </Pagination>
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
