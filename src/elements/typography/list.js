import styled, { css } from "styled-components"

import { media } from "../utils"
import { baseSize, headingXXS } from "./sizes"
import { body } from "./body"

export const list = css`
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  margin-bottom: var(--space-m);
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
  margin-bottom: var(--space-s);

  ${media.tablet`
    ${headingXXS}
  `}

  & > p {
    margin-bottom: var(--space-s);
  }
  & *:last-child {
    margin-bottom: 0;
  }
  & > ul {
    margin-left: var(--space-m);
    margin-top: var(--space-s);
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
