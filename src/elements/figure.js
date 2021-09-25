import styled, { css } from "styled-components"

import { half, twoEights, threeEights, full } from "./grid"

export const Figure = styled.figure`
  ${twoEights}
  ${threeEights}
  ${half}
  ${full}
  margin: 0;

  /* check if it's the best solution */
  & > div {
    height: 100%;
  }

  ${props =>
    props.$golden &&
    css`
      aspect-ratio: 1.618;
    `}

  ${props =>
    props.$normal &&
    css`
      aspect-ratio: 16 / 9;
    `}

  ${props =>
    props.$portrait &&
    css`
      aspect-ratio: 2 / 3;
    `}

  ${props =>
    props.$wide &&
    css`
      aspect-ratio: 21 / 9;
    `}
`
