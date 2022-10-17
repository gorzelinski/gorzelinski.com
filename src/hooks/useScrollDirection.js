import { useState, useEffect, useRef } from "react"

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("")
  const animationFrame = useRef()

  useEffect(() => {
    const threshold = 56
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      setScrollDirection(
        scrollY < threshold ? "" : scrollY > lastScrollY ? "down" : "up"
      )
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        animationFrame.current = window.requestAnimationFrame(
          updateScrollDirection
        )
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.cancelAnimationFrame(animationFrame.current)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollDirection])

  return scrollDirection
}
