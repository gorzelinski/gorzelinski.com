import styled, { css } from "styled-components"

import { spanAll, span2 } from "./grid"

export const Figure = styled.figure`
  ${span2}
  ${spanAll}
  margin: 0;

  /* check if it's the best solution */
  & > div {
    height: 100%;
  }

  ${props =>
    props.$square &&
    css`
      aspect-ratio: 1;
    `}

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

  ${props =>
    props.$meta &&
    css`
      aspect-ratio: 1.91;
    `}
`
