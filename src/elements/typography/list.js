import styled, { css } from "styled-components"

import { media } from "../utils"
import { baseSize } from "./sizes"
import { body } from "./body"

export const list = css`
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  margin-bottom: ${props => props.theme.space.m};
  list-style-position: inside;
  list-style-image: none;

  ${media.tablet`
    list-style-position: outside;
  `}
`

export const listItem = css`
  ${body}
  ${baseSize}
  padding-left: 0;
  margin-bottom: ${props => props.theme.space.s};

  & > p {
    margin-bottom: ${props => props.theme.space.s};
  }
  & *:last-child {
    margin-bottom: 0;
  }
  & > ul {
    margin-left: ${props => props.theme.space.m};
    margin-top: ${props => props.theme.space.s};
  }
`

export const Ul = styled.ul`
  ${list}
`

export const Ol = styled.ol`
  ${list}
`

export const Li = styled.li`
  ${listItem}
`
