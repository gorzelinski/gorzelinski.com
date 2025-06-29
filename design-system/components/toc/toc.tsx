'use client'
import { useHeadings, useScrollProgress, useScrollToHeading } from '@/hooks'
import { TocProps } from './toc.types'
import { toc } from './toc.styles'
import { TocElement } from './toc-element'

export const Toc = ({ ariaLabel }: TocProps) => {
  const { headings, activeID } = useHeadings()
  const progress = useScrollProgress('article')
  const tocRef = useScrollToHeading(activeID)

  return (
    headings.length > 0 && (
      <nav
        ref={tocRef}
        aria-label={ariaLabel}
        className={toc({
          opacity: progress < 5 || progress > 99 ? 'hidden' : 'visible'
        })}
      >
        <ol>
          {Array.from(headings).map((heading) => (
            <TocElement
              key={heading.id}
              heading={heading}
              activeID={activeID}
            />
          ))}
        </ol>
      </nav>
    )
  )
}
