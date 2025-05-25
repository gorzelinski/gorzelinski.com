'use server'
import { codeToHast } from 'shiki'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { CodeProps, PreElementProps, CodeElementProps } from './code.types'
import { isTerminal } from './code.helpers'
import { Pre, Code as CodeElement } from './code.styles'
import { CodeHeader } from './code-header'
import { CodeTitle } from './code-title'
import { CodeLanguage } from './code-language'
import { codeTheme } from './code.theme'

export async function Code(props: CodeProps) {
  const { css, codeString, language, title } = props

  if (!codeString) return null

  const hast = await codeToHast(codeString, {
    lang: language,
    theme: codeTheme
  })

  return toJsxRuntime(hast, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: ({ children, ...preProps }: PreElementProps) => (
        <Pre className={preProps.className} style={preProps.style} css={css}>
          <CodeHeader>
            {title ? <CodeTitle>{title}</CodeTitle> : null}
            <CodeLanguage>
              {isTerminal(language) ? '🔴  🟡  🟢' : language.toUpperCase()}
            </CodeLanguage>
          </CodeHeader>
          {children}
        </Pre>
      ),
      code: ({ children, ...codeProps }: CodeElementProps) => (
        <CodeElement
          className={isTerminal(language) ? 'terminal' : undefined}
          {...codeProps}
        >
          {children}
        </CodeElement>
      )
    }
  })
}
