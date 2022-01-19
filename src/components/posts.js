import React from "react"

import { P, Tile } from "../elements"
import Post from "./post"

const Posts = ({ data = { allMdx: { nodes: [] } } }) => {
  const posts = data.allMdx.nodes

  return posts.length === 0 ? (
    <Tile>
      <P $ui>No posts do display</P>
    </Tile>
  ) : (
    posts.map(post => <Post data={post} key={post.fields.slug}></Post>)
  )
}

export default Posts
