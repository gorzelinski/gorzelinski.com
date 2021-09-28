import { css } from "styled-components"

import { media } from "../utils"

export const twoEights = css`
  ${props =>
    props.$twoEights &&
    css`
      grid-column: span 8;

      ${media.tablet`
      grid-column: span 2;
    `}
    `}
`

export const threeEights = css`
  ${props =>
    props.$threeEights &&
    css`
      grid-column: span 8;

      ${media.tablet`
        grid-column: span 3;
      `}
    `}
`

export const half = css`
  ${props =>
    props.$half &&
    css`
      grid-column: span 8;

      ${media.tablet`
        grid-column: span 4;
      `}
    `}
`

export const fiveEights = css`
  ${props =>
    props.$fiveEights &&
    css`
      grid-column: span 8;

      ${media.tablet`
        grid-column: span 5;
      `}
    `}
`

export const sixEights = css`
  ${props =>
    props.$sixEights &&
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

export const sevenEights = css`
  ${props =>
    props.$sevenEights &&
    css`
      grid-column: span 8;

      ${media.tablet`
        grid-column-start: 2;
        grid-column-end: span 7;
      `}
    `}
`

export const full = css`
  ${props =>
    props.$full &&
    css`
      grid-column: span 8;
    `}
`