import React from "react"

const ThemeScriptTag = () => {
  let codeToRunOnClient = `
  (function () {
    try {
      function getInitialTheme() {
        const savedPreference = window.localStorage.getItem("theme");
        const hasSavedPreference = typeof savedPreference === "string";
        if (hasSavedPreference) {
          return JSON.parse(savedPreference);
        }
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        const hasOsPreference = typeof mql.matches === "boolean";
        if (hasOsPreference) {
          return mql.matches ? "dark" : "light";
        }
        return "light";
      }
      const preferredTheme = getInitialTheme();
      document.documentElement.classList.add(preferredTheme);
    } catch (e) {}
  })();`

  return (
    <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}></script>
  )
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<ThemeScriptTag key="theme-script-tag"></ThemeScriptTag>)
}
