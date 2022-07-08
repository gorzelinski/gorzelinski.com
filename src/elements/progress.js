import styled from "styled-components"

import { media } from "./utils"

export const Progress = styled.div.attrs(props => ({
  style: {
    opacity: props.progress < 5 || props.progress > 99 ? 0 : 1,
  },
}))`
  --width: var(--space-80);
  z-index: 100;
  border-radius: var(--border-radius-00);
  background-color: var(--color-gray-80);
  transition: opacity var(--duration-natural) ease-in,
    background-color var(--duration-natural) ease-out;
  position: fixed;

  @media (orientation: portrait) {
    left: 0;
    width: 100%;
    bottom: 0;
    height: var(--space-10);
  }

  ${media.tablet`
    left: var(--space-20);
    top: calc(50% - (var(--width) / 2));
    width: var(--width);
    transform: rotate(90deg);
    transform-origin: top left;
  `}
`

export const ProgressValue = styled.div.attrs(props => ({
  style: {
    width: `${props.progress}%`,
  },
}))`
  height: var(--space-10);
  border-radius: var(--border-radius-10);
  background-color: var(--color-primary-base);
`
