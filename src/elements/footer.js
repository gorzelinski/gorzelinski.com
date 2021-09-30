import styled, { css } from "styled-components"

import { media } from "./utils"
import { grid } from "./grid"

export const Footer = styled.footer`
  /* delete padding */
  ${grid}
  padding: 0;

  ${props =>
    props.$lower &&
    css`
      margin-top: ${props => props.theme.space.xl};

      ${media.tablet`
        margin-top: ${props => props.theme.space.xxl};
      `}
    `}
`
