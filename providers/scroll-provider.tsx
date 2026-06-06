'use client'
import type {
  ScrollContextValue,
  ScrollProgressSelector,
  ScrollState
} from '@/types'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { getScrollDirection, getScrollProgress } from '@/lib'

const ScrollContext = createContext<ScrollContextValue | null>(null)

const initialScrollValue: ScrollContextValue = {
  direction: 'up',
  progress: {
    html: 0,
    article: 0
  }
}

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [scroll, setScroll] = useState<ScrollContextValue>(initialScrollValue)
  const animationFrame = useRef<number>(0)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScroll = () => {
      const currentScrollY = window.scrollY

      setScroll({
        direction: getScrollDirection(currentScrollY, lastScrollY),
        progress: {
          html: getScrollProgress('html'),
          article: getScrollProgress('article')
        }
      })

      lastScrollY = currentScrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        animationFrame.current = window.requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    updateScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.cancelAnimationFrame(animationFrame.current)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <ScrollContext.Provider value={scroll}>{children}</ScrollContext.Provider>
  )
}

export function useScroll(
  selector: ScrollProgressSelector = 'html'
): ScrollState {
  const scroll = useContext(ScrollContext)

  if (!scroll) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }

  return { direction: scroll.direction, progress: scroll.progress[selector] }
}
