import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { H1, P, Button, Section, Figure, Tile } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data = {} }) => {
  const image = getImage(data.image)

  return (
    <Layout>
      <Seo title="Page not found" />
      <Section>
        <Figure as="div">
          <GatsbyImage
            image={image}
            alt="Marcin Najman w niebieskiej kurtce"
          ></GatsbyImage>
        </Figure>
        <Tile $span2>
          <H1 $decorative $top>
            404
          </H1>
          <P $lead>
            The page you're looking for doesn't exist. Or I deleted it. It's
            hard to tell.
          </P>
          <Button $primary $grow to="/">
            Back to home page
          </Button>
        </Tile>
      </Section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    image: file(relativePath: { eq: "not-found.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
