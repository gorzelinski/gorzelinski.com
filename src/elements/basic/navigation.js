import styled, { css } from "styled-components"

import { border, media } from "../utils"
import { span } from "../grid"

export const Navigation = styled.nav.attrs(props => ({
  className: props.$direction,
}))`
  ${span}
  --width: auto;
  --margin: 0;
  --display: inline-flex;
  --flex-wrap: wrap;
  --justify-content: start;
  --align-items: center;
  --gap: var(--space-20);

  width: var(--width);
  margin: var(--margin);
  display: var(--display);
  flex-wrap: var(--flex-wrap);
  justify-content: var(--justify-content);
  align-items: var(--align-items);
  gap: var(--gap);

  ${media.desktop`
    --gap: var(--space-30);
  `}

  & > p {
    margin-right: var(--space-20);
  }

  ${props => {
    switch (props.$align) {
      case "left":
        return css`
          --margin: 0 0 0 calc(-1 * var(--space-20));
        `
      case "right":
        return css`
          --margin: 0 calc(-1 * var(--space-20)) 0 0;
        `
      default:
        return css`
          --margin: 0;
        `
    }
  }}

  ${props =>
    props.$main &&
    css`
      ${border.top}
      --justify-content: space-evenly;
      --bottom: 0;
      --padding: calc(var(--space-20) - var(--space-00)) var(--space-20)
        var(--space-20);
      --z-index: 100;
      --position: fixed;

      padding: var(--padding);
      z-index: var(--z-index);
      position: var(--position);
      bottom: var(--bottom);
      left: 0;
      right: 0;
      background-color: inherit;
      transition: bottom var(--duration-immediate) ease-out,
        border-color var(--duration-natural) ease-out;

      &.down {
        --bottom: calc(-1 * var(--nav-mobile-height));
      }

      ${media.tablet`
        --justify-content: end;
        --position: static;
        --padding: 0;
        --z-index: 0;

        background-color: transparent;
        border-top: 0;
      `}
    `}

  ${props =>
    props.$helper &&
    css`
      --width: 100%;
      --justify-content: space-between;

      ${media.mobile`
        --width: auto;
        --justify-content: start;
      `}
    `}
`
