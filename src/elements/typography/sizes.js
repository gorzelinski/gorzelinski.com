import { css } from "styled-components"

export const heading = {
  xxs: css`
    font-size: var(--font-size-xxs);
    line-height: var(--font-height-xxs);
  `,
  xs: css`
    font-size: var(--font-size-xs);
    line-height: var(--font-height-xs);
    letter-spacing: var(--font-spacing-narrow);
  `,
  s: css`
    font-size: var(--font-size-s);
    line-height: var(--font-height-s);
    letter-spacing: var(--font-spacing-narrow);
  `,
  m: css`
    font-size: var(--font-size-m);
    line-height: var(--font-height-m);
    letter-spacing: var(--font-spacing-narrow);
  `,
  l: css`
    font-size: var(--font-size-l);
    line-height: var(--font-height-l);
    letter-spacing: var(--font-spacing-packed);
  `,
  xl: css`
    font-size: var(--font-size-xl);
    line-height: var(--font-height-xl);
    letter-spacing: var(--font-spacing-packed);
  `,
  xxl: css`
    font-size: var(--font-size-xxl);
    line-height: var(--font-height-xxl);
    letter-spacing: var(--font-spacing-packed);
  `,
  decorative: css`
    font-size: var(--font-size-decorative);
    line-height: var(--font-height-decorative);
    letter-spacing: var(--font-spacing-packed);
  `,
}

export const paragraph = {
  tiny: css`
    font-size: var(--font-size-tiny);
    line-height: var(--font-height-tiny);
  `,
  small: css`
    font-size: var(--font-size-small);
    line-height: var(--font-height-small);
  `,
  base: css`
    font-size: var(--font-size-base);
    line-height: var(--font-height-base);
  `,
}
