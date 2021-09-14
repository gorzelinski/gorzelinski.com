import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about"
import { P } from "../elements"

const AboutMe = ({ data }) => {
  return (
    <Layout>
      <Seo title="O mnie"></Seo>
      <About
        data={{
          ...data,
          title: "Miło Cię poznać!",
          figcaption:
            "W rzeczywistości jestem przyjemniejszy niż wyglądam na tym zdjęciu. Przyrzekam!",
        }}
      >
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          exercitationem, eius officia sunt aut aspernatur aliquam repellendus
          reiciendis voluptatibus voluptas voluptatum sapiente tenetur sit eos
          assumenda pariatur tempore ducimus doloribus quis voluptates. Quia
          sint molestiae facere eveniet similique placeat non illum aspernatur,
          temporibus libero quas et illo a voluptatum obcaecati.
        </P>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          exercitationem, eius officia sunt aut aspernatur aliquam repellendus
          reiciendis voluptatibus voluptas voluptatum sapiente tenetur sit eos
          assumenda pariatur tempore ducimus doloribus quis voluptates. Quia
          sint molestiae facere eveniet similique placeat non illum aspernatur,
          temporibus libero quas et illo a voluptatum obcaecati.
        </P>
      </About>
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query AllBioQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          email
          github
          dribbble
          twitter
          facebook
        }
      }
    }
    image: file(relativePath: { eq: "gorzelinski.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
