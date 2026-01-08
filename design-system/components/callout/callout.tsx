import { css } from '@/styled-system/css'
import { CalloutProps } from './callout.types'
import { callout } from './callout.styles'
import { calloutIcon } from './callout-icon'
import { CalloutTitle } from './callout-title'

export const Callout = (props: CalloutProps) => {
  const { children, css: cssProp, title, ...calloutVariantProps } = props

  return (
    <div className={css(callout.raw(calloutVariantProps), cssProp)}>
      {calloutVariantProps.variant
        ? calloutIcon[calloutVariantProps.variant]
        : calloutIcon.info}
      {title ? <CalloutTitle>{title}</CalloutTitle> : null}
      {children}
    </div>
  )
}
