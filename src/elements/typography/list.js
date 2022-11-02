import styled, { css } from "styled-components"

import { media } from "../utils"
import { heading, paragraph } from "./sizes"
import { body } from "./body"

export const list = css`
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  margin-bottom: var(--vertical-rhythm);
  list-style-position: inside;
`

export const listItem = css`
  ${body}
  ${paragraph.base}
  padding-left: 0;
  margin-bottom: var(--space-30);

  ${media.tablet`
    ${heading.xxs}
  `}

  &:last-child {
    margin-bottom: 0;
  }

  &::marker {
    color: var(--color-primary-base);
  }

  & > p {
    margin-bottom: var(--space-30);
  }

  & > ul {
    margin-left: var(--space-40);
    margin-top: var(--space-30);
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
