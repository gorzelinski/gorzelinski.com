import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"

import { H1, Header, P, Section } from "../elements"
import { createMetaImage } from "../utils"
import Cards from "../components/cards"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Subscription from "../components/subscription"

const Blog = ({ data, location }) => {
  const { t } = useTranslation("pages/blog")
  const { posts } = data
  const metaImage = createMetaImage({
    alt: `Centered text "Blog" on white background`,
    src: data?.metaImage,
  })

  return (
    <Layout location={location}>
      <Seo
        title={t("title")}
        description={t("description")}
        slug={location.pathname}
        image={metaImage}
      ></Seo>
      <Section $lower>
        <Header>
          <H1 $top $decorative>
            {t("title")}
          </H1>
          <P as="h2" $ui>
            {t("subtitle")}
          </P>
        </Header>
        <Section as="div" $top>
          <Cards data={posts}></Cards>
        </Section>
      </Section>
      <Subscription></Subscription>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query AllBlogPosts($locale: String!, $dateFormat: String!) {
    posts: allMdx(
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
