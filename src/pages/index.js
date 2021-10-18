import React from "react"
import { graphql } from "gatsby"
import { getImage, getSrc } from "gatsby-plugin-image"

import { useBio, useBlogPosts, usePortfolioProjects } from "../hooks"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/landing"
import Featured from "../components/featured"
import Projects from "../components/projects"
import About from "../components/about"
import Posts from "../components/posts"

const Index = ({ data }) => {
  const { projects } = usePortfolioProjects()
  const { posts } = useBlogPosts()
  const { bio } = useBio()
  const metaImage = {
    alt: `Wycentrowany napis "Tworzę rzeczy w internecie" na białym tle`,
    src: getSrc(data?.metaImage),
    width: getImage(data?.metaImage).width,
    height: getImage(data?.metaImage).height,
  }

  return (
    <Layout>
      <Seo title="Tworzę rzeczy w internecie" image={metaImage}></Seo>
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
      <About data={bio}></About>
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

export const pageQuery = graphql`
  query IndexPage {
    metaImage: file(relativePath: { eq: "index.png" }) {
      childImageSharp {
        gatsbyImageData(
          formats: AUTO
          layout: FIXED
          placeholder: NONE
          width: 1200
          aspectRatio: 1.91
          outputPixelDensities: 1
        )
      }
    }
  }
`
