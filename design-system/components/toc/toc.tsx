'use client'
import { useHeadings, useScrollProgress, useScrollToHeading } from '@/hooks'
import { TocProps } from './toc.types'
import { toc } from './toc.styles'
import { TocList } from './toc-list'

export const Toc = ({ ariaLabel }: TocProps) => {
  const { tocTree, activeID } = useHeadings()
  const progress = useScrollProgress('article')
  const tocRef = useScrollToHeading(activeID)

  return (
    tocTree.length > 0 && (
      <nav
        ref={tocRef}
        aria-label={ariaLabel}
        className={toc({
          opacity: progress < 5 || progress > 99 ? 'hidden' : 'visible'
        })}
      >
        <TocList nodes={tocTree} activeID={activeID} />
      </nav>
    )
  )
}
