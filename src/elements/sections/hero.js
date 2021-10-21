import styled from "styled-components"

import { Section } from "./section"

export const Hero = styled(Section)`
  & > * {
    max-width: calc(${props => props.theme.space.xxxl} * 1.618 * 1.618);
  }
`
