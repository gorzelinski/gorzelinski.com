import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  ChevronBack,
  ChevronForward,
  Link,
  LogoFacebook,
  LogoTwitter,
} from "@styled-icons/ionicons-solid"

import {
  Article,
  Aside,
  Button,
  Footer,
  H1,
  H3,
  Hr,
  Icon,
  Navigation,
  P,
  Small,
} from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Article>
        <header>
          <Small $top>
            {post.frontmatter.date} | {post.timeToRead} min. czytania
          </Small>
          <H1 $top>{post.frontmatter.title}</H1>
          <P $lead>{post.frontmatter.description}</P>
        </header>
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
            <Button as="a">
              <Icon $text>
                <LogoFacebook></LogoFacebook>
              </Icon>
            </Button>
            <Button as="a">
              <Icon $text>
                <LogoTwitter></LogoTwitter>
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
