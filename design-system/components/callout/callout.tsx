import { css } from '@/styled-system/css'
import { CalloutProps } from './callout.types'
import { callout } from './callout.styles'
import { calloutIcon } from './callout-icon'

export const Callout = (props: CalloutProps) => {
  const { children, css: cssProp, ...calloutVariantProps } = props

  return (
    <div className={css(callout.raw(calloutVariantProps), cssProp)}>
      {calloutVariantProps.variant
        ? calloutIcon[calloutVariantProps.variant]
        : calloutIcon.info}
      {children}
    </div>
  )
}
