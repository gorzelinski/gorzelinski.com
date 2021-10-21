import styled, { css } from "styled-components"

import { full, span2, span3, span4 } from "./grid"

export const Card = styled.article`
  ${span2}
  ${span3}
  ${span4}
  ${full}

  /* change to relative */
  max-width: 768px;

  ${props =>
    props.$center &&
    css`
      justify-self: center;
    `}

  ${props =>
    props.$textCenter &&
    css`
      text-align: center;
    `}
`
