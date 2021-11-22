import React from "react"

import { getInitialTheme } from "./src/utils"

const ThemeScriptTag = () => {
  let codeToRunOnClient = `
        (function() {
            const getInitialTheme = ${getInitialTheme}

            const preferredTheme = getInitialTheme()
            const root = document.documentElement
            root.classList.add(preferredTheme)
        })();
    `
  return (
    <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}></script>
  )
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ThemeScriptTag key="theme-script-tag"></ThemeScriptTag>)
}
