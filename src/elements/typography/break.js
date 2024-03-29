import styled from "styled-components"

import { media } from "../utils"

export const Hr = styled.hr`
  --width: var(--space-70);

  width: var(--width);
  margin: var(--space-60) auto;
  background-color: var(--color-primary-base);
  border: 0;
  height: var(--space-10);
  max-width: 62%;

  ${media.mobile`
    --width: var(--space-80);
  `}
`
