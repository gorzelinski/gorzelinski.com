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
      `}
    `}
`

export const Card = styled.article`
  ${Half}
  ${SixEights}
`
