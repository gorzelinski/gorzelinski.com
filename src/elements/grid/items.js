import { css } from "styled-components"

export const span2 = css`
  ${props =>
    props.$span2 &&
    css`
      grid-column: span 2;
    `}
`

export const span3 = css`
  ${props =>
    props.$span3 &&
    css`
      grid-column: span 3;
    `}
`

export const span4 = css`
  ${props =>
    props.$span4 &&
    css`
      grid-column: span 4;
    `}
`

export const full = css`
  ${props =>
    props.$full &&
    css`
      grid-column: 1 / -1;
    `}
`
