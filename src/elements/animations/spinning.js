import { css, keyframes } from "styled-components"

export const spinning = keyframes`
  from {
      transform: rotate(0deg);
  } to {
      transform: rotate(360deg);
  }
`

export const iconSpinning = css`
  & > .icon {
    animation-name: ${spinning};
    animation-duration: var(--duration-deliberate);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`
