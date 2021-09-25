import { css } from "styled-components"

export const PrimaryColorStates = css`
  color: ${props => props.theme.color.primary.base};

  &:hover {
    color: ${props => props.theme.color.primary.shade200};
  }
  &:focus,
  :focus-visible {
    color: ${props => props.theme.color.primary.shade300};
  }
  &:active {
    color: ${props => props.theme.color.primary.shade500};
  }
`

export const TextColorStates = css`
  color: ${props => props.theme.color.text.shade500};

  &:hover {
    color: ${props => props.theme.color.text.shade400};
  }
  &:focus,
  :focus-visible {
    color: ${props => props.theme.color.text.shade300};
  }
  &:active {
    color: ${props => props.theme.color.text.base};
  }
`
