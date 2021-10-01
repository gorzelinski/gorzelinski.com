import styled from "styled-components"

import { media } from "../utils"
import { Section } from "./section"

export const Hero = styled(Section)`
  & > * {
    grid-column: span 8;
  }

  ${media.tablet`
    & > * {
      grid-column: span 7;
    }
  `}

  ${media.desktop`
    & > * {
      grid-column: span 6;
    }
  `}
`
