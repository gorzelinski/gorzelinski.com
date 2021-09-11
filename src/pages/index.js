import React from "react"

import { useBio, useBlogPosts, usePortfolioProjects } from "../hooks"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/landing"
import Featured from "../components/featured"
import Projects from "../components/projects"
import About from "../components/about"
import Posts from "../components/posts"

const Index = () => {
  const { projects } = usePortfolioProjects()
  const { posts } = useBlogPosts()
  const { bio } = useBio()

  return (
    <Layout>
      <Seo title="Strona główna"></Seo>
      <Landing></Landing>
      <Featured
        data={{
          title: "Ostatnie projekty",
          slug: "/portfolio",
          buttonText: "Wszystkie projekty",
        }}
      >
        <Projects data={projects}></Projects>
      </Featured>
      <About
        data={{
          ...bio,
          meta: "Cześć, nazywam się",
          figcaption:
            "W rzeczywistości jestem przyjemniejszy niż wyglądam na tym zdjęciu. Przyrzekam!",
          slug: "/o-mnie",
          buttonText: "Więcej o mnie",
        }}
      ></About>
      <Featured
        data={{
          title: "Ostatnie wpisy",
          slug: "/blog",
          buttonText: "Wszystkie wpisy",
        }}
      >
        <Posts data={posts}></Posts>
      </Featured>
    </Layout>
  )
}

export default Index
