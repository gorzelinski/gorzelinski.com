import { createGlobalStyle } from "styled-components"

import "./normalize.css"
import "./tokens.css"
import "./light.css"
import "./dark.css"

const GlobalStyles = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  ::selection {
    background-color: var(--color-primary-90);
    color: var(--color-primary-40);
  }
`

export default GlobalStyles
