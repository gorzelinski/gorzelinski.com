import React from "react"

import { Card, P } from "../elements"
import Post from "./post"

const Posts = ({ data = { allMdx: { nodes: [] } } }) => {
  const posts = data.allMdx.nodes

  return posts.length === 0 ? (
    <Card as="div">
      <P $ui>Brak wpisów do wyświetlenia</P>
    </Card>
  ) : (
    posts.map(post => <Post data={post} key={post.fields.slug}></Post>)
  )
}

export default Posts
