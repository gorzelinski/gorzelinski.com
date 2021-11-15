import styled, { css } from "styled-components"

import { border, marginReset, marginTop, media } from "../utils"
import { grid, subGrid } from "../grid"

export const Section = styled.section`
  ${grid}
  ${marginTop}
  ${marginReset}
  ${props =>
    props.$featured &&
    css`
      ${border}
      background: ${props => props.theme.color.background};
      padding: calc(
        ${props => props.theme.space.s} - ${props => props.theme.space.xxxs}
      );
      box-shadow: ${props => props.theme.shadow.neumorphism};

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
