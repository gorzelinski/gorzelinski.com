import styled from "styled-components"

export const Hr = styled.hr`
  background-color: ${props => props.theme.color.surface.shade200};
  border: 0;
  height: ${props => props.theme.space.xxs};
`
