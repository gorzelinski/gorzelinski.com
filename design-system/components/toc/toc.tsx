'use client'
import { useEffect, useState } from 'react'
import { useScrollProgress } from '@/hooks'
import { TocProps } from './toc.types'
import { toc } from './toc.styles'
import { TocElement } from './toc-element'

export const Toc = ({ ariaLabel }: TocProps) => {
  const [headings, setHeadings] = useState<Element[]>([])
  const [activeID, setActiveID] = useState<string | null>(null)
  const progress = useScrollProgress('article')

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll('article h2[id], h3[id], h4[id]')
    )

    if (headings.length > 0) {
      setHeadings(headings)
      setActiveID(headings[0].id)
    }
  }, [])

  return (
    headings.length > 0 && (
      <nav
        aria-label={ariaLabel}
        className={toc({
          opacity: progress < 5 || progress > 99 ? 'hidden' : 'visible'
        })}
      >
        <ul>
          {Array.from(headings).map((heading) => (
            <TocElement
              key={heading.id}
              heading={heading}
              activeID={activeID}
            />
          ))}
        </ul>
      </nav>
    )
  )
}
