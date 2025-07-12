import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useReducedMotion } from '../use-reduced-motion'

describe('useReducedMotion', () => {
  let matchMediaMock: any
  let listeners: Record<string, Function[]>

  beforeEach(() => {
    listeners = { change: [] }
    matchMediaMock = vi.fn().mockImplementation((query) => {
      let matches = false

      return {
        matches,
        media: query,
        addEventListener: (event: string, cb: Function) => {
          listeners[event].push(cb)
        },
        removeEventListener: (event: string, cb: Function) => {
          listeners[event] = listeners[event].filter(
            (fn: Function) => fn !== cb
          )
        }
      }
    })

    vi.stubGlobal('matchMedia', matchMediaMock)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns false by default', () => {
    const { result } = renderHook(() => useReducedMotion())

    expect(result.current).toBe(false)
  })

  it('returns true if prefers-reduced-motion is set', () => {
    matchMediaMock.mockReturnValueOnce({
      matches: true,
      media: '(prefers-reduced-motion: reduce)',
      addEventListener: (event: string, cb: Function) => {
        listeners[event].push(cb)
      },
      removeEventListener: (event: string, cb: Function) => {
        listeners[event] = listeners[event].filter((fn: Function) => fn !== cb)
      }
    })

    const { result } = renderHook(() => useReducedMotion())

    expect(result.current).toBe(true)
  })

  it('updates value when media query changes', () => {
    let matches = false

    matchMediaMock.mockReturnValue({
      get matches() {
        return matches
      },
      media: '(prefers-reduced-motion: reduce)',
      addEventListener: (event: string, cb: Function) => {
        listeners[event].push(cb)
      },
      removeEventListener: (event: string, cb: Function) => {
        listeners[event] = listeners[event].filter((fn: Function) => fn !== cb)
      }
    })

    const { result } = renderHook(() => useReducedMotion())

    expect(result.current).toBe(false)

    act(() => {
      matches = true
      listeners.change.forEach((cb) => cb({ matches: true }))
    })

    expect(result.current).toBe(true)

    act(() => {
      matches = false
      listeners.change.forEach((cb) => cb({ matches: false }))
    })

    expect(result.current).toBe(false)
  })

  it('removes event listener on unmount', () => {
    const removeEventListener = vi.fn()

    matchMediaMock.mockReturnValue({
      matches: false,
      media: '(prefers-reduced-motion: reduce)',
      addEventListener: (event: string, cb: Function) => {
        listeners[event].push(cb)
      },
      removeEventListener
    })

    const { unmount } = renderHook(() => useReducedMotion())

    expect(removeEventListener).not.toHaveBeenCalled()

    unmount()

    expect(removeEventListener).toHaveBeenCalled()
  })
})
