import styled, { css } from "styled-components"

import { marginReset, media } from "../utils"
import { smallSize, tinySize } from "./sizes"

export const meta = css`
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-shade500);
`

export const Small = styled.small`
  ${meta}
  ${tinySize}
  ${marginReset}

  ${media.mobile`
    ${smallSize}
  `}
  
  display: block;
  margin-top: var(--space-s);
  margin-bottom: var(--space-xs);
`

export const Figcaption = styled.figcaption`
  ${meta}
  ${tinySize}
  ${marginReset}

  ${media.mobile`
    ${smallSize}
  `}
  
  display: block;
  margin-top: var(--space-s);
`
