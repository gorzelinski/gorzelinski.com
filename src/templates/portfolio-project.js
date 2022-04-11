import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import {
  A,
  Article,
  Aside,
  H1,
  H3,
  H6,
  Header,
  Image,
  P,
  Small,
  Subsection,
  Tile,
} from "../elements"
import { createMetaImage, createPaginationLinks } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import ProgressScroll from "../components/progress-scroll"
import Subscribe from "../components/subscribe"

const PortfolioProjectTemplate = ({ data, location }) => {
  const { t } = useTranslation("templates/portfolio-project")
  const project = data.mdx
  const image = project.frontmatter?.image
  const metaImage = createMetaImage(image)
  const { previous, next } = data
  const pagination = createPaginationLinks("/portfolio", previous, next)

  return (
    <Layout location={location}>
      <Seo
        lang={project.fields.locale}
        type="article"
        title={project.frontmatter.title}
        titleTemplate={true}
        description={project.frontmatter.description}
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
        <ProgressScroll></ProgressScroll>
        <Image
          $aspectRatio="meta"
          image={getImage(image.src)}
          alt={image.alt}
        ></Image>
        <Header>
          <H1 $marginReset="top">{project.frontmatter.title}</H1>
          <P $type="lead">{project.frontmatter.description}</P>
          <Subsection>
            <Tile>
              <Small as="p" $marginReset="top">
                {t("date")}
              </Small>
              <H6 as="h2" $marginReset="both">
                {project.frontmatter.date}
              </H6>
            </Tile>
            <Tile>
              <Small as="p" $marginReset="both">
                {t("client")}
              </Small>
              <H6 as="h2" $marginReset="both">
                {project.frontmatter.client}
              </H6>
            </Tile>
            <Tile>
              <Small as="p" $marginReset="both">
                {t("role")}
              </Small>
              <H6 as="h2" $marginReset="both">
                {project.frontmatter.myRole}
              </H6>
            </Tile>
            <Tile>
              <Small as="p" $marginReset="both">
                {t("tools")}
              </Small>
              <H6 as="h2" $marginReset="both">
                {project.frontmatter.tools}
              </H6>
            </Tile>
            <Tile $span="all">
              <Small as="p" $marginReset="both">
                {t("live")}
              </Small>
              <H6 as="h2" $marginReset="both">
                <A
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.frontmatter.live}
                >
                  {project.frontmatter.live}
                </A>
              </H6>
            </Tile>
          </Subsection>
        </Header>
        <div>
          <MDXRenderer>{project.body}</MDXRenderer>
        </div>
      </Article>
      <Aside $marginTop="smaller" $article>
        <H3 $marginReset="top">{t("more")}</H3>
        <Pagination aria={t("more")} data={pagination}></Pagination>
      </Aside>
      <Subscribe></Subscribe>
    </Layout>
  )
}

export default PortfolioProjectTemplate

export const pageQuery = graphql`
  query PortfolioProjectBySlug(
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
