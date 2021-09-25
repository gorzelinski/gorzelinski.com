import styled, { css } from "styled-components"

import { media } from "./utils"
import {
  twoEights,
  half,
  fiveEights,
  sixEights,
  sevenEights,
  full,
} from "./grid"

export const Card = styled.article`
  ${twoEights}
  ${half}
  ${fiveEights}
  ${sixEights}
  ${sevenEights}
  ${full}

  ${props =>
    props.$textCentered &&
    css`
      text-align: center;
    `}

  ${props =>
    props.$read &&
    css`
      grid-column: span 8;

      ${media.mobile`
        grid-column-start: 2;
        grid-column-end: span 7;
      `}

      ${media.tablet`
        grid-column-start: 2;
        grid-column-end: span 6;
      `}

      ${media.desktop`
        grid-column-start: 2;
        grid-column-end: span 4;
      `}

      ${media.large`
        grid-column-start: 2;
        grid-column-end: span 3;
      `}
    `}
`
