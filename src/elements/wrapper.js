import styled, { css } from "styled-components"

import { media } from "./utils"

export const Background = styled.div`
  background-color: ${props => props.theme.color.background};
  min-height: 100vh;
`

// TODO: make layout better on large screens. Change max width after
export const Wrapper = styled.div`
  ${props =>
    props.$global &&
    css`
      padding: ${props => props.theme.space.l} ${props => props.theme.space.s};
      max-width: 100%;

      ${media.tiny`
        margin: 0;
        padding: ${props => props.theme.space.l} ${props =>
        props.theme.space.m};
      `}

      ${media.tablet`
        margin: 0;
        padding: ${props => props.theme.space.xl} ${props =>
        props.theme.space.l};
      `}

      ${media.desktop`
        margin: 0 auto;
        padding: ${props => props.theme.space.xxl} 0;
        max-width:  ${72 + "rem"};
      `}
      
      ${media.large`
        margin: 0 auto;
        padding: ${props => props.theme.space.xxl} 0;
        max-width:  ${72 + "rem"};
      `}
    `}
`
