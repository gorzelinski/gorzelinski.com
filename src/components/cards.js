import React from "react"

import { P, Tile } from "../elements"
import Post from "./post"
import Project from "./project"

const Cards = ({ data = { nodes: [] } }) => {
  const cards = data?.nodes ?? []

  return cards.length === 0 ? (
    <Tile>
      <P $ui>No elements to display</P>
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
