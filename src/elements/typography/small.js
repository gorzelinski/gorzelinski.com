import styled, { css } from "styled-components"

import { marginReset, media, remToFloat } from "../utils"
import { smallSize, tinySize } from "./sizes"

export const meta = css`
  font-family: ${props => props.theme.font.family.heading};
  font-weight: ${props => props.theme.font.weight.regular};
  color: ${props => props.theme.color.text.shade500};
`

export const Small = styled.small`
  ${meta}
  ${tinySize}
  display: block;
  margin-top: ${props => props.theme.space.s};
  margin-bottom: ${props =>
    "-" +
    (remToFloat(props.theme.font.height.base) * 2 -
      remToFloat(props.theme.space.xs)) +
    "rem"};

  ${marginReset}

  ${media.mobile`
    ${smallSize}
  `}
`

export const Figcaption = styled(Small)`
  margin-bottom: 0;
`
