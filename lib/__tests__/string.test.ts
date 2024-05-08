import { capitalize } from '../string'

describe('string', () => {
  describe('capitalize()', () => {
    it('capitalizes the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello')
    })
  })
})
