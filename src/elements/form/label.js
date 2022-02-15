import styled, { css } from "styled-components"

import { marginReset, media } from "../utils"
import { meta, paragraph } from "../typography"

export const Label = styled.label`
  ${meta}
  ${paragraph.tiny}
  ${marginReset}

  ${media.mobile`
    ${paragraph.small}
  `}
  
  display: block;
  ${props =>
    props.$hidden &&
    css`
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    `}
  margin-bottom: var(--space-xs);
`
