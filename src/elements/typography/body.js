import styled, { css } from "styled-components"

import { media } from "../utils"
import { baseSize, smallSize, headingXS } from "./sizes"

export const body = css`
  font-family: ${props => props.theme.font.family.body};
  font-weight: ${props => props.theme.font.weight.regular};
  color: ${props => props.theme.color.text.shade300};
`

export const ui = css`
  ${baseSize}
  font-family: ${props => props.theme.font.family.heading};
  font-weight: ${props => props.theme.font.weight.medium};
  letter-spacing: ${props => props.theme.font.spacing.wide};
  color: ${props => props.theme.color.text.shade500};
  padding: 0;
  margin: 0;
`

export const P = styled.p`
  ${body}
  ${smallSize}
  padding: 0;
  margin: 0 0 ${props => props.theme.font.height.base} 0;

  ${media.mobile`
    ${baseSize}
  `}

  ${props =>
    props.$ui &&
    css`
      ${ui}
    `}

    ${props =>
    props.$lead &&
    css`
      color: ${props => props.theme.color.text.shade500};
      ${baseSize}

      ${media.mobile`
        ${headingXS}
      `}
    `}
`
