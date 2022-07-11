import { LocalizedLink } from "gatsby-theme-i18n"
import styled, { css } from "styled-components"

import { outline } from "../effects"

export const link = css`
  color: var(--color-primary-base);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: var(--space-10);
  text-decoration-thickness: var(--space-10);
  text-decoration-color: transparent;
  transition: text-decoration-color var(--duration-immediate) ease-out;
  &:is(:hover, :focus) {
    text-decoration-color: var(--color-primary-base);
  }
  &:visited {
    color: var(--color-primary-base);
  }
`

export const A = styled.a`
  ${outline}
  ${link}
`

export const Link = styled(LocalizedLink)`
  ${outline}
  ${link}
`
