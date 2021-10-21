import styled, { css } from "styled-components"

import { full, span2 } from "./grid"

export const Figure = styled.figure`
  ${span2}
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
