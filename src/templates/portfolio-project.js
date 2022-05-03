import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
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
import { createMetaImage, createPaginationLinks } from "../utils"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import ProgressScroll from "../components/progress-scroll"
import Subscribe from "../components/subscribe"
import Link from "../components/link"

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
      <Article id="article">
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
                {t("client")}
              </Small>
              <H6 as="h2" $marginReset="both">
                {project.frontmatter.client}
              </H6>
            </Tile>
            <Tile>
              <Small as="p" $marginReset="top">
                {t("links")}
              </Small>
              {project.frontmatter.links?.map(link => (
                <H6 as="h2" $marginReset="both" key={link.text}>
                  <Link href={link.href}>{link.text}</Link>
                </H6>
              ))}
            </Tile>
            <Tile>
              <Small as="p" $marginReset="top">
                {t("services")}
              </Small>
              <H6 as="h2" $marginReset="both">
                {project.frontmatter.services?.join(", ")}
              </H6>
            </Tile>
            <Tile>
              <Small as="p" $marginReset="top">
                {t("deliverables")}
              </Small>
              <H6 as="h2" $marginReset="both">
                {project.frontmatter.deliverables?.join(", ")}
              </H6>
            </Tile>
          </Subsection>
        </Header>
        <div>
          <MDXRenderer>{project.body}</MDXRenderer>
        </div>
      </Article>
      <Section $marginTop="smaller">
        <H2 $marginReset="both">{t("more")}</H2>
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
