import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { debounce } from '../timing'

describe('timing', () => {
  describe('debounce()', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.clearAllTimers()
    })

    it('delays the function execution', () => {
      const fn = vi.fn()
      const debouncedFn = debounce(fn, 100)

      debouncedFn()
      expect(fn).not.toBeCalled()

      vi.advanceTimersByTime(100)
      expect(fn).toBeCalledTimes(1)
    })

    it('executes only once for multiple calls', () => {
      const fn = vi.fn()
      const debouncedFn = debounce(fn, 100)

      debouncedFn()
      debouncedFn()
      debouncedFn()
      expect(fn).not.toBeCalled()

      vi.advanceTimersByTime(100)
      expect(fn).toBeCalledTimes(1)
    })

    it('passes arguments to the function', () => {
      const fn = vi.fn()
      const debouncedFn = debounce(fn, 100)
      const args = ['test', 123]

      debouncedFn(...args)
      vi.advanceTimersByTime(100)

      expect(fn).toBeCalledWith(...args)
    })

    it('resets the timer on subsequent calls', () => {
      const fn = vi.fn()
      const debouncedFn = debounce(fn, 100)

      debouncedFn()
      vi.advanceTimersByTime(50)

      debouncedFn()
      vi.advanceTimersByTime(50)
      expect(fn).not.toBeCalled()

      vi.advanceTimersByTime(50)
      expect(fn).toBeCalledTimes(1)
    })
  })
})
