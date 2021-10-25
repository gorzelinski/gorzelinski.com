import styled from "styled-components"

import { marginReset, marginTop } from "../utils"
import { grid, subGrid } from "../grid"

export const Section = styled.section`
  ${grid}
  ${marginTop}
  ${marginReset}
  grid-column: 1 / -1;
`

export const Subsection = styled.section`
  ${subGrid}
`
