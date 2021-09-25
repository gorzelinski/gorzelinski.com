import styled, { css } from "styled-components"

import { media } from "./utils"
import { grid, subGrid } from "./grid"

export const Section = styled.section`
  margin-top: ${props => props.theme.space.xl};
  ${grid}

  ${media.tablet`
    margin-top: ${props => props.theme.space.xxl};
  `}

  ${props =>
    props.$lower &&
    css`
      margin-top: ${props => props.theme.space.xxl};

      ${media.tablet`
        margin-top: ${props => props.theme.space.xxxl};
      `}
    `}
`

export const Subsection = styled.section`
  ${subGrid}
`

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
