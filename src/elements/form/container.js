import styled from "styled-components"
import { media } from "../utils"

export const Form = styled.form`
  display: grid;
  gap: ${props => props.theme.space.s};

  ${media.mobile`
    grid-template-columns: minmax(min-content, 272px) min-content;
    justify-content: center;
  `}
`
