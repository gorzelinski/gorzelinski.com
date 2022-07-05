import styled, { css } from "styled-components"

import { border, media } from "./utils"
import { span } from "./grid"

export const Navigation = styled.nav.attrs(props => ({
  className: props.$direction,
}))`
  ${span}
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-20);

  ${media.desktop`
    gap: var(--space-30);
  `}

  ${props => {
    switch (props.$align) {
      case "left":
        return css`
          margin-left: calc(-1 * var(--space-20));
        `
      case "right":
        return css`
          margin-right: calc(-1 * var(--space-20));
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
      background-color: inherit;
      padding: calc(var(--space-20) - var(--space-00)) var(--space-20)
        var(--space-20);
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      justify-content: space-evenly;
      transition: bottom var(--duration-immediate) ease-out,
        border-color var(--duration-natural) ease-out;

      ${media.tablet`
        background-color: transparent;
        border-top: 0;
        padding: 0;
        position: static;
        z-index: 0;
        justify-content: flex-end;
      `}

      &.down {
        bottom: calc(-1 * var(--nav-mobile-height));
      }
    `}

  ${props =>
    props.$helper &&
    css`
      width: 100%;
      justify-content: space-between;

      ${media.mobile`
        width: auto;
        justify-content: start;
      `}
    `}

  & > p {
    margin-right: var(--space-20);
  }
`
