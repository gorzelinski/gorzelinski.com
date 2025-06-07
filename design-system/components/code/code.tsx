'use server'
import { codeToHast } from 'shiki'
import { transformerMetaHighlight } from '@shikijs/transformers'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { CodeProps, PreElementProps, CodeElementProps } from './code.types'
import { isTerminal } from './code.helpers'
import { Pre, Code as CodeElement, PreWrapper } from './code.styles'
import { CodeHeader } from './code-header'
import { CodeTitle } from './code-title'
import { CodeLanguage } from './code-language'
import { codeTheme } from './code.theme'

export async function Code(props: CodeProps) {
  const { css, codeString, highlight, language, title } = props

  if (!codeString) return null

  const hast = await codeToHast(codeString, {
    lang: language,
    theme: codeTheme,
    transformers: [transformerMetaHighlight()],
    meta: { __raw: highlight }
  })

  return toJsxRuntime(hast, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: ({ children, ...preProps }: PreElementProps) => (
        <PreWrapper
          className={preProps.className}
          style={preProps.style}
          css={css}
        >
          <CodeHeader>
            {title ? <CodeTitle>{title}</CodeTitle> : null}
            <CodeLanguage>
              {isTerminal(language) ? '🔴  🟡  🟢' : language.toUpperCase()}
            </CodeLanguage>
          </CodeHeader>
          <Pre>{children}</Pre>
        </PreWrapper>
      ),
      code: ({ children, ...codeProps }: CodeElementProps) => (
        <CodeElement
          tabIndex={0}
          className={isTerminal(language) ? 'terminal' : undefined}
          {...codeProps}
        >
          {children}
        </CodeElement>
      )
    }
  })
}
