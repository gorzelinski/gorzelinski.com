import { css } from "styled-components"

export const outline = css`
  &:focus {
    outline: ${props => props.theme.space.xxs} solid
      ${props => props.theme.color.primary.base};
    outline-offset: ${props => props.theme.space.xxs};
  }
  &:focus:not(:focus-visible) {
    outline: 0;
  }
  &:focus-visible {
    outline: ${props => props.theme.space.xxs} solid
      ${props => props.theme.color.primary.base};
    outline-offset: ${props => props.theme.space.xxs};
  }
`
