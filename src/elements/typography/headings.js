import styled, { css } from "styled-components"

import { marginReset, media, remToFloat } from "../utils"
import {
  baseSize,
  headingL,
  headingM,
  headingS,
  headingXL,
  headingXS,
  headingXXL,
  smallSize,
} from "./sizes"

export const headings = css`
  font-family: ${props => props.theme.font.family.heading};
  font-weight: ${props => props.theme.font.weight.medium};
  color: ${props => props.theme.color.text.base};
  margin-top: ${props => remToFloat(props.theme.font.height.base) * 2 + "rem"};
  margin-bottom: ${props => props.theme.font.height.base};
  ${marginReset}
`

export const H1 = styled.h1`
  ${headings}
  ${headingL}

  ${media.tablet`
    ${headingXL}
  `}

  ${media.desktop`
    ${headingXXL}
  `}
`

export const H2 = styled.h2`
  ${headings}
  ${headingM}

  ${media.tablet`
    ${headingL}
  `}

  ${media.desktop`
    ${headingXL}
  `}
`

export const H3 = styled.h3`
  ${headings}
  ${headingS}

  ${media.tablet`
    ${headingM}
  `}

  ${media.desktop`
    ${headingL}
  `}
`

export const H4 = styled.h4`
  ${headings}
  ${headingXS}

  ${media.tablet`
    ${headingS}
  `}

  ${media.desktop`
    ${headingM}
  `}
`

export const H5 = styled.h5`
  ${headings}
  ${baseSize}

  ${media.tablet`
    ${headingXS}
  `}

  ${media.desktop`
    ${headingS}
  `}
`

export const H6 = styled.h6`
  ${headings}
  ${smallSize}

  ${media.tablet`
    ${baseSize}
  `}

  ${media.desktop`
    ${headingXS}
  `}
`
