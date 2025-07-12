import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useReducedMotion } from '../use-reduced-motion'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

const createMatchMediaMock = (
  listeners: Record<string, Function[]>,
  removeEventListenerMock = vi.fn()
) => {
  return vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    addEventListener: (event: string, cb: Function) => {
      listeners[event].push(cb)
    },
    removeEventListener: removeEventListenerMock
  }))
}

const triggerMotionChange = (
  listeners: Record<string, Function[]>,
  matches: boolean
) => {
  act(() => {
    listeners.change.forEach((cb) => cb({ matches }))
  })
}

describe('useReducedMotion', () => {
  let matchMediaMock: ReturnType<typeof vi.fn>
  let listeners: Record<string, Function[]>

  beforeEach(() => {
    listeners = { change: [] }

    matchMediaMock = createMatchMediaMock(listeners)
    vi.stubGlobal('matchMedia', matchMediaMock)
    vi.clearAllMocks()
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
      media: REDUCED_MOTION_QUERY,
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
      media: REDUCED_MOTION_QUERY,
      addEventListener: (event: string, cb: Function) => {
        listeners[event].push(cb)
      },
      removeEventListener: (event: string, cb: Function) => {
        listeners[event] = listeners[event].filter((fn: Function) => fn !== cb)
      }
    })

    const { result } = renderHook(() => useReducedMotion())

    expect(result.current).toBe(false)

    triggerMotionChange(listeners, true)

    expect(result.current).toBe(true)

    triggerMotionChange(listeners, false)

    expect(result.current).toBe(false)
  })

  it('removes event listener on unmount', () => {
    const removeEventListenerMock = vi.fn()
    const customMatchMediaMock = createMatchMediaMock(
      listeners,
      removeEventListenerMock
    )

    vi.stubGlobal('matchMedia', customMatchMediaMock)

    const { unmount } = renderHook(() => useReducedMotion())

    expect(removeEventListenerMock).not.toHaveBeenCalled()

    unmount()

    expect(removeEventListenerMock).toHaveBeenCalled()
  })
})
