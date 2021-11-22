import styled from "styled-components"
import { media } from "../utils"

export const Hr = styled.hr`
  margin: var(--space-xl) auto;
  background-color: var(--color-primary-base);
  border: 0;
  height: var(--space-xxs);
  width: var(--space-xxl);
  max-width: 62%;

  ${media.mobile`
    width: var(--space-xxxl);
  `}
`
