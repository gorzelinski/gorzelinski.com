import styled, { css } from "styled-components"

import { baseSize } from "./sizes"

export const code = css`
  ${baseSize}
  font-family: var(--font-family-code);
`

export const InlineCode = styled.code`
  ${code}
  color: var(--color-text-shade200);
  background-color: var(--color-surface-shade200);
  border-radius: var(--space-xs);
  padding: var(--space-xxs);
`

export const BlockCode = styled.pre`
  ${code}
  padding: var(--font-height-base);
  border-radius: var(--space-s);
  box-shadow: var(--shadow-neumorphism);
  overflow-x: auto;
`
