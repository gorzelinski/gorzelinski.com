import { css } from "styled-components"

import { media } from "../utils"

const base = css`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--space-70), 100%), 1fr)
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
  ${props => {
    switch (props.$grid) {
      case "base":
        return base
      case "sub":
        return css`
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(min(var(--space-70), 100%), 1fr)
          );
          gap: var(--vertical-rhythm);
        `
      case "article":
        return css`
          display: grid;
          grid-template-columns:
            minmax(0, 1fr) minmax(1ex, var(--space-line-length))
            minmax(0, 1fr);
        `
      default:
        return base
    }
  }}
`
