import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"

import { code } from "../themes"
import { BlockCode, Small } from "../elements"

const CodeBlock = ({ children }) => {
  const language = children.props.className.replace(/language-/, "") || ""
  const isShell = language === "bash" || language === "shell"
  const metastring = children.props.metastring
  const [highlight, title] = metastring ? metastring.split("title=") : ["", ""]
  const [leftBound, rightBound] = highlight
    ? highlight.replace(/[{}]/g, "").split(",")
    : [0, 0]

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
            {tokens.slice(0, -1).map((line, i) => {
              const lineNumber = i + 1

              return (
                <div
                  data-testid={`line ${
                    parseInt(leftBound) <= lineNumber &&
                    lineNumber <= parseInt(rightBound)
                      ? "highlight"
                      : ""
                  }`}
                  key={i}
                  {...getLineProps({ line, key: i })}
                >
                  {isShell ? null : (
                    <span className="line-number">{lineNumber}</span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </code>
        </BlockCode>
      )}
    </Highlight>
  )
}

export default CodeBlock
