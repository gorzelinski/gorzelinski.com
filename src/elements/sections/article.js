import styled from "styled-components"

import { marginTop } from "../utils"
import { article } from "../grid"

export const Article = styled.article`
  ${article}
  ${marginTop}

  & > * {
    grid-column: 2;
  }

  /* maybe change to whole header */
  & > figure {
    grid-column-start: 1;
    grid-column-end: span 3;
  }
`
