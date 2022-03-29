import React from "react"
import { useTranslation } from "react-i18next"

import { P, Tile } from "../elements"
import Post from "./post"
import Project from "./project"

const Cards = ({ data = [] }) => {
  const { t } = useTranslation("components/cards")
  const cards = data

  return cards.length === 0 ? (
    <Tile>
      <P $type="ui">{t("message")}</P>
    </Tile>
  ) : (
    cards.map(card =>
      card.frontmatter.date ? (
        <Post data={card} key={card.fields.slug}></Post>
      ) : (
        <Project data={card} key={card.fields.slug}></Project>
      )
    )
  )
}

export default Cards
