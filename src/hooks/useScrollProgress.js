import { useState, useEffect, useRef } from "react"

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const animationFrame = useRef()

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      const article = document.getElementById("article")
      if (article) {
        const root = document.documentElement
        const scrolled =
          ((root.scrollTop - article.offsetTop) /
            (article.scrollHeight - root.clientHeight)) *
          100
        setProgress(scrolled < 0 ? 0 : scrolled > 100 ? 100 : scrolled)
      }
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
