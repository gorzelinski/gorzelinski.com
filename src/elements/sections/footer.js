import styled from "styled-components"

import { marginReset, marginTop } from "../utils"
import { grid } from "../grid"

export const Footer = styled.footer`
  /* delete padding */
  ${grid}
  ${marginTop}
  ${marginReset}

  padding: 0;
`
