import styled, { css } from "styled-components"

import { full, span2, span3, span4 } from "./grid"

// think about alignment - content/itself
export const Card = styled.article`
  ${span2}
  ${span3}
  ${span4}
  ${full}

  max-width: calc(${props => props.theme.space.xxxl} * 1.618 * 1.618);

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
