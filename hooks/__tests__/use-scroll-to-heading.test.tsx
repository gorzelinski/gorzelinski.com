import { describe, it, expect, afterEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useScrollToHeading } from '../use-scroll-to-heading'

const createTestSetup = () => {
  const querySelectorMock = vi.fn()
  const scrollIntoViewMock = vi.fn()

  const container = document.createElement('nav')
  container.querySelector = querySelectorMock

  const link = document.createElement('a') as HTMLElement & {
    scrollIntoView: Function
  }
  link.setAttribute('href', '#foo')
  link.scrollIntoView = scrollIntoViewMock

  return {
    container,
    link,
    querySelectorMock,
    scrollIntoViewMock
  }
}

describe('useScrollToHeading', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('returns a ref object', () => {
    const { result } = renderHook(() => useScrollToHeading('foo'))

    expect(result.current).toHaveProperty('current')
  })

  it('calls scrollIntoView on the active heading link', () => {
    const { container, link, querySelectorMock, scrollIntoViewMock } =
      createTestSetup()

    querySelectorMock.mockReturnValue(link)

    const { result, rerender } = renderHook(
      ({ id }) => useScrollToHeading(id),
      {
        initialProps: { id: null as string | null }
      }
    )

    act(() => {
      const ref = result.current as React.MutableRefObject<HTMLElement | null>
      ref.current = container
    })

    rerender({ id: 'foo' })

    expect(querySelectorMock).toHaveBeenCalledWith('[href="#foo"]')
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    })
  })

  it('does nothing if activeID is null', () => {
    const { container, querySelectorMock } = createTestSetup()

    querySelectorMock.mockClear()

    const { result } = renderHook(() => useScrollToHeading(null))

    act(() => {
      const ref = result.current as React.MutableRefObject<HTMLElement | null>
      ref.current = container
    })

    expect(querySelectorMock).not.toHaveBeenCalled()
  })

  it('does nothing if element is not found', () => {
    const { container, querySelectorMock, scrollIntoViewMock } =
      createTestSetup()

    querySelectorMock.mockReturnValue(null)

    const { result, rerender } = renderHook(
      ({ id }) => useScrollToHeading(id),
      {
        initialProps: { id: null as string | null }
      }
    )

    act(() => {
      const ref = result.current as React.MutableRefObject<HTMLElement | null>
      ref.current = container
    })

    rerender({ id: 'foo' })

    expect(scrollIntoViewMock).not.toHaveBeenCalled()
  })

  it('does nothing if ref is not attached', () => {
    const { rerender } = renderHook(({ id }) => useScrollToHeading(id), {
      initialProps: { id: null as string | null }
    })

    rerender({ id: 'foo' })

    expect(() => {}).not.toThrow()
  })
})
