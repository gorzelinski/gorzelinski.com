import styled, { css } from "styled-components"

import { media } from "../utils"
import { paragraph, heading } from "./sizes"

export const headings = css`
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-00);
  margin-top: calc(var(--vertical-rhythm) * 2);
  margin-bottom: var(--vertical-rhythm);
`

const responsiveHeading = baseSize => {
  const index = Object.keys(heading).indexOf(baseSize)
  const sizes = Object.values(heading)
  return css`
    ${sizes[index]}

    ${media.tablet`
      ${sizes[index + 1]}
    `}

    ${media.desktop`
      ${sizes[index + 2]}
    `}
  `
}

export const H1 = styled.h1`
  ${headings}

  ${props =>
    props.$decorative ? responsiveHeading("xl") : responsiveHeading("l")}
`

export const H2 = styled.h2`
  ${headings}
  ${responsiveHeading("m")}
`

export const H3 = styled.h3`
  ${headings}
  ${responsiveHeading("s")}
`

export const H4 = styled.h4`
  ${headings}
  ${responsiveHeading("xs")}
`

export const H5 = styled.h5`
  ${headings}
  ${responsiveHeading("xxs")}
`

export const H6 = styled.h6`
  ${headings}
  ${paragraph.base}

  ${media.tablet`
    ${heading.xxs}
  `}

  ${media.desktop`
    ${heading.xs}
  `}
`
