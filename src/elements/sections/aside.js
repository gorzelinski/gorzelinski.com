import styled, { css } from "styled-components"

import { marginTop } from "../utils"
import { article } from "../grid"

export const Aside = styled.aside`
  ${marginTop}
  display: grid;

  ${props =>
    props.$article &&
    css`
      ${article}

      & > * {
        grid-column: 2;
      }
    `}
`
