import { setToLS, getFromLS } from '../local-storage'

describe('local storage', () => {
  describe('setToLS()', () => {
    it('sets a key-value pair in local storage', () => {
      localStorage.clear()

      setToLS('key', 'value')

      expect(localStorage.getItem('key')).toBe(JSON.stringify('value'))
    })
  })

  describe('getFromLS()', () => {
    it('gets a value from local storage', () => {
      localStorage.clear()
      localStorage.setItem('key', JSON.stringify('value'))

      expect(getFromLS('key')).toBe('value')
    })

    it('returns undefined if key does not exist', () => {
      localStorage.clear()

      expect(getFromLS('key')).toBe(undefined)
    })
  })
})
