import React from "react"
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
import { createMetaImage } from "../utils"
import { useLoadMore } from "../hooks"
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
  const {
    allItems,
    currentItems,
    filteredItems,
    hasMore,
    handleInputChange,
    handleKeyUp,
    handleLoadMore,
  } = useLoadMore(data.allPosts?.nodes)

  return (
    <Layout location={location}>
      <Seo
        lang={locale}
        title={t("title")}
        description={t("description")}
        slug={location.pathname}
        image={metaImage}
      ></Seo>
      <Section>
        <Header $type="section">
          <H1 $decorative>{t("heading")}</H1>
          <P as="h2" $type="ui">
            {filteredItems === allItems
              ? t("subtitle")
              : `${t("found")}: ${filteredItems.length}`}
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
        <Cards data={currentItems}></Cards>
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
  query AllBlogPosts($locale: String!) {
    allPosts: allMdx(
      filter: {
        fields: { locale: { eq: $locale } }
        frontmatter: { type: { eq: "post" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
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
          categories
          tags
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
          width: 2400
          height: 1260
          outputPixelDensities: 1
        )
      }
    }
  }
`
