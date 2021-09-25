import { css } from "styled-components"

export const headingXXL = css`
  font-size: ${props => props.theme.font.size.xxl};
  line-height: ${props => props.theme.font.height.xxl};
  letter-spacing: ${props => props.theme.font.spacing.packed};
`

export const headingXL = css`
  font-size: ${props => props.theme.font.size.xl};
  line-height: ${props => props.theme.font.height.xl};
  letter-spacing: ${props => props.theme.font.spacing.packed};
`

export const headingL = css`
  font-size: ${props => props.theme.font.size.l};
  line-height: ${props => props.theme.font.height.l};
  letter-spacing: ${props => props.theme.font.spacing.packed};
`

export const headingM = css`
  font-size: ${props => props.theme.font.size.m};
  line-height: ${props => props.theme.font.height.m};
  letter-spacing: ${props => props.theme.font.spacing.narrow};
`

export const headingS = css`
  font-size: ${props => props.theme.font.size.s};
  line-height: ${props => props.theme.font.height.s};
  letter-spacing: ${props => props.theme.font.spacing.narrow};
`

export const headingXS = css`
  font-size: ${props => props.theme.font.size.xs};
  line-height: ${props => props.theme.font.height.xs};
  letter-spacing: ${props => props.theme.font.spacing.narrow};
`

export const baseSize = css`
  font-size: ${props => props.theme.font.size.base};
  line-height: ${props => props.theme.font.height.base};
`

export const smallSize = css`
  font-size: ${props => props.theme.font.size.small};
  line-height: ${props => props.theme.font.height.small};
`

export const tinySize = css`
  font-size: ${props => props.theme.font.size.tiny};
  line-height: ${props => props.theme.font.height.tiny};
`
