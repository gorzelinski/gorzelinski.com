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

const About = ({ data = {} }) => {
  const image = getImage(data?.image)
  const name = data.site?.siteMetadata?.author?.name
  const isDataComplete = image && name && true

  return isDataComplete ? (
    <Section>
      <Figure $portrait>
        <GatsbyImage
          image={image}
          alt={`${name} - zdjęcie profilowe`}
        ></GatsbyImage>
        <Figcaption>
          W rzeczywistości jestem przyjemniejszy niż wyglądam na tym zdjęciu.
          Przyrzekam!
        </Figcaption>
      </Figure>
      <Tile>
        <Small as="p" $top>
          Cześć, nazywam się
        </Small>
        <H2 $top>{name}</H2>
        <P>Jestem inżynierem i humanistą. W jednym? Czy to jest legalne?!</P>
        <P>
          Swoje techniczne umiejętności i humanistyczne zainteresowania staram
          się rozwijać projektując, kodując i pisząc treści dla stron
          internetowych, które tworzę. Do tego celu wykorzystuję głównie Figmę,
          JAMStack, długopis i kartę papieru. Efekty tego rozwoju możesz znaleźć
          w moim{" "}
          <Link $text to="/portfolio">
            portfolio
          </Link>
          .
        </P>
        <P>
          Nieustanie uczę się nowych rzeczy, eksploruję różne dziedziny wiedzy,
          szperam w internecie i nadmiernie teoretyzuję. Swoimi znaleziskami i
          przemyśleniami dzielę się na moim{" "}
          <Link $text to="/blog">
            blogu
          </Link>
          .
        </P>
        <Button $text $first $iconForward to="/o-mnie">
          Więcej o mnie
          <Icon>
            <ChevronForward></ChevronForward>
          </Icon>
        </Button>
      </Tile>
    </Section>
  ) : null
}

export default About
