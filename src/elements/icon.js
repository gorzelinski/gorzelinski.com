import styled, { css } from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"
import { PrimaryColorStates, TextColorStates } from "./button"

export const Icon = styled.span`
  display: inline-block;
  width: ${props => props.theme.font.height.base};
  height: ${props => props.theme.font.height.base};
  ${StyledIconBase} {
    cursor: pointer;
  }

  ${props =>
    props.primary &&
    css`
      ${PrimaryColorStates}
    `}

  ${props =>
    props.text &&
    css`
      ${TextColorStates}
    `}
`
