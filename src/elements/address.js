import styled from "styled-components"

// think about making it more abstract
export const Address = styled.address`
  font-style: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space.s};
  margin-bottom: ${props => props.theme.space.l};
`
