import { keyframes, css } from "styled-components"

export const glowing = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`

export const rainbow = css`
  &:before {
    content: "";
    background: var(--gradient-rainbow);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity var(--duration-natural) ease-in;
    border-radius: var(--space-xs);
  }
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--color-primary-base);
    left: 0;
    top: 0;
    border-radius: var(--space-xs);
  }
  &:hover:before {
    opacity: 1;
  }
`
