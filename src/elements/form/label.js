import styled, { css } from "styled-components"

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
