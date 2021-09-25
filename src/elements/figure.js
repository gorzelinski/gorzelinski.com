import styled, { css } from "styled-components"

import { media } from "./utils"
import { Meta, TinySize, SmallSize } from "./typography"
import { half, twoEights, threeEights, full } from "./card"

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

export const Figcaption = styled.figcaption`
  ${Meta}
  ${TinySize}
  display: block;
  margin-top: ${props => props.theme.space.s};

  ${media.mobile`
    ${SmallSize}
  `}
`
