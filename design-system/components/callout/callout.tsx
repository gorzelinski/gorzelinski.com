import { css } from '@/styled-system/css'
import { callout } from './callout.styles'
import { CalloutIcons, CalloutProps } from './callout.types'
import {
  AlertCircle,
  CheckmarkCircle,
  InformationCircle,
  Warning
} from '../../elements'

const calloutIcon: CalloutIcons = {
  info: <InformationCircle size="l"></InformationCircle>,
  danger: <AlertCircle size="l"></AlertCircle>,
  warning: <Warning size="l"></Warning>,
  success: <CheckmarkCircle size="l"></CheckmarkCircle>
}

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
