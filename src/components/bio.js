import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { ChevronForward } from "@styled-icons/ionicons-solid"

import {
  Section,
  Figure,
  Figcaption,
  Small,
  H2,
  P,
  Button,
  Icon,
  Link,
  Tile,
} from "../elements"

const Bio = ({ data = {} }) => {
  const image = getImage(data?.image)
  const name = data.site?.siteMetadata?.author?.name
  const isDataComplete = image && name && true

  return isDataComplete ? (
    <Section>
      <Figure $portrait>
        <GatsbyImage
          image={image}
          alt={`${name} - profile picture`}
        ></GatsbyImage>
        <Figcaption>
          In reality, I'm more pleasant than in this picture. I promise!
        </Figcaption>
      </Figure>
      <Tile>
        <Small as="p" $top>
          Hello, my name is
        </Small>
        <H2 $top>{name}</H2>
        <P>I'm an engineer and humanist. In one? Is it legal?</P>
        <P>
          I develop my technical skills and humanistic interests by designing,
          coding and writing content for websites that I create. For that
          purpose, I mainly use Figma, JAMstack and a good, old-fashioned pen
          and paper. Effects of that development you can find in my{" "}
          <Link $text to="/portfolio">
            portfolio
          </Link>
          .
        </P>
        <P>
          I learn new things every day, explore new fields of knowledge, rummage
          around the web and theorize too much. I share my findings and thoughts
          on my{" "}
          <Link $text to="/blog">
            blog
          </Link>
          .
        </P>
        <Button $text $first $iconForward to="/about">
          Read my story
          <Icon>
            <ChevronForward></ChevronForward>
          </Icon>
        </Button>
      </Tile>
    </Section>
  ) : null
}

export default Bio
