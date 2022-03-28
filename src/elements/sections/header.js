import styled, { css } from "styled-components"

import { media } from "../utils"

export const Header = styled.header`
  ${props => {
    switch (props.$type) {
      case "main":
        return css`
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
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
