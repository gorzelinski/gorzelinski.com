import styled, { css } from "styled-components"

import { baseSize, headingXXS } from "./sizes"

export const body = css`
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-shade300);
`

export const ui = css`
  ${baseSize}
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--font-spacing-wide);
  color: var(--color-text-shade500);
  padding: 0;
  margin: 0;
`

export const P = styled.p`
  ${body}
  ${baseSize}
  padding: 0;
  margin: 0 0 var(--font-height-base) 0;

  ${props =>
    props.$ui &&
    css`
      ${ui}
    `}

  ${props =>
    props.$lead &&
    css`
      color: var(--color-text-shade500);
      ${headingXXS}
    `}
`

export const Strong = styled.strong`
  font-weight: var(--font-weight-bold);
  color: var(--color-text-shade200);
`

export const Em = styled.em`
  font-style: italic;
`
