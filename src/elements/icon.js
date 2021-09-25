import styled, { css } from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"

import { PrimaryColorStates, TextColorStates, Outline } from "./effects"

export const Icon = styled.span`
  ${Outline}

  vertical-align: top;
  line-height: 0;
  display: inline-block;

  ${StyledIconBase} {
    cursor: pointer;
    width: ${props => props.theme.font.height.base};
    height: ${props => props.theme.font.height.base};
  }

  ${props =>
    props.$primary &&
    css`
      ${PrimaryColorStates}
    `}

  ${props =>
    props.$text &&
    css`
      ${TextColorStates}
    `}
`
