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
import { baseSize, ui, tinySize } from "./typography"

export const nav = css`
  ${underline};
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

  ${props =>
    props.$first &&
    css`
      margin-left: calc(-1 * var(--space-xs));
    `}

  ${props =>
    props.$last &&
    css`
      margin-right: calc(-1 * var(--space-xs));
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

  ${props =>
    props.$iconForward &&
    css`
      ${iconForward}
    `}

  ${props =>
    props.$iconBack &&
    css`
      ${iconBack}
    `}

  ${props =>
    props.$iconWobble &&
    css`
      ${iconWobble}
    `}
    
  ${props =>
    props.$elementBuzzOut &&
    css`
      ${elementBuzzOut}
    `}
`
