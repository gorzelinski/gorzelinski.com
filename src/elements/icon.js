import styled, { css } from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"

import { primaryColorStates, textColorStates, outline } from "./effects"

export const Icon = styled.span`
  ${outline}

  vertical-align: top;
  line-height: 0;
  display: inline-block;

  ${StyledIconBase} {
    width: var(--font-height-base);
    height: var(--font-height-base);
  }

  ${props => {
    switch (props.$type) {
      case "primary":
        return primaryColorStates
      case "text":
        return textColorStates
      default:
        return css`
          color: inherit;
        `
    }
  }}
`
