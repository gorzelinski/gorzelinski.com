import styled from "styled-components"

import { Section } from "./section"

export const Hero = styled(Section)`
  /* change to relative */
  & > * {
    max-width: 768px;
  }
`
