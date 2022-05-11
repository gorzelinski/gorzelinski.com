import React, { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import { Search } from "@styled-icons/ionicons-solid"

import {
  Button,
  Form,
  H1,
  Header,
  Icon,
  Input,
  InputWrapper,
  P,
  Section,
  Tile,
} from "../elements"
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

  const handleKeyUp = e => {
    if (e.key === "Enter") {
      e.target.blur()
      document.querySelector("article")?.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  const handleInputChange = useMemo(
    () =>
      debounce(event => {
        const query = event.target.value.trim().toLowerCase()
        const filtered = allPosts.filter(post => {
          const { title, description, categories, tags } = post.frontmatter
          return (
            title.toLowerCase().includes(query) ||
            description.toLowerCase().includes(query) ||
            categories.includes(query) ||
            tags.includes(query)
          )
        })
        query ? setFilteredPosts(filtered) : setFilteredPosts(allPosts)
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
      <Section $marginTop="big">
        <Header $type="section">
          <H1 $decorative>{t("heading")}</H1>
          <P as="h2" $type="ui">
            {filteredPosts === allPosts
              ? t("subtitle")
              : `${t("found")}: ${filteredPosts.length}`}
          </P>
        </Header>
        <Tile $span="all">
          <Form
            role="search"
            onSubmit={e => {
              e.preventDefault()
            }}
          >
            <InputWrapper>
              <Icon $type="border">
                <Search></Search>
              </Icon>
              <Input
                type="search"
                placeholder={t("search")}
                aria-label={t("search")}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
              ></Input>
            </InputWrapper>
          </Form>
        </Tile>
        <Cards data={currentPosts}></Cards>
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
          categories
          tags
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
    metaImage: file(
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: $locale }
      name: { eq: "blog" }
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
