'use client'
import { useScrollProgress } from '@/hooks'
import { ProgressProps } from './progress.types'
import { progress as progressStyles } from './progress.styles'
import { ProgressBar } from './progress-bar'

export const Progress = ({ selector }: ProgressProps) => {
  const progress = useScrollProgress(selector)

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
