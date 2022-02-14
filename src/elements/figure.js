import styled, { css } from "styled-components"

import { span } from "./grid"

export const Figure = styled.figure`
  ${span}
  margin: 0;

  /*TODO: check if it's the best solution */
  & > div {
    height: 100%;
  }

  ${props => {
    switch (props.$aspectRatio) {
      case "square":
        return css`
          aspect-ratio: 1;
        `
      case "golden":
        return css`
          aspect-ratio: 1.618;
        `
      case "normal":
        return css`
          aspect-ratio: 16 / 9;
        `
      case "portrait":
        return css`
          aspect-ratio: 2 / 3;
        `
      case "wide":
        return css`
          aspect-ratio: 21 / 9;
        `
      case "meta":
        return css`
          aspect-ratio: 1.91;
        `
      default:
        return css`
          aspect-ratio: inherit;
        `
    }
  }}
`
