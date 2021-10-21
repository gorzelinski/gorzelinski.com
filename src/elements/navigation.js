import styled, { css } from "styled-components"

import { media } from "./utils"
import { full } from "./grid"

export const Navigation = styled.nav`
  ${full}
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${props => props.theme.space.xs};

  ${media.tablet`
    gap: ${props => props.theme.space.s};
  `}

  ${media.desktop`
    gap: ${props => props.theme.space.m};
  `}

  ${props =>
    props.$flex &&
    css`
      display: flex;
    `}

  ${props =>
    props.$spaceBetween &&
    css`
      justify-content: space-between;
    `}
  
  ${props =>
    props.$main &&
    css`
      background-color: ${props => props.theme.color.background};
      border-top: 1px solid ${props => props.theme.color.surface.shade200};
      padding: calc(${props => props.theme.space.xs} - 1px)
        ${props => props.theme.space.xs} ${props => props.theme.space.xs};
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      justify-content: space-evenly;

      ${media.mobile`
        background-color: transparent;
        border-top: 0;
        opacity: 1;
        padding: 0;
        position: static;
        z-index: 0;
        justify-content: flex-end;
      `}
    `}
`
