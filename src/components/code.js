import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

import { code } from "../themes"
import { BlockCode, Small } from "../elements"

const CodeBlock = ({ children }) => {
  const language = children.props.className.replace(/language-/, "") || ""
  const isShell = language === "bash" || language === "shell"
  const metastring = children.props.metastring
  const title = metastring?.split("title=")[1]

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
          <div className="header">
            {title ? <Small className="title">{title}</Small> : null}
            <Small className="language">
              {isShell ? "🔴  🟡  🟢" : language.toUpperCase()}
            </Small>
          </div>
          <code>
            {tokens.slice(0, -1).map((line, i) => (
              <div className="line" key={i} {...getLineProps({ line, key: i })}>
                {isShell ? null : <span className="line-number">{i + 1}</span>}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </BlockCode>
      )}
    </Highlight>
  )
}

export default CodeBlock
