import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useScrollProgress } from '../use-scroll-progress'

const SCROLL_DIMENSIONS = {
  elementHeight: 1000,
  windowHeight: 500,
  scrollableHeight: 500
} as const

const SCROLL_POSITIONS = {
  initial: 0,
  half: 250,
  negative: -100,
  beyond: 600
} as const

const RAF_ID = 1

describe('useScrollProgress', () => {
  let addEventListenerSpy: any
  let removeEventListenerSpy: any
  let requestAnimationFrameSpy: any
  let cancelAnimationFrameSpy: any
  let rafCallback: FrameRequestCallback | null = null
  let mockElement: any
  let mockRoot: any

  beforeEach(() => {
    mockElement = {
      scrollHeight: SCROLL_DIMENSIONS.elementHeight,
      offsetTop: 0
    }
    mockRoot = {
      scrollTop: SCROLL_POSITIONS.initial
    }

    vi.stubGlobal('innerHeight', SCROLL_DIMENSIONS.windowHeight)
    Object.defineProperty(document, 'documentElement', {
      value: mockRoot,
      writable: true
    })
    vi.spyOn(document, 'querySelector').mockReturnValue(mockElement)

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

  it('returns 0 by default', () => {
    const { result } = renderHook(() => useScrollProgress())

    expect(result.current).toBe(0)
  })

  it('calculates scroll progress correctly', () => {
    const { result } = renderHook(() => useScrollProgress())

    act(() => {
      mockRoot.scrollTop = SCROLL_POSITIONS.half
      window.dispatchEvent(new Event('scroll'))
      if (rafCallback) rafCallback(performance.now())
    })

    expect(result.current).toBe(50)
  })

  it('returns 0 for negative scroll progress', () => {
    const { result } = renderHook(() => useScrollProgress())

    act(() => {
      mockRoot.scrollTop = SCROLL_POSITIONS.negative
      window.dispatchEvent(new Event('scroll'))
      if (rafCallback) rafCallback(performance.now())
    })
    expect(result.current).toBe(0)
  })

  it('returns 100 for scroll progress above 100%', () => {
    const { result } = renderHook(() => useScrollProgress())

    act(() => {
      mockRoot.scrollTop = SCROLL_POSITIONS.beyond
      window.dispatchEvent(new Event('scroll'))
      if (rafCallback) rafCallback(performance.now())
    })
    expect(result.current).toBe(100)
  })

  it('works with article selector', () => {
    const { result } = renderHook(() => useScrollProgress('article'))

    act(() => {
      window.dispatchEvent(new Event('scroll'))
      if (rafCallback) rafCallback(performance.now())
    })

    expect(document.querySelector).toHaveBeenCalledWith('article')
    expect(result.current).toBe(0)
  })

  it('removes event listener and cancels animation frame on unmount', () => {
    const { unmount } = renderHook(() => useScrollProgress())

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    )
    expect(cancelAnimationFrameSpy).toHaveBeenCalled()
  })
})
