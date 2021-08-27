import styled, { css } from "styled-components"
import { media } from "../utils"

export const Background = styled.div`
  background-color: ${props => props.theme.color.background};
`

export const Wrapper = styled.div`
  ${props =>
    props.global &&
    css`
      padding: ${props => props.theme.space.xl} ${props => props.theme.space.m};
      max-width: 100%;

      ${media.mobile`
        margin: 0;
        padding: ${props => props.theme.space.xxl} ${props =>
        props.theme.space.xl};
      `}

      ${media.desktop`
        margin: 0 auto;
        padding: ${props => props.theme.space.xxl} 0;
        max-width: ${props =>
          Number.parseFloat(props.theme.space.s.replace("rem", "")) * 75 +
          "rem"};
      `}
      
      ${media.large`
        margin: 0 auto;
        padding: ${props => props.theme.space.xxl} 0;
        max-width: ${props =>
          Number.parseFloat(props.theme.space.s.replace("rem", "")) * 100 +
          "rem"};
      `}
    `}
`
