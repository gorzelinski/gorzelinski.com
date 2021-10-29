import { Link } from "gatsby"
import styled, { css } from "styled-components"

import { media } from "./utils"
import { outline, primaryColorStates, textColorStates } from "./effects"
import { rainbow } from "./animations"
import { ui } from "./typography"
import { tinySize, baseSize } from "./typography/sizes"

export const nav = css`
  ${textColorStates}
  &.active {
    color: ${props => props.theme.color.text.base};
    border-bottom: ${props => props.theme.space.xxs} solid
      ${props => props.theme.color.text.base};
    padding-bottom: calc(
      ${props => props.theme.space.xs} - ${props => props.theme.space.xxs}
    );
  }
  &.active-logo {
    color: ${props => props.theme.color.text.base};
  }
`

export const text = css`
  ${primaryColorStates}
`
export const primary = css`
  ${rainbow}
  z-index: 0;
  position: relative;
  color: ${props => props.theme.color.text.shade600};
  background-color: ${props => props.theme.color.primary.base};
  border-radius: ${props => props.theme.space.xs};

  &:focus:after {
    background-color: ${props => props.theme.color.primary.shade300};
  }
  &:active:after {
    background-color: ${props => props.theme.color.primary.shade500};
  }
`

export const Button = styled(Link)`
  ${ui}
  ${outline}
  text-decoration: none;
  justify-self: start;
  padding: ${props => props.theme.space.xs};
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${props => props.theme.space.xs};

  ${props =>
    props.$flex &&
    css`
      display: flex;
    `}

  ${props =>
    props.$first &&
    css`
      margin-left: ${props => "-" + props.theme.space.xs};
    `}

  ${props =>
    props.$last &&
    css`
      margin-right: ${props => "-" + props.theme.space.xs};
    `}

  ${props =>
    props.$grow &&
    css`
      justify-self: stretch;
      justify-content: center;
      width: 100%;

      ${media.mobile`
        justify-self: start;
        justify-content: space-between;
        width: auto;
      `}
    `}

  ${props =>
    props.$mobile &&
    css`
      ${tinySize}

      ${media.mobile`
        ${baseSize}
      `}
    `}

  ${props =>
    props.$nav &&
    css`
      ${nav}
    `}

  ${props =>
    props.$text &&
    css`
      ${text}
    `}

  ${props =>
    props.$primary &&
    css`
      ${primary}
    `}
`
