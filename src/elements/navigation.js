import styled, { css } from "styled-components"

import { media, remToFloat } from "./utils"

export const Navigation = styled.nav`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${props => props.theme.space.xs};

  ${media.tablet`
    gap: ${props => props.theme.space.xs};
  `}

  ${media.desktop`
    gap: ${props => props.theme.space.m};
  `}
  
  ${media.large`
    gap: ${props => props.theme.space.l};
  `}

  ${props =>
    props.$flex &&
    css`
      display: flex;
    `}
  
  ${props =>
    props.$main &&
    css`
      justify-content: flex-end;
      height: ${props =>
        remToFloat(props.theme.font.height.base) +
        remToFloat(props.theme.space.xs) * 2 +
        "rem"};
      overflow-y: hidden;

      & > a:not(:first-child, :last-child) {
        display: none;
      }

      ${media.tiny`
        & > a:not(:first-child, :last-child) {
          display: inline-flex;
        }
        & > a:nth-child(2) {
          display: none;
        }
      `}

      ${media.mobile`
        overflow-y: visible;
        & > a:nth-child(2) {
            display: inline-flex;
          }
      `}
    `}

    ${props =>
    props.$social &&
    css`
      grid-column: span 8;
      top: ${props => props.theme.font.height.base};
      order: 2;

      ${media.mobile`
        order: 0;
        grid-column: span 1;
        top: ${props => props.theme.font.height.base};
        flex-direction: column;
        position: sticky;
        align-self: start;
        justify-self: start;
        margin-bottom: ${props => props.theme.font.height.base};


        & > p {
          writing-mode: vertical-lr;
        }
      `}

      ${media.desktop`
        top: ${props => props.theme.space.m};
      `}
  
      ${media.large`
        top: ${props => props.theme.space.l};
      `}
    `}
`
