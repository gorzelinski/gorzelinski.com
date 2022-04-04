import { useState, useEffect } from "react"

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled =
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100
      setProgress(scrolled)
    }

    const handleScroll = () => {
      window.requestAnimationFrame(updateScrollProgress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [progress])

  return { progress }
}
