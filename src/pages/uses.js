import React from "react"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"

import { createMetaImage } from "../utils"
import { H1, H2, Li, P, Section, Strong, Tile, Ul } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Link from "../components/link"

const Uses = ({ data, location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/uses")
  const metaImage = createMetaImage({
    alt: t("metaAlt"),
    src: data?.metaImage,
  })

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
        <Tile $span="all">
          <H1 $decorative>{t("title")}</H1>
          <P $type="lead">{t("description")}</P>
        </Tile>
        {t("techs", { returnObjects: true }).map((tech, index) => (
          <Tile $span={2} key={`tech-${index}`}>
            <H2>{tech.heading}</H2>
            <Ul>
              {tech.list.map((item, index) => (
                <Li key={`tech-item-${index}`}>
                  {item.link ? (
                    <Link href={item.link}>{item.name}</Link>
                  ) : (
                    <Strong>{item.name}</Strong>
                  )}{" "}
                  - {item.description}
                  {item?.details ? (
                    <Ul>
                      {item.details.map((detail, index) => (
                        <Li key={`detail-${index}`}>
                          {detail.link ? (
                            <Link href={detail.link}>{detail.name}</Link>
                          ) : (
                            <Strong>{detail.name}</Strong>
                          )}{" "}
                          - {detail.description}
                        </Li>
                      ))}
                    </Ul>
                  ) : null}
                </Li>
              ))}
            </Ul>
          </Tile>
        ))}
      </Section>
    </Layout>
  )
}

export default Uses

export const pageQuery = graphql`
  query AllUsesQuery($locale: String!) {
    metaImage: file(
      sourceInstanceName: { eq: "images" }
      relativeDirectory: { eq: $locale }
      name: { eq: "uses" }
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
