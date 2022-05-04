import styled, { css } from "styled-components"
import { marginReset, media } from "../utils"

import { heading, paragraph } from "./sizes"

export const body = css`
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-regular);
  color: var(--color-gray-30);
`

export const ui = css`
  ${paragraph.base}
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--font-spacing-wide);
  color: var(--color-gray-base);
  padding: 0;
  margin: 0;
`

export const P = styled.p`
  padding: 0;
  ${marginReset}

  ${props => {
    switch (props.$type) {
      case "ui":
        return css`
          ${ui}

          ${media.tablet`
            ${heading.xxs}
              margin: 0;
            `}
        `
      case "lead":
        return css`
          ${body}
          color: var(--color-gray-base);
          margin: 0 0 var(--font-height-base) 0;
          ${heading.xxs}

          ${media.tablet`
            ${heading.xs}
            margin: 0 0 var(--font-height-xxs) 0;
          `}
        `
      default:
        return css`
          ${body}
          ${paragraph.base}
          margin: 0 0 var(--font-height-base) 0;

          ${media.tablet`
            ${heading.xxs}
            margin: 0 0 var(--font-height-xxs) 0;
          `}
        `
    }
  }}
`

export const Strong = styled.strong`
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-10);
`

export const Em = styled.em`
  font-style: italic;
`
