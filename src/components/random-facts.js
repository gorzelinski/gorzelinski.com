import React from "react"
import { useTranslation } from "react-i18next"

import { H2, H6, P, Section, Tile } from "../elements"

const RandomFacts = () => {
  const { t } = useTranslation("components/random-facts")

  return (
    <Section>
      <Tile $span="all">
        <H2>{t("random")}</H2>
      </Tile>
      {t("facts", { returnObjects: true }).map((fact, index) => (
        <Tile key={`fact-${index + 1}`}>
          <H6 as="h3">{fact.heading}</H6>
          <P>{fact.description}</P>
        </Tile>
      ))}
    </Section>
  )
}

export default RandomFacts
