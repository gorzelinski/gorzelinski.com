import styled, { css } from "styled-components"

import { marginReset, media } from "../utils"
import { paragraph } from "./sizes"

export const meta = css`
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-regular);
  color: var(--color-gray-base);
`

export const Small = styled.small`
  ${meta}
  ${paragraph.tiny}
  ${marginReset}

  ${media.mobile`
    ${paragraph.small}
  `}
  
  display: block;
  margin-top: var(--space-xs);
  margin-bottom: var(--space-xs);
`

export const Figcaption = styled.figcaption`
  ${meta}
  ${paragraph.tiny}
  ${marginReset}

  ${media.mobile`
    ${paragraph.small}
  `}

  ${props =>
    props.$center &&
    css`
      text-align: center;
    `}
  
  display: block;
  margin-top: var(--space-s);
`
