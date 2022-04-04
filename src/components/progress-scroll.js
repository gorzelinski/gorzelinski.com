import React from "react"

import { Progress, ProgressValue } from "../elements"
import { useScrollProgress } from "../hooks"

const ProgressScroll = () => {
  const { progress } = useScrollProgress()

  return (
    <Progress data-testid="progress" progress={progress}>
      <ProgressValue
        data-testid="progress-value"
        progress={progress}
      ></ProgressValue>
    </Progress>
  )
}

export default ProgressScroll
