import type { TocHeadingNode } from '@/hooks'

export type TocListProps = {
  nodes: TocHeadingNode[]
  activeID: string | null
}
