import { LocalizedLink } from "gatsby-theme-i18n"
import styled, { css } from "styled-components"

import { media } from "../utils"
import { colorStates, moveIcon, outline, underline } from "../effects"
import { elementBuzzOut, iconSpinning, iconWobble } from "../animations"
import { paragraph, ui } from "../typography"

export const icon = css`
  ${colorStates.text}
  &:disabled {
    color: var(--color-gray-80);
    cursor: not-allowed;
  }
`

export const nav = css`
  position: relative;
  transition: color var(--duration-natural) ease-out;

  &.active {
    color: var(--color-gray-00);
  }
  &:is(.active-subtle, :hover, :focus) {
    color: var(--color-gray-00);
  }

  &:disabled {
    color: var(--color-gray-60);
    cursor: not-allowed;
  }
`

export const text = css`
  ${colorStates.primary}
  &:disabled {
    color: var(--color-gray-base);
    cursor: not-allowed;
  }
`
export const primary = css`
  ${colorStates.primaryBackground}
  color: var(--color-gray-100);
  border-radius: var(--border-radius-10);
  &:disabled {
    background: var(--color-gray-90);
    color: var(--color-gray-base);
    cursor: not-allowed;
  }
`

export const Button = styled(LocalizedLink)`
  ${ui}
  ${outline}
  --padding: var(--space-20);
  text-decoration: none;
  justify-self: start;
  padding: var(--padding);
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-20);

  ${props =>
    props.$flex &&
    css`
      display: flex;
    `}

  ${props =>
    props.$bold &&
    css`
      font-weight: var(--font-weight-bold);
    `}

  ${props => {
    switch (props.$align) {
      case "left":
        return css`
          margin-left: calc(-1 * var(--padding));
        `
      case "right":
        return css`
          margin-right: calc(-1 * var(--padding));
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
          ${paragraph.tiny}
          ${media.mobile`
            ${paragraph.small}
          `}
        `
      case "responsive":
        return css`
          ${paragraph.tiny}
          ${media.tablet`
            ${paragraph.base}
          `}
        `
      default:
        return paragraph.base
    }
  }}

  ${props => {
    switch (props.$type) {
      case "icon":
        return icon
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
        return moveIcon.forward
      case "icon-back":
        return moveIcon.back
      case "icon-spinning":
        return iconSpinning
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
