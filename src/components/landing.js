import React from "react"
import { useTranslation } from "react-i18next"

import { Hero, H1, P, Button } from "../elements"
import Typewriter from "./typewriter"

const Landing = () => {
  const { t } = useTranslation("components/landing")

  return (
    <Hero>
      <header>
        <H1 $marginReset="top" $decorative aria-label={t("aria")}>
          <Typewriter
            strings={[
              t("typewriter.design"),
              t("typewriter.code"),
              t("typewriter.publish"),
              t("typewriter.create"),
            ]}
          ></Typewriter>
        </H1>
        <P $type="lead">{t("description")}</P>
        <Button $type="primary" $grow to="#say-hello">
          {t("cta")}
        </Button>
      </header>
    </Hero>
  )
}

export default Landing
