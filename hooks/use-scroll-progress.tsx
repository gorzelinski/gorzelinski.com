import type { ScrollProgressSelector } from '@/types'
import { useEffect, useRef, useState } from 'react'
import { getScrollProgress } from '@/lib'

export function useScrollProgress(selector: ScrollProgressSelector = 'html') {
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const animationFrame = useRef<number>(0)

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      setScrollProgress(getScrollProgress(selector))

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        animationFrame.current =
          window.requestAnimationFrame(updateScrollProgress)

        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.cancelAnimationFrame(animationFrame.current)
      window.removeEventListener('scroll', onScroll)
    }
  }, [selector])

  return scrollProgress
}
