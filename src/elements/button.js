import { Link } from "gatsby"
import styled, { css } from "styled-components"

import { remToFloat, media } from "./utils"
import { Outline, PrimaryColorStates, TextColorStates } from "./effects"
import { Rainbow } from "./animations"
import { Ui } from "./typography"

export const Nav = css`
  ${TextColorStates}
  &.active {
    color: ${props => props.theme.color.text.base};
    border-bottom: ${props => props.theme.space.xxs} solid
      ${props => props.theme.color.text.base};
    padding-bottom: ${props =>
      remToFloat(props.theme.space.xs) -
      remToFloat(props.theme.space.xxs) +
      "rem"};
  }
  &.active-logo {
    color: ${props => props.theme.color.text.base};
  }
`

export const Text = css`
  ${PrimaryColorStates}
`
export const Primary = css`
  ${Rainbow}
  z-index: 0;
  position: relative;
  color: ${props => props.theme.color.text.shade600};
  background-color: ${props => props.theme.color.primary.base};
  border-radius: ${props => props.theme.space.xs};

  &:hover {
    background-color: ${props => props.theme.color.primary.shade200};
  }
  &:focus {
    background-color: ${props => props.theme.color.primary.shade300};
  }
  &:active {
    background-color: ${props => props.theme.color.primary.shade500};
  }
`

export const Button = styled(Link)`
  ${Ui}
  ${Outline}
  text-decoration: none;
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
      justify-content: center;
      width: 100%;

      ${media.mobile`
        justify-content: space-between;
        width: auto;
      `}
    `}

  ${props =>
    props.$nav &&
    css`
      ${Nav}
    `}

  ${props =>
    props.$text &&
    css`
      ${Text}
    `}

  ${props =>
    props.$primary &&
    css`
      ${Primary}
    `}
`
