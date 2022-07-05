import styled from "styled-components"

import { media } from "../utils"

export const Blockquote = styled.blockquote`
  padding-left: calc(var(--wrapper-padding) / 2);
  margin: var(--vertical-rhythm) calc(var(--overflow-wrapper) / 2);
  border-left: var(--space-10) solid var(--color-primary-base);

  ${media.tablet`
    --overflow-wrapper: 0px;
    --wrapper-padding: var(--space-40);
  `}

  & > p {
    font-style: italic;
    font-size: var(--font-size-40);
    line-height: var(--font-height-50);
    color: var(--color-gray-40);

    ${media.tablet`
      font-size: var(--font-size-50);
      line-height: var(--font-height-60);
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
