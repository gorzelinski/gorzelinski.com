import { useEffect, useRef } from 'react'

export function useScrollToHeading(activeID: string | null) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (activeID && containerRef.current) {
      const activeElement = containerRef.current.querySelector(
        `[href="#${activeID}"]`
      )
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        })
      }
    }
  }, [activeID])

  return containerRef
}
