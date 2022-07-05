import styled, { css } from "styled-components"

import { border, marginTop } from "../utils"
import { grid } from "../grid"

export const Footer = styled.footer`
  ${grid}
  ${marginTop}

  ${props =>
    props.$border &&
    css`
      padding-top: calc(var(--space-40) - var(--space-00));
      ${border.top}
    `}
`
