import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest'
import {
  getScrollDirection,
  getScrollProgress,
  isNavbarHidden
} from '../scroll'

describe('scroll', () => {
  describe('getScrollDirection()', () => {
    it('returns "down" when scrolling further down the page', () => {
      expect(getScrollDirection(100, 50)).toBe('down')
    })

    it('returns "up" when scrolling back up the page', () => {
      expect(getScrollDirection(50, 100)).toBe('up')
    })

    it('returns "up" when the position has not changed', () => {
      expect(getScrollDirection(100, 100)).toBe('up')
    })
  })

  describe('getScrollProgress()', () => {
    const SCROLL_DIMENSIONS = {
      elementHeight: 1000,
      windowHeight: 500
    } as const

    let mockElement: any
    let mockRoot: any

    beforeEach(() => {
      mockElement = {
        scrollHeight: SCROLL_DIMENSIONS.elementHeight,
        offsetTop: 0
      }
      mockRoot = { scrollTop: 0 }

      vi.stubGlobal('innerHeight', SCROLL_DIMENSIONS.windowHeight)
      Object.defineProperty(document, 'documentElement', {
        value: mockRoot,
        writable: true,
        configurable: true
      })
      vi.spyOn(document, 'querySelector').mockReturnValue(mockElement)
    })

    afterEach(() => {
      vi.unstubAllGlobals()
      vi.restoreAllMocks()
    })

    it('calculates the progress as a percentage', () => {
      mockRoot.scrollTop = 250

      expect(getScrollProgress('html')).toBe(50)
    })

    it('clamps negative progress to 0', () => {
      mockRoot.scrollTop = -100

      expect(getScrollProgress('html')).toBe(0)
    })

    it('clamps progress above 100 to 100', () => {
      mockRoot.scrollTop = 600

      expect(getScrollProgress('html')).toBe(100)
    })

    it('queries the provided selector', () => {
      getScrollProgress('article')

      expect(document.querySelector).toHaveBeenCalledWith('article')
    })

    it('returns 0 when the element is missing', () => {
      vi.spyOn(document, 'querySelector').mockReturnValue(null)

      expect(getScrollProgress('article')).toBe(0)
    })

    it('returns 0 when the element is not taller than the viewport', () => {
      mockElement.scrollHeight = SCROLL_DIMENSIONS.windowHeight
      mockRoot.scrollTop = 250

      expect(getScrollProgress('html')).toBe(0)
    })
  })

  describe('isNavbarHidden()', () => {
    it('hides when scrolling down past the threshold', () => {
      expect(isNavbarHidden('down', 10)).toBe(true)
    })

    it('stays visible when scrolling up', () => {
      expect(isNavbarHidden('up', 10)).toBe(false)
    })

    it('stays visible at the top even when scrolling down', () => {
      expect(isNavbarHidden('down', 5)).toBe(false)
    })
  })
})
