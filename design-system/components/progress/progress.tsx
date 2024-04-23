'use client'
import { useScrollProgress } from '@/hooks'
import { progress as progressStyles } from './progress.styles'
import { ProgressBar } from './progress-bar'

export const Progress = () => {
  const progress = useScrollProgress()

  return (
    <div
      className={progressStyles({
        opacity: progress < 5 || progress > 95 ? 'hidden' : 'visible'
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
