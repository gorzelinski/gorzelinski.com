import * as React from "react"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { Card, H2, P, Button, Section, Figure } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data = {} }) => {
  const image = getImage(data.image)

  return (
    <Layout>
      <Seo title="404: Nie znaleziono" />
      <Section>
        <Figure $threeeights as="div">
          <GatsbyImage
            image={image}
            alt="Marcin najman w niebieskiej kurtce"
          ></GatsbyImage>
        </Figure>
        <Card $fiveeights as="div">
          <H2 as="h1" $top>
            Błąd 404: <br /> Ludzie, tu nic nie ma!
          </H2>
          <P $lead>Strona, której szukasz nie istnieje lub ją usunąłem.</P>
          <Button $primary $grow to="/">
            Wróć do strony głównej
          </Button>
        </Card>
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
