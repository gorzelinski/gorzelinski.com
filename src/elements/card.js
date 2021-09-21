import styled, { css } from "styled-components"
import { media } from "../utils"

export const Half = css`
  grid-column: span 8;

  ${props =>
    props.$half &&
    css`
      ${media.tablet`
        grid-column: span 4;
      `}
    `}
`

export const SixEights = css`
  grid-column: span 8;

  ${props =>
    props.$sixeights &&
    css`
      ${media.tablet`
        grid-column: span 6;
        ${props =>
          props.$centered &&
          css`
            grid-column-start: 2;
            grid-column-end: span 6;
          `}
      `}
    `}
`

export const SevenEights = css`
  grid-column: span 8;

  ${props =>
    props.$seveneights &&
    css`
      ${media.tablet`
        grid-column-start: 2;
        grid-column-end: span 7;
      `}
    `}
`

export const Full = css`
  ${props =>
    props.$full &&
    css`
      grid-column: span 8;
    `}
`

export const Card = styled.article`
  ${Half}
  ${SixEights}
  ${SevenEights}
  ${Full}

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
