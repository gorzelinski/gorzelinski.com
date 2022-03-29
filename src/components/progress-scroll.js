import React, { useState, useEffect } from "react"

import { Progress, ProgressValue } from "../elements"

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
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <Progress data-testid="progress" progress={scrollTop}>
      <ProgressValue
        data-testid="progress-value"
        progress={scrollTop}
      ></ProgressValue>
    </Progress>
  )
}

export default ProgressScroll
