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
          --padding-vertical: var(--space-20);
          --padding: var(--padding-vertical) var(--wrapper-padding)
            calc(var(--padding-vertical) - var(--space-00));
          --margin: 0 var(--overflow-wrapper);
          --top: unset;

          z-index: 100;
          opacity: 0.95;
          position: sticky;
          top: var(--top);
          left: 0;
          border-bottom: var(--space-00) solid var(--color-background);
          margin: var(--margin);
          padding: var(--padding);
          background-color: var(--color-background);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          transition: top var(--duration-immediate) ease-out,
            background-color var(--duration-natural) ease-out,
            border-color var(--duration-natural) ease-out;

          ${media.tablet`
            --padding-vertical: var(--space-30);
          `}

          ${media.desktop`
            --wrapper-padding: var(--space-40);
            --overflow-wrapper: calc(-1 * var(--wrapper-padding));
          `}

          &.down {
            --top: calc(-1 * (var(--nav-top-height) + 2 * var(--space-30)));
          }

          &.up {
            ${border.bottom}
            --top: 0;
          }
        `
      case "section":
        return css`
          --flex-direction: column;

          width: 100%;
          grid-column: 1 / -1;
          display: flex;
          flex-direction: var(--flex-direction);
          gap: var(--space-20);

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
            --flex-direction: row;

            align-items: baseline;
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
