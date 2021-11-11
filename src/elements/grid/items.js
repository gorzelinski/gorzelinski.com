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

export const spanAll = css`
  ${props =>
    props.$spanAll &&
    css`
      grid-column: 1 / -1;
    `}
`

export const heighten2 = css`
  ${props =>
    props.$heighten2 &&
    css`
      grid-row: span 2;
    `}
`

export const heighten3 = css`
  ${props =>
    props.$heighten3 &&
    css`
      grid-row: span 3;
    `}
`

export const heighten4 = css`
  ${props =>
    props.$heighten4 &&
    css`
      grid-row: span 4;
    `}
`

export const heightenAll = css`
  ${props =>
    props.$heighten &&
    css`
      grid-row: 1 / -1;
    `}
`
