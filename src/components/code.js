import React, { useContext } from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import github from "prism-react-renderer/themes/github"
import palenight from "prism-react-renderer/themes/palenight"

import { BlockCode } from "../elements"
import { ThemeContext } from "./theme-provider"

const CodeBlock = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const language = children.props.className.replace(/language-/, "") || ""
  const codeTheme = theme === "light" ? github : palenight

  return (
    <Highlight
      {...defaultProps}
      code={children.props.children}
      language={language}
      theme={codeTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <BlockCode
          className={className}
          style={{
            ...style,
          }}
        >
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span>{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
          <small>{language}</small>
        </BlockCode>
      )}
    </Highlight>
  )
}

export default CodeBlock
