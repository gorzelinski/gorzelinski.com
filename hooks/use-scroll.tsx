import type { ScrollProgressSelector, ScrollState } from '@/types'
import { useEffect, useRef, useState } from 'react'
import { getScrollDirection, getScrollProgress } from '@/lib'

export function useScroll(
  selector: ScrollProgressSelector = 'html'
): ScrollState {
  const [scroll, setScroll] = useState<ScrollState>({
    direction: 'up',
    progress: 0
  })
  const animationFrame = useRef<number>(0)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScroll = () => {
      const currentScrollY = window.scrollY

      setScroll({
        direction: getScrollDirection(currentScrollY, lastScrollY),
        progress: getScrollProgress(selector)
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

    window.addEventListener('scroll', onScroll)
    return () => {
      window.cancelAnimationFrame(animationFrame.current)
      window.removeEventListener('scroll', onScroll)
    }
  }, [selector])

  return scroll
}
