import React from "react"

import { P, Tile } from "../elements"
import Post from "./post"

const Posts = ({ data = { nodes: [] } }) => {
  const posts = data.nodes

  return posts.length === 0 ? (
    <Tile>
      <P $ui>No posts do display</P>
    </Tile>
  ) : (
    posts.map(post => <Post data={post} key={post.fields.slug}></Post>)
  )
}

export default Posts
