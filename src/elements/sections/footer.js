import styled, { css } from "styled-components"

import { borderTop, marginReset, marginTop } from "../utils"
import { grid } from "../grid"

export const Footer = styled.footer`
  ${grid}
  ${marginTop}
  ${marginReset}

  ${props =>
    props.$border &&
    css`
      ${borderTop}
    `}
`
