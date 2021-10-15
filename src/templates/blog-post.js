import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getImage, getSrc } from "gatsby-plugin-image"
import {
  ChevronBack,
  ChevronForward,
  Link,
  LogoFacebook,
  LogoLinkedin,
  LogoTwitter,
} from "@styled-icons/ionicons-solid"

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

const BlogPostTemplate = ({ data, location }) => {
  const { siteUrl } = data.site.siteMetadata
  const post = data.mdx
  const image = post.frontmatter?.image
  const metaImage = {
    alt: image.alt,
    src: getSrc(image.src),
    width: getImage(image.src).width,
    height: getImage(image.src).height,
  }
  console.log(image)
  const { previous, next } = data
  // TODO: check if you can use those hrefs in production
  const shareOnTwitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    `${siteUrl}${location.pathname}`
  )}&text=${encodeURIComponent(post.frontmatter.title)}`
  const shareOnFacebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    `${siteUrl}${location.pathname}`
  )}&quote=${encodeURIComponent(post.frontmatter.title)}`
  const shareOnLinkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
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
          <Navigation $full as="div">
            <P $ui>Udostępnij:</P>
            <Button as="a">
              <Icon $text>
                <Link></Link>
              </Icon>
            </Button>
            <Button
              as="a"
              rel="noopener noreferrer"
              target="blank"
              href={shareOnTwitterUrl}
            >
              <Icon $text>
                <LogoTwitter></LogoTwitter>
              </Icon>
            </Button>
            <Button
              as="a"
              rel="noopener noreferrer"
              target="blank"
              href={shareOnFacebookUrl}
            >
              <Icon $text>
                <LogoFacebook></LogoFacebook>
              </Icon>
            </Button>
            <Button
              as="a"
              rel="noopener noreferrer"
              target="blank"
              href={shareOnLinkedInUrl}
            >
              <Icon $text>
                <LogoLinkedin></LogoLinkedin>
              </Icon>
            </Button>
          </Navigation>
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
