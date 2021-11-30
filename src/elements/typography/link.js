import { Link as GatsbyLink } from "gatsby"
import styled, { css } from "styled-components"

import { outline } from "../effects"

export const link = css`
  color: var(--color-primary-base);
  cursor: pointer;
  text-decoration: none;
  text-decoration-color: var(--color-primary-base);
  transition: text-decoration-color var(--duration-immediate) ease-out;
  &:hover,
  :focus {
    text-decoration-color: transparent;
    color: var(--color-primary-shade200);
  }
  &:visited {
    color: var(--color-primary-base);
  }
`

export const A = styled.a`
  ${outline}
  ${link}
  text-decoration: underline;
`

export const Link = styled(GatsbyLink)`
  ${outline}
  ${link}
  text-decoration: underline;
`
