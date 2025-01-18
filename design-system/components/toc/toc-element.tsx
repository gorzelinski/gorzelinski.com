import { ButtonAnchor } from '@/design-system'
import { TocElementProps } from './toc-element.types'
import { tocElement } from './toc-element.styles'

export const TocElement = ({ heading }: TocElementProps) => {
  const { tagName } = heading

  return (
    <li>
      <ButtonAnchor
        variant="nav"
        size="s"
        padding="0"
        href={`#${heading.id}`}
        className={tocElement({
          nesting: tagName.toLowerCase() as 'h2' | 'h3' | 'h4'
        })}
      >
        {heading.textContent}
      </ButtonAnchor>
    </li>
  )
}
