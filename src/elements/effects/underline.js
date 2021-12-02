import { css } from "styled-components"

export const underline = css`
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: var(--space-xxs);
    bottom: 0;
    left: 0;
    background-color: var(--color-gray-00);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform var(--duration-natural) ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:focus:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
