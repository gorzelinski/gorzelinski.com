import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

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
  Pill,
  Section,
  Small,
  Tile,
} from "../elements"
import {
  createFeaturedImage,
  createMetaImage,
  createPaginationLinks,
  createShareLinks,
  extractPostData,
  formatDate,
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
  const { locale, title, description, date, updated, timeToRead, image, body } =
    extractPostData(data.mdx)
  const metaImage = createMetaImage(image)
  const featuredImage = createFeaturedImage(image)
  const links = createShareLinks(`${siteUrl}${location.pathname}`, title)
  const { previous, next } = data
  const related = data.related.nodes
  const pagination = createPaginationLinks("/blog", previous, next)

  return (
    <Layout location={location}>
      <Seo
        lang={locale}
        type="article"
        title={title}
        titleTemplate={true}
        description={description}
        slug={location.pathname}
        image={metaImage}
        meta={[
          {
            property: "article:published_time",
            content: date,
          },
          {
            property: "article:modified_time",
            content: updated,
          },
        ]}
      />
      <Article id="article">
        <ProgressScroll></ProgressScroll>
        <Header>
          <Small>
            {formatDate(date, locale)} • {timeToRead} {t("min")}
          </Small>
          <H1>{title}</H1>
          <P $type="lead">{description}</P>
          <Pill>
            {t("updated")} {formatDate(updated, locale)}
          </Pill>
        </Header>
        <Figure>
          <Image
            $aspectRatio="wide"
            image={featuredImage.srcset}
            alt={featuredImage.alt}
          ></Image>
          <Figcaption $textAlign="center">{featuredImage.caption}</Figcaption>
        </Figure>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
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
        date
        updated
        description
        categories
        tags
        image {
          alt
          caption
          src {
            childImageSharp {
              gatsbyImageData(
                width: 2560
                aspectRatio: 1.91
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
          locale
          slug
        }
        frontmatter {
          type
          date
          title
          description
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(width: 1080)
              }
            }
          }
        }
        timeToRead
      }
    }
  }
`
