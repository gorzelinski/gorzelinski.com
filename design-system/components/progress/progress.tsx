'use client'
import type { ProgressProps } from './progress.types'
import { useScroll } from '@/providers'
import { progress as progressStyles } from './progress.styles'
import { ProgressBar } from './progress-bar'

export const Progress = ({ selector }: ProgressProps) => {
  const { progress } = useScroll(selector)

  return (
    <div
      aria-hidden="true"
      data-testid="progress"
      className={progressStyles({
        opacity: progress < 1 || progress > 99 ? 'hidden' : 'visible'
      })}
    >
      <ProgressBar
        style={{
          width: `${progress.toFixed(2)}%`
        }}
      />
    </div>
  )
}
