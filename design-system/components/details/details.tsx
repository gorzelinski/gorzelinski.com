import type { DetailsProps } from './details.types'

import { css } from '@/styled-system/css'
import { ChevronForward } from '../../icons'
import { details } from './details.styles'
import { Summary } from './summary'

export const Details = (props: DetailsProps) => {
  const {
    children,
    css: cssProp,
    open,
    summary,
    ...detailsVariantProps
  } = props

  return (
    <details
      className={css(details.raw(detailsVariantProps), cssProp)}
      open={open}
    >
      <Summary>
        {summary}
        <ChevronForward data-testid="chevron-forward" size="s" />
      </Summary>
      {children}
    </details>
  )
}
