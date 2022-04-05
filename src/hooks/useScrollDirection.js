import { useState, useEffect } from "react"

export const useScrollDirection = (threshold = 0) => {
  const [scrollDirection, setScrollDirection] = useState("down")

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDirection(
        scrollY > lastScrollY || scrollY < threshold ? "down" : "up"
      )
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollDirection, threshold])

  return { scrollDirection }
}