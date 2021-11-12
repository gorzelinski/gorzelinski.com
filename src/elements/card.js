import styled, { css } from "styled-components"

import { media } from "./utils"
import { spanAll, span2, span3, span4 } from "./grid"

export const Card = styled.article`
  ${span2}
  ${span3}
  ${span4}
  ${spanAll}
  overflow: hidden;
  display: grid;
  align-content: start;
  gap: ${props => props.theme.space.s};
  border: 1px solid ${props => props.theme.color.surface.shade300};
  border-radius: ${props => props.theme.space.s};

  & > div:nth-child(2) {
    padding: calc(${props => props.theme.space.s} - 1px);
  }

  ${props =>
    props.$horizontal &&
    css`
      grid-template-columns: repeat(
        auto-fit,
        minmax(min(${props => props.theme.space.xxxl}, 100%), 1fr)
      );
      min-height: ${props => props.theme.space.xxxl};
      align-content: stretch;

      & > *:first-child {
        max-width: 100%;
        align-self: start;
        /* height: 100%; */
      }

      ${media.desktop`
        & > *:first-child {
          height: 100%;
        }
        & > div:nth-child(2) {
          grid-column: span 2;
        }
      `}
    `}

  &:hover {
    box-shadow: ${props => props.theme.shadow.neumorphism};
    transition: box-shadow ${props => props.theme.duration.immediate} ease-in;
  }
`
