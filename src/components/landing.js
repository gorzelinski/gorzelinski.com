import React from "react"
import { useTranslation } from "react-i18next"

import { Hero, H1, P, Button, Tile } from "../elements"
import Typewriter from "./typewriter"

const Landing = () => {
  const { t } = useTranslation("components/landing")

  return (
    <Hero>
      <Tile as="header">
        <H1 $decorative aria-label={t("aria")}>
          <Typewriter
            strings={[
              t("typewriter.design"),
              t("typewriter.code"),
              t("typewriter.write"),
              t("typewriter.create"),
            ]}
          ></Typewriter>
        </H1>
        <P $type="lead">{t("description")}</P>
        <Button as="a" $type="primary" $grow href="#say-hello">
          {t("cta")}
        </Button>
      </Tile>
    </Hero>
  )
}

export default Landing
