import styled, { css } from "styled-components"
import { media } from "../utils"

export const Figure = styled.figure`
  margin: 0;
  background-color: ${props => props.theme.color.surface.base};
  grid-column: 1 / 9;
  /* check if that is the best solution */
  display: flex;
  justify-content: center;
  align-content: center;

  ${props =>
    props.$half &&
    css`
      ${media.tablet`
        grid-column: span 4;
      `}
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
`
