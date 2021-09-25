import styled from "styled-components"

import { media } from "../utils"

export const Blockquote = styled.blockquote`
  padding: 0 0 0 ${props => props.theme.space.s};
  margin: ${props => props.theme.font.height.base}
    ${props => props.theme.space.m} ${props => props.theme.font.height.base} 0;
  border-left: ${props => props.theme.space.xxs} solid
    ${props => props.theme.color.primary.base};

  & > p {
    font-style: italic;
    font-size: ${props => props.theme.font.size.xs};
    line-height: ${props => props.theme.font.height.s};
    color: ${props => props.theme.color.text.shade400};
  }

  & > :last-child {
    margin-bottom: 0;
  }

  & > ul,
  li {
    list-style-position: inside;
  }

  ${media.tablet`
    padding-left: ${props => props.theme.font.height.base};
    margin: ${props => props.theme.font.height.base} ${props =>
    props.theme.font.height.base} ${props =>
    props.theme.font.height.base} ${props =>
    "-" + props.theme.font.height.base};
  `}
`
