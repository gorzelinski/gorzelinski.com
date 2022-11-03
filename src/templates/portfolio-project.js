import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  Article,
  H1,
  H2,
  H6,
  Header,
  Image,
  P,
  Section,
  Small,
  Subsection,
  Tile,
} from "../elements"
import {
  createFeaturedImage,
  createMetaImage,
  createPaginationLinks,
  extractProjectData,
} from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import ProgressScroll from "../components/progress-scroll"
import Subscribe from "../components/subscribe"
import Link from "../components/link"

const PortfolioProjectTemplate = ({ data, location }) => {
  const { t } = useTranslation("templates/portfolio-project")
  const {
    image,
    locale,
    title,
    description,
    date,
    updated,
    client,
    links,
    services,
    deliverables,
    body,
  } = extractProjectData(data.mdx)
  const metaImage = createMetaImage(image)
  const featuredImage = createFeaturedImage(image)
  const { previous, next } = data
  const pagination = createPaginationLinks("/portfolio", previous, next)

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
        <Image
          $aspectRatio="meta"
          image={featuredImage.srcset}
          alt={featuredImage.alt}
        ></Image>
        <Header>
          <H1>{title}</H1>
          <P $type="lead">{description}</P>
          <Subsection>
            <Tile>
              <Small as="p">{t("client")}</Small>
              <H6 as="h2">{client}</H6>
            </Tile>
            <Tile>
              <Small as="p">{t("links")}</Small>
              {links?.map(link => (
                <H6 as="h2" key={link.text}>
                  <Link href={link.href}>{link.text}</Link>
                </H6>
              ))}
            </Tile>
            <Tile>
              <Small as="p">{t("services")}</Small>
              <H6 as="h2">{services?.join(", ")}</H6>
            </Tile>
            <Tile>
              <Small as="p">{t("deliverables")}</Small>
              <H6 as="h2">{deliverables?.join(", ")}</H6>
            </Tile>
          </Subsection>
        </Header>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Article>
      <Section $marginTop="small">
        <Tile $span="all">
          <H2>{t("more")}</H2>
        </Tile>
        <Pagination aria={t("more")} data={pagination}></Pagination>
      </Section>
      <Subscribe></Subscribe>
    </Layout>
  )
}

export default PortfolioProjectTemplate

export const pageQuery = graphql`
  query PortfolioProjectBySlug(
    $locale: String!
    $slug: String!
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
      body
      fields {
        locale
      }
      frontmatter {
        title
        description
        date
        updated
        client
        services
        deliverables
        links {
          text
          href
        }
        image {
          alt
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
