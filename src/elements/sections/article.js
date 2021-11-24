import styled from "styled-components"

import { marginTop, media } from "../utils"
import { article } from "../grid"

export const Article = styled.article`
  ${article}
  ${marginTop}

  & > * {
    grid-column: 2;
  }

  & > figure {
    grid-column: 1 / span 3;
    height: auto;
    margin: 0 calc(-1 * var(--space-s)) calc(2 * var(--font-height-base));

    ${media.tiny`
      margin: 0 calc(-1 * var(--space-m)) calc(2 * var(--font-height-base));
    `}

    ${media.tablet`
      margin: 0 0 calc(2 * var(--font-height-base));
    `}
  }

  & > header {
    margin-bottom: calc(2 * var(--font-height-base));
  }

  & > footer {
    margin-top: var(--font-height-base);
  }

  & > div > *:first-child {
    margin-top: 0;
  }
`
