import { css } from "styled-components"

export const marginReset = css`
  ${props =>
    props.$top &&
    css`
      margin-top: 0;
    `}

  ${props =>
    props.$bottom &&
    css`
      margin-bottom: 0;
    `}
`
