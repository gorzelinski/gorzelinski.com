import styled, { css } from "styled-components"

import { media } from "../utils"

export const Header = styled.header`
  ${props =>
    props.$section &&
    css`
      width: 100%;
      grid-column: 1 / -1;
      display: flex;
      flex-direction: column;
      gap: ${props => props.theme.space.xs};

      & > *:nth-child(n) {
        align-self: stretch;
      }

      & > *:nth-child(2n) {
        align-self: flex-end;
      }

      ${media.tablet`
        align-items: baseline;
        flex-direction: row;
        justify-content: space-between;

        & > *:nth-child(n) {
          align-self: auto;
        }

        & > *:nth-child(2n) {
          align-self: auto;
        }
      `}
    `}
`
