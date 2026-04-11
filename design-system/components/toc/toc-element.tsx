import type { TocElementProps } from './toc-element.types'
import { cx } from '@/styled-system/css'
import { ButtonAnchor } from '@/design-system'
import { tocElement } from './toc-element.styles'

export const TocElement = ({
  heading,
  activeID,
  children
}: TocElementProps) => {
  return (
    <li className={tocElement()}>
      <ButtonAnchor
        variant="nav"
        display="inlineBlock"
        size="s"
        padding="0"
        href={`#${heading.id}`}
        className={cx(activeID === heading.id && 'active-subtle')}
      >
        {heading.textContent}
      </ButtonAnchor>
      {children}
    </li>
  )
}
