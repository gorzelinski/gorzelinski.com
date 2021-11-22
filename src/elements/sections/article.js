import styled from "styled-components"

import { marginTop } from "../utils"
import { article } from "../grid"

export const Article = styled.article`
  ${article}
  ${marginTop}

  & > * {
    grid-column: 2;
  }

  & > figure {
    grid-column: 1 / span 3;
  }

  & > header {
    margin-bottom: var(--space-l);
  }

  & > footer {
    margin-top: var(--font-height-base);
  }

  & > div > *:first-child {
    margin-top: 0;
  }
`
