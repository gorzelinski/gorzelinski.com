import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  Article,
  Aside,
  Figcaption,
  Figure,
  Footer,
  H1,
  H3,
  Header,
  Navigation,
  P,
  Small,
} from "../elements"
import {
  createMetaImage,
  createPaginationLinks,
  createShareLinks,
} from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Socials from "../components/socials"
import Pagination from "../components/pagination"
import Subscription from "../components/subscription"
import ProgressScroll from "../components/progress-scroll"
import Avatar from "../components/avatar"

const BlogPostTemplate = ({ data, location }) => {
  const { siteUrl } = data.site.siteMetadata
  const post = data.mdx
  const image = post.frontmatter?.image
  const metaImage = createMetaImage(image)
  const links = createShareLinks(
    `${siteUrl}${location.pathname}`,
    post.frontmatter.title
  )
  const { previous, next } = data
  const pagination = createPaginationLinks("/blog", previous, next)

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
        <ProgressScroll></ProgressScroll>
        <Header>
          <Small $top>
            {post.frontmatter.date} • {post.timeToRead} min read
          </Small>
          <H1 $top>{post.frontmatter.title}</H1>
          <P $lead>{post.frontmatter.description}</P>
        </Header>
        <Figure $meta>
          <GatsbyImage
            image={getImage(image.src)}
            alt={image.alt}
          ></GatsbyImage>
          <Figcaption $center>{image.caption}</Figcaption>
        </Figure>
        <div>
          <MDXRenderer>{post.body}</MDXRenderer>
          <Navigation as="div">
            <P $ui>Share</P>
            <Socials data={links}></Socials>
          </Navigation>
        </div>
        <Footer>
          <Avatar></Avatar>
        </Footer>
      </Article>
      <Aside $article>
        <H3 $top>Read more</H3>
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
        date(formatString: "DD MMMM YYYY", locale: "en")
        description
        image {
          alt
          caption
          src {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
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
