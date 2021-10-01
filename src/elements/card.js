import styled, { css } from "styled-components"

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
`
