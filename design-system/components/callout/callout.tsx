import { callout } from './callout.styles'
import { CalloutIcons, CalloutProps } from './callout.types'
import {
  AlertCircle,
  CheckmarkCircle,
  InformationCircle,
  Warning
} from '../../elements'

const calloutIcon: CalloutIcons = {
  info: <InformationCircle size="l" className="icon"></InformationCircle>,
  danger: <AlertCircle size="l" className="icon"></AlertCircle>,
  warning: <Warning size="l" className="icon"></Warning>,
  success: <CheckmarkCircle size="l" className="icon"></CheckmarkCircle>
}

export const Callout = (props: CalloutProps) => {
  const { children, ...calloutVariantProps } = props

  return (
    <div className={callout(calloutVariantProps)}>
      {calloutVariantProps.style
        ? calloutIcon[calloutVariantProps.style]
        : calloutIcon.info}
      {children}
    </div>
  )
}
