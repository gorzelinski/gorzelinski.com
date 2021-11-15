import { css } from "styled-components"

import { media } from "../utils"

export const grid = css`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${props => props.theme.space.xxxl}, 100%), 1fr)
  );
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
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${props => props.theme.space.xxxl}, 100%), 1fr)
  );
  gap: ${props => props.theme.font.height.base};
`

export const article = css`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(1ex, 720px) minmax(0, 1fr);
`
