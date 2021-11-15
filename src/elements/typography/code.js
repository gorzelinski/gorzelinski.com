import styled, { css } from "styled-components"

import { baseSize } from "./sizes"

export const code = css`
  ${baseSize}
  font-family: ${props => props.theme.font.family.code};
`

export const InlineCode = styled.code`
  ${code}
  color: ${props => props.theme.color.text.shade200};
  background-color: ${props => props.theme.color.surface.shade200};
  border-radius: ${props => props.theme.space.xs};
  padding: ${props => props.theme.space.xxs};
`

export const BlockCode = styled.pre`
  ${code}
  padding: ${props => props.theme.font.height.base};
  border-radius: ${props => props.theme.space.s};
  box-shadow: ${props => props.theme.shadow.neumorphism};
  overflow-x: auto;
`
