'use server'
import { codeToHast } from 'shiki'
import { transformerMetaHighlight } from '@shikijs/transformers'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import {
  BlockCodeProps,
  PreElementProps,
  CodeElementProps
} from './block-code.types'
import { isTerminal } from './block-code.helpers'
import { PreWrapper } from './pre-wrapper'
import { BlockCodeHeader } from './block-code-header'
import { BlockCodeTitle } from './block-code-title'
import { BlockCodeLanguage } from './block-code-language'
import { Pre } from './pre'
import { Code } from './code'
import { codeTheme } from './code.theme'

export async function BlockCode(props: BlockCodeProps) {
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
          <BlockCodeHeader>
            {title ? <BlockCodeTitle>{title}</BlockCodeTitle> : null}
            <BlockCodeLanguage>
              {isTerminal(language) ? '🔴  🟡  🟢' : language.toUpperCase()}
            </BlockCodeLanguage>
          </BlockCodeHeader>
          <Pre tabIndex={0}>{children}</Pre>
        </PreWrapper>
      ),
      code: ({ children, ...codeProps }: CodeElementProps) => (
        <Code
          className={isTerminal(language) ? 'terminal' : undefined}
          {...codeProps}
        >
          {children}
        </Code>
      )
    }
  })
}
