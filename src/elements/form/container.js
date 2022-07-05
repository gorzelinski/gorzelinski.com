import styled from "styled-components"

import { grid } from "../grid"

export const Form = styled.form.attrs(() => ({
  $grid: "sub",
}))`
  ${grid}
  align-items: start;
`
