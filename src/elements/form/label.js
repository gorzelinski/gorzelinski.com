import styled from "styled-components"

import { marginReset, media } from "../utils"
import { smallSize, tinySize } from "../typography/sizes"
import { meta } from "../typography"

export const Label = styled.label`
  ${meta}
  ${tinySize}
  ${marginReset}

  ${media.mobile`
    ${smallSize}
  `}
  
  display: block;
  margin-bottom: ${props => props.theme.space.xs};
`
