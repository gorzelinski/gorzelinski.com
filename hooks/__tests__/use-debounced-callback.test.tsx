import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useDebouncedCallback } from '../use-debounced-callback'

describe('useDebouncedCallback', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  describe('debounced callback', () => {
    it('debounces function calls', () => {
      const mockFn = vi.fn()
      const { result } = renderHook(() => useDebouncedCallback(mockFn, 300))

      act(() => {
        result.current('arg1')
        result.current('arg2')
        result.current('arg3')
      })

      expect(mockFn).not.toHaveBeenCalled()

      act(() => {
        vi.advanceTimersByTime(300)
      })

      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith('arg3')
    })

    it('uses default wait time of 300ms', () => {
      const mockFn = vi.fn()
      const { result } = renderHook(() => useDebouncedCallback(mockFn))

      act(() => {
        result.current('test')
      })

      expect(mockFn).not.toHaveBeenCalled()

      act(() => {
        vi.advanceTimersByTime(300)
      })

      expect(mockFn).toHaveBeenCalledWith('test')
    })

    it('clears previous timeout when called again', () => {
      const mockFn = vi.fn()
      const { result } = renderHook(() => useDebouncedCallback(mockFn, 100))

      act(() => {
        result.current('first')
      })

      act(() => {
        vi.advanceTimersByTime(50)
      })

      act(() => {
        result.current('second')
      })

      act(() => {
        vi.advanceTimersByTime(100)
      })

      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith('second')
    })

    it('handles rapid successive calls correctly', () => {
      const mockFn = vi.fn()
      const { result } = renderHook(() => useDebouncedCallback(mockFn, 50))

      act(() => {
        for (let i = 0; i < 10; i++) {
          result.current(`call-${i}`)
        }
      })

      expect(mockFn).not.toHaveBeenCalled()

      act(() => {
        vi.advanceTimersByTime(50)
      })

      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith('call-9')
    })
  })

  describe('callback reference', () => {
    it('maintains function reference stability when dependencies are the same', () => {
      const mockFn = vi.fn()
      const { result, rerender } = renderHook(
        ({ wait }) => useDebouncedCallback(mockFn, wait),
        { initialProps: { wait: 100 } }
      )

      const firstCallback = result.current

      rerender({ wait: 100 })

      expect(result.current).toBe(firstCallback)
    })

    it('updates when function reference changes', () => {
      const mockFn1 = vi.fn()
      const mockFn2 = vi.fn()
      const { result, rerender } = renderHook(
        ({ fn }) => useDebouncedCallback(fn, 100),
        { initialProps: { fn: mockFn1 } }
      )

      const firstCallback = result.current

      rerender({ fn: mockFn2 })

      expect(result.current).not.toBe(firstCallback)
    })

    it('updates when wait time changes', () => {
      const mockFn = vi.fn()
      const { result, rerender } = renderHook(
        ({ wait }) => useDebouncedCallback(mockFn, wait),
        { initialProps: { wait: 100 } }
      )

      const firstCallback = result.current

      rerender({ wait: 200 })

      expect(result.current).not.toBe(firstCallback)
    })
  })

  describe('arguments and edge cases', () => {
    it('handles multiple arguments', () => {
      const mockFn = vi.fn()
      const { result } = renderHook(() => useDebouncedCallback(mockFn, 100))

      act(() => {
        result.current('arg1', 'arg2', 123)
      })

      act(() => {
        vi.advanceTimersByTime(100)
      })

      expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2', 123)
    })

    it('handles function with no arguments', () => {
      const mockFn = vi.fn()
      const { result } = renderHook(() => useDebouncedCallback(mockFn, 100))

      act(() => {
        result.current()
      })

      act(() => {
        vi.advanceTimersByTime(100)
      })

      expect(mockFn).toHaveBeenCalledWith()
    })

    it('handles zero wait time', () => {
      const mockFn = vi.fn()
      const { result } = renderHook(() => useDebouncedCallback(mockFn, 0))

      act(() => {
        result.current('test')
      })

      act(() => {
        vi.runAllTimers()
      })

      expect(mockFn).toHaveBeenCalledWith('test')
    })

    it('handles negative wait time', () => {
      const mockFn = vi.fn()
      const { result } = renderHook(() => useDebouncedCallback(mockFn, -100))

      act(() => {
        result.current('test')
      })

      act(() => {
        vi.runAllTimers()
      })

      expect(mockFn).toHaveBeenCalledWith('test')
    })
  })
})
