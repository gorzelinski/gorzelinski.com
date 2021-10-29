import styled from "styled-components"

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${props => props.theme.space.xxxl}, 100%), 1fr)
  );
  gap: ${props => props.theme.space.s};
`
