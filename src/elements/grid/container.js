import { css } from "styled-components"

import { media } from "../utils"

export const grid = css`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--space-80), 100%), 1fr)
  );
  gap: var(--space-30);

  ${media.tiny`
    gap: var(--space-40);
  `}

  ${media.desktop`
    gap: var(--space-50);
  `}
`

export const subGrid = css`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--space-80), 100%), 1fr)
  );
  gap: var(--space-30);
`

export const article = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(1ex, var(--space-line-length)) minmax(
      0,
      1fr
    );
`
