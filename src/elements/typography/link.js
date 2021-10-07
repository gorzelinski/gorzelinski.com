import { Link as GatsbyLink } from "gatsby"
import styled, { css } from "styled-components"

import { outline } from "../effects"

export const link = css`
  color: ${props => props.theme.color.primary.base};
  cursor: pointer;
  text-decoration: none;
  &:hover,
  :focus {
    color: ${props => props.theme.color.primary.shade200};
  }
`

export const A = styled.a`
  ${outline}
  ${link}
  text-decoration: underline;
  &:visited {
    color: ${props => props.theme.color.primary.base};
  }
  &:hover,
  :focus {
    text-decoration: none;
  }
`

export const Link = styled(GatsbyLink)`
  ${outline}
  ${link}
  text-decoration: underline;
  &:visited {
    color: ${props => props.theme.color.primary.base};
  }
  &:hover,
  :focus {
    text-decoration: none;
  }
`
