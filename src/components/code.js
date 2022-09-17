import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

import { code } from "../themes"
import { BlockCode } from "../elements"

const CodeBlock = ({ children }) => {
  const language = children.props.className.replace(/language-/, "") || ""

  return (
    <Highlight
      {...defaultProps}
      code={children.props.children}
      language={language}
      theme={code}
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
