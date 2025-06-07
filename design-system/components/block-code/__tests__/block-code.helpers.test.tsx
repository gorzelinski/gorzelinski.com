import { describe, expect, it } from 'vitest'
import { isTerminal, preToCodeProps } from '../block-code.helpers'

describe('BlockCode helpers', () => {
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

  describe('isTerminal()', () => {
    it('returns true if the language is bash or shell', () => {
      expect(isTerminal('bash')).toBe(true)
      expect(isTerminal('shell')).toBe(true)
    })

    it('returns false if there is a different language', () => {
      expect(isTerminal('js')).toBe(false)
    })
  })
})
