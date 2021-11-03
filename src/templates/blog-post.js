import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getImage, getSrc } from "gatsby-plugin-image"

import {
  Article,
  Aside,
  Footer,
  H1,
  H3,
  Header,
  Navigation,
  P,
  Small,
} from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Socials from "../components/socials"
import Pagination from "../components/pagination"
import Subscription from "../components/subscription"

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
  const links = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      `${siteUrl}${location.pathname}`
    )}&text=${encodeURIComponent(post.frontmatter.title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      `${siteUrl}${location.pathname}`
    )}&quote=${encodeURIComponent(post.frontmatter.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      `${siteUrl}${location.pathname}`
    )}`,
  }
  const { previous, next } = data
  const pagination = {
    prev: previous && {
      text: previous.frontmatter.title,
      slug: `/blog${previous.fields.slug}`,
    },
    next: next && {
      text: next.frontmatter.title,
      slug: `/blog${next.fields.slug}`,
    },
  }

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
        <Header>
          <Small>
            {post.frontmatter.date} | {post.timeToRead} min. czytania
          </Small>
          <H1 $top>{post.frontmatter.title}</H1>
          <P $lead>{post.frontmatter.description}</P>
          <Navigation as="div">
            <P $ui>Udostępnij:</P>
            <Socials data={links}></Socials>
          </Navigation>
        </Header>
        <div>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <Footer>
          <Navigation as="div">
            <P $ui>Udostępnij:</P>
            <Socials data={links}></Socials>
          </Navigation>
        </Footer>
      </Article>
      <Aside $higher $article>
        <H3 $top>Przeczytaj także:</H3>
        <Pagination data={pagination}></Pagination>
      </Aside>
      <Subscription></Subscription>
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
