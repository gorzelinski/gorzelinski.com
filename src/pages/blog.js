import React, { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"

import { Button, H1, Header, Input, P, Section, Tile } from "../elements"
import { createMetaImage, debounce } from "../utils"
import Cards from "../components/cards"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Subscribe from "../components/subscribe"

const Blog = ({ data, location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/blog")
  const metaImage = createMetaImage({
    alt: t("alt"),
    src: data?.metaImage,
  })
  const postsPerLoad = 8
  const allPosts = data.allPosts?.nodes
  const [filteredPosts, setFilteredPosts] = useState(allPosts)
  const [currentPosts, setCurrentPosts] = useState(
    filteredPosts.slice(0, postsPerLoad)
  )
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(filteredPosts.length > postsPerLoad)

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  const handleInputChange = useMemo(
    () =>
      debounce(event => {
        const query = event.target.value
        query
          ? setFilteredPosts(
              allPosts.filter(post => {
                const { title, description, date } = post.frontmatter
                return (
                  title.toLowerCase().includes(query.toLowerCase()) ||
                  description.toLowerCase().includes(query.toLowerCase()) ||
                  date.toLowerCase().includes(query.toLowerCase())
                )
              })
            )
          : setFilteredPosts(allPosts)
      }, 250),
    [allPosts]
  )

  useEffect(() => {
    setCurrentPosts(filteredPosts.slice(0, postsPerLoad))
  }, [filteredPosts])

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = currentPosts.length
      const isMore = currentLength < filteredPosts.length
      const nextResults = isMore
        ? filteredPosts.slice(currentLength, currentLength + postsPerLoad)
        : []
      setCurrentPosts([...currentPosts, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore, filteredPosts, currentPosts])

  useEffect(() => {
    const isMore = currentPosts.length < filteredPosts.length
    setHasMore(isMore)
  }, [currentPosts, filteredPosts])

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
        <Header $type="section">
          <H1 $marginReset="top" $decorative>
            {t("title")}
          </H1>
          <P as="h2" $type="ui">
            {filteredPosts === allPosts
              ? t("subtitle")
              : `${t("found")}: ${filteredPosts.length}`}
          </P>
        </Header>
        <Section as="div" $marginReset="top">
          <Input
            type="text"
            placeholder={t("search")}
            aria-label={t("search")}
            onChange={handleInputChange}
          ></Input>
          <Cards data={currentPosts}></Cards>
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

export default Blog

export const pageQuery = graphql`
  query AllBlogPosts($locale: String!, $dateFormat: String!) {
    allPosts: allMdx(
      filter: {
        fields: { locale: { eq: $locale } }
        fileAbsolutePath: { regex: "/(blog)/" }
      }
      sort: { fields: frontmatter___date, order: DESC }
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
    metaImage: file(relativePath: { eq: "blog.png" }) {
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
`
