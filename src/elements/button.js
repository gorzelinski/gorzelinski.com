import { Link } from "gatsby"
import styled, { css } from "styled-components"

import { media } from "./utils"
import { outline, primaryColorStates, underline } from "./effects"
import { rainbow } from "./animations"
import { ui } from "./typography"
import { tinySize, baseSize } from "./typography/sizes"

export const nav = css`
  ${underline};
  position: relative;
  &.active {
    color: var(--color-text-base);
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: var(--space-xxs);
      bottom: 0;
      left: 0;
      background-color: var(--color-text-base);
      transform: scaleX(1);
    }
  }
  &.active-subtle {
    color: var(--color-text-base);
  }
  &:hover,
  :focus {
    color: var(--color-text-base);
    transition: color var(--duration-natural) ease-out;
  }
`

export const text = css`
  ${primaryColorStates}
`
export const primary = css`
  ${rainbow}
  z-index: 0;
  position: relative;
  color: var(--color-text-shade600);
  background-color: var(--color-primary-base);
  border-radius: var(--space-xs);

  &:focus:after {
    background-color: var(--color-primary-shade300);
  }
  &:active:after {
    background-color: var(--color-primary-shade500);
  }
`

export const Button = styled(Link)`
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
      margin-left: calc(var(--space-xs) * -1);
    `}

  ${props =>
    props.$last &&
    css`
      margin-right: calc(var(--space-xs) * -1);
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
