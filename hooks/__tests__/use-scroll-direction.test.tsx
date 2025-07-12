import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useScrollDirection } from '../use-scroll-direction'

const SCROLL_POSITIONS = {
  initial: 0,
  down: 100,
  up: 50
} as const

const RAF_ID = 1

describe('useScrollDirection', () => {
  let addEventListenerSpy: any
  let removeEventListenerSpy: any
  let requestAnimationFrameSpy: any
  let cancelAnimationFrameSpy: any
  let scrollY = 0
  let rafCallback: FrameRequestCallback | null = null

  beforeEach(() => {
    scrollY = SCROLL_POSITIONS.initial

    vi.stubGlobal('scrollY', SCROLL_POSITIONS.initial)

    Object.defineProperty(window, 'scrollY', {
      get: () => scrollY,
      set: (v) => {
        scrollY = v
      }
    })

    addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    requestAnimationFrameSpy = vi
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb) => {
        rafCallback = cb
        return RAF_ID
      })
    cancelAnimationFrameSpy = vi.spyOn(window, 'cancelAnimationFrame')

    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns up by default', () => {
    const { result } = renderHook(() => useScrollDirection())

    expect(result.current).toBe('up')
  })

  it('returns down when scrolling down', () => {
    const { result } = renderHook(() => useScrollDirection())

    act(() => {
      scrollY = SCROLL_POSITIONS.down

      window.dispatchEvent(new Event('scroll'))

      if (rafCallback) rafCallback(performance.now())
    })

    expect(result.current).toBe('down')
  })

  it('returns up when scrolling up after down', () => {
    const { result } = renderHook(() => useScrollDirection())

    act(() => {
      scrollY = SCROLL_POSITIONS.down

      window.dispatchEvent(new Event('scroll'))

      if (rafCallback) rafCallback(performance.now())
    })

    expect(result.current).toBe('down')

    act(() => {
      scrollY = SCROLL_POSITIONS.up

      window.dispatchEvent(new Event('scroll'))

      if (rafCallback) rafCallback(performance.now())
    })

    expect(result.current).toBe('up')
  })

  it('removes event listener and cancels animation frame on unmount', () => {
    const { unmount } = renderHook(() => useScrollDirection())

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    )
    expect(cancelAnimationFrameSpy).toHaveBeenCalled()
  })
})
