import styled from "styled-components"

import { media } from "../utils"

export const Blockquote = styled.blockquote`
  padding-left: calc(var(--wrapper-padding) / 2);
  margin: var(--vertical-rhythm) calc(var(--overflow-wrapper) / 2);
  border-left: var(--space-xxs) solid var(--color-primary-base);

  ${media.tablet`
    --overflow-wrapper: 0px;
    --wrapper-padding: var(--space-m);
  `}

  & > p {
    font-style: italic;
    font-size: var(--font-size-xs);
    line-height: var(--font-height-s);
    color: var(--color-gray-40);

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
