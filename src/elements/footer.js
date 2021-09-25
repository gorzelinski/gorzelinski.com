import styled, { css } from "styled-components"

import { media } from "./utils"
import { grid } from "./grid"

export const Footer = styled.footer`
  /* delete padding */
  ${grid}
  padding: 0;
  margin-top: ${props => props.theme.space.l};
  border-top: ${props => props.theme.space.xxs} solid
    ${props => props.theme.color.surface.shade300};

  ${media.tablet`
    margin-top: ${props => props.theme.space.xl};
  `}

  ${props =>
    props.$lower &&
    css`
      margin-top: ${props => props.theme.space.xl};

      ${media.tablet`
        margin-top: ${props => props.theme.space.xxl};
      `}
    `}
`
