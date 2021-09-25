import styled, { css } from "styled-components"

import { media } from "./utils"

export const Grid = css`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: ${props => props.theme.space.l} ${props => props.theme.space.s};

  ${media.tablet`
    gap: ${props => props.theme.space.l} ${props => props.theme.space.m};
  `}

  ${media.desktop`
    gap: ${props => props.theme.space.l} ${props => props.theme.space.l};
  `}
`

export const Subgrid = css`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`

export const Section = styled.section`
  margin-top: ${props => props.theme.space.xl};
  ${Grid}

  ${media.tablet`
    margin-top: ${props => props.theme.space.xxl};
  `}

  ${props =>
    props.$lower &&
    css`
      margin-top: ${props => props.theme.space.xxl};

      ${media.tablet`
        margin-top: ${props => props.theme.space.xxxl};
      `}
    `}
`

export const Subsection = styled.section`
  ${Subgrid}
`

export const Hero = styled(Section)`
  & > * {
    grid-column: span 8;
  }

  ${media.tablet`
    & > * {
      grid-column: span 7;
    }
  `}

  ${media.desktop`
    & > * {
      grid-column: span 6;
    }
  `}
`
