import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getImage, getSrc } from "gatsby-plugin-image"
import { ChevronBack, ChevronForward } from "@styled-icons/ionicons-solid"

import {
  Article,
  Aside,
  Button,
  Footer,
  H1,
  H3,
  Header,
  Hr,
  Icon,
  Navigation,
  P,
  Small,
} from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"

const BlogPostTemplate = ({ data, location }) => {
  const { siteUrl } = data.site.siteMetadata
  const { previous, next } = data
  const post = data.mdx
  const image = post.frontmatter?.image
  const metaImage = {
    alt: image.alt,
    src: getSrc(image.src),
    width: getImage(image.src).width,
    height: getImage(image.src).height,
  }
  const twitter = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    `${siteUrl}${location.pathname}`
  )}&text=${encodeURIComponent(post.frontmatter.title)}`
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    `${siteUrl}${location.pathname}`
  )}&quote=${encodeURIComponent(post.frontmatter.title)}`
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    `${siteUrl}${location.pathname}`
  )}`

  return (
    <Layout>
      <Seo
        type="article"
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        slug={location.pathname}
        image={metaImage}
        meta={[
          {
            property: "article:published_time",
            content: post.frontmatter.date,
          },
        ]}
      />
      <Article>
        <Header $article>
          <Small $top>
            {post.frontmatter.date} | {post.timeToRead} min. czytania
          </Small>
          <H1 $top>{post.frontmatter.title}</H1>
          <P $lead>{post.frontmatter.description}</P>
        </Header>
        <div>
          <MDXRenderer>{post.body}</MDXRenderer>
          <Hr />
        </div>
        <Footer $top>
          <Share
            data={{
              twitter,
              facebook,
              linkedin,
            }}
          ></Share>
        </Footer>
      </Article>
      <Aside $higher $article>
        <H3 $top>Przeczytaj także:</H3>
        <Navigation $spaceBetween>
          {previous && (
            <Button $text $first to={`/blog${previous.fields.slug}`} rel="prev">
              <Icon>
                <ChevronBack></ChevronBack>
              </Icon>
              {previous.frontmatter.title}
            </Button>
          )}
          {next && (
            <Button $text $last to={`/blog${next.fields.slug}`} rel="next">
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

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
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
        image {
          alt
          src {
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
      }
      timeToRead
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
