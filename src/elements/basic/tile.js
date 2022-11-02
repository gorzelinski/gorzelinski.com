import styled from "styled-components"

import { span, heighten, justify } from "../grid"
import { textAlign } from "../typography"

export const Tile = styled.div`
  ${span}
  ${heighten}
  ${justify}
  ${textAlign}
  
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`
