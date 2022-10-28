import { LocalizedLink } from "gatsby-theme-i18n"
import styled, { css } from "styled-components"

import { media } from "../utils"
import { moveIcon, outline, underline } from "../effects"
import { elementBuzzOut, iconSpinning, iconWobble } from "../animations"
import { paragraph, ui } from "../typography"

export const icon = css`
  --color: var(--color-gray-base);

  &:hover {
    --color: var(--color-gray-30);
  }
  &:focus {
    --color: var(--color-gray-20);
  }
  &:active {
    --color: var(--color-gray-00);
  }
  &:disabled {
    --color: var(--color-gray-80);
  }
`

export const nav = css`
  --position: relative;
  --transition-color: color var(--duration-natural) ease-out;

  &.active {
    --color: var(--color-gray-00);
  }
  &:is(.active-subtle, :hover, :focus) {
    --color: var(--color-gray-00);
  }
  &:disabled {
    --color: var(--color-gray-60);
  }
`

export const text = css`
  --color: var(--color-primary-base);

  &:hover {
    --color: var(--color-primary-40);
  }
  &:focus {
    --color: var(--color-primary-30);
  }
  &:active {
    --color: var(--color-primary-20);
  }
  &:disabled {
    --color: var(--color-gray-base);
  }
`

export const primary = css`
  --color: var(--color-gray-100);
  --border-radius: var(--border-radius-10);
  --background-color: var(--color-primary-base);

  &:hover {
    --background-color: var(--color-primary-40);
  }
  &:focus {
    --background-color: var(--color-primary-30);
  }
  &:active {
    --background-color: var(--color-primary-20);
  }
  &:disabled {
    --background-color: var(--color-gray-90);
    --color: var(--color-gray-base);
  }
`

export const Button = styled(LocalizedLink)`
  ${ui}
  ${outline}
  --position: static;
  --width: auto;
  --border: 0;
  --border-radius: unset;
  --margin: 0;
  --padding: var(--space-20);
  --display: inline-flex;
  --flex-direction: row;
  --justify-self: start;
  --justify-content: space-between;
  --align-items: center;
  --gap: var(--padding);
  --background-color: transparent;
  --color: var(--color-gray-base);
  --font-weight: var(--font-weight-medium);
  --text-decoration: none;
  --cursor: pointer;
  --transition-background: background-color var(--duration-immediate) ease-in;
  --transition-color: color var(--duration-immediate) ease-in;

  position: var(--position);
  width: var(--width);
  margin: var(--margin);
  padding: var(--padding);
  display: var(--display);
  flex-direction: var(--flex-direction);
  justify-self: var(--justify-self);
  justify-content: var(--justify-content);
  align-items: var(--align-items);
  gap: var(--gap);
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  text-decoration: var(--text-decoration);
  cursor: var(--cursor);
  border: var(--border);
  border-radius: var(--border-radius);
  transition: var(--transition-background), var(--transition-color);

  &:disabled {
    --cursor: not-allowed;
  }

  ${props =>
    props.$flex &&
    css`
      --display: flex;
    `}

  ${props =>
    props.$bold &&
    css`
      --font-weight: var(--font-weight-bold);
    `}

  ${props => {
    switch (props.$align) {
      case "left":
        return css`
          --margin: 0 0 0 calc(-1 * var(--padding));
        `
      case "right":
        return css`
          --margin: 0 calc(-1 * var(--padding)) 0 0;
        `
      default:
        return css`
          --margin: 0;
        `
    }
  }}

  ${props =>
    props.$grow &&
    css`
      --justify-self: stretch;
      --justify-content: center;
      --width: 100%;

      ${media.mobile`
        --justify-self: start;
        --justify-content: space-between;
        --width: auto;
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
