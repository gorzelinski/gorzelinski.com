import styled, { css } from "styled-components"
import { Half } from "./card"

export const Figure = styled.figure`
  ${Half}
  margin: 0;
  background-color: ${props => props.theme.color.surface.base};
  /* check if that is the best solution */
  display: flex;
  justify-content: center;
  align-content: center;

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
