import type { TocHeadingNode } from '@/types'

export type TocListProps = {
  nodes: TocHeadingNode[]
  activeID: string | null
}
