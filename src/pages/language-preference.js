import React from "react"
import { useTranslation } from "react-i18next"
import { useLocalization } from "gatsby-theme-i18n"

import { Button, H1, Hero, P, Strong, Tile } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"

const LanguagePreference = ({ location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/language-preference")

  return (
    <Layout>
      <Seo
        lang={locale}
        title={t("title")}
        description={t("description")}
        slug={location.pathname}
      ></Seo>
      <Hero>
        <Tile>
          <H1 $marginReset="top">{t("title")}</H1>
          <P $type="lead">
            {t("description")} <Strong>{t("language")}</Strong>
          </P>
          <Button $type="primary" to="/">
            {t("button")}
          </Button>
        </Tile>
      </Hero>
    </Layout>
  )
}

export default LanguagePreference
