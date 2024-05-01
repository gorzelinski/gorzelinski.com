import { preToCodeProps, isTerminal, inRange } from '../code.helpers'

describe('Code helpers', () => {
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

  describe('inRange()', () => {
    it('returns false if there is no range', () => {
      expect(inRange(undefined, 1)).toBe(false)
    })

    it('returns true if the number is the start', () => {
      expect(inRange([1], 1)).toBe(true)
    })

    it('returns true if the line is within the range', () => {
      expect(inRange([1, 3], 2)).toBe(true)
    })

    it('returns true if the line is the end of the range', () => {
      expect(inRange([1, 3], 3)).toBe(true)
    })

    it('returns false if the line is outside the range', () => {
      expect(inRange([1, 3], 4)).toBe(false)
    })
  })
})
