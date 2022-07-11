import { css, keyframes } from "styled-components"

export const wobble = keyframes`
  16% {
    transform: translateX(6px);
  }
  33% {
    transform: translateX(-5px);
  }
  49% {
    transform: translateX(4px);
  }
  66% {
    transform: translateX(-2px);
  }
  83% {
    transform: translateX(1px);
  }
  100% {
    transform: translateX(0);
  }
`

export const iconWobble = css`
  &:hover {
    & > .icon {
      animation-name: ${wobble};
      animation-duration: var(--duration-deliberate);
      animation-iteration-count: 1;
      animation-timing-function: ease-in-out;
    }
  }
`
