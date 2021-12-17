import styled from "styled-components"

import { media } from "./utils"

export const Progress = styled.div`
  --height: var(--space-xxxl);
  position: fixed;
  z-index: 100;
  top: calc(50% - (var(--height) / 2));
  width: var(--space-xxs);
  height: var(--height);
  border-radius: var(--space-xs);
  background-color: var(--color-gray-80);
  transition: opacity var(--duration-natural) ease-in;
  left: var(--space-xxs);

  ${media.tiny`
    left: var(--space-xs);
  `}

  ${media.tablet`
    --height: calc(var(--space-xxxl) * 1.618);
  `}

  & > div {
    width: var(--space-xxs);
    border-radius: var(--space-xs);
    background-color: var(--color-primary-base);
  }
`
