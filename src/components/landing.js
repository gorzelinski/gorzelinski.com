import React from "react"
import { useTranslation } from "react-i18next"

import { H1, Hero, P, Button, Tile } from "../elements"
import { useReducedMotion } from "../hooks"
import Typewriter from "./typewriter"

const Landing = () => {
  const { t } = useTranslation("components/landing")
  const hasReducedMotion = useReducedMotion()

  return (
    <Hero>
      <Tile as="header">
        <H1 aria-label={t("aria")}>
          {hasReducedMotion ? (
            t("typewriter.create")
          ) : (
            <Typewriter
              strings={[
                t("typewriter.design"),
                t("typewriter.code"),
                t("typewriter.write"),
                t("typewriter.create"),
              ]}
            ></Typewriter>
          )}
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
