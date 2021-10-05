import React from "react"

import { Card, Small } from "../elements"
import Post from "./post"

const Posts = ({ data = { allMdx: { nodes: [] } } }) => {
  const posts = data.allMdx.nodes

  return posts.length === 0 ? (
    <Card as="div" $half>
      <Small as="p" $top $bottom>
        Brak wpisów do wyświetlenia
      </Small>
    </Card>
  ) : (
    posts.map(post => <Post data={post} key={post.fields.slug}></Post>)
  )
}

export default Posts
