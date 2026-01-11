import { useEffect, useRef, useState } from 'react'

export type TocHeadingNode = {
  heading: Element
  children: TocHeadingNode[]
}

const getHeadingLevel = (heading: Element) => {
  const tagName = heading.tagName.toLowerCase()

  if (tagName === 'h2') return 2
  if (tagName === 'h3') return 3
  if (tagName === 'h4') return 4

  return null
}

const buildTocTree = (headings: Element[]): TocHeadingNode[] => {
  const roots: TocHeadingNode[] = []
  const stack: { level: number; node: TocHeadingNode }[] = []

  headings.forEach((heading) => {
    const level = getHeadingLevel(heading)
    if (level === null) return

    const node: TocHeadingNode = { heading, children: [] }

    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop()
    }

    const lastInStack = stack.at(-1)
    const parent = lastInStack?.node

    if (parent) {
      parent.children.push(node)
    } else {
      roots.push(node)
    }

    stack.push({ level, node })
  })

  return roots
}

export function useHeadings() {
  const [tocTree, setTocTree] = useState<TocHeadingNode[]>([])
  const [activeID, setActiveID] = useState<string | null>(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll(
        'article h2[id], article h3[id], article h4[id]'
      )
    )

    if (headings.length > 0) {
      setTocTree(buildTocTree(headings))
      setActiveID(headings[0].id)

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

      headings.forEach((heading) => {
        const currentHeading = document.getElementById(heading.id)

        if (currentHeading) {
          observer.observe(currentHeading)
        }
      })

      return () => {
        headings.forEach((heading) => {
          const currentHeading = document.getElementById(heading.id)

          if (currentHeading) {
            observer.unobserve(currentHeading)
          }
        })
      }
    }
  }, [])

  return { tocTree, activeID }
}
