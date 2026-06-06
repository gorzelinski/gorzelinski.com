'use client'
import type { TocProps } from './toc.types'
import { useHeadings, useScrollToHeading } from '@/hooks'
import { useScroll } from '@/providers'
import { toc } from './toc.styles'
import { TocList } from './toc-list'

export const Toc = ({ ariaLabel }: TocProps) => {
  const { tocTree, activeID } = useHeadings()
  const { progress } = useScroll('article')
  const tocRef = useScrollToHeading(activeID)
  const isHidden = progress < 5 || progress > 99

  return (
    tocTree.length > 0 && (
      <nav
        ref={tocRef}
        aria-label={ariaLabel}
        inert={isHidden || undefined}
        className={toc({
          opacity: isHidden ? 'hidden' : 'visible'
        })}
      >
        <TocList nodes={tocTree} activeID={activeID} />
      </nav>
    )
  )
}
