import styled from "styled-components"

import { media } from "../utils"

export const Blockquote = styled.blockquote`
  padding: 0 0 0 var(--space-s);
  margin: var(--font-height-base) var(--space-m) var(--font-height-base) 0;
  border-left: var(--space-xxs) solid var(--color-primary-base);

  ${media.tablet`
    padding-left: var(--font-height-base);
    margin: var(--font-height-base) var(--font-height-base) var(--font-height-base) calc((var(--space-xxs) + var(--font-height-base)) * -1);
  `}

  & > p {
    font-style: italic;
    font-size: var(--font-size-xs);
    line-height: var(--font-height-s);
    color: var(--color-text-shade400);

    ${media.tablet`
      font-size: var(--font-size-s);
      line-height: var(--font-height-m);
    `}
  }

  & > :last-child {
    margin-bottom: 0;
  }

  & > ul,
  li {
    list-style-position: inside;
  }
`
