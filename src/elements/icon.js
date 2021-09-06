import styled, { css } from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { PrimaryColorStates, TextColorStates, Outline } from "./button"

export const Icon = styled.span`
  ${Outline}

  vertical-align: top;
  line-height: 0;
  display: inline-block;
  width: ${props => props.theme.font.height.base};
  height: ${props => props.theme.font.height.base};
  ${StyledIconBase} {
    cursor: pointer;
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
