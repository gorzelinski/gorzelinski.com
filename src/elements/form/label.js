import styled from "styled-components"

import { media, visuallyHidden } from "../utils"
import { meta, paragraph } from "../typography"

export const Label = styled.label`
  ${meta}
  ${paragraph.tiny}

  ${media.mobile`
    ${paragraph.small}
  `}
  
  display: block;
  ${props => props.$hidden && visuallyHidden}
  margin-bottom: var(--space-20);
`
