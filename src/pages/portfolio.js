import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"

import { Button, H1, Header, P, Section, Tile } from "../elements"
import { createMetaImage } from "../utils"
import { useLoadMore } from "../hooks"
import Cards from "../components/cards"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Subscribe from "../components/subscribe"

const Portfolio = ({ data, location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/portfolio")
  const metaImage = createMetaImage({
    alt: t("alt"),
    src: data?.metaImage,
  })
  const { currentItems, hasMore, handleLoadMore } = useLoadMore(
    data.allProjects?.nodes,
    6
  )

  return (
    <Layout location={location}>
      <Seo
        lang={locale}
        title={t("title")}
        titleTemplate={true}
        description={t("description")}
        slug={location.pathname}
        image={metaImage}
      ></Seo>
      <Section>
        <Header $type="section">
          <H1 $decorative>{t("heading")}</H1>
          <P as="h2" $type="ui">
            {t("subtitle")}
          </P>
        </Header>
        <Section as="div" $marginTop="none">
          <Cards data={currentItems}></Cards>
        </Section>
        {hasMore ? (
          <Tile $span="all" $justify="center">
            <Button as="button" $type="text" onClick={handleLoadMore}>
              {t("loadMore")}
            </Button>
          </Tile>
        ) : null}
      </Section>
      <Subscribe></Subscribe>
    </Layout>
  )
}

export default Portfolio

export const pageQuery = graphql`
  query AllPortfolioProjects($locale: String!) {
    allProjects: allMdx(
      filter: {
        fields: { locale: { eq: $locale } }
        frontmatter: { type: { eq: "project" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          type
          services
          title
          description
          image {
            alt
            src {
              childImageSharp {
                gatsbyImageData(width: 1366)
              }
            }
          }
        }
      }
    }
    metaImage: file(
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: $locale }
      name: { eq: "portfolio" }
    ) {
      childImageSharp {
        gatsbyImageData(
          formats: AUTO
          layout: FIXED
          placeholder: NONE
          width: 2400
          height: 1260
          outputPixelDensities: 1
        )
      }
    }
  }
`
