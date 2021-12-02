import { Link as GatsbyLink } from "gatsby"
import styled, { css } from "styled-components"

import { outline } from "../effects"

export const link = css`
  color: var(--color-primary-base);
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color var(--duration-immediate) ease-out;
  &:hover,
  :focus {
    text-decoration-color: var(--color-primary-base);
    color: var(--color-primary-40);
  }
  &:visited {
    color: var(--color-primary-base);
  }
`

export const A = styled.a`
  ${outline}
  ${link}
`

export const Link = styled(GatsbyLink)`
  ${outline}
  ${link}
`
