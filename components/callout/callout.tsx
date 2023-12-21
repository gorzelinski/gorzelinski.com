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
  info: <InformationCircle size="l" className="icon"></InformationCircle>,
  danger: <AlertCircle size="l" className="icon"></AlertCircle>,
  warning: <Warning size="l" className="icon"></Warning>,
  success: <CheckmarkCircle size="l" className="icon"></CheckmarkCircle>
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
