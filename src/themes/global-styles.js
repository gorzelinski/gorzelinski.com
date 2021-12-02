import { createGlobalStyle } from "styled-components"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/lora/400.css"
import "@fontsource/lora/600.css"
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
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
