import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import palenight from "prism-react-renderer/themes/palenight"

import { tokens } from "../themes/tokens"

const CodeBlock = ({ children, className }) => {
  // delete optional chaining
  const language = className?.replace(/language-/, "")
  const padding = tokens.font.height.base
  const font = tokens.font.family.code
  const radius = tokens.space.xs

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={palenight}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: padding,
            borderRadius: radius,
            fontFamily: font,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
