import type { ReactNode } from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { ScrollProvider, useScroll } from '../scroll-provider'

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

const wrapper = ({ children }: { children: ReactNode }) => (
  <ScrollProvider>{children}</ScrollProvider>
)

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
    vi.restoreAllMocks()
  })

  it('returns up direction and 0 progress by default', () => {
    const { result } = renderHook(() => useScroll(), { wrapper })

    expect(result.current).toEqual({ direction: 'up', progress: 0 })
  })

  it('tracks direction and progress when scrolling down', () => {
    const { result } = renderHook(() => useScroll(), { wrapper })

    scrollTo(SCROLL_POSITIONS.half)

    expect(result.current).toEqual({ direction: 'down', progress: 50 })
  })

  it('returns up when scrolling up after down', () => {
    const { result } = renderHook(() => useScroll(), { wrapper })

    scrollTo(SCROLL_POSITIONS.half)
    expect(result.current.direction).toBe('down')

    scrollTo(SCROLL_POSITIONS.up)
    expect(result.current.direction).toBe('up')
  })

  it('clamps progress to 100', () => {
    const { result } = renderHook(() => useScroll(), { wrapper })

    scrollTo(SCROLL_POSITIONS.beyond)

    expect(result.current.progress).toBe(100)
  })

  it('serves every selector from a single shared listener', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')

    const { result } = renderHook(
      () => ({
        html: useScroll('html'),
        article: useScroll('article')
      }),
      { wrapper }
    )

    scrollTo(SCROLL_POSITIONS.half)

    const scrollListeners = addEventListenerSpy.mock.calls.filter(
      ([event]) => event === 'scroll'
    )

    expect(scrollListeners).toHaveLength(1)
    expect(result.current.html.progress).toBe(50)
    expect(result.current.article.progress).toBe(50)
    expect(document.querySelector).toHaveBeenCalledWith('article')
  })

  it('removes event listener and cancels animation frame on unmount', () => {
    const { unmount } = renderHook(() => useScroll(), { wrapper })

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    )
    expect(cancelAnimationFrameSpy).toHaveBeenCalled()
  })

  it('throws when used outside of a provider', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    expect(() => renderHook(() => useScroll())).toThrow(
      'useScroll must be used within a ScrollProvider'
    )

    consoleErrorSpy.mockRestore()
  })
})
