import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"

import { Button, H1, Header, P, Section, Tile } from "../elements"
import { createMetaImage } from "../utils"
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
  const allProjects = data.allProjects?.nodes
  const projectsPerLoad = 6
  const [list, setList] = useState([...allProjects.slice(0, projectsPerLoad)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(allProjects.length > projectsPerLoad)

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allProjects.length
      const nextResults = isMore
        ? allProjects.slice(currentLength, currentLength + projectsPerLoad)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore, allProjects, list])

  useEffect(() => {
    const isMore = list.length < allProjects.length
    setHasMore(isMore)
  }, [list, allProjects])

  return (
    <Layout location={location}>
      <Seo
        lang={locale}
        title={t("title")}
        description={t("description")}
        slug={location.pathname}
        image={metaImage}
      ></Seo>
      <Section $marginTop="bigger">
        <Header>
          <H1 $decorative>{t("heading")}</H1>
          <P as="h2" $type="ui">
            {t("subtitle")}
          </P>
        </Header>
        <Section as="div" $marginTop="none">
          <Cards data={list}></Cards>
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
        fileAbsolutePath: { regex: "/(portfolio)/" }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          services
          title
          description
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
          width: 1200
          height: 630
          outputPixelDensities: 1
        )
      }
    }
  }
`
