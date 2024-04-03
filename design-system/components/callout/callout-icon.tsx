import { CalloutIcons } from './callout.types'
import {
  AlertCircle,
  CheckmarkCircle,
  InformationCircle,
  Warning
} from '../../elements'

export const calloutIcon: CalloutIcons = {
  info: <InformationCircle size="l"></InformationCircle>,
  danger: <AlertCircle size="l"></AlertCircle>,
  warning: <Warning size="l"></Warning>,
  success: <CheckmarkCircle size="l"></CheckmarkCircle>
}
