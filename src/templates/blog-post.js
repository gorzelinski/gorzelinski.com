import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { getImage } from "gatsby-plugin-image"

import {
  Article,
  Figcaption,
  Figure,
  Footer,
  H1,
  H2,
  Header,
  Image,
  Navigation,
  P,
  Section,
  Small,
  Tile,
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
import Cards from "../components/cards"
import Subscribe from "../components/subscribe"

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
  const related = data.related.nodes
  const pagination = createPaginationLinks("/blog", previous, next)

  return (
    <Layout location={location}>
      <Seo
        lang={post.fields.locale}
        type="article"
        title={post.frontmatter.title}
        titleTemplate={true}
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
      <Article id="article">
        <ProgressScroll></ProgressScroll>
        <Header>
          <Small>
            {post.frontmatter.date} • {post.timeToRead} {t("min")}
          </Small>
          <H1>{post.frontmatter.title}</H1>
          <P $type="lead">{post.frontmatter.description}</P>
        </Header>
        <Figure>
          <Image
            $aspectRatio="wide"
            image={getImage(image.src)}
            alt={image.alt}
          ></Image>
          <Figcaption $textAlign="center">{image.caption}</Figcaption>
        </Figure>
        <div>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <Footer $grid="sub">
          <Tile $span="all">
            <Navigation as="div">
              <P $type="ui">{t("share")}</P>
              <Socials data={links}></Socials>
            </Navigation>
          </Tile>
          <Tile $span="all">
            <Avatar></Avatar>
          </Tile>
        </Footer>
      </Article>
      <Section>
        <Header $type="section">
          <H2>{t("more")}</H2>
        </Header>
        {related.length > 0 ? <Cards data={related}></Cards> : null}
        <Pagination data={pagination}></Pagination>
      </Section>
      <Subscribe></Subscribe>
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
    $categories: [String]
  ) {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    mdx(fields: { locale: { eq: $locale }, slug: { eq: $slug } }) {
      body
      fields {
        locale
      }
      frontmatter {
        title
        date(formatString: $dateFormat, locale: $locale)
        description
        categories
        tags
        image {
          alt
          caption
          src {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1200
                height: 630
                transformOptions: { cropFocus: CENTER }
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
    related: allMdx(
      limit: 3
      filter: {
        fields: { locale: { eq: $locale }, slug: { ne: $slug } }
        frontmatter: { categories: { in: $categories } }
      }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: $dateFormat, locale: $locale)
          title
          description
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(breakpoints: [320, 480, 768], width: 768)
              }
            }
          }
        }
        timeToRead
      }
    }
  }
`
