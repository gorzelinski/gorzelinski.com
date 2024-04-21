import { useEffect, useRef, useState } from 'react'

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const animationFrame = useRef<number>(0)

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const currentScrollY = window.scrollY
      const scrollProgress = (currentScrollY / scrollableHeight) * 100

      setScrollProgress(scrollProgress)

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
  }, [])

  return scrollProgress
}
