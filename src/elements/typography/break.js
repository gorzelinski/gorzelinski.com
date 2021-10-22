import styled from "styled-components"
import { media } from "../utils"

export const Hr = styled.hr`
  margin: ${props => props.theme.space.xl} auto;
  background-color: ${props => props.theme.color.primary.base};
  border: 0;
  height: ${props => props.theme.space.xxs};
  width: ${props => props.theme.space.xxl};
  max-width: 62%;

  ${media.mobile`
    width: ${props => props.theme.space.xxxl};
  `}
`
