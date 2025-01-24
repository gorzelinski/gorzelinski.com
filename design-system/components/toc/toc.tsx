'use client'
import { useEffect, useRef, useState } from 'react'
import { useScrollProgress } from '@/hooks'
import { TocProps } from './toc.types'
import { toc } from './toc.styles'
import { TocElement } from './toc-element'

export const Toc = ({ ariaLabel }: TocProps) => {
  const [headings, setHeadings] = useState<Element[]>([])
  const [activeID, setActiveID] = useState<string | null>(null)
  const scrollRef = useRef(0)
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id')

          if (entry.isIntersecting) {
            setActiveID(id)
            scrollRef.current = window.scrollY
          } else {
            const diff = scrollRef.current - window.scrollY
            const isScrollingUp = diff > 0
            const currentIndex = headings.findIndex(
              (heading) => heading.id === id
            )
            const prevEntry = headings[currentIndex - 1]
            const prevId = prevEntry?.id

            if (isScrollingUp && prevId) {
              setActiveID(prevId)
            }
          }
        })
      },
      {
        // The value needs to consider the scroll-margin-top value of the headings.
        rootMargin: '0px 0px -90% 0px'
      }
    )

    const observeHeadings = () => {
      headings.forEach((heading) => {
        const currentHeading = document.getElementById(heading.id)

        if (currentHeading) {
          observer.observe(currentHeading)
        }
      })
    }

    if (headings.length) {
      observeHeadings()
    }

    return () => {
      headings.forEach((heading) => {
        const currentHeading = document.getElementById(heading.id)

        if (currentHeading) {
          observer.unobserve(currentHeading)
        }
      })
    }
  }, [headings])

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
