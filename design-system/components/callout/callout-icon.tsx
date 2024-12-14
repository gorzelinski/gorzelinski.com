import { CalloutIcons } from './callout.types'
import {
  AlertCircle,
  CheckmarkCircle,
  InformationCircle,
  Warning
} from '../../icons'

export const calloutIcon: CalloutIcons = {
  info: <InformationCircle data-testid="information-circle" size="l" />,
  danger: <AlertCircle data-testid="alert-circle" size="l" />,
  warning: <Warning data-testid="warning" size="l" />,
  success: <CheckmarkCircle data-testid="checkmark-circle" size="l" />
}
