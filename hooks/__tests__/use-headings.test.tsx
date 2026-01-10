import { describe, it, expect, afterEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useHeadings } from '../use-headings'

const createHeading = (tag: 'h2' | 'h3' | 'h4', id: string) => {
  const el = document.createElement(tag)

  el.setAttribute('id', id)

  return el
}

const createTestSetup = () => {
  const article = document.createElement('article')
  document.body.appendChild(article)

  const observeMock = vi.fn()
  const unobserveMock = vi.fn()

  const observerMock = vi.fn(function (this: any, cb, _) {
    this.observe = observeMock
    this.unobserve = unobserveMock
    this.disconnect = vi.fn()
    this.trigger = (entries: any[]) => cb(entries)
  })

  vi.stubGlobal('IntersectionObserver', observerMock)

  return {
    article,
    observerMock: observerMock as any,
    observeMock,
    unobserveMock
  }
}

describe('useHeadings', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.unstubAllGlobals()
    vi.clearAllMocks()
  })

  describe('detection', () => {
    it('returns empty tocTree and null activeID when no headings exist', () => {
      createTestSetup()

      const { result } = renderHook(() => useHeadings())

      expect(result.current.tocTree).toEqual([])
      expect(result.current.activeID).toBeNull()
    })

    it('detects headings and sets first heading as activeID', () => {
      const { article } = createTestSetup()

      const h2 = createHeading('h2', 'foo')
      const h3 = createHeading('h3', 'bar')

      article.appendChild(h2)
      article.appendChild(h3)

      const { result } = renderHook(() => useHeadings())

      expect(result.current.tocTree.length).toBe(1)
      expect(result.current.tocTree[0].heading.id).toBe('foo')
      expect(result.current.tocTree[0].children.length).toBe(1)
      expect(result.current.tocTree[0].children[0].heading.id).toBe('bar')
      expect(result.current.activeID).toBe('foo')
    })

    it('detects different heading levels (h2, h3, h4)', () => {
      const { article } = createTestSetup()

      const h2 = createHeading('h2', 'h2-heading')
      const h3 = createHeading('h3', 'h3-heading')
      const h4 = createHeading('h4', 'h4-heading')

      article.appendChild(h2)
      article.appendChild(h3)
      article.appendChild(h4)

      const { result } = renderHook(() => useHeadings())

      expect(result.current.tocTree.length).toBe(1)
      expect(result.current.tocTree[0].heading.id).toBe('h2-heading')
      expect(result.current.tocTree[0].children.length).toBe(1)
      expect(result.current.tocTree[0].children[0].heading.id).toBe(
        'h3-heading'
      )
      expect(result.current.tocTree[0].children[0].children.length).toBe(1)
      expect(result.current.tocTree[0].children[0].children[0].heading.id).toBe(
        'h4-heading'
      )
      expect(result.current.activeID).toBe('h2-heading')
    })

    it('only detects headings inside article element', () => {
      const { article } = createTestSetup()

      const h2Inside = createHeading('h2', 'inside')
      const h2Outside = createHeading('h2', 'outside')

      article.appendChild(h2Inside)
      document.body.appendChild(h2Outside)

      const { result } = renderHook(() => useHeadings())

      expect(result.current.tocTree.length).toBe(1)
      expect(result.current.tocTree[0].heading.id).toBe('inside')
      expect(result.current.activeID).toBe('inside')
    })

    it('handles headings not found in DOM gracefully', () => {
      const { article } = createTestSetup()

      const h2 = createHeading('h2', 'foo')

      article.appendChild(h2)
      document.getElementById = vi.fn(() => null)

      const { result } = renderHook(() => useHeadings())

      expect(result.current.tocTree.length).toBe(1)
      expect(result.current.tocTree[0].heading.id).toBe('foo')
      expect(result.current.activeID).toBe('foo')
    })
  })

  describe('intersection and scroll direction', () => {
    it('updates activeID when a heading becomes intersecting', () => {
      const { article, observerMock } = createTestSetup()

      const h2 = createHeading('h2', 'foo')
      const h3 = createHeading('h3', 'bar')

      article.appendChild(h2)
      article.appendChild(h3)

      document.getElementById = vi.fn((id) =>
        id === 'foo' ? h2 : id === 'bar' ? h3 : null
      )

      const { result } = renderHook(() => useHeadings())
      const observer = observerMock.mock.instances[0]

      act(() => {
        observer.trigger([
          {
            target: h3,
            isIntersecting: true,
            intersectionRatio: 1,
            boundingClientRect: {},
            rootBounds: {},
            intersectionRect: {},
            time: 0
          }
        ])
      })

      expect(result.current.activeID).toBe('bar')
    })

    it('updates activeID to previous heading when scrolling up and current leaves view', async () => {
      const { article, observerMock } = createTestSetup()

      const h2 = createHeading('h2', 'foo')
      const h3 = createHeading('h3', 'bar')

      article.appendChild(h2)
      article.appendChild(h3)

      document.getElementById = vi.fn((id) =>
        id === 'foo' ? h2 : id === 'bar' ? h3 : null
      )

      const { result } = renderHook(() => useHeadings())
      const observer = observerMock.mock.instances[0]

      window.scrollY = 100

      await act(async () => {
        observer.trigger([
          {
            target: h3,
            isIntersecting: true,
            intersectionRatio: 1,
            boundingClientRect: {},
            rootBounds: {},
            intersectionRect: {},
            time: 0
          }
        ])
        await Promise.resolve()
      })

      expect(result.current.activeID).toBe('bar')

      window.scrollY = 50

      await act(async () => {
        observer.trigger([
          {
            target: h3,
            isIntersecting: false,
            intersectionRatio: 0,
            boundingClientRect: {},
            rootBounds: {},
            intersectionRect: {},
            time: 0
          }
        ])
        await Promise.resolve()
      })

      expect(result.current.activeID).toBe('foo')
    })

    it('does not update activeID when scrolling up and no previous heading exists', async () => {
      const { article, observerMock } = createTestSetup()

      const h2 = createHeading('h2', 'foo')

      article.appendChild(h2)
      document.getElementById = vi.fn((id) => (id === 'foo' ? h2 : null))

      const { result } = renderHook(() => useHeadings())
      const observer = observerMock.mock.instances[0]

      window.scrollY = 100

      await act(async () => {
        observer.trigger([
          {
            target: h2,
            isIntersecting: true,
            intersectionRatio: 1,
            boundingClientRect: {},
            rootBounds: {},
            intersectionRect: {},
            time: 0
          }
        ])
        await Promise.resolve()
      })

      expect(result.current.activeID).toBe('foo')

      window.scrollY = 50

      await act(async () => {
        observer.trigger([
          {
            target: h2,
            isIntersecting: false,
            intersectionRatio: 0,
            boundingClientRect: {},
            rootBounds: {},
            intersectionRect: {},
            time: 0
          }
        ])
        await Promise.resolve()
      })

      expect(result.current.activeID).toBe('foo')
    })

    it('does not update activeID when scrolling down and heading leaves view', async () => {
      const { article, observerMock } = createTestSetup()

      const h2 = createHeading('h2', 'foo')
      const h3 = createHeading('h3', 'bar')

      article.appendChild(h2)
      article.appendChild(h3)

      document.getElementById = vi.fn((id) =>
        id === 'foo' ? h2 : id === 'bar' ? h3 : null
      )

      const { result } = renderHook(() => useHeadings())
      const observer = observerMock.mock.instances[0]

      window.scrollY = 100

      await act(async () => {
        observer.trigger([
          {
            target: h3,
            isIntersecting: true,
            intersectionRatio: 1,
            boundingClientRect: {},
            rootBounds: {},
            intersectionRect: {},
            time: 0
          }
        ])
        await Promise.resolve()
      })

      expect(result.current.activeID).toBe('bar')

      window.scrollY = 150

      await act(async () => {
        observer.trigger([
          {
            target: h3,
            isIntersecting: false,
            intersectionRatio: 0,
            boundingClientRect: {},
            rootBounds: {},
            intersectionRect: {},
            time: 0
          }
        ])
        await Promise.resolve()
      })

      expect(result.current.activeID).toBe('bar')
    })
  })

  describe('lifecycle', () => {
    it('observes and unobserves headings on mount and unmount', () => {
      const { article, observeMock, unobserveMock } = createTestSetup()

      const h2 = createHeading('h2', 'foo')
      const h3 = createHeading('h3', 'bar')

      article.appendChild(h2)
      article.appendChild(h3)

      document.getElementById = vi.fn((id) =>
        id === 'foo' ? h2 : id === 'bar' ? h3 : null
      )

      const { unmount } = renderHook(() => useHeadings())

      expect(observeMock).toHaveBeenCalledTimes(2)

      unmount()

      expect(unobserveMock).toHaveBeenCalledTimes(2)
    })

    it('handles missing elements gracefully during cleanup', () => {
      const { article, observeMock, unobserveMock } = createTestSetup()

      const h2 = createHeading('h2', 'foo')
      const h3 = createHeading('h3', 'bar')

      article.appendChild(h2)
      article.appendChild(h3)

      const { unmount } = renderHook(() => useHeadings())

      expect(observeMock).toHaveBeenCalledTimes(2)

      const getElementByIdSpy = vi.spyOn(document, 'getElementById')
      getElementByIdSpy.mockImplementation(() => null)

      unmount()

      expect(unobserveMock).toHaveBeenCalledTimes(0)
    })
  })
})
