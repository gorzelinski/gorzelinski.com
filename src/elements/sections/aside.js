import styled, { css } from "styled-components"

import { marginTop } from "../utils"
import { article, grid } from "../grid"

export const Aside = styled.aside`
  ${marginTop}
  /* don't know if the grid is necessary */
  ${grid}

  ${props =>
    props.$article &&
    css`
      ${article}

      & > * {
        grid-column: 2;
      }
    `}

  ${props =>
    props.$border &&
    css`
      padding: ${props => props.theme.space.l} 0;
      border-top: ${props => props.theme.space.xxs} solid
        ${props => props.theme.color.surface.shade200};
      border-bottom: ${props => props.theme.space.xxs} solid
        ${props => props.theme.color.surface.shade200};
    `}
`
