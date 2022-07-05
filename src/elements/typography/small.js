import styled, { css } from "styled-components"

import { media } from "../utils"
import { textAlign } from "./alignment"
import { paragraph } from "./sizes"

export const meta = css`
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-regular);
  color: var(--color-gray-base);
`

export const Small = styled.small`
  ${meta}
  ${paragraph.tiny}

  ${media.mobile`
    ${paragraph.small}
  `}

  & + :is(h1, h2, h3, h4, h5, h6) {
    margin-top: 0;
  }

  display: block;
  margin-top: var(--space-20);
  margin-bottom: var(--space-20);
`

export const Figcaption = styled.figcaption`
  ${meta}
  ${paragraph.tiny}
  ${textAlign}

  ${media.mobile`
    ${paragraph.small}
  `}
  
  font-style: italic;
  display: block;
  margin-top: var(--space-30);
`
