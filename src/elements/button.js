import { LocalizedLink } from "gatsby-theme-i18n"
import styled, { css } from "styled-components"

import { media } from "./utils"
import {
  iconBack,
  iconForward,
  outline,
  primaryBackgroundColorStates,
  primaryColorStates,
  underline,
} from "./effects"
import { elementBuzzOut, iconWobble } from "./animations"
import { baseSize, smallSize, ui, tinySize } from "./typography"

export const nav = css`
  position: relative;
  &.active {
    color: var(--color-gray-00);
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: var(--space-xxs);
      bottom: 0;
      left: 0;
      background-color: var(--color-gray-00);
      transform: scaleX(1);
    }
  }
  &.active-subtle {
    color: var(--color-gray-00);
  }
  &:hover,
  :focus {
    color: var(--color-gray-00);
    transition: color var(--duration-natural) ease-out;
  }
`

export const text = css`
  ${primaryColorStates}
`
export const primary = css`
  ${primaryBackgroundColorStates}
  z-index: 0;
  position: relative;
  color: var(--color-gray-100);
  background-color: var(--color-primary-base);
  border-radius: var(--space-xs);

  &:focus:after {
    background-color: var(--color-primary-30);
  }
  &:active:after {
    background-color: var(--color-primary-10);
  }
`

export const Button = styled(LocalizedLink)`
  ${ui}
  ${outline}
  text-decoration: none;
  justify-self: start;
  padding: var(--space-xs);
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-xs);

  ${props =>
    props.$flex &&
    css`
      display: flex;
    `}

  ${props => {
    switch (props.$align) {
      case "left":
        return css`
          margin-left: calc(-1 * var(--space-xs));
        `
      case "right":
        return css`
          margin-right: calc(-1 * var(--space-xs));
        `
      default:
        return css`
          margin: 0;
        `
    }
  }}

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

  ${props => {
    switch (props.$size) {
      case "small":
        return css`
          ${tinySize}
          ${media.mobile`
            ${smallSize}
          `}
        `
      case "responsive":
        return css`
          ${tinySize}
          ${media.mobile`
            ${baseSize}
          `}
        `
      default:
        return baseSize
    }
  }}

  ${props => {
    switch (props.$type) {
      case "nav":
        return nav
      case "text":
        return text
      case "primary":
        return primary
      default:
        return primary
    }
  }}

  ${props => {
    switch (props.$animation) {
      case "icon-forward":
        return iconForward
      case "icon-back":
        return iconBack
      case "icon-wobble":
        return iconWobble
      case "element-buzz-out":
        return elementBuzzOut
      case "underline":
        return underline
      default:
        return null
    }
  }}
`
