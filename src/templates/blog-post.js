import React from "react"
import { useTranslation } from "react-i18next"
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
import ProgressScroll from "../components/progress-scroll"
import Avatar from "../components/avatar"
import SignUp from "../components/sign-up"

const BlogPostTemplate = ({ data, location }) => {
  const { t } = useTranslation("templates/blog-post")
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
        lang={post.fields.locale}
        type="article"
        title={post.frontmatter.title}
        description={post.frontmatter.description}
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
            {post.frontmatter.date} • {post.timeToRead} {t("min")}
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
            <P $ui>{t("share")}</P>
            <Socials data={links}></Socials>
          </Navigation>
        </div>
        <Footer>
          <Avatar></Avatar>
        </Footer>
      </Article>
      <Aside $article>
        <H3 $top>{t("more")}</H3>
        <Pagination data={pagination}></Pagination>
      </Aside>
      <SignUp></SignUp>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
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
