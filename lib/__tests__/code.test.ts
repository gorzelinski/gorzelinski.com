import { describe, expect, it } from 'vitest'
import { preToCodeProps } from '../code'

describe('preToCodeProps()', () => {
  it('returns the correct language and codeString', () => {
    const preProps = {
      props: {
        className: 'language-js',
        children: ' const foo = "bar" '
      }
    }

    const result = preToCodeProps(preProps)

    expect(result).toEqual({
      language: 'js',
      codeString: 'const foo = "bar"'
    })
  })
})
