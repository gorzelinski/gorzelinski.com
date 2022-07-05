import { css } from "styled-components"

export const heading = {
  xxs: css`
    font-size: var(--font-size-30);
    line-height: var(--font-height-30);
  `,
  xs: css`
    font-size: var(--font-size-40);
    line-height: var(--font-height-40);
    letter-spacing: var(--font-spacing-narrow);
  `,
  s: css`
    font-size: var(--font-size-50);
    line-height: var(--font-height-50);
    letter-spacing: var(--font-spacing-narrow);
  `,
  m: css`
    font-size: var(--font-size-60);
    line-height: var(--font-height-60);
    letter-spacing: var(--font-spacing-narrow);
  `,
  l: css`
    font-size: var(--font-size-70);
    line-height: var(--font-height-70);
    letter-spacing: var(--font-spacing-packed);
  `,
  xl: css`
    font-size: var(--font-size-80);
    line-height: var(--font-height-80);
    letter-spacing: var(--font-spacing-packed);
  `,
  xxl: css`
    font-size: var(--font-size-90);
    line-height: var(--font-height-90);
    letter-spacing: var(--font-spacing-packed);
  `,
  decorative: css`
    font-size: var(--font-size-100);
    line-height: var(--font-height-100);
    letter-spacing: var(--font-spacing-packed);
  `,
}

export const paragraph = {
  tiny: css`
    font-size: var(--font-size-00);
    line-height: var(--font-height-00);
  `,
  small: css`
    font-size: var(--font-size-10);
    line-height: var(--font-height-10);
  `,
  base: css`
    font-size: var(--font-size-base);
    line-height: var(--font-height-base);
  `,
}
