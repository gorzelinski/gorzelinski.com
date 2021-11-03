import styled, { css } from "styled-components"

import { marginReset, marginTop } from "../utils"
import { grid } from "../grid"

export const Footer = styled.footer`
  ${grid}
  ${marginTop}
  ${marginReset}

  ${props =>
    props.$border &&
    css`
      border-top: 1px solid ${props => props.theme.color.surface.shade200};
      padding-top: calc(${props => props.theme.space.m} - 1px);
    `}
`
