import styled, { css } from "styled-components"

import { media } from "../utils"

export const Header = styled.header.attrs(props => ({
  className: props.$direction === "up" ? "visible" : "",
}))`
  ${props => {
    switch (props.$type) {
      case "main":
        return css`
          --padding: var(--space-xs) var(--space-s);
          --margin: 0 calc(-1 * var(--space-s));
          margin: var(--margin);
          padding: var(--padding);
          background-color: var(--color-background);
          z-index: 100;
          position: sticky;
          left: 0;
          top: calc(-1 * (var(--top-nav-height) + 2 * var(--space-xs)));
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          transition: top var(--duration-immediate) ease-out;

          ${media.tiny`
            --padding: var(--space-xs) var(--space-m);
            --margin: 0 calc(-1 * var(--space-m));
          `}

          ${media.tablet`
            top: calc(-1 * (var(--top-nav-height) + 2 * var(--space-s)));
            --padding: var(--space-s) var(--space-m);
            --margin: 0 calc(-1 * var(--space-m));
          `}

          &.visible {
            top: 0;
          }
        `
      case "section":
        return css`
          width: 100%;
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);

          & > *:first-child {
            align-self: stretch;
          }

          & > *:last-child {
            align-self: flex-end;
          }

          ${media.mobile`
            & > *:first-child {
              align-self: flex-start;
            }
          `}

          ${media.tablet`
            align-items: baseline;
            flex-direction: row;
            justify-content: space-between;

            & > *:first-child {
              align-self: auto;
            }

            & > *:last-child {
              align-self: auto;
            }
          `}
        `
      default:
        return css``
    }
  }}
`
