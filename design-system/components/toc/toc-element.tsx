import { ButtonAnchor } from '@/design-system'
import { TocElementProps } from './toc-element.types'
import { tocElement } from './toc-element.styles'

export const TocElement = ({
  heading,
  activeID,
  children
}: TocElementProps) => {
  return (
    <li>
      <ButtonAnchor
        variant="nav"
        display="inlineBlock"
        size="s"
        padding="0"
        href={`#${heading.id}`}
        className={`${tocElement()} ${
          activeID === heading.id ? ' active-subtle' : ''
        }`}
      >
        {heading.textContent}
      </ButtonAnchor>
      {children}
    </li>
  )
}
