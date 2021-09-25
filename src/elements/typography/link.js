import styled, { css } from "styled-components"

import { outline } from "../effects"

export const link = css`
  color: ${props => props.theme.color.primary.base};
  cursor: pointer;
  text-decoration: none;
  &:hover,
  :focus {
    color: ${props => props.theme.color.primary.shade200};
  }
`

export const A = styled.a`
  ${outline}
  ${link}
  text-decoration: underline;
  &:visited {
    color: ${props => props.theme.color.primary.shade500};
  }
  &:hover,
  :focus {
    text-decoration: none;
  }
`
