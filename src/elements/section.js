import styled, { css } from "styled-components"

import { media } from "./utils"
import { article, grid, subGrid } from "./grid"

export const Section = styled.section`
  margin-top: ${props => props.theme.space.xl};
  ${grid}

  ${media.tablet`
    margin-top: ${props => props.theme.space.xxl};
  `}

  ${props =>
    props.$higher &&
    css`
      margin-top: ${props => props.theme.space.l};

      ${media.tablet`
        margin-top: ${props => props.theme.space.xl};
      `}
    `}

  ${props =>
    props.$lower &&
    css`
      margin-top: ${props => props.theme.space.xxl};

      ${media.tablet`
        margin-top: ${props => props.theme.space.xxxl};
      `}
    `}

    ${props =>
    props.$border &&
    css`
      padding: ${props => props.theme.space.l} 0;
      border-top: ${props => props.theme.space.xxs} solid
        ${props => props.theme.color.surface.shade200};
      border-bottom: ${props => props.theme.space.xxs} solid
        ${props => props.theme.color.surface.shade200};
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

export const Article = styled(Section)`
  ${article}

  & > * {
    grid-column: 2;
  }
`
