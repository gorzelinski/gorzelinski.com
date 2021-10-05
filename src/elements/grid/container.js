import { css } from "styled-components"

import { media } from "../utils"

export const grid = css`
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

export const subGrid = css`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`

export const article = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(1ch, 65ch) minmax(0, 1fr);
`
