import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useScroll } from '../use-scroll'

const SCROLL_DIMENSIONS = {
  elementHeight: 1000,
  windowHeight: 500
} as const

const SCROLL_POSITIONS = {
  initial: 0,
  half: 250,
  up: 50,
  beyond: 600
} as const

const RAF_ID = 1

describe('useScroll', () => {
  let removeEventListenerSpy: any
  let cancelAnimationFrameSpy: any
  let rafCallback: FrameRequestCallback | null = null
  let scrollY = 0
  let mockElement: any
  let mockRoot: any

  const scrollTo = (position: number) => {
    act(() => {
      scrollY = position
      mockRoot.scrollTop = position
      window.dispatchEvent(new Event('scroll'))
      if (rafCallback) rafCallback(performance.now())
    })
  }

  beforeEach(() => {
    scrollY = SCROLL_POSITIONS.initial
    mockElement = {
      scrollHeight: SCROLL_DIMENSIONS.elementHeight,
      offsetTop: 0
    }
    mockRoot = { scrollTop: SCROLL_POSITIONS.initial }

    Object.defineProperty(window, 'scrollY', {
      get: () => scrollY,
      set: (value) => {
        scrollY = value
      },
      configurable: true
    })
    vi.stubGlobal('innerHeight', SCROLL_DIMENSIONS.windowHeight)
    Object.defineProperty(document, 'documentElement', {
      value: mockRoot,
      writable: true,
      configurable: true
    })
    vi.spyOn(document, 'querySelector').mockReturnValue(mockElement)

    removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      rafCallback = cb
      return RAF_ID
    })
    cancelAnimationFrameSpy = vi.spyOn(window, 'cancelAnimationFrame')

    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns up direction and 0 progress by default', () => {
    const { result } = renderHook(() => useScroll())

    expect(result.current).toEqual({ direction: 'up', progress: 0 })
  })

  it('tracks direction and progress when scrolling down', () => {
    const { result } = renderHook(() => useScroll())

    scrollTo(SCROLL_POSITIONS.half)

    expect(result.current).toEqual({ direction: 'down', progress: 50 })
  })

  it('returns up when scrolling up after down', () => {
    const { result } = renderHook(() => useScroll())

    scrollTo(SCROLL_POSITIONS.half)
    expect(result.current.direction).toBe('down')

    scrollTo(SCROLL_POSITIONS.up)
    expect(result.current.direction).toBe('up')
  })

  it('clamps progress to 100', () => {
    const { result } = renderHook(() => useScroll())

    scrollTo(SCROLL_POSITIONS.beyond)

    expect(result.current.progress).toBe(100)
  })

  it('measures progress against the provided selector', () => {
    renderHook(() => useScroll('article'))

    scrollTo(SCROLL_POSITIONS.half)

    expect(document.querySelector).toHaveBeenCalledWith('article')
  })

  it('removes event listener and cancels animation frame on unmount', () => {
    const { unmount } = renderHook(() => useScroll())

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    )
    expect(cancelAnimationFrameSpy).toHaveBeenCalled()
  })
})
