'use client'
import type { TocListProps } from './toc-list.types'
import { TocElement } from './toc-element'
import { tocList } from './toc-list.styles'

export const TocList = ({ nodes, activeID }: TocListProps) => {
  return (
    <ol className={tocList()}>
      {nodes.map((node) => (
        <TocElement
          key={node.heading.id}
          heading={node.heading}
          activeID={activeID}
        >
          {node.children.length > 0 ? (
            <TocList nodes={node.children} activeID={activeID} />
          ) : null}
        </TocElement>
      ))}
    </ol>
  )
}
