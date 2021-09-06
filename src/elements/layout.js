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

      ${media.tablet`
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

export const Navigation = styled.nav`
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
        Number.parseFloat(props.theme.font.height.base.replace("rem", "")) +
        Number.parseFloat(props.theme.space.xs.replace("rem", "")) * 2 +
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
`

export const Header = styled.header`
  width: 100%;
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space.xs};
  justify-content: space-between;
  align-items: baseline;

  ${media.tablet`
    flex-direction: row;
  `}
`

export const Grid = css`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: ${props => props.theme.space.s};

  ${media.tablet`
    gap: ${props => props.theme.space.m};
  `}

  ${media.desktop`
    gap: ${props => props.theme.space.l};
  `}
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

export const Hero = styled(Section)`
  & > div {
    grid-column: span 8;
  }

  ${media.tablet`
    & > div {
      grid-column: span 6;
    }
  `}
`

export const Footer = styled.footer``
