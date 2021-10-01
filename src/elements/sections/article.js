import styled from "styled-components"

import { marginTop } from "../utils"
import { article } from "../grid"

export const Article = styled.article`
  ${article}
  ${marginTop}

  & > * {
    grid-column: 2;
  }
`
