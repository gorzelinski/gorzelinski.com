import { css } from "styled-components"

import { media } from "../utils"

export const grid = css`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--space-xxxl), 100%), 1fr)
  );
  gap: var(--space-l) var(--space-s);

  ${media.tablet`
    gap: var(--space-l) var(--space-m);
  `}

  ${media.desktop`
    gap: var(--space-l) var(--space-l);
  `}
`

export const subGrid = css`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--space-xxxl), 100%), 1fr)
  );
  gap: var(--font-height-base);
`

export const article = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(1ex, 720px) minmax(0, 1fr);
`
