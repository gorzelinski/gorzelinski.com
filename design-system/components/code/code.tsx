'use client'
import { Highlight, Prism } from 'prism-react-renderer'
import { CodeProps } from './code.types'
import { codeTheme } from './code.theme'
import { inRange, isTerminal } from './code.helpers'
import { Pre, Code as CodeElement } from './code.styles'
import { CodeHeader } from './code-header'
import { CodeTitle } from './code-title'
import { CodeLanguage } from './code-language'
import { CodeLine } from './code-line'
import { CodeLineNumber } from './code-line-number'
import { CodeToken } from './code-token'

// @ts-ignore
/* c8 ignore start */
;(typeof global !== 'undefined' ? global : window).Prism = Prism
require('prismjs/components/prism-java')
/* c8 ignore end */

export const Code = ({
  css,
  codeString,
  language,
  title,
  highlight
}: CodeProps) => {
  if (!codeString) return null

  return (
    <Highlight theme={codeTheme} code={codeString} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={{ ...style }} css={css}>
          <CodeHeader>
            {title ? <CodeTitle>{title}</CodeTitle> : null}
            <CodeLanguage>
              {isTerminal(language) ? '🔴  🟡  🟢' : language.toUpperCase()}
            </CodeLanguage>
          </CodeHeader>
          <CodeElement tabIndex={0}>
            {tokens.map((line, i) => (
              <CodeLine
                key={i}
                backgroundColor={
                  inRange(highlight, i + 1) ? 'highlight' : 'default'
                }
                {...getLineProps({ line })}
              >
                {isTerminal(language) ? null : (
                  <CodeLineNumber
                    color={inRange(highlight, i + 1) ? 'highlight' : 'default'}
                  >
                    {i + 1}
                  </CodeLineNumber>
                )}
                {line.map((token, key) => (
                  <CodeToken key={key} {...getTokenProps({ token })} />
                ))}
              </CodeLine>
            ))}
          </CodeElement>
        </Pre>
      )}
    </Highlight>
  )
}
