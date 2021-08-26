import styled, { css } from "styled-components"

export const Background = styled.div`
  background-color: ${props => props.theme.color.background};
`

export const Wrapper = styled.div`
  ${props =>
    props.global &&
    css`
      background-color: ${props => props.theme.color.background};
      padding: ${props => props.theme.space.xl} ${props => props.theme.space.m};
      margin: 0 auto;
      max-width: 100%;

      @media screen and (min-width: ${props =>
          props.theme.screen.tablet}) and (max-width: ${props =>
          props.theme.screen.desktop}) {
        margin: 0;
        padding: ${props => props.theme.space.xxl}
          ${props => props.theme.space.xl};
      }

      @media screen and (min-width: ${props =>
          props.theme.screen.desktop}) and (max-width: ${props =>
          props.theme.screen.large}) {
        padding: ${props => props.theme.space.xxl} 0;
        max-width: ${props =>
          Number.parseFloat(props.theme.space.s.replace("rem", "")) * 75 +
          "rem"};
      }

      @media screen and (min-width: ${props => props.theme.screen.large}) {
        padding: ${props => props.theme.space.xxl} 0;
        max-width: ${props =>
          Number.parseFloat(props.theme.space.s.replace("rem", "")) * 100 +
          "rem"};
      }
    `}
`
