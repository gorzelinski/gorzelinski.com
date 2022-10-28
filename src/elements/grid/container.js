import { css } from "styled-components"

import { media } from "../utils"

const base = css`
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--column), 100%), 1fr)
  );
  gap: var(--space-30);

  ${media.tiny`
    gap: var(--space-40);
  `}

  ${media.desktop`
    gap: var(--space-50);
  `}
`

export const grid = css`
  --column: calc((768px - var(--space-40) - (var(--space-50) * 2)) / 2);
  display: grid;

  ${props => {
    switch (props.$grid) {
      case "base":
        return base
      case "sub":
        return css`
          grid-template-columns: repeat(
            auto-fit,
            minmax(min(var(--column), 100%), 1fr)
          );
          gap: var(--vertical-rhythm);
        `
      case "article":
        return css`
          grid-template-columns:
            minmax(0, 1fr) minmax(1ch, var(--line-length))
            minmax(0, 1fr);
        `
      default:
        return base
    }
  }}
`
