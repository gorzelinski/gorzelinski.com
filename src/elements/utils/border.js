import { css } from "styled-components"

export const border = css`
  border-radius: ${props => props.theme.space.s};
  border: ${props => props.theme.space.xxxs} solid
    ${props => props.theme.color.surface.shade200};
`

export const borderTop = css`
  border-top: ${props => props.theme.space.xxxs} solid
    ${props => props.theme.color.surface.shade200};
`
