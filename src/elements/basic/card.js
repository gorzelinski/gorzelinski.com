import styled, { css } from "styled-components"

import { border, media } from "../utils"
import { heighten, span } from "../grid"
import { textAlign } from "../typography"

export const Card = styled.article`
  ${span}
  ${heighten}
  ${textAlign}
  ${border.all}
  --overflow: hidden;
  --display: grid;
  --grid-template-columns: auto;
  --align-content: start;
  --align-items: start;
  --padding: var(--space-20);
  --box-shadow: var(--shadow-depth-20);
  --gap: var(--padding);
  --transition-shadow: box-shadow var(--duration-immediate) ease-out;
  --transition-border: border-color var(--duration-natural) ease-out;

  z-index: 0;
  overflow: var(--overflow);
  display: var(--display);
  grid-template-columns: var(--grid-template-columns);
  align-content: var(--align-content);
  align-items: var(--align-items);
  padding: var(--padding);
  gap: var(--gap);
  box-shadow: var(--box-shadow);
  transition: var(--transition-shadow), var(--transition-border);

  &:hover {
    --box-shadow: var(--shadow-depth-10);
  }

  ${media.tiny`
    --padding: var(--space-30);
  `}

  ${media.desktop`
    --padding: var(--space-40);
  `}

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > .image-wrapper {
    margin: calc(-1 * var(--gap)) calc(-1 * var(--gap)) 0;
  }

  ${props =>
    props.$horizontal &&
    css`
      --grid-template-columns: 1fr;

      ${media.mobile`
        --grid-template-columns: 1fr 3fr;

        & > .image-wrapper {
          aspect-ratio: auto;
          min-height: var(--space-70);
          align-self: stretch;
          margin: calc(-1 * var(--gap)) 0 calc(-1 * var(--gap)) calc(-1 * var(--gap));
          grid-column: 1;
          grid-row: 1 / 5;
        }

        & > * {
          grid-column: 2;
        }
      `}

      ${media.tablet`
        --grid-template-columns: 1fr 2fr;
      `}
    `}
`
