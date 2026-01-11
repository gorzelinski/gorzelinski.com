'use client'
import { TocElement } from './toc-element'
import { tocList } from './toc-list.styles'
import { TocListProps } from './toc-list.types'

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
