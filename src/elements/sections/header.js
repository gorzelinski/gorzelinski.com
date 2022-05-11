import styled, { css } from "styled-components"

import { border, media } from "../utils"

export const Header = styled.header.attrs(props => ({
  className: props.$direction,
}))`
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  ${props => {
    switch (props.$type) {
      case "main":
        return css`
          --padding: var(--space-xs) var(--space-s)
            calc(var(--space-xs) - var(--space-xxxs));
          --margin: 0 calc(-1 * var(--space-s));
          margin: var(--margin);
          padding: var(--padding);
          border-bottom: var(--space-xxxs) solid var(--color-background);
          background-color: var(--color-background);
          z-index: 100;
          position: sticky;
          left: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          transition: top var(--duration-immediate) ease-out;

          ${media.tiny`
            --padding: var(--space-xs) var(--space-m) calc(var(--space-xs) - var(--space-xxxs));
            --margin: 0 calc(-1 * var(--space-m));
          `}

          ${media.tablet`
            --padding: var(--space-s) var(--space-m) calc(var(--space-s) - var(--space-xxxs));
            --margin: 0 calc(-1 * var(--space-m));
          `}

          &.down {
            top: calc(-1 * (var(--top-nav-height) + 2 * var(--space-s)));
          }

          &.up {
            ${border.bottom}
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

          & > *:nth-child(1) {
            align-self: flex-start;
          }

          & > *:nth-child(2) {
            align-self: flex-end;
          }

          & > :is(h1, h2, h3) {
            margin: 0;
          }

          ${media.tablet`
            align-items: baseline;
            flex-direction: row;
            justify-content: space-between;

            & > *:nth-child(1) {
              align-self: auto;
            }

            & > *:nth-child(2) {
              align-self: auto;
            }
          `}
        `
      default:
        return css``
    }
  }}
`
