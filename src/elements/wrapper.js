import styled, { css } from "styled-components"

import { media } from "./utils"

export const Background = styled.div`
  background-color: ${props => props.theme.color.background};
  min-height: 100vh;
`

export const Wrapper = styled.div`
  ${props =>
    props.global &&
    css`
      padding: ${props => props.theme.space.l} ${props => props.theme.space.m};
      max-width: 100%;

      ${media.tablet`
        margin: 0;
        padding: ${props => props.theme.space.xl} ${props =>
        props.theme.space.l};
      `}

      ${media.desktop`
        margin: 0 auto;
        padding: ${props => props.theme.space.xxl} 0;
        max-width:  ${75 + "rem"};
      `}
      
      ${media.large`
        margin: 0 auto;
        padding: ${props => props.theme.space.xxl} 0;
        max-width:  ${100 + "rem"};
      `}
    `}
`
