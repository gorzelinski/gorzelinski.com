import styled, { css, keyframes } from "styled-components"
import { UI } from "./typography"

export const Outline = css`
  &:focus {
    outline: ${props => props.theme.space.xxs} solid
      ${props => props.theme.color.primary.base};
    outline-offset: ${props => props.theme.space.xxs};
  }
  &:focus:not(:focus-visible) {
    outline: 0;
  }
  &:focus-visible {
    outline: ${props => props.theme.space.xxs} solid
      ${props => props.theme.color.primary.base};
    outline-offset: ${props => props.theme.space.xxs};
  }
`

export const Glowing = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`

export const Rainbow = css`
  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    animation: ${Glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: ${props => props.theme.space.xs};
  }
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.color.primary.base};
    left: 0;
    top: 0;
    border-radius: ${props => props.theme.space.xs};
  }
  &:active:after {
    background: ${props => props.theme.color.primary.shade500};
  }
  &:hover:before {
    opacity: 1;
  }
`

export const Nav = css`
  &:hover {
    color: ${props => props.theme.color.text.shade400};
  }
  &:focus {
    color: ${props => props.theme.color.text.shade300};
  }
  &:active {
    color: ${props => props.theme.color.text.base};
    /* transfer to active class */
    border-bottom: ${props => props.theme.space.xxs} solid
      ${props => props.theme.color.text.base};
    padding-bottom: ${props =>
      Number.parseFloat(
        props.theme.space.xs.replace("rem", "") -
          Number.parseFloat(props.theme.space.xxs.replace("rem", ""))
      ) + "rem"};
  }
`

export const Text = css`
  display: block;
  color: ${props => props.theme.color.primary.base};
  margin-left: ${props => "-" + props.theme.space.xs};

  &:hover {
    color: ${props => props.theme.color.primary.shade200};
  }
  &:focus {
    color: ${props => props.theme.color.primary.shade300};
  }
  &:active {
    color: ${props => props.theme.color.primary.shade500};
  }
`
export const Primary = css`
  ${Rainbow}
  z-index: 0;
  position: relative;
  display: block;
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

export const Button = styled.button`
  ${UI}
  ${Outline}
  padding: ${props => props.theme.space.xs};
  border: 0;
  background-color: transparent;
  cursor: pointer;
  /* delete */
  margin-bottom: 16px;

  ${props =>
    props.nav &&
    css`
      ${Nav}
    `}

  ${props =>
    props.text &&
    css`
      ${Text}
    `}

  ${props =>
    props.primary &&
    css`
      ${Primary}
    `}
`
