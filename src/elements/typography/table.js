import styled from "styled-components"

import { body } from "./body"

export const Table = styled.table`
  ${body}
  width: 100%;
  margin-bottom: ${props => props.theme.font.height.base};
  border-collapse: collapse;
  border-spacing: ${props => props.theme.space.xs};

  & thead tr th {
    border-bottom: ${props => props.theme.space.xxxs} solid
      ${props => props.theme.color.surface.shade500};
  }
`
