import { createGlobalStyle } from "styled-components"

import "./normalize.css"
import "./tokens.css"
import "./light.css"
import "./dark.css"

const GlobalStyles = createGlobalStyle`
  :root {
    --scrollbar-color: var(--color-gray-80);
    --scrollbar-color-thumb: var(--color-gray-70);
    --scrollbar-border-radius: var(--border-radius-00);
    --scrollbar-width: var(--space-30);
    --scrollbar-height: var(--space-20);
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  ::selection {
    background-color: var(--color-primary-90);
    color: var(--color-primary-40);
  }
  ::-webkit-scrollbar {
    background-color: var(--scrollbar-color);
    width: var(--scrollbar-width);
  }
  ::-webkit-scrollbar:horizontal {
    border-radius: var(--scrollbar-border-radius);
    height: var(--scrollbar-height);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color-thumb);
    border-radius: var(--scrollbar-border-radius);
    &:hover, &:active {
      --scrollbar-color-thumb: var(--color-gray-60);
    }
  }
`

export default GlobalStyles
