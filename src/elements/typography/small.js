import styled, { css } from "styled-components"

import { marginReset, media } from "../utils"
import { smallSize, tinySize } from "./sizes"

export const meta = css`
  font-family: ${props => props.theme.font.family.heading};
  font-weight: ${props => props.theme.font.weight.regular};
  color: ${props => props.theme.color.text.shade500};
`

export const Small = styled.small`
  ${meta}
  ${tinySize}
  ${marginReset}

  ${media.mobile`
    ${smallSize}
  `}
  
  display: block;
  margin-top: ${props => props.theme.space.s};
  margin-bottom: ${props => props.theme.space.xs};
`

export const Figcaption = styled.figcaption`
  ${meta}
  ${tinySize}
  ${marginReset}

  ${media.mobile`
    ${smallSize}
  `}
  
  display: block;
  margin-top: ${props => props.theme.space.s};
`
