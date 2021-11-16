import { css } from "styled-components"

export const underline = css`
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: ${props => props.theme.space.xxs};
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.color.text.base};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform ${props => props.theme.duration.natural} ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:focus:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
