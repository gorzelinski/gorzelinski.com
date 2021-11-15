import styled, { css } from "styled-components"

import { marginReset, marginTop, media } from "../utils"
import { grid, subGrid } from "../grid"

export const Section = styled.section`
  ${grid}
  ${marginTop}
  ${marginReset}
  ${props =>
    props.$featured &&
    css`
      border-radius: ${props => props.theme.space.s};
      background: ${props => props.theme.color.background};
      padding: calc(
        ${props => props.theme.space.s} - ${props => props.theme.space.xxxs}
      );
      box-shadow: ${props => props.theme.shadow.neumorphism};
      border: ${props => props.theme.space.xxxs} solid
        ${props => props.theme.color.surface.base};

      ${media.tablet`
        padding: ${props => props.theme.space.m};
      `}
      ${media.desktop`
        padding: ${props => props.theme.space.l};
      `}
    `}
  
  grid-column: 1 / -1;
`

export const Subsection = styled.div`
  ${subGrid}
`
