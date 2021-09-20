import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import palenight from "prism-react-renderer/themes/palenight"

import { BlockCode } from "../elements"

const CodeBlock = ({ children, className }) => {
  // delete optional chaining
  const language = className?.replace(/language-/, "")

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={palenight}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <BlockCode
          className={className}
          style={{
            ...style,
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </BlockCode>
      )}
    </Highlight>
  )
}

export default CodeBlock
