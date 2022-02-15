import styled, { css } from "styled-components"

import { border, media } from "./utils"
import { span } from "./grid"

export const Navigation = styled.nav`
  ${span}
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-xs);

  ${media.tablet`
    gap: var(--space-s);
  `}

  ${props => {
    switch (props.$align) {
      case "left":
        return css`
          margin-left: calc(-1 * var(--space-xs));
        `
      case "right":
        return css`
          margin-right: calc(-1 * var(--space-xs));
        `
      default:
        return css`
          margin: 0;
        `
    }
  }}

  ${props =>
    props.$flex &&
    css`
      display: flex;
    `}

  ${props =>
    props.$spaceBetween &&
    css`
      justify-content: space-between;
    `}
  
  ${props =>
    props.$main &&
    css`
      ${border.top}
      background-color: var(--color-background);
      padding: calc(var(--space-xs) - var(--space-xxxs)) var(--space-xs)
        var(--space-xs);
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      justify-content: space-evenly;

      ${media.mobile`
        background-color: transparent;
        border-top: 0;
        padding: 0;
        position: static;
        z-index: 0;
        justify-content: flex-end;
      `}
    `}

  & > p {
    margin-right: var(--space-xs);
  }
`
