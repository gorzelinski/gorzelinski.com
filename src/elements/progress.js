import styled from "styled-components"

import { media } from "./utils"

export const Progress = styled.div.attrs(props => ({
  style: {
    opacity: props.progress < 5 || props.progress > 99 ? 0 : 1,
  },
}))`
  --width: calc(var(--space-xxxl) * 1.618);
  z-index: 100;
  border-radius: var(--border-radius-xs);
  background-color: var(--color-gray-80);
  transition: opacity var(--duration-natural) ease-in,
    background-color var(--duration-natural) ease-out;
  position: fixed;

  @media (orientation: portrait) {
    left: 0;
    width: 100%;
    bottom: 0;
    height: var(--space-xxs);
  }

  ${media.tablet`
    left: var(--space-xs);
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
  height: var(--space-xxs);
  border-radius: var(--border-radius-s);
  background-color: var(--color-primary-base);
`
