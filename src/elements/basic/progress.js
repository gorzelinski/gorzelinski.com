import styled from "styled-components"

import { media } from "../utils"

export const Progress = styled.div.attrs(props => ({
  style: {
    opacity: props.progress < 5 || props.progress > 99 ? 0 : 1,
  },
}))`
  --width: 100%;
  --height: var(--space-10);
  --bottom: 0;
  --left: 0;

  width: var(--width);
  height: var(--height);
  z-index: 100;
  bottom: var(--bottom);
  left: var(--left);

  position: fixed;
  border-radius: var(--border-radius-00);
  background-color: var(--color-gray-80);
  transition: opacity var(--duration-natural) ease-in,
    background-color var(--duration-natural) ease-out;

  ${media.tablet`
    --width: var(--space-80);
    --bottom: calc(50% + (var(--width) / 2));
    --left: var(--space-30);
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
