import type { ReactNode } from 'react'

export type TocElementProps = {
  heading: Element
  activeID: string | null
  children?: ReactNode
}
