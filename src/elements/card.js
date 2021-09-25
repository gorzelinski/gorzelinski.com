import styled, { css } from "styled-components"

import { media } from "./utils"

export const TwoEights = css`
  ${props =>
    props.$twoeights &&
    css`
      grid-column: span 8;

      ${media.tablet`
      grid-column: span 2;
    `}
    `}
`

export const ThreeEights = css`
  ${props =>
    props.$threeeights &&
    css`
      grid-column: span 8;

      ${media.tablet`
        grid-column: span 3;
      `}
    `}
`

export const Half = css`
  ${props =>
    props.$half &&
    css`
      grid-column: span 8;

      ${media.tablet`
        grid-column: span 4;
      `}
    `}
`

export const FiveEights = css`
  ${props =>
    props.$fiveeights &&
    css`
      grid-column: span 8;

      ${media.tablet`
        grid-column: span 5;
      `}
    `}
`

export const SixEights = css`
  ${props =>
    props.$sixeights &&
    css`
      grid-column: span 8;

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
  ${props =>
    props.$seveneights &&
    css`
      grid-column: span 8;

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
  ${TwoEights}
  ${Half}
  ${FiveEights}
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
