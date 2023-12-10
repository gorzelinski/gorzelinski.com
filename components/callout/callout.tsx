import { styled } from '@/styled-system/jsx'
import { callout } from './callout.styles'
import { CalloutIcons, CalloutProps } from './callout.types'
import {
  AlertCircle,
  CheckmarkCircle,
  InformationCircle,
  Warning
} from '../icon'

const calloutIcon: CalloutIcons = {
  info: <InformationCircle size="l"></InformationCircle>,
  danger: <AlertCircle size="l"></AlertCircle>,
  warning: <Warning size="l"></Warning>,
  success: <CheckmarkCircle size="l"></CheckmarkCircle>
}

const StyledCallout = styled('div', callout)

export const Callout = (props: CalloutProps) => {
  const { children, ...calloutVariantProps } = props

  return (
    <StyledCallout {...calloutVariantProps}>
      {calloutVariantProps.style
        ? calloutIcon[calloutVariantProps.style]
        : calloutIcon.info}
      {children}
    </StyledCallout>
  )
}
