import styled, { css } from "styled-components"

import {
  spanAll,
  span2,
  span3,
  span4,
  heighten2,
  heighten3,
  heighten4,
  heightenAll,
} from "./grid"

export const Tile = styled.div`
  ${span2}
  ${span3}
  ${span4}
  ${spanAll}
  ${heighten2}
  ${heighten3}
  ${heighten4}
  ${heightenAll}

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
