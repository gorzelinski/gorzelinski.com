import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import {
  Section,
  Figure,
  Figcaption,
  Card,
  Small,
  H2,
  P,
  Button,
  Icon,
} from "../elements"

const About = ({ data }) => {
  const { figcaption, meta, buttonText, slug, title } = data
  const image = getImage(data?.image)
  const name = data.site?.siteMetadata?.author?.name
  const summary = data.site?.siteMetadata?.author?.summary

  return (
    <Section>
      <Figure $half $portrait>
        <GatsbyImage
          image={image}
          alt={`${name} - zdjęcie profilowe`}
        ></GatsbyImage>
        {figcaption && <Figcaption>{figcaption}</Figcaption>}
      </Figure>
      <Card $half>
        {meta && (
          <Small as="p" $top>
            {meta}
          </Small>
        )}
        <H2>{name || title}</H2>
        {summary && <P>{summary}</P>}
        {slug && buttonText && (
          <Button $text $first to={slug}>
            {buttonText}
            <Icon>
              <ChevronForward></ChevronForward>
            </Icon>
          </Button>
        )}
      </Card>
    </Section>
  )
}

export default About
