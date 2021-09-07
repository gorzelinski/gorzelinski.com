import React from "react"

import { Card, Small } from "../elements"
import Post from "./post"

const Posts = ({ data = { allMarkdownRemark: { nodes: [] } } }) => {
  const posts = data.allMarkdownRemark.nodes

  return posts.length === 0 ? (
    <Card $half as="div">
      <Small $top $bottom as="p">
        Brak wpisów do wyświetlenia
      </Small>
    </Card>
  ) : (
    posts.map(post => <Post data={post} key={post.fields.slug}></Post>)
  )
}

export default Posts
