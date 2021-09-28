import styled, { css } from "styled-components"

import { remToFloat } from "../utils"
import { ui } from "../typography"

export const border = css`
  border-radius: ${props => props.theme.space.xs};
  border-width: ${props => props.theme.space.xxs};
  border-style: solid;
  border-color: ${props => props.theme.color.surface.shade200};

  &:hover {
    border-color: ${props => props.theme.color.surface.shade300};
  }

  &:focus {
    border-color: ${props => props.theme.color.surface.shade400};
  }

  &:active {
    border-color: ${props => props.theme.color.surface.shade500};
  }
`

export const Input = styled.input`
  ${ui}
  ${border}
  color: ${props => props.theme.color.text.base};
  background-color: transparent;
  padding: ${props =>
    remToFloat(props.theme.space.xs) -
    remToFloat(props.theme.space.xxs) +
    "rem"};

  &::placeholder {
    color: ${props => props.theme.color.text.shade500};
  }

  ${props =>
    props.disabled &&
    css`
      background-color: ${props => props.theme.color.surface.base};

      &::placeholder {
        color: ${props => props.theme.color.surface.shade500};
      }
    `}
`