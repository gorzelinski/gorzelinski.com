import { css } from "styled-components"

import { media } from "./media"

export const marginReset = css`
  ${props =>
    props.$top &&
    css`
      margin-top: 0 !important;
    `}

  ${props =>
    props.$bottom &&
    css`
      margin-bottom: 0 !important;
    `}
`

export const marginTop = css`
  margin-top: ${props => props.theme.space.xl};

  ${media.tablet`
    margin-top: ${props => props.theme.space.xxl};
  `}

  ${props =>
    props.$higher &&
    css`
      margin-top: ${props => props.theme.space.l};

      ${media.tablet`
        margin-top: ${props => props.theme.space.xl};
      `}
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
