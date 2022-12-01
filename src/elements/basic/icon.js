import React from "react"
import styled, { css } from "styled-components"
import { StyledIconBase } from "@styled-icons/styled-icon"

import { selectIcon } from "../utils"

export const StyledIcon = styled.span.attrs(() => ({
  className: "icon",
  "data-testid": "icon",
}))`
  --color: inherit;

  vertical-align: top;
  line-height: 0;
  display: inline-block;
  color: var(--color);

  ${StyledIconBase} {
    width: var(--font-height-base);
    height: var(--font-height-base);
  }

  ${props => {
    switch (props.$color) {
      case "primary":
        return css`
          --color: var(--color-primary-base);
        `
      case "text":
        return css`
          --color: var(--color-gray-base);
        `
      case "border":
        return css`
          --color: var(--color-gray-80);
        `
      default:
        return css`
          --color: inherit;
        `
    }
  }}
`

export const Icon = ({ type, $color }) => (
  <StyledIcon {...{ $color }}>{selectIcon(type)}</StyledIcon>
)
