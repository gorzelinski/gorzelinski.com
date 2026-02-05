import { describe, expect, it } from 'vitest'
import { isTerminal } from '../block-code.helpers'

describe('isTerminal()', () => {
  it('returns true if the language is bash or shell', () => {
    expect(isTerminal('bash')).toBe(true)
    expect(isTerminal('shell')).toBe(true)
  })

  it('returns false if there is a different language', () => {
    expect(isTerminal('js')).toBe(false)
  })
})
