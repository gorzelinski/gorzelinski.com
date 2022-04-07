import { useState, useEffect, useRef } from "react"

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const animationFrame = useRef()

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      const scrolled =
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100
      setProgress(scrolled)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        animationFrame.current =
          window.requestAnimationFrame(updateScrollProgress)
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.cancelAnimationFrame(animationFrame.current)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [progress])

  return { progress }
}
