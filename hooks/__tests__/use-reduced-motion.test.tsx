import { renderHook } from '@testing-library/react'
import { useReducedMotion } from '../use-reduced-motion'

describe('useReducedMotion()', () => {
  it('returns true when the user has reduced motion enabled', () => {
    const matchMediaMock = jest.fn().mockReturnValue({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    })
    window.matchMedia = matchMediaMock

    const { result } = renderHook(() => useReducedMotion())

    expect(result.current).toBe(true)
  })

  it('returns false when the user does not have reduced motion enabled', () => {
    const matchMediaMock = jest.fn().mockReturnValue({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    })
    window.matchMedia = matchMediaMock

    const { result } = renderHook(() => useReducedMotion())

    expect(result.current).toBe(false)
  })

  it('updates the value when the user changes their preference', () => {
    const matchMediaMock = jest.fn().mockReturnValue({
      matches: false,
      addEventListener: jest.fn().mockImplementationOnce((_, cb) => {
        cb({ matches: true })
      }),
      removeEventListener: jest.fn()
    })
    window.matchMedia = matchMediaMock

    const { result } = renderHook(() => useReducedMotion())

    expect(result.current).toBe(true)
    expect(matchMediaMock().addEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function)
    )
  })

  it('removes the event listener when the component is unmounted', () => {
    const matchMediaMock = jest.fn().mockReturnValue({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    })
    window.matchMedia = matchMediaMock

    const { result, unmount } = renderHook(() => useReducedMotion())

    expect(result.current).toBe(false)

    unmount()

    expect(matchMediaMock().removeEventListener).toHaveBeenCalled()
  })
})
