import styled, { css } from "styled-components"

import { media } from "../utils"
import { Grid } from "./section"

export const Footer = styled.footer`
  /* delete padding */
  ${Grid}
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
