import React from "react"
import { useTranslation } from "react-i18next"
import { useLocalization } from "gatsby-theme-i18n"

import { Button, H1, P, Section, Tile } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ThankYou = ({ location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/thank-you")

  return (
    <Layout location={location}>
      <Seo
        lang={locale}
        title={t("title")}
        description={t("description")}
        slug={location.pathname}
      ></Seo>
      <Section $marginTop="bigger">
        <Tile>
          <H1 $marginReset="top" $decorative>
            {t("title")}
          </H1>
          <P $type="lead">{t("description")}</P>
          <Button as="button">{t("button")}</Button>
        </Tile>
      </Section>
    </Layout>
  )
}

export default ThankYou
