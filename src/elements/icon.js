import styled, { css } from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"

export const Icon = styled.span`
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
        return css`
          color: var(--color-primary-base);
        `
      case "text":
        return css`
          color: var(--color-gray-base);
        `
      case "border":
        return css`
          color: var(--color-gray-80);
        `
      default:
        return css`
          color: inherit;
        `
    }
  }}
`
