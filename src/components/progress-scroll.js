import React, { useState, useEffect } from "react"

import { Progress } from "../elements"

const ProgressScroll = () => {
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100

    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Progress
      data-testid="progress"
      style={{ opacity: `${scrollTop < 10 || scrollTop > 85 ? 0 : 1}` }}
    >
      <div
        data-testid="progress-thumb"
        style={{ height: `${scrollTop}%` }}
      ></div>
    </Progress>
  )
}

export default ProgressScroll
