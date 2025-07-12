import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useDocumentDimensions } from '../use-document-dimensions'

describe('useDocumentDimensions', () => {
  let addEventListenerSpy: any
  let removeEventListenerSpy: any

  beforeEach(() => {
    addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns initial document dimensions', () => {
    const { result } = renderHook(() => useDocumentDimensions())

    expect(result.current).toEqual({
      width: document.body.clientWidth,
      height: document.body.clientHeight
    })
  })

  it('adds resize event listener on mount', () => {
    renderHook(() => useDocumentDimensions())

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )
  })

  it('removes resize event listener on unmount', () => {
    const { unmount } = renderHook(() => useDocumentDimensions())

    expect(removeEventListenerSpy).not.toHaveBeenCalled()

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    )
  })

  it('updates dimensions on window resize', () => {
    const { result } = renderHook(() => useDocumentDimensions())

    const initialDimensions = {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }

    expect(result.current).toEqual(initialDimensions)

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toEqual(initialDimensions)
  })

  it('handles multiple resize events', () => {
    const { result } = renderHook(() => useDocumentDimensions())

    const initialDimensions = {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }

    expect(result.current).toEqual(initialDimensions)

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toEqual(initialDimensions)

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toEqual(initialDimensions)
  })
})
