import { css } from "styled-components"

export const underline = css`
  &:after {
    content: "";
    width: 100%;
    height: var(--space-10);
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--color-gray-00);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform var(--duration-natural) ease-out;
  }
  &:is(:hover, :focus, .active):after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
